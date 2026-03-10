import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-green font-mono text-lg mb-6">Hola, Yo soy</p>
        <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4">
          Nahuel Caero.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
          Transformo datos en información.
        </h2>
        <p className="text-slate max-w-xl text-lg mb-10 leading-relaxed">
          Soy un Data Analyst junior especializado en construir y analizar 
          experiencias basadas en datos. Actualmente me enfoco en descubrir 
          patrones significativos mediante visualización de datos y 
          análisis estadístico. 
        </p>
        
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/Caero-Nahuel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green text-2xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nahuel-agustin-caero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green text-2xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:caero.nahuel@gmail.com"
            className="text-light-slate hover:text-green text-2xl transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block border border-green text-green px-8 py-4 rounded text-lg hover:bg-green/10 transition-colors"
        >
          Mira mi trabajo
        </a>
      </div>
    </section>
  );
};

export default Hero;
