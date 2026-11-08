export interface SkillItem {
  name: string;
  category: 'web' | 'ai' | 'backend' | 'tools' | 'creative';
  description: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: 'web' | 'ai' | 'backend' | 'tools' | 'creative';
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  badgeBg: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    subtitle: 'From fine-tuned language models to edge neural networks',
    iconName: 'Sparkles',
    color: '#788568',
    badgeBg: 'bg-sage-subtle border-sage/40 text-sage-dark',
    skills: [
      { name: 'Python', category: 'ai', description: 'Primary language for ML, scripting, and backend microservices', highlight: true },
      { name: 'LLMs', category: 'ai', description: 'Prompt engineering, structured output, Gemini & open-weights models', highlight: true },
      { name: 'NLP', category: 'ai', description: 'Text processing, clarification engines, semantic parsing' },
      { name: 'AI Agents', category: 'ai', description: 'Multi-agent orchestration, tool-calling, autonomous execution pipelines', highlight: true },
      { name: 'Computer Vision', category: 'ai', description: 'Image preprocessing, CT scan classification, OpenCV pipelines' },
      { name: 'TensorFlow Lite', category: 'ai', description: 'Edge model optimization, int8 quantization, mobile inference' }
    ]
  },
  {
    id: 'web',
    title: 'Programming & Web Development',
    subtitle: 'Building responsive, dynamic, and accessible applications',
    iconName: 'Code',
    color: '#C8795C',
    badgeBg: 'bg-terracotta-subtle border-terracotta/40 text-terracotta-dark',
    skills: [
      { name: 'React', category: 'web', description: 'Component-driven web applications, hooks, state management', highlight: true },
      { name: 'React Native', category: 'web', description: 'Cross-platform mobile applications for iOS & Android', highlight: true },
      { name: 'JavaScript', category: 'web', description: 'Modern ES6+, async/await, DOM manipulation, functional patterns' },
      { name: 'HTML5', category: 'web', description: 'Semantic structure, accessibility standards, web standards' },
      { name: 'CSS3 / Tailwind', category: 'web', description: 'Responsive layouts, modern styling systems, design systems' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    subtitle: 'Architecting reliable data stores and real-time APIs',
    iconName: 'Database',
    color: '#788568',
    badgeBg: 'bg-sage-subtle border-sage/40 text-sage-dark',
    skills: [
      { name: 'Node.js', category: 'backend', description: 'Asynchronous event-driven backend runtimes and CLI tools', highlight: true },
      { name: 'Express', category: 'backend', description: 'REST APIs, WebSocket middleware, route architectures' },
      { name: 'Supabase', category: 'backend', description: 'Postgres BaaS, row-level security, auth & storage', highlight: true },
      { name: 'PostgreSQL', category: 'backend', description: 'Relational database modeling, indexes, ACID transactions' },
      { name: 'Firebase', category: 'backend', description: 'Firestore, cloud authentication, real-time database synchronizations' }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Modern toolchains for rapid development and deployment',
    iconName: 'Terminal',
    color: '#292B25',
    badgeBg: 'bg-beige/60 border-editorial-line text-charcoal',
    skills: [
      { name: 'GitHub', category: 'tools', description: 'Version control, collaborative workflows, CI/CD actions', highlight: true },
      { name: 'VS Code', category: 'tools', description: 'Custom developer workspace, debugging, extensions ecosystem' },
      { name: 'Expo', category: 'tools', description: 'Managed mobile development, sensors integration, OTA updates' },
      { name: 'Ollama', category: 'tools', description: 'Local LLM serving, edge model quantizations, offline testing' }
    ]
  },
  {
    id: 'creative',
    title: 'Creative & Product Skills',
    subtitle: 'Bridging technical code with community resonance and design',
    iconName: 'Palette',
    color: '#C8795C',
    badgeBg: 'bg-terracotta-subtle border-terracotta/40 text-terracotta-dark',
    skills: [
      { name: 'UI/UX Thinking', category: 'creative', description: 'Wireframing, user-first journey design, editorial layouts', highlight: true },
      { name: 'Content Ideation', category: 'creative', description: 'Translating complex engineering topics into engaging narratives' },
      { name: 'Brand Storytelling', category: 'creative', description: 'Cohesive visual identity, messaging, and community tone' },
      { name: 'Canva', category: 'creative', description: 'Editorial promotional creatives, event decks, branding assets' },
      { name: 'Digital Marketing', category: 'creative', description: 'Campaign planning, engagement strategy, content distribution' },
      { name: 'Social Media', category: 'creative', description: 'Platform management, community growth, tech advocacy' }
    ]
  }
];

