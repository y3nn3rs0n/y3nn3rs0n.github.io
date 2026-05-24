import { useState } from 'react';
import { skillsData } from '../data';
import { Skill } from '../types';
import { 
  Atom, 
  FileJson, 
  Sparkles, 
  Layers, 
  Palette, 
  ShieldAlert, 
  Phone, 
  Smartphone, 
  Cpu, 
  Database, 
  Flame, 
  GitBranch, 
  CheckCircle, 
  Milestone, 
  Terminal, 
  Code 
} from 'lucide-react';

// Help map icon names to actual Lucide components
const iconMap: Record<string, any> = {
  Atom,
  FileJson,
  Sparkles,
  Layers,
  Palette,
  ShieldAlert,
  Phone,
  Smartphone,
  Cpu,
  Database,
  Flame,
  DatabaseRestore: Database,
  GitBranch,
  CheckCircle,
  Milestone,
  Terminal,
  Code
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'frontend' | 'mobile' | 'lowcode-db' | 'tools'>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { label: 'Front-End UI', id: 'frontend' as const },
    { label: 'Móvil / Flutter', id: 'mobile' as const },
    { label: 'Low-Code & DB', id: 'lowcode-db' as const },
    { label: 'Prácticas & Tools', id: 'tools' as const },
  ];

  const filteredSkills = skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 tracking-tight leading-none">
            Stack Tecnológico & Competencias
          </h2>
          <p className="text-slate-400 mt-4 text-base font-sans">
            Desarrollo soluciones ágiles y robustas. Filtra por categoría para explorar mi nivel y experiencia con cada tecnología.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-transparent shadow-lg shadow-sky-500/10 scale-105'
                  : 'bg-slate-800/40 text-slate-300 border-slate-800 hover:border-slate-700/80 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill: Skill) => {
            const IconComponent = iconMap[skill.iconName] || Code;
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="bg-slate-800/20 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300 group hover:bg-slate-800/30 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background glowing line */}
                <div 
                  className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500"
                  style={{ width: isHovered ? `${skill.level}%` : '15%' }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/40 group-hover:bg-gradient-to-br group-hover:from-sky-500/25 group-hover:to-indigo-500/25 group-hover:border-sky-500/25 group-hover:text-white text-sky-400 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-sky-300 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </h3>
                
                {/* Description helper depending on key skill */}
                <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed group-hover:text-slate-300 transition-colors">
                  {skill.name === 'React.js' && 'Creación de interfaces dinámicas, SPA complejas y Custom Hooks.'}
                  {skill.name === 'Flutter & Dart' && 'Creación de aplicaciones nativas de alta fidelidad para Android & iOS.'}
                  {skill.name === 'TypeScript' && 'Escritura fuerte, interfaces rigurosas y código auto-documentado.'}
                  {skill.name === 'JavaScript ES6+' && 'Dominio avanzado de asincronía, cierres y la API DOM moderna.'}
                  {skill.name === 'Tailwind CSS' && 'Diseño centrado en utilidades, layouts responsivos y animaciones fluidas.'}
                  {skill.name === 'Firebase' && 'Autenticación, base de datos en tiempo real Firestore y funciones en la nube.'}
                  {skill.name === 'SOLID Principles' && 'Diseño orientado a objetos mantenible, modular y fácil de escalar.'}
                  {skill.name === 'Git & GitHub' && 'Gestión precisa de ramas, Pull Requests fluidos y versionamiento.'}
                  {!['React.js', 'Flutter & Dart', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'Firebase', 'SOLID Principles', 'Git & GitHub'].includes(skill.name) && 
                    'Herramienta principal aplicada con las mejores prácticas y altos estándares de calidad.'
                  }
                </p>

                {/* Progress bar container */}
                <div className="mt-4 h-1 px-0.5 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full transition-all duration-500"
                    style={{ width: isHovered ? '100%' : `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative facts summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-800/80">
          <div className="text-center p-4">
            <div className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              3+
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Años de Code</div>
          </div>
          <div className="text-center p-4">
            <div className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
              15+
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Cursos Validados</div>
          </div>
          <div className="text-center p-4">
            <div className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
              10+
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Proyectos Guardados</div>
          </div>
          <div className="text-center p-4">
            <div className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              100%
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Pasión & Compromiso</div>
          </div>
        </div>
      </div>
    </section>
  );
}
