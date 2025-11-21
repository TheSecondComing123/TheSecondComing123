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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 rounded-full text-sm"
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
