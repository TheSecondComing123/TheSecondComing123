export default function About() {
  return (
    <section id="about" className="py-20 bg-[#16181d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              I'm a passionate developer with a love for creating beautiful and functional web applications.
              With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or sharing my knowledge with the developer community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary h-64 rounded-lg flex items-center justify-center text-white text-2xl">
            Your Photo Here
          </div>
        </div>
      </div>
    </section>
  )
}
