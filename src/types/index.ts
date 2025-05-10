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

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  organizer: string;
  registrationRequired: boolean;
  registrationLink?: string;
}

export type WeekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

export interface TimeSlot {
  day: WeekDay;
  startTime: string; // e.g., "09:00"
  endTime: string;   // e.g., "11:00"
  courseCode: string;
  courseTitle: string;
  room: string;
  lecturer: string;
}

export interface Timetable {
  id: string;
  name: string; // e.g., "Level 100 First Semester"
  academicYear: string;
  semester: 'First' | 'Second';
  slots: TimeSlot[];
}

export interface FeedbackSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  status: 'Pending' | 'Reviewed' | 'Responded';
}
