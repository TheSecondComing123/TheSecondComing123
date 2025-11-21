const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with Next.js and TypeScript',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time inventory management',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A mobile-first progressive web app for task management',
    tags: ['React', 'PWA', 'Firebase'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#1a1c23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#1e2028] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-primary hover:text-secondary transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
