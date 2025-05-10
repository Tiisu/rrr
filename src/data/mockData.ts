import { Department, Course, FacultyMember, Announcement, Event, Timetable, TimeSlot } from '../types';

export const departmentData: Department = {
  name: "Computer Science Department",
  mission: "To provide world-class education in computer science, producing innovative graduates equipped to solve real-world problems through technology.",
  vision: "To be a leading center of excellence in computer science education and research in West Africa.",
  history: "The Computer Science Department at the University for Development Studies was established in 2005 with the aim of providing quality education in computing and information technology. Starting with just a handful of students, the department has grown significantly over the years.",
  focusAreas: [
    "Artificial Intelligence and Machine Learning",
    "Software Engineering",
    "Computer Networks and Security",
    "Database Management Systems",
    "Mobile and Web Application Development"
  ],
  achievements: [
    "Accredited by the National Accreditation Board in 2007",
    "Partnership with Microsoft for student training and internships",
    "Ranked among top 10 CS departments in West Africa",
    "Established cutting-edge AI research laboratory in 2019"
  ]
};

export const coursesData: Course[] = [
  {
    id: "cs101",
    code: "CS 101",
    title: "Introduction to Computer Science",
    description: "This course introduces students to the fundamental concepts of computer science, including problem-solving, algorithms, programming basics, and computer systems.",
    level: "Level 100",
    creditHours: 3,
    prerequisites: []
  },
  {
    id: "cs102",
    code: "CS 102",
    title: "Programming Fundamentals",
    description: "Introduction to programming using Python. Covers variables, data types, control structures, functions, and basic data structures.",
    level: "Level 100",
    creditHours: 3,
    prerequisites: ["CS 101"]
  },
  {
    id: "cs201",
    code: "CS 201",
    title: "Data Structures and Algorithms",
    description: "Study of data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Analysis of algorithms and their efficiency.",
    level: "Level 200",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },
  {
    id: "cs202",
    code: "CS 202",
    title: "Database Management Systems",
    description: "Introduction to database concepts, design, and implementation. Covers relational database model, SQL, normalization, and transaction management.",
    level: "Level 200",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },
  {
    id: "cs301",
    code: "CS 301",
    title: "Software Engineering",
    description: "Principles and practices of software engineering, including requirements analysis, design, implementation, testing, and maintenance.",
    level: "Level 300",
    creditHours: 3,
    prerequisites: ["CS 201"]
  },
  {
    id: "cs302",
    code: "CS 302",
    title: "Computer Networks",
    description: "Fundamentals of computer networks, including network architectures, protocols, and applications.",
    level: "Level 300",
    creditHours: 3,
    prerequisites: ["CS 201"]
  },
  {
    id: "cs401",
    code: "CS 401",
    title: "Artificial Intelligence",
    description: "Introduction to artificial intelligence concepts, including search algorithms, knowledge representation, machine learning, and natural language processing.",
    level: "Level 400",
    creditHours: 3,
    prerequisites: ["CS 301"]
  },
  {
    id: "cs402",
    code: "CS 402",
    title: "Final Year Project",
    description: "Independent research and development project under faculty supervision.",
    level: "Level 400",
    creditHours: 6,
    prerequisites: ["CS 301"]
  },
  {
    id: "mcs501",
    code: "CSC 501",
    title: "Advanced Algorithms",
    description: "Advanced study of algorithm design and analysis techniques.",
    level: "Level 500",
    creditHours: 3,
    prerequisites: ["CS 401"]
  }
];

