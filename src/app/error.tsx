'use client';

import { cn, theme } from '@/lib/theme';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className={cn("min-h-screen  flex items-center justify-center p-4", theme.bg.page)}>
      <div className={cn(" rounded-xl p-8 border border-red-500/20 max-w-lg text-center", theme.bg.card)}>
        <h2 className={cn("text-3xl font-bold text-red-400 mb-4", theme.font.heading)}>
          Something went wrong
        </h2>
        <p className={cn(" mb-6", theme.font.body, theme.text.body)}>
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className={cn("px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium", theme.font.body)}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
