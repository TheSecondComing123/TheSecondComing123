import { Trophy, Award } from 'lucide-react'

const competitions = [
  {
    title: 'ACSL',
    rank: 'National Silver',
    icon: Trophy,
    period: '2024',
    description: 'Achieved National Silver recognition in the American Computer Science League, competing against top high school students across the country in algorithmic problem-solving.'
  },
  {
    title: 'USACO',
    rank: 'Silver Division',
    icon: Award,
    period: '2024',
    description: 'Advanced to Silver Division in the USA Computing Olympiad, demonstrating proficiency in algorithms, data structures, and competitive programming techniques.'
  }
]

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 bg-[#16181d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Competitive Programming
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {competitions.map((comp, index) => (
            <div 
              key={index} 
              className="bg-[#24262e] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
                  <comp.icon className="text-primary" size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {comp.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {comp.rank}
                  </p>
                  <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide">
                    {comp.period}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
