import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Photo Container */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative group flex justify-center">
            {/* Soft glowing background element that is sensitive to hover */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500" />
            
            {/* The core photo frame container with modern gradients */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-gradient-to-tr from-sky-500/30 via-slate-800 to-indigo-500/30 p-[2px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.01] hover:shadow-sky-500/5">
              <div className="relative w-full h-full bg-slate-900 rounded-[22px] overflow-hidden pt-4">
                {/* Profile Image (easily replaceable by user later) */}
                <img
                  src="https://raw.githubusercontent.com/y3nn3rs0n/y3nn3rs0n.github.io/refs/heads/main/assets/images/profile-p.png?raw=true"
                  alt="Yennerson Olivo - Portrait Placeholder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
                
                {/* Dark gradient gloss overlay to read labels cleanly */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                
                {/* Modern geometric decor: Glowing brackets */}
                <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-sky-400/40 rounded-tl-sm pointer-events-none block" />
                <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-indigo-400/40 rounded-tr-sm pointer-events-none block" />
                <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-sky-400/40 rounded-bl-sm pointer-events-none block" />
                <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-indigo-400/40 rounded-br-sm pointer-events-none block" />
                {/* Elegant card information block */}
                <div className="absolute bottom-6 inset-x-0 text-center px-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-sky-405 text-sky-400 uppercase font-bold block">
                    Yennerson Olivo
                  </span>
                  <span className="text-[11px] text-slate-300 font-display font-medium block">
                    Frontend & Mobile Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copywriting & Bento Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-none">
              Apasionado por la Ingeniería Frontend & Móvil
            </h2>
            
            <p className="font-sans text-slate-355 text-slate-300 text-sm sm:text-base leading-relaxed">
              Hola, soy Yennerson Olivo, desarrollador con una fuerte inclinación hacia la arquitectura limpia y la excelencia en el diseño interactivo. Mi trayectoria me ha permitido dominar lenguajes modernos como **TypeScript**, **Dart** y **JavaScript**, integrando soluciones completas de alto desempeño.
            </p>
            <p className="font-sans text-slate-400 text-sm leading-relaxed">
              Me especializo en crear aplicaciones usando **React** para la web y **Flutter** para ecosistemas móviles. Considero que una aplicación excelente no solo debe funcionar perfectamente tras bambalinas, sino también deleitar a los usuarios en cada micro-interacción visual. Constantemente amplio mis perspectivas formándome en patrones de arquitectura de software avanzados y metodologías ágiles.
            </p>

            {/* Micro details grid/badges for quick overview */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-850/80">
                <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">Ubicación</span>
                <span className="font-display font-bold text-slate-250 text-sm mt-1 text-slate-300 block">Remoto / Global</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-850/80">
                <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">Nivel Académico</span>
                <span className="font-display font-bold text-slate-250 text-sm mt-1 text-slate-300 block">Técnico Especialista</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-850/80">
                <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">Idiomas</span>
                <span className="font-display font-bold text-slate-250 text-sm mt-1 text-slate-300 block">Español (Nativo)</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-850/80">
                <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">Soporte Offline</span>
                <span className="font-display font-bold text-slate-250 text-sm mt-1 text-slate-300 block">Local SQLite / Supabase</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
