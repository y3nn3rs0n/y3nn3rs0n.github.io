import { useState } from 'react';
import { coursesData } from '../data';
import { Course } from '../types';
import { GraduationCap, BookOpen, Clock, Award, Star } from 'lucide-react';

export default function Education() {
  const [activeTab, setActiveTab] = useState<'all' | 'flutter' | 'js-ts' | 'other'>('all');

  const tabs = [
    { label: 'Todos los Estudios', id: 'all' as const },
    { label: 'Flutter & Dart (Móvil)', id: 'flutter' as const },
    { label: 'JavaScript & React (Web)', id: 'js-ts' as const },
    { label: 'Clean Code & SOLID', id: 'other' as const }
  ];

  const filteredCourses = activeTab === 'all'
    ? coursesData
    : coursesData.filter(c => c.category === activeTab);

  return (
    <section id="studies" className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-sky-500/5 to-indigo-500/5 rounded-full filter blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 tracking-tight leading-none">
              Estudios & Certificaciones
            </h2>
            <p className="text-slate-400 mt-4 text-sm font-sans md:text-base">
              Especialización continua en desarrollo móvil con Flutter, desarrollo frontend con React/Angular y aplicación de mejores prácticas de diseño SOLID.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-sky-500/10 text-sky-400 border-sky-500/35 shadow-sm shadow-sky-500/5'
                    : 'bg-slate-900/40 text-slate-400 border-slate-800/80 hover:border-slate-700/80 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course: Course, i: number) => (
            <div
              key={course.title}
              id={`course-${course.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                course.important
                  ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/20 border-sky-500/25 shadow-lg shadow-sky-500/5 hover:border-sky-500/40 hover:-translate-y-1'
                  : 'bg-slate-900/60 border-slate-850/80 hover:border-slate-700/80 hover:-translate-y-0.5 hover:bg-slate-900'
              }`}
            >
              {course.important && (
                <span className="absolute top-4 right-4 flex items-center space-x-1 text-[10px] uppercase tracking-wider font-semibold text-sky-400 bg-sky-950/60 border border-sky-500/25 px-2 py-0.5 rounded-full shadow-inner animate-pulse-slow">
                  <Award className="w-3 h-3" />
                  <span>Esencial</span>
                </span>
              )}

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-2xl bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/30 group-hover:bg-slate-800 transition-colors">
                    {course.emoji}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    ID: CERT-{course.title.slice(0, 4).toUpperCase()}-{i + 15}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white leading-snug group-hover:text-sky-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 font-sans font-medium">
                  {course.category === 'flutter' && '📱 Desarrollo de Aplicaciones Móviles Nativas y FlutterFlow.'}
                  {course.category === 'js-ts' && '💻 Ingeniería Web, React, TypeScript y animación.'}
                  {course.category === 'other' && '🔬 Clean Code, patrones y control de versiones profesional.'}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-850/60 text-slate-500 text-xs">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="font-mono">{course.duration || '24 hrs'} de aprendizaje</span>
                </div>
                <div className="flex items-center space-x-0.5 text-yellow-500">
                  <Star className="w-3.5 h-3.5 fill-yellow-500" />
                  <span className="font-mono text-[10px] text-slate-400 font-semibold">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
