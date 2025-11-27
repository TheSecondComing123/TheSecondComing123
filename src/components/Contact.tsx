'use client';

import { cn, theme } from '@/lib/theme';
import { FormField } from '@/components/ui/FormField';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={cn("py-20", theme.bg.secondary)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn("text-4xl font-bold text-center mb-4", theme.font.heading, theme.text.heading)}>
          Get In Touch
        </h2>
        <p className={cn("text-center mb-12 max-w-2xl mx-auto", theme.font.body, theme.text.body)}>
          Have a question or want to work together? Feel free to reach out!
        </p>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className={cn("text-green-400 text-center", theme.font.body)}>
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className={cn("text-red-400 text-center", theme.font.body)}>
              {errorMessage}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Name"
            type="text"
            id="name"
            value={formData.name}
            onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
            placeholder="Your name"
            required
          />

          <FormField
            label="Email"
            type="email"
            id="email"
            value={formData.email}
            onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
            placeholder="your.email@example.com"
            required
          />

          <FormField
            label="Message"
            type="textarea"
            id="message"
            value={formData.message}
            onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
            placeholder="Your message (at least 10 characters)"
            rows={5}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'w-full px-8 py-3 rounded-lg font-medium transition-all',
              theme.font.body,
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-primary hover:bg-primary/80 text-white'
            )}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
