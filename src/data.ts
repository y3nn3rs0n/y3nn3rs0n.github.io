import { Course, Project, Skill } from './types';

export const coursesData: Course[] = [
  // Flutter & Dart
  {
    title: 'Flutter: de Cero hasta los detalles',
    category: 'flutter',
    emoji: '💙',
    duration: '45 hrs',
    important: true
  },
  {
    title: 'Dart: de cero hasta los detalles',
    category: 'flutter',
    emoji: '🎯',
    duration: '20 hrs'
  },
  {
    title: 'Flutter & Dart guía completa',
    category: 'flutter',
    emoji: '🚀',
    duration: '60 hrs',
    important: true
  },
  {
    title: 'Kotlin esencial',
    category: 'flutter',
    emoji: '🤖',
    duration: '15 hrs'
  },
  {
    title: 'SQLite en Flutter',
    category: 'flutter',
    emoji: '🗄️',
    duration: '12 hrs'
  },
  {
    title: 'FlutterFlow: Creacion de Apps',
    category: 'flutter',
    emoji: '📱',
    duration: '25 hrs'
  },

  // Javascript & Typescript
  {
    title: 'Curso profesional de React',
    category: 'js-ts',
    emoji: '⚛️',
    duration: '35 hrs',
    important: true
  },
  {
    title: 'Curso Profesional de TypeScript',
    category: 'js-ts',
    emoji: '📘',
    duration: '20 hrs',
    important: true
  },
  {
    title: 'Curso Profesional de JavaScript',
    category: 'js-ts',
    emoji: '💛',
    duration: '30 hrs'
  },
  {
    title: 'JavaScript: de cero hasta los detalles (ES5)',
    category: 'js-ts',
    emoji: '📜',
    duration: '25 hrs'
  },
  {
    title: 'Animaciones con JavaScript',
    category: 'js-ts',
    emoji: '✨',
    duration: '18 hrs'
  },
  {
    title: 'Angular: de cero hasta los detalles',
    category: 'js-ts',
    emoji: '🅰️',
    duration: '40 hrs'
  },

  // Otros
  {
    title: 'Principios SOLID y Clean Code',
    category: 'other',
    emoji: '🧼',
    duration: '20 hrs',
    important: true
  },
  {
    title: 'Fundamentos de Arquitectura de Software',
    category: 'other',
    emoji: '🏛️',
    duration: '15 hrs',
    important: true
  },
  {
    title: 'Curso Profesional de Git',
    category: 'other',
    emoji: '🌿',
    duration: '12 hrs'
  },
  {
    title: 'Curso a fondo de GitHub',
    category: 'other',
    emoji: '🐙',
    duration: '10 hrs'
  },
  {
    title: 'Bubble.io: Guía para creación de apps',
    category: 'other',
    emoji: '🫧',
    duration: '22 hrs'
  }
];

