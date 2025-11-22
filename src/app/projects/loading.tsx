export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-[#16181d] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-300 text-lg">Loading projects...</p>
      </div>
    </div>
  );
}
