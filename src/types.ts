export interface Course {
  title: string;
  provider?: string;
  duration?: string;
  category: 'flutter' | 'js-ts' | 'other';
  emoji: string;
  important?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'ai' | 'design';
  shortDesc: string;
  longDesc: string;
  tech: string[];
  bannerUrl: string;
  interactiveType: 'dashboard' | 'landing' | 'bicycle' | 'gemini' | 'admin' | 'webdesign';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'mobile' | 'lowcode-db' | 'tools';
  iconName: string;
}