export const skillsData: Skill[] = [
  // Front-End
  { name: 'React.js', level: 90, category: 'frontend', iconName: 'Atom' },
  { name: 'TypeScript', level: 85, category: 'frontend', iconName: 'FileJson' },
  { name: 'JavaScript ES6+', level: 92, category: 'frontend', iconName: 'Sparkles' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', iconName: 'Palette' },
  { name: 'Angular', level: 75, category: 'frontend', iconName: 'ShieldAlert' },
  
  // Mobile / Dart
  { name: 'Flutter & Dart', level: 90, category: 'mobile', iconName: 'Phone' },
  { name: 'FlutterFlow', level: 85, category: 'mobile', iconName: 'Cpu' },

  // Low-code & DB
  { name: 'Bubble.io', level: 80, category: 'lowcode-db', iconName: 'Sparkles' },
  { name: 'Firebase', level: 85, category: 'lowcode-db', iconName: 'Flame' },

  // Herramientas
  { name: 'Git & GitHub', level: 90, category: 'tools', iconName: 'GitBranch' },
  { name: 'SOLID Principles', level: 85, category: 'tools', iconName: 'CheckCircle' },
  { name: 'Architectural Patterns', level: 80, category: 'tools', iconName: 'Milestone' },
  { name: 'VS Code & Android Studio', level: 90, category: 'tools', iconName: 'Terminal' }
];

export const projectsData: Project[] = [
  {
    id: 'dashboard',
    title: 'Professional Dashboard',
    category: 'web',
    shortDesc: 'Panel administrativo interactivo de alto rendimiento para el control y análisis de métricas clave de negocio.',
    longDesc: 'Este Dashboard simula un entorno empresarial completo para gestionar KPIs, ver el listado de usuarios de la organización, interactuar con registros del sistema de auditoría y configurar alertas automáticas. Incluye protección por credenciales y un motor interactivo en tiempo real.',
    tech: ['React.js', 'Tailwind CSS', 'Lucide Icons', 'Local State'],
    bannerUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    interactiveType: 'dashboard',
    githubUrl: 'https://github.com/y3nn3rs0n/y3nn3rs0n.github.io'
  },
  {
    id: 'bicycle-app',
    title: 'Bicycle App Showcase',
    category: 'mobile',
    shortDesc: 'Aplicación móvil de catálogo, reserva y alquiler de bicicletas con un diseño premium enfocado en micro-interacciones.',
    longDesc: 'Una representación interactiva y visual de una aplicación móvil moderna desarrollada en Flutter. Ofrece a los usuarios elegir entre múltiples modelos de bicicletas, ajustar filtros dinámicos como precios y tipos, ver especificaciones del modelo seleccionado y realizar reservas simuladas en un teléfono virtual.',
    tech: ['Flutter', 'Dart', 'Tailwind (React UI Mock)', 'Local DB Simulator'],
    bannerUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80',
    interactiveType: 'bicycle',
    githubUrl: 'https://github.com/y3nn3rs0n/y3nn3rs0n.github.io'
  },
  {
    id: 'gemini-flutter',
    title: 'Gemini + Flutter Lab',
    category: 'ai',
    shortDesc: 'Asistente inteligente con IA implementado para móviles. Interactúa con un modelo conversacional en este laboratorio.',
    longDesc: 'Combina el potencial de Flutter para renderizar interfaces limpias a alta velocidad junto a las capacidades del SDK de Gemini AI. En esta versión de laboratorio, puedes chatear directamente con el asistente del programador, que responderá tus preguntas sobre las habilidades y perfil de Yennerson de forma interactiva.',
    tech: ['Flutter', 'Gemini SDK', 'AI Chat Interface', 'State Management'],
    bannerUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
    interactiveType: 'gemini',
    githubUrl: 'https://github.com/y3nn3rs0n/y3nn3rs0n.github.io'
  },
  {
    id: 'admin-module',
    title: 'Admin Module & CMS',
    category: 'web',
    shortDesc: 'Modulo de administración y gestión de contenidos interactivo que permite añadir, actualizar y borrar elementos.',
    longDesc: 'Un CMS interactivo con control de sesión que demuestra la capacidad de desarrollar sistemas CRUD limpios y robustos. Permite realizar operaciones CRUD sobre proyectos y estudios representados en una interfaz administrativa limpia, con alertas de validación y simulación de base de datos.',
    tech: ['TypeScript', 'React Hooks', 'CRUD Operations', 'Tailwind CSS'],
    bannerUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    interactiveType: 'admin',
    githubUrl: 'https://github.com/y3nn3rs0n/y3nn3rs0n.github.io'
  },
  {
    id: 'landing-page',
    title: 'Interactive Landing Page',
    category: 'design',
    shortDesc: 'Página de lanzamiento para servicios web con un personalizador estético que cambia la interfaz en tiempo real.',
    longDesc: 'Una Landing Page moderna que promueve servicios de diseño y desarrollo frontend. Incluye un control interactivo integrado para ajustar colores de marca, bordes, tipografías y el estilo visual de la página directamente desde un panel flotante, mostrando la versatilidad de Tailwind y React.',
    tech: ['Tailwind CSS', 'React Interactive Layouts', 'Responsive Grid'],
    bannerUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    interactiveType: 'landing',
    githubUrl: 'https://github.com/y3nn3rs0n/y3nn3rs0n.github.io'
  },
  {
    id: 'web-design',
    title: 'Core Web Design Portfolio',
    category: 'design',
    shortDesc: 'Sección premium de conceptos gráficos y maquetación web de alta definición orientados a conversión.',
    longDesc: 'Diferentes piezas de diseño web y móvil que destacan por el uso inteligente del espaciado, balances cromáticos modernos, micro-animaciones CSS y la aplicación de los principios UI/UX para lograr estructuras digitales estéticamente excepcionales.',
    tech: ['Figma to Web', 'Tailwind CSS', 'Perfect Layouts', 'Animations'],
    bannerUrl: 'https://images.unsplash.com/photo-1541462608141-2ff01dd93a4e?auto=format&fit=crop&w=600&q=80',
    interactiveType: 'webdesign',
    githubUrl: 'https://github.com/y3nn3rs0n/y3nn3rs0n.github.io'
  }
];
