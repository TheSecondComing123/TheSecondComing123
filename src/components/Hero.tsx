export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#16181d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I'm <span className="text-primary">Alan Bagel</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Competitve Programmer | Website Developer | Coding Enthusiast
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
