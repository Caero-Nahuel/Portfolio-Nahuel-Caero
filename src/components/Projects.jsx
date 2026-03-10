const projects = [
  {
    id: 1,
    title: 'Sales Data Dashboard',
    description: 'Interactive dashboard analyzing sales trends across multiple regions using Python and Plotly.',
    technologies: ['Python', 'Pandas', 'Plotly', 'Excel'],
    comingSoon: true,
  },
  {
    id: 2,
    title: 'Customer Segmentation Analysis',
    description: 'Clustering analysis to identify customer groups based on purchasing behavior.',
    technologies: ['Python', 'Scikit-learn', 'Seaborn', 'Pandas'],
    comingSoon: true,
  },
  {
    id: 3,
    title: 'Financial Reports Automation',
    description: 'Automated Excel reports generation from raw financial data with visualizations.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    comingSoon: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightest-slate">
            Algunos de mis proyectos
          </h2>
          <div className="h-px bg-light-green flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-light-green rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">📈</div>
                {project.comingSoon && (
                  <span className="text-xs bg-green/20 text-green px-2 py-1 rounded">
                    Coming Soon
                  </span>
                )}
              </div>
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate mb-6">
            ¡Más proyectos próximamente! Estoy trabajando en nuevos casos de análisis de datos.
          </p>
          <a
            href="#contact"
            className="inline-block text-green hover:underline text-lg"
          >
            Contactame para ver mi trabajo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
