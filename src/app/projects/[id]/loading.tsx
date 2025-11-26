import { cn, theme } from '@/lib/theme';
export default function Loading() {
  return (
    <div className={cn("min-h-screen  flex items-center justify-center", theme.bg.page)}>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-700 dark:text-gray-400">Loading project details...</p>
      </div>
    </div>
  );
}
