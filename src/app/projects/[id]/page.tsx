import Navbar from '@/components/Navbar';
import ProjectDetail from '@/components/ProjectDetail';
import Footer from '@/components/Footer';

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#16181d]">
      <Navbar />
      <main className="pt-24 pb-20">
        <ProjectDetail projectId={id} />
      </main>
      <Footer />
    </div>
  );
}
