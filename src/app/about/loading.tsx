export default function Loading() {
  return (
    <div className="min-h-screen bg-[#16181d] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">Loading about page...</p>
      </div>
    </div>
  );
}
