import { useState, FormEvent } from 'react';
import { projectsData } from '../data';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  Monitor,
  Phone,
  Play,
  RotateCcw,
  Sparkles,
  Lock,
  Unlock,
  Users,
  Layers,
  FileText,
  Send,
  Sliders,
  Check,
  Smartphone,
  Eye,
  Settings,
  Bell,
  Search,
  CheckCircle,
  X,
  CreditCard,
  Plus
} from 'lucide-react';

export default function InteractiveProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSandbox, setActiveSandbox] = useState<string | null>(null);

  // Dashboard Credentials and State
  const [dbEmail, setDbEmail] = useState('');
  const [dbPassword, setDbPassword] = useState('');
  const [dbLoggedIn, setDbLoggedIn] = useState(false);
  const [dbError, setDbError] = useState('');
  const [dbActiveTab, setDbActiveTab] = useState<'metrics' | 'users' | 'logs'>('metrics');

  // Admin Module Credentials and CRUD State
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [adminMockTasks, setAdminMockTasks] = useState([
    { id: 1, title: 'Flutter App: Autenticación con SQLite', category: 'Mobile', checked: true },
    { id: 2, title: 'Landing Page: Optimizar carga de imágenes', category: 'Performance', checked: false },
    { id: 3, title: 'SOLID Refactor en API Gateway', category: 'Architecture', checked: false }
  ]);
  const [newAdminTaskTitle, setNewAdminTaskTitle] = useState('');
  const [newAdminTaskCat, setNewAdminTaskCat] = useState('Web');

  // Bicycle App Simulator State
  const [bikeType, setBikeType] = useState<'mountain' | 'road' | 'electric'>('mountain');
  const [bikePriceFilter, setBikePriceFilter] = useState(15);
  const [bookedBike, setBookedBike] = useState<string | null>(null);

  // Gemini Chat Simulator State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'gemini'; text: string }>>([
    { sender: 'gemini', text: '¡Hola! Soy el asistente inteligente de Yennerson. Pregúntame sobre sus habilidades de Flutter, React o su enfoque SOLID.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);

  // ... (the rest of the component is the same as source)

  const handleDashboardLogin = (e: FormEvent) => {
    e.preventDefault();
    if (dbEmail.trim() === 'yennerson.olivo@gmail.com' && dbPassword === '123456') {
      setDbLoggedIn(true);
      setDbError('');
    } else {
      setDbError('Credenciales incorrectas. Pista: yennerson.olivo@gmail.com / 123456');
    }
  };

  const handleAdminLogin = (e: FormEvent) => {
    e.preventDefault();
    if (adminEmail.trim() === 'test@test' && adminPassword === '123456') {
      setAdminLoggedIn(true);
      setAdminError('');
    } else {
      setAdminError('Credenciales incorrectas. Pista: test@test / 123456');
    }
  };

  const triggerGeminiReply = (query: string) => {
    let responseText = 'Lo siento, no pude procesar esa pregunta detalladamente, pero estoy entrenado en Flutter, Dart, React y principios SOLID.';
    const q = query.toLowerCase();

    if (q.includes('flutter') || q.includes('dart') || q.includes('kotlin') || q.includes('móvil') || q.includes('movil')) {
      responseText = 'Yennerson es especialista en Flutter y Dart. Ha completado cursos esenciales de Flutter de cero a experto, maneja SQLite para almacenamiento sin conexión (offline sync) y conoce Kotlin básico para integraciones nativas necesarias.';
    } else if (q.includes('solid') || q.includes('clean') || q.includes('arquitectura') || q.includes('código') || q.includes('codigo')) {
      responseText = 'Aplica estrictamente los principios SOLID para construir código TypeScript/Dart desacoplado, escalable y modular. Además, cuenta con formación académica en Fundamentos de Arquitectura de Software.';
    } else if (q.includes('react') || q.includes('typescript') || q.includes('frontend') || q.includes('web') || q.includes('javascript') || q.includes('js')) {
      responseText = 'En desarrollo Web, Yennerson cuenta con una sólida base técnica en React.js, TypeScript y Tailwind CSS, respaldada por cursos de JavaScript profesional de nivel avanzado y animaciones interactivas.';
    } else if (q.includes('estudio') || q.includes('curso') || q.includes('univer') || q.includes('formacion') || q.includes('formación')) {
      responseText = 'Yennerson cuenta con un robusto inventario de +15 certificaciones en plataformas como Flutter, React, Angular, patrones de desarrollo y herramientas No-code como Bubble.io.';
    } else if (q.includes('contacto') || q.includes('correo') || q.includes('mail') || q.includes('contratar')) {
      responseText = '¡Puedes contactarle directamente al correo yennerson.olivo@gmail.com o enviándole un mensaje abajo en el formulario de la sección Contacto!';
    } else if (q.includes('hola') || q.includes('buen') || q.includes('hi')) {
      responseText = '¡Hola! ¿En qué puedo ayudarte hoy sobre la trayectoria técnica de Yennerson? Me puedes preguntar sobre sus lenguajes favoritos o proyectos recientes.';
    }

    setIsAiTyping(true);
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'gemini', text: responseText }]);
      setIsAiTyping(false);
    }, 850);
  };

  const handleChatSend = (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    triggerGeminiReply(userMsg);
  };

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newAdminTaskTitle.trim()) return;
    setAdminMockTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title: newAdminTaskTitle.trim(),
        category: newAdminTaskCat,
        checked: false
      }
    ]);
    setNewAdminTaskTitle('');
  };

  const toggleTask = (id: number) => {
    setAdminMockTasks(prev => prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  };

  const deleteAdminTask = (id: number) => {
    setAdminMockTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-sky-500/10 to-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-sky-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 tracking-tight leading-none">
            Proyectos Interactivos
          </h2>
          <p className="text-slate-400 mt-4 text-base font-sans">
            Haz clic en cualquier tarjeta para explorar demostraciones interactivas en vivo. Cada proyecto incluye simuladores, dashboards funcionales y pruebas interactivas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 bg-slate-800/20 backdrop-blur-sm hover:bg-slate-800/30"
            >
              {/* Banner Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                <img
                  src={project.bannerUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-950/40 px-2 py-1 rounded border border-sky-500/25">
                    {project.interactiveType}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-slate-700/50 text-slate-300 px-2 py-1 rounded border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] bg-slate-700/50 text-slate-400 px-2 py-1 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                  <Play className="w-3.5 h-3.5" />
                  <span>Ver Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Interactive Section */}
        {selectedProject && (
          <div className="bg-slate-800/30 border border-slate-800/60 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-400 mt-2">{selectedProject.longDesc}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Interactive Sandboxes */}
            {selectedProject.interactiveType === 'dashboard' && (
              <div className="space-y-4">
                {!dbLoggedIn ? (
                  <form onSubmit={handleDashboardLogin} className="space-y-4 max-w-sm">
                    <input
                      type="email"
                      placeholder="Email"
                      value={dbEmail}
                      onChange={(e) => setDbEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-sky-500 outline-none transition-colors"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={dbPassword}
                      onChange={(e) => setDbPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-sky-500 outline-none transition-colors"
                    />
                    {dbError && <p className="text-red-400 text-sm">{dbError}</p>}
                    <button
                      type="submit"
                      className="w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sky-500/20 transition-all"
                    >
                      Iniciar Sesión
                    </button>
                    <p className="text-xs text-slate-500">Demo: yennerson.olivo@gmail.com / 123456</p>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex gap-2 mb-4">
                      {(['metrics', 'users', 'logs'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setDbActiveTab(tab)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                            dbActiveTab === tab
                              ? 'bg-sky-500 text-white'
                              : 'bg-slate-700/50 text-slate-400 hover:text-white'
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>

                    {dbActiveTab === 'metrics' && (
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-xs">Revenue</p>
                          <p className="text-2xl font-bold text-sky-400 mt-2">$48.5K</p>
                          <p className="text-green-400 text-xs mt-1">+12.5% MoM</p>
                        </div>
                        <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-xs">Users</p>
                          <p className="text-2xl font-bold text-indigo-400 mt-2">2,847</p>
                          <p className="text-green-400 text-xs mt-1">+8.2% WoW</p>
                        </div>
                        <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-xs">Conversion</p>
                          <p className="text-2xl font-bold text-emerald-400 mt-2">3.24%</p>
                          <p className="text-green-400 text-xs mt-1">+0.15% DoD</p>
                        </div>
                      </div>
                    )}

                    {dbActiveTab === 'users' && (
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-lg">
                            <Users className="w-4 h-4 text-sky-400" />
                            <span className="text-sm text-slate-300">User #{i}</span>
                            <span className="text-xs text-slate-500 ml-auto">Active</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {dbActiveTab === 'logs' && (
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-slate-900/60 rounded font-mono text-xs text-slate-400">
                            <span className="text-sky-400">[{new Date(Date.now() - i * 60000).toLocaleTimeString()}]</span>
                            <span>System event #{i} logged</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setDbLoggedIn(false);
                        setDbEmail('');
                        setDbPassword('');
                      }}
                      className="mt-4 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            )}

            {selectedProject.interactiveType === 'bicycle' && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {(['mountain', 'road', 'electric'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setBikeType(type)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        bikeType === type
                          ? 'border-sky-500 bg-sky-500/10 text-sky-300'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-5 h-5 mx-auto mb-2" />
                      <span className="text-sm font-semibold capitalize">{type}</span>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="text-sm text-slate-400 block mb-2">
                    Filtro de Precio: ${bikePriceFilter}/día
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={bikePriceFilter}
                    onChange={(e) => setBikePriceFilter(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>

                <button
                  onClick={() => setBookedBike(`${bikeType}-${Date.now()}`)}
                  className="w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Reservar {bikeType} - ${bikePriceFilter}/día
                </button>

                {bookedBike && (
                  <div className="p-4 bg-emerald-950/30 border border-emerald-500/25 rounded-lg text-emerald-400 text-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    ¡Bicicleta {bikeType} reservada! ID: {bookedBike.slice(0, 8)}...
                  </div>
                )}
              </div>
            )}

            {selectedProject.interactiveType === 'gemini' && (
              <div className="space-y-4 max-h-96 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-3 bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                          msg.sender === 'user'
                            ? 'bg-sky-500 text-white'
                            : 'bg-slate-800 text-slate-200'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isAiTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-800 text-slate-400 px-4 py-2 rounded-lg text-sm">
                        Escribiendo...
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleChatSend} className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Pregunta sobre Flutter, React o SOLID..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-sky-500 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {selectedProject.interactiveType === 'admin' && (
              <div className="space-y-4">
                {!adminLoggedIn ? (
                  <form onSubmit={handleAdminLogin} className="space-y-4 max-w-sm">
                    <input
                      type="email"
                      placeholder="Email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-sky-500 outline-none transition-colors"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-sky-500 outline-none transition-colors"
                    />
                    {adminError && <p className="text-red-400 text-sm">{adminError}</p>}
                    <button
                      type="submit"
                      className="w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Iniciar Sesión
                    </button>
                    <p className="text-xs text-slate-500">Demo: test@test / 123456</p>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {adminMockTasks.map((task) => (
                        <div key={task.id} className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-lg">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`transition-colors ${
                              task.checked ? 'text-emerald-400' : 'text-slate-600'
                            }`}
                          >
                            <Check className="w-5 h-5" />
                          </button>
                          <div className="flex-1">
                            <p className={`text-sm ${task.checked ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                              {task.title}
                            </p>
                            <p className="text-xs text-slate-500">{task.category}</p>
                          </div>
                          <button
                            onClick={() => deleteAdminTask(task.id)}
                            className="text-slate-500 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleCreateTask} className="flex gap-2">
                      <input
                        type="text"
                        value={newAdminTaskTitle}
                        onChange={(e) => setNewAdminTaskTitle(e.target.value)}
                        placeholder="Nueva tarea..."
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-sky-500 outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </form>

                    <button
                      onClick={() => {
                        setAdminLoggedIn(false);
                        setAdminEmail('');
                        setAdminPassword('');
                      }}
                      className="mt-4 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors w-full"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            )}

            {selectedProject.interactiveType === 'landing' && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-lg border border-slate-800">
                <p className="text-slate-300 mb-4">Personalizador de Landing Page - Ajusta los estilos en tiempo real:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">Color de Acento</label>
                    <input type="color" defaultValue="#0ea5e9" className="w-full h-10 rounded cursor-pointer" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">Tipografía</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                      <option>Sans (Defecto)</option>
                      <option>Serif</option>
                      <option>Mono</option>
                    </select>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Ver Cambios
                </button>
              </div>
            )}

            {selectedProject.interactiveType === 'webdesign' && (
              <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800 text-center">
                <Palette className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Galería de Diseños Web</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Conceptos visuales de alta fidelidad con enfoque en UI/UX, micro-interacciones y responsive design.
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Ver Galería Completa
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
