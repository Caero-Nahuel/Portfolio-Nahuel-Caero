const experiences = [
  {
    id: 1,
    date: '2024 - Present',
    company: 'Freelance Data Analyst',
    role: 'Data Analyst',
    description: 'Working with clients to analyze datasets and create actionable insights through visualizations and reports.',
    technologies: ['Python', 'Pandas', 'Excel', 'Tableau'],
  },
  {
    id: 2,
    date: '2023 - 2024',
    company: 'Data Analysis Course',
    role: 'Student',
    description: 'Intensive data analysis bootcamp focusing on Python, SQL, and data visualization tools.',
    technologies: ['Python', 'SQL', 'Matplotlib', 'Seaborn'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightest-slate">
            Mi Experiencia
          </h2>
          <div className="h-px bg-light-green flex-1 max-w-xs"></div>
        </div>

        <div className="md:ml-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative pl-8 border-l border-light-green">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-green"></div>
              <span className="text-green font-mono text-sm">{exp.date}</span>
              <h3 className="text-lightest-slate text-xl font-semibold mt-1">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-slate mt-4 leading-relaxed">
                {exp.description}
              </p>
              <ul className="flex flex-wrap gap-3 mt-4">
                {exp.technologies.map((tech) => (
                  <li key={tech} className="text-green font-mono text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
