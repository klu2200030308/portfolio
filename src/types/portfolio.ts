export interface Skill {
  name: string;
  icon: string;
  description?: string;
  category: 'programming' | 'ml' | 'database' | 'web' | 'cloud' | 'tools';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  type: 'cgpa' | 'percentage';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  type: 'virtual' | 'onsite';
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  badge?: string;
  verificationUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}