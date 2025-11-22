import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Bot } from 'lucide-react'

const projects = [
//   {
//     title: '',
//     description: '',
//     icon: '',
//   },
  {
    title: 'FLL Robotics Code',
    description: 'Used Pybricks to create an object-oriented codebase for my team\'s FLL Robot, achieving state recognition.',
    icon: Bot,
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#16181d]">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl leading-relaxed">
            Over the years I'm made a lot of projects! I've shared a few for you below.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
                    <project.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
