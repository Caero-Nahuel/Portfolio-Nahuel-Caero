import AnimatedSection from './AnimatedSection';

const experiences = [
  {
    id: 1,
    date: '2023 - Presene',
    company: 'Mera Solutions',
    role: 'Analista GTR',
    description: 'Me especializo en la redacción de informes periódicos con Microsoft Excel, que proporcionan una visión clara y oportuna para la toma de decisiones estratégicas. Comunicación fluida y proactiva a través de correos electrónicos, asegurando que las necesidades del cliente se aborden en tiempo real. Mi objetivo es garantizar que cada informe contribuya al éxito y satisfacción del cliente, alineándome con sus expectativas y metas empresariales',
    technologies: ['Python', 'Pandas', 'Excel', 'Avaya', 'SQL'],
  },
  {
    id: 2,
    date: '2024 - Presente',
    company: 'Curso de Análisis de Datos - Platzi',
    role: 'Estudiante',
    description: 'Curso asincronico de analisis de datos haciendo foco en Python, SQL y herramientas de visualización de datos.',
    technologies: ['Python', 'SQL', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    id: 3,
    date: '2020 - 2022',
    company: 'Curso de Programación Frontend - Coder House',
    role: 'Estudiante',
    description: 'Curso sincronico de Frentend que hizo foco en la creacion de paginas web "mobile-first" con el uso de ReactJS, SASS y tailwind.',
    technologies: ['Javascript', 'ReactJS', 'SASS', 'Tailwind', 'CSS'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-lightest-slate">
              Mi Experiencia
            </h2>
            <div className="h-px bg-light-green flex-1 max-w-xs"></div>
          </div>
        </AnimatedSection>

        <div className="md:ml-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={index * 150}>
              <div className="mb-12 relative pl-8 border-l border-light-green group">
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-green transition-all duration-300 group-hover:scale-150 group-hover:bg-green/80"></div>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
