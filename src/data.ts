export type Role = {
  title: string
  company: string
  technologies: string[]
  description: string
  highlights?: string[]
  startDate: string
  endDate: string
}

export const roles:Role[] = [
  {
    title: "Frontend Developer",
    company: "Johnson & Johnson",
    technologies: ["React", "Node.js", "REST"],
    description: "Data management web application for internal operations.",
    highlights: ["Improved dashboard functionality and UI", "Implemented user reassignment functionality", "Implemented role-based user actions (add, update, delete) with duplicate request prevention", "Various UI and functionality improvements across the application"],
    startDate: "May 2025",
    endDate: "Dec 2025"
  },
  {
    title: "Frontend & Mobile Developer",
    company: "Sensidev",
    technologies: ["React", "React Native", "TypeScript"],
    description: "Mobile app for truck drivers and web platform for admin operations.",
    highlights: ["Developed mobile app for truck drivers (React Native)", "Built web interface for administrators (React)", "Implemented status update flows between mobile and web apps"],
    startDate: "Jan 2024",
    endDate: "Apr 2025"
  },
  {
    title: "Frontend Developer",
    company: "Ledidi",
    technologies: ["React", "Typescript", "Redux"],
    description: "Form builder and project management web app for medical professionals.",
    highlights: ["Implemented new variable types for the drag-and-drop form builder", "Worked on form history functionality (versioning and rollback)", "Fixed bugs across the application", "Performed code reviews"],
    startDate: "Nov 2022",
    endDate: "Dec 2023"
  },
  {
    title: "Junior Software Engineer",
    company: "Nextgen",
    technologies: ["Java", "JavaScript", "Linux"],
    description: "Cybersecurity platform for log analysis and threat detection.",
    highlights: ["Built JavaScript log parsing pipelines to transform raw logs into structured data", "Wrote unit tests for Java services", "Deployed builds on Debian and Windows VMs"],
    startDate: "May 2021",
    endDate: "Apr 2022"
  },
  {
    title: "Trainee",
    company: "Endava",
    technologies: ["Java", "Spring Boot", "REST"],
    description: "Spring Boot training focused on REST API development.",
    highlights: ["Built REST endpoints using Spring Boot", "Implemented basic CRUD operations and validation"],
    startDate: "Mar 2020",
    endDate: "May 2020"
  }
]

export const heroData = {
  name: "Dragos Ispas",
  welcomeMessage: "Welcome to my website!",
  tagline: "nuilding reliable software with care"
}

export const aboutData = {
  sectionOne: "Frontend-focused engineer with 4+ years of experience delivering production features across large-scale React + TypeScript, Next.js, React Native, and Node.js applications.",
  sectionTwo: "I’m known for clear communication, attention to detail, and shipping thoughtful, dependable software."
}