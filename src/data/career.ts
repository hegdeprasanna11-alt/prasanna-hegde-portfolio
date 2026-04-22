export interface CareerPosition {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  achievements: string[];
}

export const careerPositions: CareerPosition[] = [
  {
    id: 'uidai',
    company: 'UIDAI (Unique Identification Authority of India)',
    role: 'Product Lead - Sandbox',
    location: 'Bengaluru, India',
    period: '2025 - Present',
    current: true,
    achievements: [
      '100+ organizations onboarded on Aadhaar Sandbox',
      '250K+ API transactions processed',
      "Pioneered India's first Aadhaar Sandbox (0→1→100 product)",
      'Reduced developer onboarding from 6+ months to ~1 week',
    ],
  },
  {
    id: 'urbotask',
    company: 'Urbotask Technologies Pvt. Ltd',
    role: 'Co-founder & Product Director',
    location: 'Bengaluru, India',
    period: '2020 - 2024',
    achievements: [
      'Scaled marketplace to 5,000+ users in 6 months',
      'Achieved 40% MAU rate and 85% task completion',
      'Karnataka Startup Competition Finalist',
      'Stanford Seed Spark 2024 selection',
      '10% YoY revenue growth',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Ltd',
    role: 'Senior Product Manager / Lead Consultant',
    location: 'Bengaluru, India',
    period: '2010 - 2020',
    achievements: [
      'Generated $2.1M+ revenue from GDPR solutions',
      'Secured $600K in presales',
      'Unified 27+ legacy CRM/CX systems',
      'Led 60-person data team for $1.5M+ program',
      'Delivered projects across BFSI, Telecom, Government sectors',
    ],
  },
  {
    id: 'mphasis',
    company: 'Mphasis (An HP Company)',
    role: 'Associate Business Analyst / Manager',
    location: 'Bengaluru, India',
    period: '2008 - 2010',
    achievements: [
      'Led enterprise CRM implementations',
      'Delivered event management systems',
      'Cross-functional team leadership',
      'Stakeholder management and requirements gathering',
    ],
  },
  {
    id: 'techmahindra',
    company: 'Tech Mahindra',
    role: 'Technical Associate',
    location: 'Bengaluru, India',
    period: '2005 - 2008',
    achievements: [
      'Designed Siebel-based CRM solutions for telecom clients',
      'Automated order management workflows',
      'Reduced operational costs through process optimization',
      'Enhanced customer experience through technical implementations',
    ],
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  focus: string;
}

export const educationList: Education[] = [
  {
    id: 'iim',
    institution: 'IIM Lucknow',
    degree: 'Executive Program in Data Science & AI for Managers',
    period: '2025',
    focus: 'Machine Learning, Data Analytics, AI Product Management',
  },
  {
    id: 'ipl',
    institution: 'Institute of Product Leadership',
    degree: 'Post Graduate Program in Product Management',
    period: '2024',
    focus: 'Product Strategy, Roadmapping, Growth, Analytics',
  },
  {
    id: 'coventry',
    institution: 'Coventry University, United Kingdom',
    degree: 'MBA in Engineering Management',
    period: '2013 - 2015',
    focus: 'Technology Management, Business Strategy, Leadership',
  },
  {
    id: 'vtu',
    institution: 'Visvesvaraya Technological University (VTU)',
    degree: 'Bachelor of Engineering in Electronics & Communication',
    period: '2001 - 2005',
    focus: 'Electronics, Communication Systems, Engineering Fundamentals',
  },
];

export interface Certification {
  id: string;
  name: string;
  provider: string;
  focus: string;
}

export const certifications: Certification[] = [
  {
    id: 'ibm-ai',
    name: 'IBM AI Product Manager',
    provider: 'IBM',
    focus: 'AI/ML product lifecycle, model deployment, ethics',
  },
  {
    id: 'google-pm',
    name: 'Google Project Management Professional',
    provider: 'Google',
    focus: 'Agile, Scrum, project planning, stakeholder management',
  },
  {
    id: 'google-ai',
    name: 'Google AI Essentials',
    provider: 'Google',
    focus: 'AI fundamentals, responsible AI, practical applications',
  },
  {
    id: 'gopractice',
    name: 'GoPractice Generative AI for Product Managers',
    provider: 'GoPractice',
    focus: 'Generative AI, LLMs, prompt engineering, AI features',
  },
];
