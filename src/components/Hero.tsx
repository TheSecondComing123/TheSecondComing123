export default function Hero() {
  return (
    <section className="pt-32 pb-10 flex items-center justify-center bg-[#16181d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I&apos;m <span className="text-green-600">Alan Bagel</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Competitve Programmer, Developer
        </p>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          I enjoy doing competitive programming and building websites and apps in my free time,
          like this one!
        </p>
      </div>
    </section>
  )
}
