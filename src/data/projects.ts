export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  description: string;
  statusBadge: {
    label: string;
    variant: 'completed' | 'in-progress' | 'architecture' | 'prototype';
  };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
  workflowStages: {
    title: string;
    details: string;
  }[];
  contributions: string[];
  designDecisions: string[];
  metricsOrDisclaimers?: {
    type: 'metric' | 'disclaimer' | 'status';
    label: string;
    text: string;
  }[];
  colorAccent: string;
  illustrationType: 'railway' | 'ai-control' | 'gaming' | 'safety' | 'medical' | 'empower';
}

export const projectsData: Project[] = [
  {
    id: 'railassist',
    title: 'RailAssist — Intelligent Railway Pension & Settlement Advisory System',
    shortTitle: 'RailAssist',
    category: 'Enterprise Systems & AI Advisory',
    tagline: 'Enterprise pension and retirement settlement platform for South Central Railway Headquarters.',
    description: 'RailAssist is an enterprise-oriented railway pension and settlement advisory platform designed for South Central Railway Headquarters. It aims to simplify employee retirement settlement workflows while providing officers with tools to manage railway rules, circulars and official calculation workbooks.',
    statusBadge: {
      label: 'Architecture Phase Completed',
      variant: 'architecture',
    },
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Router',
      'shadcn/ui',
      'Supabase',
      'PostgreSQL',
      'Supabase Storage',
      'Google Gemini'
    ],
    githubUrl: 'https://github.com/supriyaa09/RailBenifits',
    architectureHighlights: [
      'Dual-Portal Architecture: Specialized Employee Portal for self-service retirement forecasting & Officer Portal for administrative circular governance.',
      'Settlement Processing Engine: Comprehensive rule engine supporting Old Pension Scheme (OPS), Unified Pension Scheme (UPS), and National Pension System (NPS).',
      'Knowledge Base & Versioning: Official calculation workbooks maintained with strict audit trails and dynamic PDF report generation.',
      'AI Advisory: Google Gemini integration for conversational policy interpretation and rule queries.'
    ],
    workflowStages: [
      {
        title: 'Employee Self-Assessment',
        details: 'Employees access personal service records, compare pension scheme benefits (OPS vs. UPS vs. NPS), and project retirement gratuity.'
      },
      {
        title: 'Rule Engine Validation',
        details: 'Dynamic calculation formulas verify qualifying service years, dearness relief rates, and commutation factors against live circulars.'
      },
      {
        title: 'Officer Review & Verification',
        details: 'Officers validate submitted dossiers, inspect calculation workbooks, and approve official pension payment orders (PPO).'
      },
      {
        title: 'Audited Report Generation',
        details: 'Generates standardized bilingual official settlement documentation ready for departmental sign-off.'
      }
    ],
    contributions: [
      'Designed end-to-end system architecture, comprehensive Product Requirements Document (PRD), and relational database schema for Supabase.',
      'Structured the mathematical logic for the tripartite pension comparison matrix (OPS, UPS, NPS).',
      'Integrated Google Gemini prompt workflows for natural language policy query resolution.'
    ],
    designDecisions: [
      'Preserved clear demarcation between completed system architecture and upcoming implementation sprints.',
      'Selected Supabase PostgreSQL with Row Level Security (RLS) to enforce strict departmental privilege boundaries between employees and officers.'
    ],
    metricsOrDisclaimers: [
      {
        type: 'status',
        label: 'Current Implementation Status',
        text: 'Architecture Phase Completed. Detailed system design, database schemas, and calculation engines are fully documented. Production code implementation is scheduled as the next engineering phase.'
      }
    ],
    colorAccent: '#C8795C',
    illustrationType: 'railway'
  },
  {
    id: 'vave',
    title: 'VAVE — The Personal AI Control Plane',
    shortTitle: 'VAVE Control Plane',
    category: 'AI Agent Orchestration & Automation',
    tagline: 'Translating high-level human goals into coordinated execution across AI helpers, devices, and workspaces.',
    description: 'VAVE is a personal AI control plane designed to translate high-level human goals into coordinated execution across AI helpers, devices, services and digital workspaces. It explores agent orchestration, contextual memory, cross-device execution and permission-based automation through a unified command interface.',
    statusBadge: {
      label: 'Core Modules Contributed',
      variant: 'completed',
    },
    technologies: [
      'Python 3.10+',
      'Ollama',
      'Qwen 2.5',
      'ChromaDB',
      'CustomTkinter',
      'FastAPI',
      'WebSockets',
      'PyAutoGUI',
      'UIAutomation',
      'Google Workspace APIs'
    ],
    githubUrl: 'https://github.com/sohail-bhai/VAVE-main',
    architectureHighlights: [
      'Framework-agnostic AI helper network orchestrating specialized sub-agents.',
      'Shared semantic memory graph powered by ChromaDB for persistent conversational context.',
      'Zero-trust permission controller with human-in-the-loop confirmation before sensitive actions.',
      'Real-time desktop telemetry and emergency hardware kill switch.'
    ],
    workflowStages: [
      {
        title: 'Goal Ingestion & Parsing',
        details: 'High-level user request parsed through fine-tuned small language model to extract intent and required privileges.'
      },
      {
        title: 'Interactive Clarification',
        details: 'Clarification Engine detects ambiguities or missing parameters, prompting user conversationally before execution.'
      },
      {
        title: 'Orchestrated Tool Execution',
        details: 'Tasks delegated across OS automation (PyAutoGUI), background services, or cloud API helpers.'
      },
      {
        title: 'Safety Intercept & Audit',
        details: 'Destructive commands trigger an explicit prompt; system maintains immutable local execution logs.'
      }
    ],
    contributions: [
      'Individually developed the AI Clarification Engine to systematically extract missing requirements from natural conversational phrasing.',
      'Worked with a fine-tuned 0.5B language model to parse intent with ultra-low latency on edge hardware.',
      'Generated structured JSON specifications from conversational context to feed deterministic execution pipelines.',
      'Collaborated within Sohail & Team, contributing specialized NLP modules while honoring the broader open-source control plane architecture.'
    ],
    designDecisions: [
      'Chose fine-tuned 0.5B SLM over massive cloud LLMs for clarification routines to enable instantaneous local edge execution without API costs or latency.',
      'Clarification engine outputs rigid JSON schemas to prevent hallucinated argument injection.'
    ],
    metricsOrDisclaimers: [
      {
        type: 'status',
        label: 'Roadmap Note',
        text: 'Phase 5 Google Workspace Cloud Sync is unchecked in the project roadmap; cloud synchronization remains under active open-source development.'
      }
    ],
    colorAccent: '#788568',
    illustrationType: 'ai-control'
  },
  {
    id: 'aethelgard',
    title: 'AethelGard — Competitive Learning Arena',
    shortTitle: 'AethelGard',
    category: 'Real-Time Multiplayer Gaming & EdTech',
    tagline: 'Real-time multiplayer knowledge arena with live duels, power-ups, and competitive ELO mechanics.',
    description: 'AethelGard is a real-time multiplayer knowledge game platform where players compete in live quiz battles. It combines multiplayer communication, question-based challenges, rankings and competitive game mechanics.',
    statusBadge: {
      label: '1v1 Mode Live / Structure Built',
      variant: 'in-progress',
    },
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Socket.io Client',
      'Node.js',
      'Express',
      'Socket.io',
      'OpenAI API (Optional)'
    ],
    githubUrl: 'https://github.com/supriyaa09/Aethelgard.git',
    architectureHighlights: [
      'Bidirectional WebSocket Game Engine: Sub-50ms state synchronization across matched players.',
      'Competitive Game Loop: Strict 10-second server-authoritative timer per question preventing client-side timing manipulation.',
      'Power-Up Matrix: Interactive gameplay modifiers including Freeze (pauses rival timer), 50/50 (removes two wrong answers), and Double Points.',
      'Progression Engine: Mathematically grounded ELO ranking algorithm and XP leveling system.'
    ],
    workflowStages: [
      {
        title: 'Matchmaking Lobby',
        details: 'Players queue in lobby; matchmaking room engine pairs contenders based on ELO brackets.'
      },
      {
        title: '1v1 Duel Arena',
        details: 'Two contenders face identical questions over five 10-second rapid rounds with live score differential updates.'
      },
      {
        title: 'Tactical Power-Up Play',
        details: 'Players deploy strategic power-ups in real-time, sending immediate WebSocket interruption events to rival clients.'
      },
      {
        title: 'Outcome & ELO Adjustment',
        details: 'Server calculates rating changes, awards XP badges, and updates seasonal leaderboard positions.'
      }
    ],
    contributions: [
      'Engineered the full-stack 1v1 Duel multiplayer experience from scratch using Socket.io and React.',
      'Designed responsive Game Arena UI with Framer Motion animations for timer ticking, power-up effects, and victory celebrations.',
      'Implemented server-authoritative room state machine to prevent race conditions during rapid answer submissions.'
    ],
    designDecisions: [
      'Server-authoritative scoring: The backend evaluates answers and timing offsets to eliminate client tampering.',
      'Clear modular game mode interface allowing clean separation between active 1v1 Duel and scaffolded Battle Royale mechanics.'
    ],
    metricsOrDisclaimers: [
      {
        type: 'status',
        label: 'Game Mode Verification',
        text: '1v1 Duel is fully implemented (2 players, 5 questions, 10s countdown). Battle Royale and Speed Run modes exist as architectural structures; AI Duel is planned.'
      }
    ],
    colorAccent: '#C8795C',
    illustrationType: 'gaming'
  },
  {
    id: 'nyra',
    title: 'NYRA — Need Your Rapid Assistance',
    shortTitle: 'NYRA',
    category: 'Personal Safety Application & Edge AI',
    tagline: 'Cross-platform personal safety app with Human Activity Recognition & real-time emergency telemetry.',
    description: 'NYRA is a cross-platform personal safety application that uses Human Activity Recognition algorithms and real-time smartphone sensor data to identify potential emergency situations and alert emergency contacts.',
    statusBadge: {
      label: 'Edge Sensor Architecture',
      variant: 'completed',
    },
    technologies: [
      'React Native 0.72+',
      'Expo SDK 49+',
      'React Navigation 6',
      'React Hooks',
      'Context API',
      'Expo Sensors',
      'Expo Location',
      'Expo Notifications',
      'AsyncStorage',
      'SMS & Email APIs'
    ],
    // Note: No fake GitHub URL per prompt instructions!
    architectureHighlights: [
      '50Hz Edge Telemetry: Continuous low-power sampling of smartphone accelerometer and 3-axis gyroscope.',
      'Sliding Window Processing: 3-second sliding window buffer with 50% overlap extracting statistical and frequency-domain feature vectors.',
      'Activity Classifier: Machine learning model trained on the UCI HAR benchmark dataset to classify physical states and detect fall anomalies.',
      'Automated SOS Dispatch: Autonomous dual-channel dispatch via cellular SMS and HTTP mail services accompanied by pinpoint GPS coordinates.'
    ],
    workflowStages: [
      {
        title: 'Continuous Motion Monitoring',
        details: 'Background sensor listeners gather tri-axial acceleration and rotational velocity at calibrated 50Hz frequency.'
      },
      {
        title: 'Feature Extraction & HAR Pipeline',
        details: 'Computes variance, mean, energy distribution, and signal magnitude area (SMA) over 3-second windows.'
      },
      {
        title: 'Anomaly & Impact Detection',
        details: 'Sharp spikes followed by prolonged inactivity trigger an emergency fall confirmation countdown.'
      },
      {
        title: 'Autonomous Alert Broadcast',
        details: 'If uncancelled within countdown, emergency contacts receive immediate SMS and email alerts containing real-time Google Maps coordinates.'
      }
    ],
    contributions: [
      'Architected cross-platform React Native sensor pipeline with low battery consumption strategies.',
      'Implemented sliding-window feature calculation routines tailored for mobile runtime constraints.',
      'Built local encrypted storage for trusted emergency contact data using device-native storage mechanisms.'
    ],
    designDecisions: [
      'Privacy-First Architecture: 100% of raw sensor telemetry is evaluated locally on-device; zero raw motion telemetry is transmitted or persisted to cloud servers.',
      'Emergency Cancellation Buffer: A 15-second audible and haptic countdown window prevents false alarms from accidental phone drops.'
    ],
    metricsOrDisclaimers: [
      {
        type: 'metric',
        label: 'Reported Pipeline Performance',
        text: 'README-reported project metrics: 94.2% fall detection accuracy, <5% false positive rate, and <2s response time on UCI HAR test datasets. (Project metrics under research evaluation; not clinically or field certified).'
      },
      {
        type: 'disclaimer',
        label: 'Privacy & Security Notice',
        text: 'Documented design claims: Local on-device sensor processing, zero cloud storage of personal movement traces, and encrypted contact storage.'
      }
    ],
    colorAccent: '#788568',
    illustrationType: 'safety'
  },
  {
    id: 'curalight',
    title: 'Curalight — Medical Image Classification',
    shortTitle: 'Curalight',
    category: 'Lightweight Healthcare ML & Edge Inference',
    tagline: 'Lightweight, explainable pancreatic CT classification designed for offline, CPU-first deployment.',
    description: 'Curalight is a lightweight, explainable pancreatic CT classification project designed for offline, CPU-first deployment. It provides binary classification between Normal and Suspicious pancreatic CT scans.',
    statusBadge: {
      label: 'Research & Prototyping Pipeline',
      variant: 'prototype',
    },
    technologies: [
      'Python 3.10+',
      'TensorFlow / Keras',
      'TensorFlow Lite (int8)',
      'NumPy & OpenCV',
      'Flutter (Mobile Scaffold)',
      'Scikit-learn'
    ],
    githubUrl: 'https://github.com/supriyaa09/Curalight.git',
    architectureHighlights: [
      'Binary CT Classification: Focused differentiation between Class 0 (Normal) and Class 1 (Suspicious) pancreatic tissue scans.',
      'int8 Quantization Pipeline: TensorFlow Lite post-training integer quantization reducing model footprint for edge devices.',
      'CPU-First Optimization: Engineered specifically to run deterministic inferences on modest hardware without dedicated GPUs.',
      'Mobile Client Scaffold: Flutter client scaffold designed to ingest scans and invoke on-device TFLite interpreter.'
    ],
    workflowStages: [
      {
        title: 'Dataset Preparation & Augmentation',
        details: 'DICOM/PNG preprocessing, intensity normalization, pancreatic ROI cropping, and artifact mitigation.'
      },
      {
        title: 'Keras Training & Evaluation',
        details: 'Deep convolutional feature extractor trained with class-weighted cross-entropy to handle clinical imbalance.'
      },
      {
        title: 'int8 TFLite Conversion',
        details: 'Quantizes 32-bit floating point weights into 8-bit integers, yielding ~4x model size reduction with minimal precision loss.'
      },
      {
        title: 'Edge Mobile Inference',
        details: 'Flutter scaffold executes TFLite interpreter locally without requiring internet connectivity.'
      }
    ],
    contributions: [
      'Built training and evaluation scripts with structured metric reporting (precision, recall, AUC).',
      'Implemented the int8 TFLite export workflow ensuring compatibility with lightweight edge runtimes.',
      'Documented reproducible data preparation configs and mobile scaffold integration steps.'
    ],
    designDecisions: [
      'Prioritized offline, CPU-friendly inference to support low-resource healthcare clinics lacking cloud access.',
      'Maintained modular codebase structure separating Python training scripts (`src/`) from mobile deployment (`mobile/`).'
    ],
    metricsOrDisclaimers: [
      {
        type: 'disclaimer',
        label: 'Clinical Disclaimer (Preserved from Project)',
        text: 'Curalight is strictly a research and prototyping engineering project. It is NOT a certified medical device and is NOT intended for standalone clinical diagnosis or direct medical treatment decisions.'
      }
    ],
    colorAccent: '#C8795C',
    illustrationType: 'medical'
  },
  {
    id: 'empower-her-path',
    title: 'Empower Her Path — Career & Mentorship Platform',
    shortTitle: 'Empower Her Path',
    category: 'Social Impact & EdTech Platform',
    tagline: 'Bridging the gender divide in technology with curated roadmaps, mentorship discovery, and peer networks.',
    description: 'Empower Her Path is an initiative and digital platform dedicated to bridging the gender divide in technology. It provides curated learning roadmaps, mentorship discovery, opportunity tracking, and community networks to guide aspiring women engineers from foundational skills to career readiness.',
    statusBadge: {
      label: 'Open Platform Initiative',
      variant: 'completed',
    },
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Lucide React',
      'Responsive Web Design'
    ],
    githubUrl: 'https://github.com/supriyaa09/empower-her-path',
    architectureHighlights: [
      'Interactive Learning Roadmaps: Visual career path tracks spanning Software Engineering, AI/ML, Cloud, and UI/UX.',
      'Mentorship Network Hub: Searchable profiles of women in tech mentors, office hours, and collaborative 1-on-1 booking flows.',
      'Opportunity Radar: Curated feed of diversity scholarships, women-in-tech hackathons, and internship openings.',
      'Resource Vault: Peer-contributed interview guides, open-source cheat sheets, and technical workshop materials.'
    ],
    workflowStages: [
      {
        title: 'Pathway Discovery',
        details: 'Students explore domain roadmaps with estimated milestones, free verified resources, and real-world project ideas.'
      },
      {
        title: 'Skill Track Navigation',
        details: 'Step-by-step curriculum with interactive checklists tracking progress from fundamentals to advanced projects.'
      },
      {
        title: 'Community Connection',
        details: 'Direct avenues to connect with mentors, study circles, and peer hackathon teams.'
      },
      {
        title: 'Opportunity Application',
        details: 'Filter active scholarships, conferences, and grants with application deadlines and eligibility guides.'
      }
    ],
    contributions: [
      'Designed and engineered the interactive web platform with warm, inclusive, and accessible editorial UI.',
      'Curated actionable technical pathways and mentorship directory schemas for beginner-friendly onboarding.',
      'Implemented responsive filtering components for roadmaps, tools, and scholarship opportunities.'
    ],
    designDecisions: [
      'Adopted an open-access client-side architecture so students in low-bandwidth regions can access guidance smoothly without barriers.',
      'Integrated accessible typography and contrast ratios to ensure maximum readability.'
    ],
    colorAccent: '#788568',
    illustrationType: 'empower'
  }
];