export const facultyData: FacultyMember[] = [
  {
    id: "fac1",
    name: "Dr. Kofi Mensah",
    title: "Department Chair & Associate Professor",
    photoUrl: "https://via.placeholder.com/150",
    office: "CS Building, Room 101",
    email: "kofi.mensah@uds.edu.gh",
    phone: "+233 20 123 4567",
    researchInterests: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
    bio: "Dr. Mensah has over 15 years of experience in AI research and has published numerous papers in top-tier journals."
  },
  {
    id: "fac2",
    name: "Dr. Ama Owusu",
    title: "Senior Lecturer",
    photoUrl: "https://via.placeholder.com/150",
    office: "CS Building, Room 203",
    email: "ama.owusu@uds.edu.gh",
    phone: "+233 24 987 6543",
    researchInterests: ["Software Engineering", "Human-Computer Interaction", "Mobile Computing"],
    bio: "Dr. Owusu specializes in software engineering and has industry experience with major tech companies."
  },
  {
    id: "fac3",
    name: "Dr. Kwame Boateng",
    title: "Assistant Professor",
    photoUrl: "https://via.placeholder.com/150",
    office: "CS Building, Room 105",
    email: "kwame.boateng@uds.edu.gh",
    phone: "+233 26 555 7890",
    researchInterests: ["Computer Security", "Cryptography", "Network Security"]
  },
  {
    id: "fac4",
    name: "Mrs. Abena Darkwah",
    title: "Lecturer",
    photoUrl: "https://via.placeholder.com/150",
    office: "CS Building, Room 202",
    email: "abena.darkwah@uds.edu.gh",
    phone: "+233 27 333 2211",
    researchInterests: ["Database Systems", "Big Data Analytics", "Data Mining"]
  },
  {
    id: "fac5",
    name: "Mr. Emmanuel Tetteh",
    title: "Teaching Assistant",
    photoUrl: "https://via.placeholder.com/150",
    office: "CS Building, Room 304",
    email: "emmanuel.tetteh@uds.edu.gh",
    phone: "+233 20 111 2233",
    researchInterests: ["Web Development", "Mobile App Development", "UI/UX Design"]
  }
];

export const announcementsData: Announcement[] = [
  {
    id: "ann1",
    title: "CS Department Orientation for New Students",
    content: "All Level 100 Computer Science students are invited to attend the department orientation session on Friday, September 2, 2023, at 10:00 AM in the CS Auditorium.",
    timestamp: new Date(2023, 8, 28), // September 28, 2023
    category: "Event",
    important: true
  },
  {
    id: "ann2",
    title: "Change in CS 301 Schedule",
    content: "Please note that CS 301 classes will now be held on Tuesdays and Thursdays from 2:00 PM to 4:00 PM in Room CS-203, effective immediately.",
    timestamp: new Date(2023, 8, 25), // September 25, 2023
    category: "Schedule"
  },
  {
    id: "ann3",
    title: "Industry Talk: Google Engineer Visit",
    content: "We are pleased to announce that a Senior Software Engineer from Google will be giving a talk on 'Career Paths in Tech' on October 5, 2023, at 11:00 AM in the Main Auditorium.",
    timestamp: new Date(2023, 8, 20), // September 20, 2023
    category: "Event"
  },
  {
    id: "ann4",
    title: "Registration for Final Year Projects",
    content: "All Level 400 students must register their final year project topics by October 10, 2023. Please submit your proposals to your academic advisors.",
    timestamp: new Date(2023, 8, 15), // September 15, 2023
    category: "Academic",
    important: true
  },
  {
    id: "ann5",
    title: "CS Department Wins National Innovation Award",
    content: "We are proud to announce that our department has won the National Innovation Award for the project 'AI for Agricultural Optimization' led by Dr. Kofi Mensah and a team of final year students.",
    timestamp: new Date(2023, 8, 10), // September 10, 2023
    category: "Achievement"
  }
];

