export interface ExperienceItem {
  id: string;
  role: string;
  organizations: {
    name: string;
    tag: string;
  }[];
  period: string;
  type: 'Current Internship' | 'Previous Internship';
  isCurrent: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  keyImpact: string[];
  tagColor: 'sage' | 'terracotta';
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'studentkare',
    role: 'Digital Marketing & Backend Developer',
    organizations: [
      { name: 'StudentKare (SK)', tag: 'Student & Healthcare Platform' },
      { name: 'Student Alumni Hyderabad', tag: 'Alumni Network' }
    ],
    period: '2026 – Present',
    type: 'Current Internship',
    isCurrent: true,
    location: 'Hyderabad, India',
    summary: 'Working across digital marketing, content creation, and backend development, combining creative communication with technical implementation to support student-focused digital platforms.',
    responsibilities: [
      'Create social media content, reel scripts, captions, and articles to support BBA promotion and student engagement.',
      'Contribute to content planning and digital campaigns across LinkedIn and Instagram.',
      'Contribute to backend development tasks, database operations, and digital product functionality.',
      'Collaborate across marketing and development teams to unite technical execution with brand communication.'
    ],
    keyImpact: [
      'Dual-domain synergy uniting technical backend support with active student community engagement.',
      'Established cohesive creative assets and communication workflows for both partner organizations.'
    ],
    tagColor: 'sage'
  },
  {
    id: 'south-central-railway',
    role: 'Technology Intern — Billing Department',
    organizations: [
      { name: 'Indian Railways', tag: 'South Central Railway Headquarters' }
    ],
    period: 'Jul 2026',
    type: 'Previous Internship',
    isCurrent: false,
    location: 'Secunderabad / Hyderabad, India',
    summary: 'Developed a billing automation application used by 50–100 users daily, streamlining departmental processes and reducing manual work.',
    responsibilities: [
      'Developed a billing automation application used by 50–100 users daily, streamlining departmental processes and reducing manual work.',
      'Worked with the billing team to understand requirements and implement a digital workflow solution.',
      'Helped significantly reduce manual processing delays and departmental turnaround times.'
    ],
    keyImpact: [
      'Directly served 50–100 daily administrative staff with automated billing routines.',
      'Transformed error-prone manual calculations into an efficient, structured digital process.'
    ],
    tagColor: 'terracotta'
  }
];
