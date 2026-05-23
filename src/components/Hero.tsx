import { MouseEvent } from 'react';
import { ArrowRight, Download, Github, Mail, Smartphone, Code2, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const handleContactClick = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleProjectsClick = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-slate-950 flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-slate-800"
    >
      {/* Absolute graphic layout assets (Sleek tech glowing lines and blobs) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-900/10 rounded-full border border-slate-800/20 pointer-events-none scale-75 md:scale-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-900/15 rounded-full border border-slate-800/30 border-dashed pointer-events-none scale-75 md:scale-100" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Copywriting Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-850/40 text-sky-400 font-mono text-[10.5px] font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse-slow" />
            <span>DISPONIBLE PARA NUEVOS PROYECTOS</span>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-xs md:text-sm font-semibold tracking-wider text-slate-400 uppercase">
              Hola, mi nombre es
            </h3>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight uppercase">
              Yennerson<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-450 via-sky-400 to-indigo-500">
                Olivo
              </span>
            </h1>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-350">
              Software Developer <span className="text-sky-400">//</span> Frontend & Mobile Solutions
            </h2>
          </div>

          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            ¡Bienvenido a mi portafolio! Soy Programador enfocado en el desarrollo frontend web y móvil. Con un sólido conocimiento en tecnologías modernas, me apasiona crear soluciones innovadoras que proporcionen experiencias de usuario excepcionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
            <a
              href="#projects"
              onClick={handleProjectsClick}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-all duration-300 shadow-lg shadow-sky-500/15 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
            >
              <span>Yenner's Sandbox</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>
            
            {/* Download Resume Link matching Curriculum PDF in markdown index */}
            <a
              href="/Curr%C3%ADculum%20Yennerson%20Olivo.pdf"
              download
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900/60 hover:bg-slate-900 hover:text-white border border-slate-800 hover:border-slate-700/80 transition-all duration-350 flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Descargar Hoja de Vida</span>
            </a>
          </div>

          {/* Core tech stack badges in row */}
          <div className="pt-8 border-t border-slate-850 max-w-lg">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold block mb-3.5">
              Tecnologías Especialistas:
            </span>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'React.js', 'TypeScript', 'Tailwind', 'SQLite', 'Firebase'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-slate-300 bg-slate-900/80 px-3 py-1 border border-slate-850 rounded-lg hover:border-slate-700 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Visual Graphical Interactive Terminal Component */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
          <div className="w-full max-w-sm bg-slate-900/70 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative backdrop-blur-md">
            {/* Window Dots Menu */}
            <div className="bg-slate-950/80 px-4.5 py-3 border-b border-slate-850 flex items-center justify-between">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              </div>
              <span className="text-[10px] text-slate-500 font-mono flex items-center space-x-1">
                <Terminal className="w-3 h-3 text-sky-400" />
                <span>yennerson.ts</span>
              </span>
            </div>

            {/* Code Lines Editor Mock */}
            <div className="p-5 font-mono text-[11px] leading-relaxed text-slate-400 whitespace-pre-wrap select-text">
              <span className="text-indigo-400">import</span> {'{ Developer }'} <span className="text-indigo-400">from</span> <span className="text-sky-305 text-sky-300">'yennerson-olivo'</span>;
              <br /><br />
              <span className="text-emerald-455 text-emerald-400">// Configuración del Programador</span><br />
              <span className="text-indigo-400">const</span> yenner = <span className="text-indigo-400">new</span> <span className="text-yellow-400">Developer</span>({'{'}
              <br />  name: <span className="text-sky-300">'Yennerson Olivo'</span>,
              <br />  focus: [<span className="text-sky-300">'Frontend'</span>, <span className="text-sky-300">'Mobile'</span>],
              <br />  mainStack: [<span className="text-sky-300">'React'</span>, <span className="text-sky-300">'Flutter'</span>],
              <br />  isSolidPractitioner: <span className="text-amber-500">true</span>,
              <br />  passionateAbout: <span className="text-sky-250 text-sky-400">'Elegant UI & Clean Code'</span>
              <br />{'}'});
              <br /><br />
              <span className="text-emerald-400">// Estado de disponibilidad</span><br />
              yenner.<span className="text-sky-400">checkStatus</span>(); <span className="text-slate-500">// Output: Ready to Code! 🚀</span>
              <br /><br />
              <span className="text-indigo-400">const</span> stats = {'{'}
              <br />  coursesCompleted: <span className="text-amber-500">15</span>,
              <br />  bestPracticesApplied: <span className="text-sky-300">'SOLID / Clean Architecture'</span>
              <br />{'}'};
            </div>

            {/* Fast Stats Footer */}
            <div className="bg-slate-950/80 p-3.5 border-t border-slate-850 flex justify-between font-mono text-[10px] text-slate-400">
              <span className="flex items-center space-x-1.5 hover:text-white transition">
                <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                <span>Flutter Dart expert</span>
              </span>
              <span className="flex items-center space-x-1.5 hover:text-white transition">
                <Code2 className="w-3.5 h-3.5 text-indigo-450 text-indigo-400" />
                <span>TypeScript React expert</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
