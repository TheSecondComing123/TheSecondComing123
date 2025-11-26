import { cn, theme } from '@/lib/theme';
export default function ProjectsLoading() {
  return (
    <div className={cn("min-h-screen  flex items-center justify-center", theme.bg.page)}>
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className={cn(" text-lg", theme.text.body)}>Loading projects...</p>
      </div>
    </div>
  );
}
