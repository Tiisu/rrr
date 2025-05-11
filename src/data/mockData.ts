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
  // Level 100 - First Trimester
  {
    id: "cs101",
    code: "CS 101",
    title: "Introduction to Computer Science",
    description: "This course introduces students to the fundamental concepts of computer science, including problem-solving, algorithms, programming basics, and computer systems. Students will learn about the history of computing, binary representation, logic gates, and basic computer architecture. The course also covers ethical considerations in computing and introduces students to various career paths in the field.",
    level: "Level 100",
    trimester: "First",
    creditHours: 3,
    prerequisites: []
  },
  {
    id: "cs103",
    code: "CS 103",
    title: "Discrete Mathematics for Computing",
    description: "Introduction to mathematical concepts fundamental to computer science. Topics include sets, functions, relations, logic, proof techniques, combinatorics, graphs, trees, and Boolean algebra. This course provides the mathematical foundation needed for many advanced computer science courses.",
    level: "Level 100",
    trimester: "First",
    creditHours: 3,
    prerequisites: []
  },
  {
    id: "math101",
    code: "MATH 101",
    title: "Calculus I",
    description: "Introduction to differential and integral calculus. Topics include limits, continuity, derivatives, applications of derivatives, integration, and applications of integrals. This course provides mathematical tools used in computer graphics, machine learning, and algorithm analysis.",
    level: "Level 100",
    trimester: "First",
    creditHours: 3,
    prerequisites: []
  },

  // Level 100 - Second Trimester
  {
    id: "cs102",
    code: "CS 102",
    title: "Programming Fundamentals",
    description: "Introduction to programming using Python. Covers variables, data types, control structures, functions, and basic data structures. Students will develop problem-solving skills through hands-on programming exercises and projects. The course emphasizes good programming practices, debugging techniques, and code documentation.",
    level: "Level 100",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 101"]
  },
  {
    id: "cs104",
    code: "CS 104",
    title: "Computer Organization",
    description: "Introduction to computer organization and architecture. Topics include digital logic, assembly language programming, memory hierarchy, and CPU design. Students will understand how hardware and software interact and how computers execute programs at the hardware level.",
    level: "Level 100",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 101"]
  },
  {
    id: "math102",
    code: "MATH 102",
    title: "Linear Algebra",
    description: "Study of vector spaces, linear transformations, matrices, determinants, eigenvalues, and eigenvectors. Applications to computer science including computer graphics, cryptography, and machine learning are emphasized.",
    level: "Level 100",
    trimester: "Second",
    creditHours: 3,
    prerequisites: []
  },

  // Level 100 - Third Trimester
  {
    id: "cs105",
    code: "CS 105",
    title: "Web Development Fundamentals",
    description: "Introduction to web development technologies including HTML, CSS, and JavaScript. Students will learn to create responsive, interactive web pages and understand client-server architecture. The course covers web standards, accessibility, and basic user experience principles.",
    level: "Level 100",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },
  {
    id: "cs106",
    code: "CS 106",
    title: "Introduction to Data Science",
    description: "Overview of data science concepts, tools, and techniques. Topics include data collection, cleaning, analysis, visualization, and basic statistical methods. Students will use Python libraries such as Pandas, NumPy, and Matplotlib to work with real-world datasets.",
    level: "Level 100",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 102", "MATH 101"]
  },
  {
    id: "comm101",
    code: "COMM 101",
    title: "Communication Skills",
    description: "Development of effective communication skills for academic and professional contexts. Focuses on technical writing, oral presentations, and interpersonal communication relevant to computer science professionals.",
    level: "Level 100",
    trimester: "Third",
    creditHours: 2,
    prerequisites: []
  },

  // Level 200 - First Trimester
  {
    id: "cs201",
    code: "CS 201",
    title: "Data Structures and Algorithms",
    description: "Study of data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Analysis of algorithms and their efficiency. Students will implement various data structures and algorithms in a high-level programming language and analyze their time and space complexity.",
    level: "Level 200",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },
  {
    id: "cs203",
    code: "CS 203",
    title: "Object-Oriented Programming",
    description: "Principles and practices of object-oriented programming using Java. Topics include classes, objects, inheritance, polymorphism, encapsulation, and interfaces. Students will design and implement object-oriented solutions to complex problems.",
    level: "Level 200",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },
  {
    id: "stat201",
    code: "STAT 201",
    title: "Probability and Statistics",
    description: "Introduction to probability theory and statistical methods. Topics include random variables, probability distributions, hypothesis testing, confidence intervals, and regression analysis. Applications to data analysis and machine learning are emphasized.",
    level: "Level 200",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["MATH 101"]
  },

  // Level 200 - Second Trimester
  {
    id: "cs202",
    code: "CS 202",
    title: "Database Management Systems",
    description: "Introduction to database concepts, design, and implementation. Covers relational database model, SQL, normalization, and transaction management. Students will design and implement database solutions for real-world problems and understand the principles of data integrity and security.",
    level: "Level 200",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },
  {
    id: "cs204",
    code: "CS 204",
    title: "Operating Systems",
    description: "Principles and design of operating systems. Topics include process management, memory management, file systems, and security. Students will understand how operating systems manage computer resources and provide services to applications.",
    level: "Level 200",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 104"]
  },
  {
    id: "cs205",
    code: "CS 205",
    title: "Computer Graphics",
    description: "Fundamentals of computer graphics including 2D and 3D rendering, transformations, lighting, and shading. Students will implement graphics algorithms and create interactive visual applications using graphics libraries.",
    level: "Level 200",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 201", "MATH 102"]
  },

  // Level 200 - Third Trimester
  {
    id: "cs206",
    code: "CS 206",
    title: "Mobile Application Development",
    description: "Design and development of mobile applications for Android and iOS platforms. Topics include mobile UI design, data storage, network communication, and deployment. Students will build and deploy mobile applications addressing real-world needs.",
    level: "Level 200",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 203"]
  },
  {
    id: "cs207",
    code: "CS 207",
    title: "Theory of Computation",
    description: "Introduction to formal languages, automata theory, computability, and complexity. Topics include regular expressions, finite automata, context-free grammars, Turing machines, and NP-completeness. This course explores the theoretical foundations and limitations of computing.",
    level: "Level 200",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 103"]
  },
  {
    id: "cs208",
    code: "CS 208",
    title: "Human-Computer Interaction",
    description: "Principles and practices of designing user interfaces. Topics include user-centered design, usability testing, accessibility, and interaction design patterns. Students will design and evaluate interfaces for various applications and user groups.",
    level: "Level 200",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 102"]
  },

  // Level 300 - First Trimester
  {
    id: "cs301",
    code: "CS 301",
    title: "Software Engineering",
    description: "Principles and practices of software engineering, including requirements analysis, design, implementation, testing, and maintenance. Students will work in teams to develop a software project following industry-standard methodologies and tools. The course emphasizes project management, version control, and quality assurance.",
    level: "Level 300",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 201"]
  },
  {
    id: "cs303",
    code: "CS 303",
    title: "Artificial Intelligence",
    description: "Introduction to artificial intelligence concepts, including search algorithms, knowledge representation, machine learning, and natural language processing. Students will implement AI algorithms and understand their applications in various domains.",
    level: "Level 300",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 201", "STAT 201"]
  },
  {
    id: "cs305",
    code: "CS 305",
    title: "Cybersecurity Fundamentals",
    description: "Introduction to computer security principles and practices. Topics include cryptography, authentication, access control, network security, and ethical hacking. Students will learn to identify vulnerabilities and implement security measures to protect systems and data.",
    level: "Level 300",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 204"]
  },

  // Level 300 - Second Trimester
  {
    id: "cs302",
    code: "CS 302",
    title: "Computer Networks",
    description: "Fundamentals of computer networks, including network architectures, protocols, and applications. Topics include OSI and TCP/IP models, routing, switching, and network security. Students will configure and troubleshoot networks and understand how the internet works.",
    level: "Level 300",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 201"]
  },
  {
    id: "cs304",
    code: "CS 304",
    title: "Machine Learning",
    description: "Principles and algorithms for machine learning. Topics include supervised and unsupervised learning, neural networks, decision trees, and evaluation methods. Students will implement machine learning algorithms and apply them to real-world problems.",
    level: "Level 300",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 303", "STAT 201"]
  },
  {
    id: "cs306",
    code: "CS 306",
    title: "Cloud Computing",
    description: "Introduction to cloud computing concepts, architectures, and services. Topics include virtualization, containerization, microservices, and cloud security. Students will deploy applications to cloud platforms and understand the benefits and challenges of cloud-based solutions.",
    level: "Level 300",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 302"]
  },

  // Level 300 - Third Trimester
  {
    id: "cs307",
    code: "CS 307",
    title: "Big Data Analytics",
    description: "Techniques and tools for processing and analyzing large datasets. Topics include distributed computing, data warehousing, and data visualization. Students will use frameworks like Hadoop and Spark to process big data and extract meaningful insights.",
    level: "Level 300",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 202", "CS 303"]
  },
  {
    id: "cs308",
    code: "CS 308",
    title: "Internet of Things",
    description: "Design and implementation of IoT systems. Topics include sensor networks, embedded systems, IoT protocols, and data analytics. Students will build IoT prototypes and understand the challenges of connecting physical devices to the internet.",
    level: "Level 300",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 302"]
  },
  {
    id: "cs309",
    code: "CS 309",
    title: "Research Methods in Computer Science",
    description: "Introduction to research methodologies in computer science. Topics include literature review, research design, data collection and analysis, and academic writing. This course prepares students for their final year research project.",
    level: "Level 300",
    trimester: "Third",
    creditHours: 2,
    prerequisites: []
  },

  // Level 400 - First Trimester
  {
    id: "cs401",
    code: "CS 401",
    title: "Advanced Artificial Intelligence",
    description: "Advanced topics in artificial intelligence including deep learning, reinforcement learning, and computer vision. Students will implement state-of-the-art AI algorithms and understand their theoretical foundations and practical applications in various domains.",
    level: "Level 400",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 303"]
  },
  {
    id: "cs403",
    code: "CS 403",
    title: "Blockchain Technology",
    description: "Principles and applications of blockchain technology. Topics include distributed ledgers, consensus algorithms, smart contracts, and cryptocurrencies. Students will implement blockchain applications and understand the implications for various industries.",
    level: "Level 400",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 302", "CS 305"]
  },
  {
    id: "cs405",
    code: "CS 405",
    title: "Final Year Project I",
    description: "First part of the final year project. Students will identify a research problem, conduct literature review, and develop a project proposal. This course emphasizes research methodology, project planning, and preliminary implementation.",
    level: "Level 400",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 301", "CS 309"]
  },

  // Level 400 - Second Trimester
  {
    id: "cs402",
    code: "CS 402",
    title: "Final Year Project II",
    description: "Continuation and completion of the final year project. Students will implement their proposed solution, evaluate results, and present their findings. This course emphasizes project execution, documentation, and professional presentation skills.",
    level: "Level 400",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 405"]
  },
  {
    id: "cs404",
    code: "CS 404",
    title: "Quantum Computing",
    description: "Introduction to quantum computing concepts and algorithms. Topics include quantum bits, quantum gates, quantum entanglement, and quantum algorithms. Students will understand the potential impact of quantum computing on cryptography and computational problems.",
    level: "Level 400",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 207"]
  },
  {
    id: "cs406",
    code: "CS 406",
    title: "Ethics in Computing",
    description: "Ethical issues in computing including privacy, intellectual property, cybersecurity, AI ethics, and professional responsibility. Students will analyze ethical dilemmas and develop frameworks for ethical decision-making in the technology industry.",
    level: "Level 400",
    trimester: "Second",
    creditHours: 2,
    prerequisites: []
  },

  // Level 400 - Third Trimester
  {
    id: "cs407",
    code: "CS 407",
    title: "IT Project Management",
    description: "Principles and practices of managing IT projects. Topics include project planning, scheduling, budgeting, risk management, and team leadership. Students will learn to use project management tools and methodologies to deliver successful IT projects.",
    level: "Level 400",
    trimester: "Third",
    creditHours: 3,
    prerequisites: ["CS 301"]
  },
  {
    id: "cs408",
    code: "CS 408",
    title: "Entrepreneurship in Technology",
    description: "Fundamentals of technology entrepreneurship including business model development, market analysis, funding strategies, and startup operations. Students will develop a business plan for a technology venture and understand the challenges of bringing innovations to market.",
    level: "Level 400",
    trimester: "Third",
    creditHours: 3,
    prerequisites: []
  },
  {
    id: "cs409",
    code: "CS 409",
    title: "Industry Internship",
    description: "Supervised work experience in the IT industry. Students will apply their knowledge and skills in a professional setting and reflect on their experiences. This course provides practical exposure to the workplace and helps students build professional networks.",
    level: "Level 400",
    trimester: "Third",
    creditHours: 3,
    prerequisites: []
  },

  // Level 500 - First Trimester (Graduate)
  {
    id: "cs501",
    code: "CS 501",
    title: "Advanced Algorithms",
    description: "Advanced study of algorithm design and analysis techniques. Topics include approximation algorithms, randomized algorithms, online algorithms, and computational complexity. Students will analyze and implement advanced algorithms for solving complex computational problems.",
    level: "Level 500",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 201"]
  },
  {
    id: "cs503",
    code: "CS 503",
    title: "Advanced Database Systems",
    description: "Advanced concepts in database management including distributed databases, NoSQL databases, data warehousing, and data mining. Students will design and implement advanced database solutions for big data and real-time applications.",
    level: "Level 500",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 202"]
  },

  // Level 500 - Second Trimester (Graduate)
  {
    id: "cs502",
    code: "CS 502",
    title: "Natural Language Processing",
    description: "Computational approaches to processing and generating human language. Topics include text classification, sentiment analysis, machine translation, and question answering. Students will implement NLP algorithms and understand their applications in various domains.",
    level: "Level 500",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 401"]
  },
  {
    id: "cs504",
    code: "CS 504",
    title: "Advanced Computer Networks",
    description: "Advanced topics in computer networks including software-defined networking, network virtualization, and network security. Students will design and implement advanced networking solutions and understand emerging trends in network technologies.",
    level: "Level 500",
    trimester: "Second",
    creditHours: 3,
    prerequisites: ["CS 302"]
  },

  // Level 600 - First Trimester (Graduate)
  {
    id: "cs601",
    code: "CS 601",
    title: "Research Seminar",
    description: "Advanced research methodologies and current topics in computer science. Students will review and critique research papers, develop research proposals, and present their findings. This course prepares students for thesis research and academic publishing.",
    level: "Level 600",
    trimester: "First",
    creditHours: 3,
    prerequisites: []
  },
  {
    id: "cs603",
    code: "CS 603",
    title: "Advanced Machine Learning",
    description: "Cutting-edge machine learning techniques including deep reinforcement learning, generative adversarial networks, and transfer learning. Students will implement and evaluate state-of-the-art machine learning models for complex tasks.",
    level: "Level 600",
    trimester: "First",
    creditHours: 3,
    prerequisites: ["CS 401"]
  },

  // Level 600 - Second Trimester (Graduate)
  {
    id: "cs602",
    code: "CS 602",
    title: "Master's Thesis",
    description: "Independent research under faculty supervision leading to a master's thesis. Students will conduct original research, analyze results, and defend their thesis. This course represents the culmination of the master's program.",
    level: "Level 600",
    trimester: "Second",
    creditHours: 6,
    prerequisites: ["CS 601"]
  },
  {
    id: "cs604",
    code: "CS 604",
    title: "Advanced Topics in Computer Science",
    description: "Exploration of emerging and specialized topics in computer science. The specific content varies based on current developments and faculty expertise. This course allows students to stay current with rapidly evolving areas of computer science.",
    level: "Level 600",
    trimester: "Second",
    creditHours: 3,
    prerequisites: []
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
  // Level 100 - First Trimester
  {
    id: "tt100-1",
    name: "Level 100 First Trimester",
    level: "Level 100",
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
        courseCode: "CS 103",
        courseTitle: "Discrete Mathematics for Computing",
        room: "LT3",
        lecturer: "Dr. Kwame Boateng"
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
        courseCode: "CS 103",
        courseTitle: "Discrete Mathematics for Computing",
        room: "LT3",
        lecturer: "Dr. Kwame Boateng"
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

  // Level 100 - Second Trimester
  {
    id: "tt100-2",
    name: "Level 100 Second Trimester",
    level: "Level 100",
    academicYear: "2023/2024",
    semester: "Second",
    slots: [
      {
        day: "Monday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 102",
        courseTitle: "Programming Fundamentals",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Monday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "MATH 102",
        courseTitle: "Linear Algebra",
        room: "LT2",
        lecturer: "Dr. Abena Darkwah"
      },
      {
        day: "Tuesday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 104",
        courseTitle: "Computer Organization",
        room: "LT3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Wednesday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 102",
        courseTitle: "Programming Fundamentals",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Thursday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 104",
        courseTitle: "Computer Organization",
        room: "LT3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Friday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "MATH 102",
        courseTitle: "Linear Algebra",
        room: "LT2",
        lecturer: "Dr. Abena Darkwah"
      }
    ]
  },

  // Level 100 - Third Trimester
  {
    id: "tt100-3",
    name: "Level 100 Third Trimester",
    level: "Level 100",
    academicYear: "2023/2024",
    semester: "Third",
    slots: [
      {
        day: "Monday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 105",
        courseTitle: "Web Development Fundamentals",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Monday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "COMM 101",
        courseTitle: "Communication Skills",
        room: "LT2",
        lecturer: "Dr. Abena Darkwah"
      },
      {
        day: "Tuesday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 106",
        courseTitle: "Introduction to Data Science",
        room: "CS Lab 2",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Wednesday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 105",
        courseTitle: "Web Development Fundamentals",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Thursday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 106",
        courseTitle: "Introduction to Data Science",
        room: "CS Lab 2",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Friday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "COMM 101",
        courseTitle: "Communication Skills",
        room: "LT2",
        lecturer: "Dr. Abena Darkwah"
      }
    ]
  },

  // Level 200 - First Trimester
  {
    id: "tt200-1",
    name: "Level 200 First Trimester",
    level: "Level 200",
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
        courseCode: "CS 203",
        courseTitle: "Object-Oriented Programming",
        room: "CS Lab 2",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "STAT 201",
        courseTitle: "Probability and Statistics",
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
        courseCode: "CS 203",
        courseTitle: "Object-Oriented Programming",
        room: "CS Lab 2",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "STAT 201",
        courseTitle: "Probability and Statistics",
        room: "LT4",
        lecturer: "Dr. Kwame Boateng"
      }
    ]
  },

  // Level 200 - Second Trimester
  {
    id: "tt200-2",
    name: "Level 200 Second Trimester",
    level: "Level 200",
    academicYear: "2023/2024",
    semester: "Second",
    slots: [
      {
        day: "Monday",
        startTime: "08:00",
        endTime: "10:00",
        courseCode: "CS 202",
        courseTitle: "Database Management Systems",
        room: "LT3",
        lecturer: "Mrs. Abena Darkwah"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 204",
        courseTitle: "Operating Systems",
        room: "CS Lab 2",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 205",
        courseTitle: "Computer Graphics",
        room: "CS Lab 3",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 202",
        courseTitle: "Database Management Systems",
        room: "CS Lab 2",
        lecturer: "Mrs. Abena Darkwah"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 204",
        courseTitle: "Operating Systems",
        room: "LT3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 205",
        courseTitle: "Computer Graphics",
        room: "CS Lab 3",
        lecturer: "Dr. Ama Owusu"
      }
    ]
  },

  // Level 200 - Third Trimester
  {
    id: "tt200-3",
    name: "Level 200 Third Trimester",
    level: "Level 200",
    academicYear: "2023/2024",
    semester: "Third",
    slots: [
      {
        day: "Monday",
        startTime: "08:00",
        endTime: "10:00",
        courseCode: "CS 206",
        courseTitle: "Mobile Application Development",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 207",
        courseTitle: "Theory of Computation",
        room: "LT3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 208",
        courseTitle: "Human-Computer Interaction",
        room: "LT4",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 206",
        courseTitle: "Mobile Application Development",
        room: "CS Lab 1",
        lecturer: "Mr. Emmanuel Tetteh"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 207",
        courseTitle: "Theory of Computation",
        room: "LT3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 208",
        courseTitle: "Human-Computer Interaction",
        room: "LT4",
        lecturer: "Dr. Ama Owusu"
      }
    ]
  },

  // Level 300 - First Trimester
  {
    id: "tt300-1",
    name: "Level 300 First Trimester",
    level: "Level 300",
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
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 303",
        courseTitle: "Artificial Intelligence",
        room: "CS Lab 3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 305",
        courseTitle: "Cybersecurity Fundamentals",
        room: "LT4",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 301",
        courseTitle: "Software Engineering",
        room: "CS Lab 3",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 303",
        courseTitle: "Artificial Intelligence",
        room: "CS Lab 3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 305",
        courseTitle: "Cybersecurity Fundamentals",
        room: "LT4",
        lecturer: "Dr. Kwame Boateng"
      }
    ]
  },

  // Level 300 - Second Trimester
  {
    id: "tt300-2",
    name: "Level 300 Second Trimester",
    level: "Level 300",
    academicYear: "2023/2024",
    semester: "Second",
    slots: [
      {
        day: "Monday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 302",
        courseTitle: "Computer Networks",
        room: "LT5",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 304",
        courseTitle: "Machine Learning",
        room: "CS Lab 3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 306",
        courseTitle: "Cloud Computing",
        room: "LT4",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 302",
        courseTitle: "Computer Networks",
        room: "CS Lab 3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 304",
        courseTitle: "Machine Learning",
        room: "CS Lab 3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 306",
        courseTitle: "Cloud Computing",
        room: "LT4",
        lecturer: "Dr. Ama Owusu"
      }
    ]
  },

  // Level 300 - Third Trimester
  {
    id: "tt300-3",
    name: "Level 300 Third Trimester",
    level: "Level 300",
    academicYear: "2023/2024",
    semester: "Third",
    slots: [
      {
        day: "Monday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 307",
        courseTitle: "Big Data Analytics",
        room: "CS Lab 3",
        lecturer: "Mrs. Abena Darkwah"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 308",
        courseTitle: "Internet of Things",
        room: "CS Lab 2",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 309",
        courseTitle: "Research Methods in Computer Science",
        room: "LT4",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 307",
        courseTitle: "Big Data Analytics",
        room: "CS Lab 3",
        lecturer: "Mrs. Abena Darkwah"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 308",
        courseTitle: "Internet of Things",
        room: "CS Lab 2",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 309",
        courseTitle: "Research Methods in Computer Science",
        room: "LT4",
        lecturer: "Dr. Kofi Mensah"
      }
    ]
  },

  // Level 400 - First Trimester
  {
    id: "tt400-1",
    name: "Level 400 First Trimester",
    level: "Level 400",
    academicYear: "2023/2024",
    semester: "First",
    slots: [
      {
        day: "Monday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 401",
        courseTitle: "Advanced Artificial Intelligence",
        room: "LT5",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 403",
        courseTitle: "Blockchain Technology",
        room: "CS Lab 3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 405",
        courseTitle: "Final Year Project I",
        room: "LT4",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 401",
        courseTitle: "Advanced Artificial Intelligence",
        room: "CS Lab 3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 403",
        courseTitle: "Blockchain Technology",
        room: "CS Lab 3",
        lecturer: "Dr. Kwame Boateng"
      }
    ]
  },

  // Level 400 - Second Trimester
  {
    id: "tt400-2",
    name: "Level 400 Second Trimester",
    level: "Level 400",
    academicYear: "2023/2024",
    semester: "Second",
    slots: [
      {
        day: "Monday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 402",
        courseTitle: "Final Year Project II",
        room: "LT5",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 404",
        courseTitle: "Quantum Computing",
        room: "CS Lab 3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 406",
        courseTitle: "Ethics in Computing",
        room: "LT4",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 402",
        courseTitle: "Final Year Project II",
        room: "CS Lab 3",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 404",
        courseTitle: "Quantum Computing",
        room: "CS Lab 3",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Friday",
        startTime: "11:00",
        endTime: "13:00",
        courseCode: "CS 406",
        courseTitle: "Ethics in Computing",
        room: "LT4",
        lecturer: "Dr. Kofi Mensah"
      }
    ]
  },

  // Level 400 - Third Trimester
  {
    id: "tt400-3",
    name: "Level 400 Third Trimester",
    level: "Level 400",
    academicYear: "2023/2024",
    semester: "Third",
    slots: [
      {
        day: "Monday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 407",
        courseTitle: "IT Project Management",
        room: "LT5",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Monday",
        startTime: "14:00",
        endTime: "16:00",
        courseCode: "CS 408",
        courseTitle: "Entrepreneurship in Technology",
        room: "LT3",
        lecturer: "Dr. Kofi Mensah"
      },
      {
        day: "Tuesday",
        startTime: "10:00",
        endTime: "12:00",
        courseCode: "CS 409",
        courseTitle: "Industry Internship",
        room: "LT4",
        lecturer: "Dr. Kwame Boateng"
      },
      {
        day: "Wednesday",
        startTime: "13:00",
        endTime: "15:00",
        courseCode: "CS 407",
        courseTitle: "IT Project Management",
        room: "LT5",
        lecturer: "Dr. Ama Owusu"
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "11:00",
        courseCode: "CS 408",
        courseTitle: "Entrepreneurship in Technology",
        room: "LT3",
        lecturer: "Dr. Kofi Mensah"
      }
    ]
  }
];
