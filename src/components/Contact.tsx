'use client';

import { cn, theme } from '@/lib/theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { User, Mail, MessageSquare, Send, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/ui/Container';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SECTION_SPACING, FORM_SPACING, HEADING_MARGIN } from '@/constants/spacing';
import { ANIMATION_DELAY, ANIMATION_OFFSET, VIEWPORT_CONFIG } from '@/constants/animation-values';
import { EASE_CURVE } from '@/constants/animations';

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const formContainerVariants = {
  hidden: { opacity: 0, y: ANIMATION_OFFSET.Y_LARGE },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: ANIMATION_DELAY.MEDIUM,
      ease: EASE_CURVE,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: ANIMATION_DELAY.SHORT + i * 0.05,
      ease: EASE_CURVE,
    },
  }),
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={cn(SECTION_SPACING.responsive, theme.bg.page)}
    >
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <AnimatedHeading
            as="h2"
            scroll
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </AnimatedHeading>
          <motion.p
            className={cn('text-lg max-w-2xl mx-auto', theme.text.body)}
            initial={{ opacity: 0, y: ANIMATION_OFFSET.Y_LARGE }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG.DEFAULT}
            transition={{
              duration: 0.7,
              delay: ANIMATION_DELAY.MEDIUM,
              ease: EASE_CURVE,
            }}
          >
            Have a question or want to collaborate? I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          className={cn(
            'max-w-2xl mx-auto rounded-2xl p-8 md:p-10 lg:p-12',
            'border',
            theme.bg.secondary,
            theme.border.default
          )}
          variants={formContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG.DEFAULT}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={FORM_SPACING.fieldGap}>
              {/* Name + Email Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG.DEFAULT}
              >
                {/* Name Field */}
                <motion.div variants={inputVariants} custom={0}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={cn('block mb-2 font-medium', theme.text.heading)}>
                          Name
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className={cn(
                              'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none',
                              'text-primary/60'
                            )} />
                            <Input
                              placeholder="Your name"
                              className="pl-10 h-11 rounded-lg"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={inputVariants} custom={1}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={cn('block mb-2 font-medium', theme.text.heading)}>
                          Email
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className={cn(
                              'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none',
                              'text-primary/60'
                            )} />
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="pl-10 h-11 rounded-lg"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                variants={inputVariants}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG.DEFAULT}
                transition={{
                  duration: 0.5,
                  delay: ANIMATION_DELAY.SHORT + 0.1,
                  ease: EASE_CURVE,
                }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn('block mb-2 font-medium', theme.text.heading)}>
                        Message
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className={cn(
                            'absolute left-3 top-3 w-4 h-4 pointer-events-none',
                            'text-primary/60'
                          )} />
                          <Textarea
                            placeholder="Your message (at least 10 characters)..."
                            rows={5}
                            className="pl-10 rounded-lg resize-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG.DEFAULT}
                transition={{
                  duration: 0.5,
                  delay: ANIMATION_DELAY.SHORT + 0.15,
                  ease: EASE_CURVE,
                }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full gap-2 rounded-lg h-11',
                    'transition-all duration-200',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    isSubmitting && 'opacity-50'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: ANIMATION_OFFSET.Y_LARGE }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG.DEFAULT}
          transition={{
            duration: 0.7,
            delay: ANIMATION_DELAY.LONG,
            ease: EASE_CURVE,
          }}
        >
          <p className={cn('text-sm', theme.text.muted)}>
            Or reach out on{' '}
            <a
              href="https://github.com/TheSecondComing123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
