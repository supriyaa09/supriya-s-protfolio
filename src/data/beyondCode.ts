export interface ScrapbookItem {
  id: string;
  category: 'Leadership' | 'Discipline & Service' | 'Hackathons & Community';
  title: string;
  role: string;
  badge: string;
  description: string;
  bulletPoints: string[];
  editorialStamp: string;
  rotation: string;
  accentColor: string;
}

export const beyondCodeData: ScrapbookItem[] = [
  {
    id: 'acm',
    category: 'Leadership',
    title: 'Association for Computing Machinery (ACM)',
    role: 'Chairperson',
    badge: 'Student Chapter Leadership',
    description: 'Serving as Chairperson of the university ACM student chapter, driving technical excellence, peer mentorship, and large-scale hackathons.',
    bulletPoints: [
      'Led the end-to-end conceptualization and organization of Build-AI-Thon, an AI-focused flagship hackathon.',
      'Coordinated cross-functional student teams across event logistics, technical tracks, speaker outreach, and judging panels.',
      'Fostered an inclusive community of student builders, hosting regular coding workshops and peer technical reviews.'
    ],
    editorialStamp: 'LEADERSHIP ✦ ACM',
    rotation: '-rotate-1',
    accentColor: '#788568'
  },
  {
    id: 'ncc',
    category: 'Discipline & Service',
    title: 'National Cadet Corps (NCC)',
    role: 'Junior Under Officer (JUO)',
    badge: 'Contingent Commander',
    description: 'Served with discipline, dedication, and leadership as Junior Under Officer, commanding drill formations and representing the unit in ceremonial events.',
    bulletPoints: [
      'Led parade contingents during institutional ceremonial parades and prestigious Guard of Honour drills.',
      'Earned the distinguished NCC B Certificate reflecting rigorous physical, tactical, and leadership training.',
      'Instilled teamwork, resilience, time management, and crisis composure in fellow cadets.'
    ],
    editorialStamp: 'HONOUR & DISCIPLINE',
    rotation: 'rotate-1',
    accentColor: '#C8795C'
  },
  {
    id: 'hackathons',
    category: 'Hackathons & Community',
    title: 'Hackathons, Ideathons & Media Initiatives',
    role: 'Active Builder & Collaborative Innovator',
    badge: '10+ Competitions',
    description: 'Active participant in dynamic technical environments, thriving under pressure to design, prototype, and present working solutions in 24–48 hours.',
    bulletPoints: [
      'Competed in 10+ inter-college hackathons and innovation ideathons across AI, web, and social-impact tracks.',
      'Conducted creative media initiatives, combining design sensibility with engineering narratives.',
      'Passionate about collaborative cross-disciplinary team building and rapid problem formulation.'
    ],
    editorialStamp: 'HACKATHON SPIRIT',
    rotation: '-rotate-2',
    accentColor: '#788568'
  }
];

