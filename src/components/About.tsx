import { Shield, Brain, Heart, Zap, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual card display of his developer philosophy */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-xl">
              
              {/* Card top flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full filter blur-[30px]" />
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-sky-550/15 bg-sky-500/10 p-2.5 rounded-xl text-sky-400">
                  <Sparkles className="w-5 h-5 animate-pulse-slow" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg">Valores Técnicos</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 bg-slate-800 border border-slate-750 text-indigo-400 rounded-lg shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-200 text-sm">Principios SOLID & Clean Code</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed">Código diseñado para el futuro. Desacoplado, explicativo y testeable para evitar deuda de software.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 bg-slate-800 border border-slate-750 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-200 text-sm">Mentalidad Multiplataforma</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed">Mismo ecosistema conceptual para web (React) y entornos nativos para teléfonos (Flutter & Kotlin).</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 bg-slate-800 border border-slate-750 text-pink-400 rounded-lg shrink-0 mt-0.5">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-200 text-sm">Enfoque UI/UX Pixel Perfect</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed">Detalles visuales minuciosos, espaciados consistentes y adaptabilidad estricta a todo tamaño de pantalla.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 bg-slate-800 border border-slate-750 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-200 text-sm">Optimización de Rendimiento</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed">Carga instantánea, lazy loading inteligente, estados fluidos y optimización meticulosa del bundle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copywriting & Bento Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase bg-sky-950/50 px-3.5 py-1.5 rounded-full border border-sky-900/30">
              ¿Quién es Yennerson?
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-none">
              Apasionado por la Ingeniería Frontend & Móvil
            </h2>
            
            <p className="font-sans text-slate-355 text-slate-300 text-sm sm:text-base leading-relaxed">
              Hola, soy **Yennerson Olivo**, desarrollador con una fuerte inclinación hacia la arquitectura limpia y la excelencia en el diseño interactivo. Mi trayectoria me ha permitido dominar lenguajes modernos como **TypeScript**, **Dart** y **JavaScript**, integrando soluciones completas de alto desempeño.
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
