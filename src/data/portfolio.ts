import { Skill, Education, Experience, Certification, Project } from '../types/portfolio';

export const skills: Skill[] = [
  { name: 'Python', icon: '🐍', description: 'Data Science & ML', category: 'programming' },
  { name: 'Java', icon: '☕', description: 'Backend Development', category: 'programming' },
  { name: 'C', icon: '⚙️', description: 'System Programming', category: 'programming' },
  { name: 'TensorFlow', icon: '🧠', description: 'Deep Learning', category: 'ml' },
  { name: 'Scikit-learn', icon: '📊', description: 'Machine Learning', category: 'ml' },
  { name: 'MySQL', icon: '🗄️', description: 'Relational Database', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', description: 'Advanced Database', category: 'database' },
  { name: 'React.js', icon: '⚛️', description: 'Frontend Framework', category: 'web' },
  { name: 'Spring Boot', icon: '🍃', description: 'Java Framework', category: 'web' },
  { name: 'AWS', icon: '☁️', description: 'Cloud Platform', category: 'cloud' },
  { name: 'Azure', icon: '🌐', description: 'Microsoft Cloud', category: 'cloud' },
  { name: 'Oracle Cloud', icon: '🏛️', description: 'Enterprise Cloud', category: 'cloud' },
  { name: 'Git', icon: '📝', description: 'Version Control', category: 'tools' },
  { name: 'GitHub', icon: '🐙', description: 'Code Repository', category: 'tools' },
  { name: 'VS Code', icon: '💻', description: 'IDE', category: 'tools' },
];

export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'KLEF University',
    period: '2022 - 2026',
    score: '9.2',
    type: 'cgpa'
  },
  {
    degree: 'Intermediate MPC',
    institution: 'Prathibha Junior College',
    period: '2020 - 2022',
    score: '94%',
    type: 'percentage'
  },
  {
    degree: '10th Standard',
    institution: 'KKR Gowtham High School',
    period: '2017 - 2020',
    score: '89%',
    type: 'percentage'
  }
];

export const experience: Experience[] = [
  {
    title: 'Data Science Engineer',
    company: 'Slash Mark IT Startup',
    period: 'Present',
    type: 'virtual',
    achievements: [
      'Developed machine learning models for predictive analytics',
      'Implemented data preprocessing pipelines using Python',
      'Collaborated with cross-functional teams on AI-driven solutions'
    ]
  },
  {
    title: 'Data Engineering Intern',
    company: 'AICTE-Edu Skills',
    period: '2023',
    type: 'virtual',
    achievements: [
      'Built ETL pipelines for large-scale data processing',
      'Optimized database queries for improved performance',
      'Gained hands-on experience with cloud data platforms'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    badge: '☁️'
  },
  {
    name: 'Oracle Certified Professional Cloud Infrastructure Generative AI',
    issuer: 'Oracle',
    badge: '🏛️'
  },
  {
    name: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'Red Hat',
    badge: '🎩'
  },
  {
    name: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    badge: '🚀'
  },
  {
    name: 'Microsoft Certified Azure Data Fundamentals',
    issuer: 'Microsoft',
    badge: '🌐'
  }
];

export const projects: Project[] = [
  {
    title: 'Food Security System',
    description: 'A comprehensive web application built with Spring Boot and React for managing food distribution and security measures.',
    technologies: ['Spring Boot', 'React.js', 'MySQL', 'RESTful APIs'],
    githubUrl: 'https://github.com/mourya-phani/food-security-system',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const swotAnalysis = {
  strengths: [
    'Strong programming foundation in multiple languages',
    'Comprehensive cloud certifications',
    'Practical experience in data science and ML',
    'Full-stack development capabilities'
  ],
  weaknesses: [
    'Limited industry experience',
    'Need to expand project portfolio',
    'Require more exposure to enterprise systems'
  ],
  opportunities: [
    'Growing demand for AI/ML professionals',
    'Expansion in cloud computing roles',
    'Emerging technologies in data science',
    'Remote work opportunities'
  ],
  threats: [
    'Rapidly evolving technology landscape',
    'Increasing competition in tech field',
    'Need for continuous skill updates'
  ]
};