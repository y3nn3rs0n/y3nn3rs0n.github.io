import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Basic current section spy
      const sections = ['inicio', 'about', 'skills', 'studies', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre mí', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Estudios', id: 'studies' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60 py-4 shadow-lg shadow-slate-950/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('inicio'); }}
          className="flex items-center space-x-2.5 font-display font-bold text-xl tracking-tight text-white group"
        >
          <div className="bg-gradient-to-tr from-sky-500 to-indigo-500 p-2 rounded-xl text-white group-hover:scale-105 transition-transform duration-300">
            <Code className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white hover:text-sky-400 transition-colors">Yennerson Olivo</span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-0.5 uppercase">Dev Portfolio</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-sky-400 bg-sky-950/40 border border-sky-900/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className="ml-4 flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md shadow-sky-500/10 hover:shadow-lg hover:shadow-indigo-500/10 hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Hablemos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/80 shadow-2xl py-6 px-6 space-y-3.5 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              className={`block px-4 py-3 rounded-xl font-medium text-base transition-all ${
                activeSection === link.id
                  ? 'text-sky-400 bg-sky-950/50 border border-sky-900/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
            >
              <span>Hablemos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
