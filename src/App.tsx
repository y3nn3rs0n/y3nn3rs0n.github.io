/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import InteractiveProjects from './components/InteractiveProjects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-sky-500 selection:text-white antialiased">
      {/* Sleek Modern Sticky Header */}
      <Navbar />

      {/* Main Assembly Blocks */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Education />
        <InteractiveProjects />
        <Contact />
      </main>

      {/* Modern Humble Footer matching UI integrity mandates */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-xs text-slate-500 font-sans">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <p className="font-mono tracking-widest text-[10px] uppercase text-slate-400">
            Yennerson Olivo — Portfolio 2026
          </p>
          <p className="text-slate-550 leading-relaxed max-w-md mx-auto">
            Construido con pasión, React, Tailwind CSS y principios de código limpio SOLID para garantizar una velocidad óptima de renderizado.
          </p>
          <div className="text-[10px] text-slate-600 font-medium">
            Copyright © 2026 Yennerson Olivo Olivo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
