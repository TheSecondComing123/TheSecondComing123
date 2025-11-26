import Navbar from '@/components/Navbar';
import ProjectDetail from '@/components/ProjectDetail';
import Footer from '@/components/Footer';

import { cn, theme } from '@/lib/theme';
export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <div className={cn("min-h-screen ", theme.bg.page)}>
      <Navbar />
      <main className="pt-24 pb-20">
        <ProjectDetail projectId={id} />
      </main>
      <Footer />
    </div>
  );
}
