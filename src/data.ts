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
    technologies: ["React", "TypeScript", "Redux"],
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

type ProjectHighlights = {
  highlight: string,
  details: string[], // how to call this instead of highlights since it is confusing
}

type ProjectLinks = {
  github?: string, 
  live?: string
}

export type Project = {
  title: string,
  tags: string[],
  links?: ProjectLinks,
  description: string,
  highlights: ProjectHighlights[]
}

export type Education = {
  title: string,
  institution: string,
  date: string
  certifications?: string[]
}

export const projects: Project[] = [
  {
    title: "This website",
    tags: [
      "React",
      "TypeScript",
      "Responsive UI/UX",
      "Touch + keyboard interactions"
    ],
    links: {github: "https://github.com/dragoispas/my-website"},
    description:
      "A personal portfolio website built with React and TypeScript, designed to feel polished, responsive, and distinctive. The project emphasizes thoughtful UI decisions, smooth interactions, and a scalable structure, with reusable components, fluid layouts, and a custom theming system. Everything was built from scratch without external UI libraries, with special attention to responsiveness, visual consistency, and the small details that make the experience feel intentional rather than generic.",
    highlights: [
      {
        highlight: "Built a custom accent-driven theming system from scratch.",
        details: [
          "Created a theme selector based on HSL hue values instead of relying on predefined palettes",
          "Derived multiple interface colors from a single accent hue to keep text, backgrounds, tooltips, and interactive elements visually consistent",
          "Designed the theme picker as a rail that also acts as a visual separator between sections, making the feature feel integrated into the overall layout",
          "Used CSS custom properties to keep the theme scalable, maintainable, and easy to adjust"
        ]
      },
      {
        highlight: "Focused on polished interactions and responsive UI behavior.",
        details: [
          "Implemented a sliding card interaction with keyboard and touch support to make content browsing feel more dynamic",
          "Designed the layout to be fully responsive using fluid spacing and typography across screen sizes",
          "Built reusable card-based sections to keep the interface consistent and easy to extend"
        ]
      },
      {
        highlight: "Structured the project to feel personal, maintainable, and product-like.",
        details: [
          "Built a custom localStorage hook to persist user preferences such as theme selection",
          "Modeled the site content as typed data objects so sections can be rendered dynamically and scaled cleanly",
          "Used React and TypeScript together for safer component APIs and clearer data structures"
        ]
      }
    ]
  },
  {
    title: "Rick and Morty App",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "React Router",
      "Styled Components"
    ],
    links: {github: "https://github.com/dragoispas/multiverse-characters", live:"https://rick-and-morty-git-master-dragoispas.vercel.app/"},
    description:
      "A React and TypeScript character browser built around server-side API filtering, normalized Redux state, and route-based detail pages. The app supports debounced search, status filtering, incremental loading, and cache-aware fetching to avoid unnecessary requests while keeping navigation and data flow predictable.",
    highlights: [
      {
        highlight: "Built filtering around API query parameters instead of relying only on client-side state.",
        details: [
          "Implemented search and status filtering by requesting filtered character data directly from the API",
          "Constructed requests dynamically with query parameters for name, status, and pagination"
        ]
      },
      {
        highlight: "Structured Redux state for efficient lookup and reuse.",
        details: [
          "Normalized fetched characters into an id-keyed map for fast access",
          "Reused cached character data across list and detail views instead of refetching"
        ]
      },
      {
        highlight: "Added cache-aware and dependent data fetching logic.",
        details: [
          "Only requested a character on the details page if it was not already present in Redux state",
          "Triggered episode requests only after the required character data had been resolved"
        ]
      },
      {
        highlight: "Improved the browsing experience with scalable interaction patterns.",
        details: [
          "Debounced search input to avoid excessive API requests",
          "Added route-based detail pages and incremental loading for smoother navigation"
        ]
      }
    ]
  }
]

export const educationData: Education[] = [
  {
    title: "Bachelor’s in Computer Science",
    institution: "University of Bucharest",
    date: "2016 - 2019"
  },
  {
    title: "Mathematics and Computer Science",
    institution: '"George Coșbuc" National Bilingual College',
    date: "2012 - 2016",
    certifications: ['Cambridge English: Advanced', 'Goethe-Zertifikat A2']
  }
]

export const heroData = {
  name: "Dragos Ispas",
  welcomeMessage: "Welcome to my website!",
  tagline: "building reliable software with care"
}

export const aboutData = {
  sectionOne: "Frontend-focused engineer with 4+ years of experience delivering production features across large-scale React + TypeScript, Next.js, React Native, and Node.js applications.",
  sectionTwo: "I’m known for clear communication, attention to detail, and shipping thoughtful, dependable software."
}