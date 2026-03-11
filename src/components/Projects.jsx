import AnimatedSection from './AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'Sales Data Dashboard',
    description: 'Interactive dashboard analyzing sales trends across multiple regions using Python and Plotly.',
    technologies: ['Python', 'Pandas', 'Plotly', 'Excel'],
    image: 'sales',
    github: 'https://github.com/Caero-Nahuel/sales-dashboard',
  },
  {
    id: 2,
    title: 'Customer Segmentation Analysis',
    description: 'Clustering analysis to identify customer groups based on purchasing behavior.',
    technologies: ['Python', 'Scikit-learn', 'Seaborn', 'Pandas'],
    image: 'clustering',
    github: 'https://github.com/Caero-Nahuel/customer-segmentation',
  },
  {
    id: 3,
    title: 'Financial Reports Automation',
    description: 'Automated Excel reports generation from raw financial data with visualizations.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    image: 'financial',
    github: 'https://github.com/Caero-Nahuel/financial-reports',
  },
];

const ProjectThumbnail = ({ type }) => {
  const gradients = {
    sales: {
      bg: 'from-[#1a365d] to-[#0a192f]',
      bars: true,
      title: 'SALES',
    },
    clustering: {
      bg: 'from-[#2d3748] to-[#0a192f]',
      bars: false,
      title: 'CLUSTERS',
    },
    financial: {
      bg: 'from-[#1a4731] to-[#0a192f]',
      bars: true,
      title: 'FINANCE',
    },
  };

  const config = gradients[type] || gradients.sales;

  return (
    <div className={`w-full h-full bg-gradient-to-br ${config.bg} flex flex-col items-center justify-center p-4`}>
      <div className="text-green font-mono text-xs tracking-widest mb-4 opacity-70">
        {config.title}
      </div>
      {config.bars && (
        <div className="flex items-end gap-2 h-20">
          <div className="w-4 bg-green/30 rounded-t"></div>
          <div className="w-4 bg-green/50 rounded-t h-12"></div>
          <div className="w-4 bg-green/40 rounded-t h-16"></div>
          <div className="w-4 bg-green/70 rounded-t h-10"></div>
          <div className="w-4 bg-green/60 rounded-t h-14"></div>
          <div className="w-4 bg-green/80 rounded-t h-8"></div>
        </div>
      )}
      {!config.bars && (
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-green/30 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-green"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green/20 border border-green/50"></div>
          <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-green/10 border border-green/30"></div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-lightest-slate">
              Algunos de mis proyectos
            </h2>
            <div className="h-px bg-light-green flex-1 max-w-xs"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 150}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-light-green rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-48 bg-light-green overflow-hidden">
                  <ProjectThumbnail type={project.image} />
                  <div className="absolute inset-0 bg-[#0a192f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-green font-mono text-sm border border-green px-4 py-2 rounded">
                      Ver Proyecto →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lightest-slate text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-green font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-16 text-center">
            <p className="text-slate mb-6">
              ¡Más proyectos próximamente! Estoy trabajando en nuevos casos de análisis de datos.
            </p>
            <a
              href="#contact"
              className="inline-block text-green hover:underline text-lg transition-all duration-300 hover:translate-x-2"
            >
              Contactame para ver mi trabajo →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
