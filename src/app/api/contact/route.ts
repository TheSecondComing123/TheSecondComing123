import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { RateLimiter } from '@/lib/rate-limiter';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize rate limiter: 5 requests per 15 minutes
const limiter = new RateLimiter(5, 15 * 60 * 1000);

// Cleanup rate limiter every hour to prevent memory leaks
setInterval(() => {
  limiter.cleanup();
}, 60 * 60 * 1000);

/**
 * Get client IP address from request
 */
function getClientIp(request: NextRequest): string {
  // Try various headers for IP (Vercel, Cloudflare, standard)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

/**
 * Validate and sanitize form data
 */
function validateFormData(data: any): {
  valid: boolean;
  errors?: string;
  sanitized?: { name: string; email: string; message: string }
} {
  const { name, email, message } = data;

  // Validate name
  if (!name || typeof name !== 'string') {
    return { valid: false, errors: 'Name is required' };
  }
  const sanitizedName = name.trim();
  if (sanitizedName.length < 1 || sanitizedName.length > 100) {
    return { valid: false, errors: 'Name must be between 1 and 100 characters' };
  }

  // Validate email
  if (!email || typeof email !== 'string') {
    return { valid: false, errors: 'Email is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitizedEmail = email.trim().toLowerCase();
  if (!emailRegex.test(sanitizedEmail)) {
    return { valid: false, errors: 'Please enter a valid email address' };
  }

  // Validate message
  if (!message || typeof message !== 'string') {
    return { valid: false, errors: 'Message is required' };
  }
  const sanitizedMessage = message.trim();
  if (sanitizedMessage.length < 10) {
    return { valid: false, errors: 'Message must be at least 10 characters' };
  }
  if (sanitizedMessage.length > 2000) {
    return { valid: false, errors: 'Message must not exceed 2000 characters' };
  }

  return {
    valid: true,
    sanitized: {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
    },
  };
}

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    if (!limiter.check(clientIp)) {
      const resetTime = Math.ceil(limiter.getTimeUntilReset(clientIp) / 1000 / 60);
      return NextResponse.json(
        { error: `Too many requests. Please try again in ${resetTime} minutes.` },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate and sanitize form data
    const validation = validateFormData({ name, email, message });
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.errors },
        { status: 400 }
      );
    }

    const { name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage } = validation.sanitized!;

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'jiuprogrammer@gmail.com',
        replyTo: sanitizedEmail,
        subject: `Portfolio Contact: ${sanitizedName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${sanitizedName} (${sanitizedEmail})</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Sent from portfolio contact form</small></p>
        `,
      });

      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Resend error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later or contact directly.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
