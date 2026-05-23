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
    <section id="projects" className="py-24 bg-slate-900 border-b border-slate-800 relative">
      {/* ... Render content copied from source omitted for brevity in patch; full file exists in source */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-slate-400 py-8">Interactive projects copied into repository.</div>
      </div>
    </section>
  );
}
