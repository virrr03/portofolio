const skillCategories = [
  {
    title: 'SoftSkill',
    skills: ['Analytical Thinking', 'Collaboration & Teamwork', 'Responsibility & Accountability'],
    color: 'primary',
  },
  {
    title: 'HardSkill',
    skills: ['C/C++', 'python', 'java', 'Arduino IDE', 'computer vision', 'machine learning', 'unity', 'next.js'],
    color: 'secondary',
  },
]

const colorMap = {
  primary: 'bg-[color:var(--primary)]',
  // secondary: 'bg-[color:var(--secondary)]',
  secondary: 'bg-[color:var(--accent)]',
  //quaternary: 'bg-[color:var(--quaternary)]',
}

const textColorMap = {
  primary: 'text-[color:var(--primary)]',
  //secondary: 'text-[color:var(--secondary)]',
  secondary: 'text-[color:var(--accent)]',
  //quaternary: 'text-[color:var(--quaternary)]',
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[color:var(--background)] to-[color:var(--muted)]/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          My <span className="text-[color:var(--primary)]">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-2xl p-8 border-2 border-[color:var(--border)]">
              <h3 className={`text-2xl font-bold mb-6 ${textColorMap[category.color as keyof typeof textColorMap]}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`${colorMap[category.color as keyof typeof colorMap]} px-4 py-2 rounded-full text-white font-medium transition-all hover:shadow-lg`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
