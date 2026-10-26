// ============================================================================
// All of Kartik's portfolio content lives in this one file.
// Edit the values below — you don't need to touch any component to update
// text, links, or projects. Anything marked "PLACEHOLDER" wasn't in the
// resume, so update it with your real info.
// ============================================================================

export const PROFILE = {
  name: "Kartik",
  initial: "K",
  role: "Aspiring Software Engineer",
  location: "Bhiwani, India", // PLACEHOLDER
  email: "kartikbaweja16@gmail.com",
  phone: "+91 8595606102",
  phoneDisplay: "+91 85956 06102",
  resumeFile: "/assets/Kartik_Resume.pdf",
};

export const ROLES = [
  "Full-Stack Developer",
  "Aspiring Software Engineer",
  "DSA Enthusiast",
  "MERN Stack Developer",
];

export const SOCIALS = {
  github: "https://github.com/Bawejakartik", // PLACEHOLDER: add your GitHub URL
  linkedin: "https://www.linkedin.com/in/kartik-baweja-4331752b3/", // PLACEHOLDER: add your LinkedIn URL
  leetcode: "https://leetcode.com/u/kartikbaweja/", // PLACEHOLDER: add your LeetCode URL
  email: `mailto:${PROFILE.email}`,
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const ABOUT = {
  paragraphs: [
    "I'm pursuing my B.Tech in Computer Science and spend my time strengthening algorithmic thinking on LeetCode, while building full-stack applications with React.js, Node.js, Express.js and MongoDB.",
    "My focus is on writing clean, maintainable code, understanding systems end-to-end (DBMS, REST APIs, authentication) and shipping things that work. I'm actively looking for Software Engineering roles that offer real ownership, mentorship and room to keep learning.",
  ],
  checklist: [
    "Pursuing B.Tech in Computer Science",
    "Full-stack development with the MERN stack",
    "Regular problem-solving practice on LeetCode",
    "Exploring AI-driven applications",
  ],
  cards: [
    { label: "Location", value: PROFILE.location },
    { label: "Education", value: "B.Tech (2023–2027)" },
    { label: "CGPA", value: "8.5 / 10" },
    { label: "Specialization", value: "Full-Stack MERN" },
    { label: "Career Goal", value: "Software Engineer" },
  ],
};

export const STATS = [
  { label: "Projects Built", value: 4, suffix: "+" },
  { label: "Months of Internship", value: 6, suffix: "" },
  { label: "REST APIs Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

export const EDUCATION = {
  degree: "Bachelor of Technology — Computer Science",
  dates: "Oct 2023 – June 2027",
  institution: "The Technological Institute of Textile & Science, Bhiwani, Haryana",
  cgpa: "8.5 / 10",
  status: "Currently Pursuing",
};

export const EXPERIENCE = {
  role: "Full Stack Developer Intern — ArogyaPandit",
  dates: "July 2025 – Dec 2025",
  summary: "Backend & API development for Gogy, a school-management & education platform",
  bullets: [
    "Built and maintained backend services for Gogy, developing 12+ REST APIs using Node.js, Express.js and MongoDB.",
    "Integrated secure authentication and Google OAuth using Passport.js, streamlining login for 500+ active users and eliminating manual credential handling.",
    "Optimized REST API response times by ~25% through query optimization and MongoDB indexing, improving overall application reliability.",
    "Collaborated with a 4-member engineering team to design and deliver database schemas and API endpoints across 3 core modules — student records, attendance and admin dashboard.",
  ],
};

export const SKILLS = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Passport.js", "WebSockets"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "Mongoose", "OpenCV", "MediaPipe"] },
  { category: "Concepts", items: ["OOP", "DBMS", "Data Structures & Algorithms", "System Design"] },
];

export const PROJECTS = [
  {
    title: "Genuine Chat App",
    tag: "Full Stack",
    description:
      "A full-stack real-time chat application with secure authentication and instant bidirectional messaging via Socket.IO, containerized with Docker for streamlined deployment.",
    tech: ["React", "Express", "MongoDB", "Socket.IO", "Docker"],
    links: [{ label: "Code", href: "https://github.com/Bawejakartik/chatbot" }], // PLACEHOLDER
  },
  {
    title: "DriverGuardAI",
    tag: "AI Project",
    description:
      "A driver drowsiness detection system using OpenCV and MediaPipe for real-time face and eye tracking, with a Python detection service connected to a React frontend and live alert/logging functionality.",
    tech: ["Python", "OpenCV", "MediaPipe", "React", "Express", "MongoDB"],
    links: [{ label: "Code", href: "https://github.com/Bawejakartik/DriverGuardAI" }], // PLACEHOLDER
  },
  {
    title: "User Analytics Dashboard",
    tag: "Full Stack",
    description:
      "A real-time analytics platform tracking user events, page views, sessions and click interactions, with a custom event-tracking pipeline and a responsive reporting dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: [
      { label: "GitHub", href: "https://github.com/Bawejakartik/User_Analytics" }, // PLACEHOLDER
      { label: "Dashboard", href: "https://user-analytics-eight.vercel.app/" }, // PLACEHOLDER
      { label: "Event Demo", href: "https://user-analytics-1-vts3.onrender.com/demo]" }, // PLACEHOLDER
    ],
  },
  {
    title: "Invoice Generator",
    tag: "Full Stack",
    description:
      "A full-stack invoice management system with JWT authentication, client management and PDF invoice generation, including email/OTP workflows and environment-based deployment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "PDFKit"],
    links: [
      { label: "GitHub", href: "https://github.com/Bawejakartik/Invoice_Generator" }, // PLACEHOLDER
      { label: "Live", href: "https://invoice-generator-five-coral.vercel.app" }, // PLACEHOLDER
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", title: "College Hackathon Finalist", date: "Aug 2025" },
  { icon: "💡", title: "Smart India Hackathon (SIH)", date: "2024 & 2025 — Participant" },
  {
    icon: "🎓",
    title: "Deloitte Technology Job Simulation",
    date: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_gYNaYrocASq6sTMfB_1750702561646_completion_certificate.pdf", // PLACEHOLDER
  },
  {
    icon: "🛒",
    title: "Level 1: E-Commerce",
    date: "Unstop",
    link: "https://unstop.com/certificate-preview/eb893762-f4b1-4ef4-9e1a-0ec14c29239d", // PLACEHOLDER
  },
  {
    icon: "💻",
    title: "Complete Web Development Course (100 hrs)",
    date: "Udemy",
    link: "https://www.udemy.com/certificate/UC-0243157b-e7fa-4fa6-b00b-4e6409b7f5a7/", // PLACEHOLDER
  },
];
