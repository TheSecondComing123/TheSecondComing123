import Link from 'next/link';

import { cn, theme } from '@/lib/theme';
export default function NotFound() {
  return (
    <div className={cn("min-h-screen  flex items-center justify-center p-4", theme.bg.page)}>
      <div className="text-center">
        <h1 className={cn("text-9xl font-bold text-green-600 mb-4", theme.font.heading)}>404</h1>
        <h2 className={cn("text-3xl font-bold  mb-4", theme.font.heading, theme.text.heading)}>Page Not Found</h2>
        <p className={cn(" mb-8 max-w-md mx-auto", theme.font.body, theme.text.body)}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className={cn("inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium", theme.font.body)}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
