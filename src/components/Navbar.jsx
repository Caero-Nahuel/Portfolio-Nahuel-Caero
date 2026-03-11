import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'Sobre mi', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-out ${
          scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            className="text-green text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            NC
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ol className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light-slate hover:text-green text-sm transition-colors"
                  >
                    <span className="text-green mr-1">0{navLinks.indexOf(link) + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="#contact"
              className="border border-green text-green px-5 py-2 rounded text-sm hover:bg-green/10 transition-colors"
            >
              Contactame
            </a>
          </div>

          <button
            className="md:hidden text-light-slate text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0a192f] flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-6 text-light-slate text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lightest-slate text-2xl hover:text-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
