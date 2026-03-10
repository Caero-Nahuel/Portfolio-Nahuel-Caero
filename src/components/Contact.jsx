import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-32 flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-green font-mono text-lg mb-4">04. ¿Qué sigue?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
          Contáctame
        </h2>
        <p className="text-slate max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
          Actualmente estoy buscando nuevas oportunidades en el área de análisis de datos.
          Si tenés alguna pregunta o simplemente querés saludar, ¡no dudes en escribirme! 
          Haré lo posible por responderte.
        </p>

        <a
          href="mailto:caero.nahuel@gmail.com"
          className="inline-block border border-green text-green px-10 py-4 rounded text-lg hover:bg-green/10 transition-colors mb-12"
        >
          Salúdame
        </a>

        <div className="flex justify-center gap-8">
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

        <p className="text-slate/50 text-sm mt-16">
          Built by Nahuel Caero • Powered by React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
