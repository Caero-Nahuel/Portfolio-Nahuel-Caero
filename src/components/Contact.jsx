import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-32 flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-green font-mono text-lg mb-4">04. ¿Qué sigue?</p>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
            Contáctame
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-slate max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
            Actualmente estoy buscando nuevas oportunidades en el área de análisis de datos.
            Si tenés alguna pregunta o simplemente querés saludar, ¡no dudes en escribirme! 
            Haré lo posible por responderte.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <a
            href="mailto:caero.nahuel@gmail.com"
            className="inline-block border border-green text-green px-10 py-4 rounded text-lg hover:bg-green/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green/20 mb-12"
          >
            Salúdame
          </a>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex justify-center gap-8">
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
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <p className="text-slate/50 text-sm mt-16">
            Built by Nahuel Caero • Powered by React & Tailwind CSS
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
