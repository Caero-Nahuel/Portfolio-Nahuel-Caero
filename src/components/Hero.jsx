import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className={`text-green font-mono text-lg mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          Hola, Yo soy
        </p>
        <h1 className={`text-5xl md:text-7xl font-bold text-lightest-slate mb-4 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Nahuel Caero.
        </h1>
        <h2 className={`text-4xl md:text-6xl font-bold text-slate mb-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Transformo datos en información.
        </h2>
        <p className={`text-slate max-w-xl text-lg mb-10 leading-relaxed transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Soy un Data Analyst junior especializado en construir y analizar 
          experiencias basadas en datos. Actualmente me enfoco en descubrir 
          patrones significativos mediante visualización de datos y 
          análisis estadístico. 
        </p>
        
        <div className={`flex gap-6 mb-12 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/Caero-Nahuel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green text-2xl transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nahuel-agustin-caero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green text-2xl transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:caero.nahuel@gmail.com"
            className="text-light-slate hover:text-green text-2xl transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="#projects"
          className={`inline-block border border-green text-green px-8 py-4 rounded text-lg hover:bg-green/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green/20 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms' }}
        >
          Mira mi trabajo
        </a>
      </div>
    </section>
  );
};

export default Hero;
