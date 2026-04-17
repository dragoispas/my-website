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

type ProjectHighlights = {
  highlight: string,
  details: string[], // how to call this instead of highlights since it is confusing
}

export type Project = {
  title: string,
  tags: string[],
  description: string,
  highlights: ProjectHighlights[]
}

export const projects: Project[] = [
  {
    title: "This website",
    tags: [
      "React",
      "TypeScript",
      "Responsive design",
      "Theme system",
      "CSS variables",
      "Custom hook",
      "Local storage",
      "Reusable components",
      "Component architecture",
      "UI animation"
    ],
    description:
      "A personal portfolio website built with React and TypeScript, designed to feel polished, responsive, and distinctive. The project emphasizes thoughtful UI decisions, smooth interactions, and a scalable structure, with reusable components, fluid layouts, and a custom theming system that makes the interface feel both personal and maintainable. Special attention was given to responsiveness, visual consistency, and small details that make the experience feel intentional rather than generic.",
    highlights: [
      {
        highlight: "Built a personalized theming system instead of using a fixed color palette.",
        details: [
          "Created an accent-based theme selector using HSL and dynamic hue updates",
          "Derived multiple UI colors from a single accent hue for consistent theming across text, backgrounds, tooltips, and interactive elements",
          "Implemented the theme picker as a rail that works both as a practical control and as a visual separator between sections, making the feature feel integrated into the design rather than added on top of it",
          "Used CSS custom properties to keep the theme scalable, maintainable, and easy to tweak"
        ]
      },
      {
        highlight: "Focused on polished UI behavior and a smooth frontend experience.",
        details: [
          "Implemented a sliding card interaction to make content presentation more dynamic",
          "Designed the layout to be fully responsive across screen sizes using fluid spacing and typography",
          "Built reusable card-based UI sections to keep styling and structure consistent across the site"
        ]
      },
      {
        highlight: "Added practical state persistence and clean project structure.",
        details: [
          "Built a custom localStorage hook to persist user preferences such as theme settings",
          "Structured the content as typed data objects so sections can be rendered dynamically and extended easily",
          "Used React and TypeScript together for safer component props and cleaner data modeling"
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
      "API integration",
      "Server-side filtering",
      "State normalization",
      "Styled Components"
    ],
    description:
      "A character browser built with React, TypeScript, Redux, and React Router, originally created as an interview task. The app focuses on clean data flow, URL-driven filtering, and efficient state usage, with searchable character listings, status-based filtering, and detailed character views. Although small in scope, it highlights practical frontend architecture decisions around routing, API querying, client-side caching, and shaping fetched data for efficient lookup.",
    highlights: [
      {
        highlight: "Built filtering around API query parameters instead of only client-side state.",
        details: [
          "Implemented a search bar with status filtering that requests filtered character data directly from the API",
          "Used URL/query-driven fetching logic so filtering behavior stays explicit and scalable",
          "Designed the feature around server-side filtering rather than downloading unnecessary data up front"
        ]
      },
      {
        highlight: "Improved lookup efficiency by reshaping fetched data for application use.",
        details: [
          "Parsed fetched character data into a map structure for fast access by id",
          "Used normalized Redux state to avoid repeatedly scanning arrays when opening character details",
          "Kept previously fetched entities available for reuse across interactions"
        ]
      },
      {
        highlight: "Added practical caching behavior to reduce unnecessary requests.",
        details: [
          "Only requested a character if it was not already present in Redux state",
          "Reused cached character data when navigating between list and detail views",
          "Used route-based logic with React Router to load the correct details view"
        ]
      },
      {
        highlight: "Handled dependent data fetching based on already loaded entity data.",
        details: [
          "Extracted episode ids from episode URLs after the character data became available",
          "Triggered secondary episode requests only when the selected character existed in state",
          "Separated fetch steps clearly so the data dependencies stayed predictable and easy to follow"
        ]
      }
    ]
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