export interface Department {
  name: string;
  mission: string;
  vision: string;
  history: string;
  focusAreas: string[];
  achievements: string[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  level: string;
  creditHours: number;
  prerequisites: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  office: string;
  email: string;
  phone: string;
  researchInterests: string[];
  bio?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  category: string;
  important?: boolean;
}
