import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-lightest-slate">
              Sobre mi
            </h2>
            <div className="h-px bg-light-green flex-1 max-w-xs"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={100}>
            <div className="text-slate leading-relaxed space-y-4">
              <p>
                ¡Hola! Mi nombre es Nahuel y disfruto crear soluciones basadas en datos que ayuden
                a las empresas a tomar mejores decisiones. Mi interés por el análisis de datos comenzó
                en 2024 cuando decidí aprender Python para automatizar tareas en mi trabajo como Analista GTR,
                que han reducido significativamente los tiempos de procesamiento de reportes.
              </p>
              <p>
                Mi enfoque principal está en crear soluciones que combinen eficiencia técnica con
                experiencia de usuario. Me apasiona resolver problemas mediante código limpio,
                bien documentado y escalable. Constantemente
                estoy aprendiendo nuevas técnicas para extraer insights significativos y crear
                visualizaciones claras y útiles.
              </p>
              <p>
                Estas son algunas de las tecnologías con las que he estado trabajando recientemente:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-green">
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Pandas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> NumPy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Matplotlib
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Seaborn
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Plotly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Excel
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green">▹</span> Jupyter
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fadeInRight">
            <div className="relative group">
              <div className="absolute inset-0 bg-green/20 rounded-lg md:translate-x-3 md:translate-y-3 lg:translate-x-4 lg:translate-y-4 transition-transform group-hover:md:translate-x-2 group-hover:md:translate-y-2 group-hover:lg:translate-x-3 group-hover:lg:translate-y-3 h-64 md:h-80 lg:h-96"></div>
              <div className="relative bg-light-green rounded-lg h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src="./caero-nahuel-foto.png"
                  alt="Nahuel Caero"
                  className="block md:hidden w-full h-full object-cover object-[center_25%]"
                />
                <img
                  src="./caero-nahuel-escritorio.jpg"
                  alt="Nahuel Caero"
                  className="hidden md:block lg:hidden w-full h-full object-cover object-[center_35%]"
                />
                <img
                  src="./caero-nahuel-escritorio.jpg"
                  alt="Nahuel Caero"
                  className="hidden lg:block w-full h-full object-cover object-[center_40%]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
