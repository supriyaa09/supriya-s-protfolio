export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  type: 'Winner' | 'Leadership' | 'Participation';
  badgeLabel: string;
  description: string;
  highlightDetails?: string;
  icon: 'trophy' | 'award' | 'star' | 'heart';
}

export const achievementsData: Achievement[] = [
  {
    id: 'hackwave-2026',
    title: 'Winner — HackWave 2026',
    event: 'HackWave Hackathon',
    year: '2026',
    type: 'Winner',
    badgeLabel: '1st Place Winner',
    description: 'Secured first place at HackWave 2026, building and pitching an innovative technological solution evaluated for technical architecture, practical impact, and user execution.',
    highlightDetails: 'Recognized by the judging committee for rapid prototyping and impactful engineering execution.',
    icon: 'trophy'
  },
  {
    id: 'ro फर्क-2025',
    title: 'Winner — RoboVeda 2025 Ideathon',
    event: 'RoboVeda Innovation Summit',
    year: '2025',
    type: 'Winner',
    badgeLabel: 'Ideathon Winner',
    description: 'Awarded first prize in the competitive RoboVeda 2025 Ideathon for conceptualizing a forward-looking technological solution solving acute practical challenges.',
    highlightDetails: 'Stood out among competitive university teams for originality, feasibility, and structured business modeling.',
    icon: 'award'
  },
  {
    id: 'hackathons-ten-plus',
    title: '10+ Hackathons & Ideathons',
    event: 'Regional & National Competitive Arenas',
    year: '2024 – 2026',
    type: 'Participation',
    badgeLabel: '10+ Competitions',
    description: 'Consistent competitor across 10+ hackathons and innovation sprints, gaining multidisciplinary exposure across artificial intelligence, cloud architectures, and UX.',
    highlightDetails: 'Honed high-velocity prototyping, Git collaboration, and technical storytelling in high-stakes environments.',
    icon: 'star'
  },
  {
    id: 'sip-2025',
    title: 'Facilitator — SIP 2025 Social Internship',
    event: 'Social Internship Program (SIP)',
    year: '2025',
    type: 'Leadership',
    badgeLabel: 'Teaching Facilitator',
    description: 'Facilitated social community initiatives, designing and delivering foundational teaching programs to empower underprivileged students with vital skills.',
    highlightDetails: 'Contributed dedicated volunteer hours to bridge educational inequities through hands-on learning sessions.',
    icon: 'heart'
  }
];

export interface Certification {
  id: string;
  name: string;
  issuingBody: string;
  badgeText: string;
  status: 'Earned' | 'In Progress';
  description: string;
  accent: 'sage' | 'terracotta' | 'charcoal';
}

export const certificationsData: Certification[] = [
  {
    id: 'ncc-b',
    name: 'NCC — B Certificate',
    issuingBody: 'National Cadet Corps (Ministry of Defence)',
    badgeText: 'Earned & Awarded',
    status: 'Earned',
    description: 'Demonstrated exceptional leadership, discipline, drill precision, and national defense training as Junior Under Officer.',
    accent: 'sage'
  },
  {
    id: 'github-career',
    name: 'Career Essentials in GitHub',
    issuingBody: 'GitHub & LinkedIn Learning',
    badgeText: 'Professional Certificate',
    status: 'Earned',
    description: 'Validated mastery of modern Git workflows, open-source collaboration, pull request reviews, repository governance, and CI/CD foundations.',
    accent: 'charcoal'
  },
  {
    id: 'nptel-industry4',
    name: 'Industry 4.0 Certification',
    issuingBody: 'NPTEL — IIT Certification Program',
    badgeText: 'Completed & Certified',
    status: 'Earned',
    description: 'Rigorous coursework covering Industrial IoT, smart manufacturing systems, cyber-physical integration, big data analytics, and automated decision architectures.',
    accent: 'terracotta'
  }
];

