import Link from 'next/link';

import { cn, theme } from '@/lib/theme';
export default function NotFound() {
  return (
    <div className={cn("min-h-screen  flex items-center justify-center px-4", theme.bg.page)}>
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className={cn("text-3xl font-bold  mb-2", theme.text.heading)}>Project Not Found</h1>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            The project you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
