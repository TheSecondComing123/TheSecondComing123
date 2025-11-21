const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  { category: 'Other', items: ['REST APIs', 'GraphQL', 'AWS', 'CI/CD'] }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#16181d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