export const eventsData: Event[] = [
  {
    id: "evt1",
    title: "Annual CS Department Hackathon",
    description: "Join us for a 24-hour coding challenge to solve real-world problems. Teams of up to 4 students will compete for prizes and recognition. Food and refreshments will be provided. Bring your laptop and your creativity!",
    startDate: new Date(2023, 10, 15, 9, 0), // Nov 15, 2023, 9:00 AM
    endDate: new Date(2023, 10, 16, 9, 0),   // Nov 16, 2023, 9:00 AM
    location: "CS Building, Main Lab",
    organizer: "CS Student Association",
    registrationRequired: true,
    registrationLink: "https://uds-cs-hackathon.com"
  },
  {
    id: "evt2",
    title: "Workshop: Introduction to Machine Learning",
    description: "This hands-on workshop will introduce participants to the basics of machine learning using Python and scikit-learn. No prior experience with machine learning is required, but basic Python knowledge is recommended.",
    startDate: new Date(2023, 9, 20, 14, 0), // Oct 20, 2023, 2:00 PM
    endDate: new Date(2023, 9, 20, 17, 0),   // Oct 20, 2023, 5:00 PM
    location: "CS Building, Room 105",
    organizer: "Dr. Kofi Mensah",
    registrationRequired: true
  },
  {
    id: "evt3",
    title: "CS Department End of Year Celebration",
    description: "Join us to celebrate the achievements of the CS Department this year. There will be presentations, awards, and refreshments. All students, faculty, and staff are welcome to attend.",
    startDate: new Date(2023, 11, 10, 16, 0), // Dec 10, 2023, 4:00 PM
    endDate: new Date(2023, 11, 10, 19, 0),   // Dec 10, 2023, 7:00 PM
    location: "University Main Hall",
    organizer: "CS Department",
    registrationRequired: false
  },
  {
    id: "evt4",
    title: "Guest Lecture: Cybersecurity in the Digital Age",
    description: "A renowned cybersecurity expert will discuss current trends and challenges in the field of cybersecurity. Learn about career opportunities and the skills needed to succeed in this rapidly growing field.",
    startDate: new Date(2023, 9, 5, 11, 0), // Oct 5, 2023, 11:00 AM
    endDate: new Date(2023, 9, 5, 13, 0),   // Oct 5, 2023, 1:00 PM
    location: "CS Auditorium",
    organizer: "Dr. Kwame Boateng",
    registrationRequired: false
  },
  {
    id: "evt5",
    title: "Career Fair: Tech Companies Recruitment",
    description: "Representatives from leading tech companies will be on campus to discuss job and internship opportunities. Bring your resume and be prepared for on-the-spot interviews. Professional attire is recommended.",
    startDate: new Date(2023, 10, 8, 9, 0),  // Nov 8, 2023, 9:00 AM
    endDate: new Date(2023, 10, 8, 16, 0),   // Nov 8, 2023, 4:00 PM
    location: "University Career Center",
    organizer: "Career Services & CS Department",
    registrationRequired: true,
    registrationLink: "https://uds-career-fair.com"
  }
];

export const timetablesData: Timetable[] = [
  {
    id: "tt1",
    name: "Level 100 First Semester",
    academicYear: "2023/2024",
    semester: "First",
    slots: [
      {
        day: "Monday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 101",
        courseTitle: "Introduction to Computer Science",
        room: "LT1",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Monday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "MATH 101",
        courseTitle: "Calculus I",
        room: "LT2",
        lecturer: "Dr. Abena Darkwah"
      },
      {
        day: "Tuesday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 102",
        courseTitle: "Programming Fundamentals",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Wednesday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 101",
        courseTitle: "Introduction to Computer Science",
        room: "LT1",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Thursday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 102",
        courseTitle: "Programming Fundamentals",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Friday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "MATH 101",
        courseTitle: "Calculus I",
        room: "LT2",
        lecturer: "Dr. Abena Darkwah"
      }
    ]
  },
  {
    id: "tt2",
    name: "Level 200 First Semester",
    academicYear: "2023/2024",
    semester: "First",
    slots: [
      {
        day: "Monday",
        startTime: "08:00",
        endTime: "10:00",
        courseCode: "CS 201",
        courseTitle: "Data Structures and Algorithms",
        room: "LT3",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 202",
        courseTitle: "Database Management Systems",
        room: "CS Lab 2",
        lecturer: "Mrs. Abena Darkwah"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "MATH 201",
        courseTitle: "Discrete Mathematics",
        room: "LT4",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 201",
        courseTitle: "Data Structures and Algorithms",
        room: "CS Lab 2",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 202",
        courseTitle: "Database Management Systems",
        room: "LT3",
        lecturer: "Mrs. Abena Darkwah"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "MATH 201",
        courseTitle: "Discrete Mathematics",
        room: "LT4",
        lecturer: "Dr. Kwame Boateng"
      }
    ]
  },
  {
    id: "tt3",
    name: "Level 300 First Semester",
    academicYear: "2023/2024",
    semester: "First",
    slots: [
      {
        day: "Monday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 301",
        courseTitle: "Software Engineering",
        room: "LT5",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Tuesday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 302",
        courseTitle: "Computer Networks",
        room: "CS Lab 3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Wednesday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 303",
        courseTitle: "Operating Systems",
        room: "LT5",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Thursday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 301",
        courseTitle: "Software Engineering",
        room: "CS Lab 3",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Thursday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 302",
        courseTitle: "Computer Networks",
        room: "LT5",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Friday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 303",
        courseTitle: "Operating Systems",
        room: "CS Lab 3",
        lecturer: "Dr. Kofi Mensah"
      }
    ]
  }
];
