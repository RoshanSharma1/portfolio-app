export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "Completed" | "In Progress";
  category: string;
  duration: string;
  teamSize: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
    longDescription: `
      This e-commerce platform was built to handle high-volume transactions while maintaining excellent performance and user experience. The application features a modern, responsive design with advanced functionality including user authentication, product catalog management, shopping cart functionality, secure payment processing via Stripe, and a comprehensive admin dashboard.

      The project showcases my expertise in full-stack development, API design, database optimization, and third-party integrations. The architecture is designed to be scalable and maintainable, with clear separation of concerns and comprehensive error handling.
    `,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "Redux"],
    status: "Completed",
    category: "Full-Stack",
    duration: "3 months",
    teamSize: "Solo",
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Optimizing database queries for large product catalogs",
      "Building a responsive admin dashboard with real-time updates",
      "Ensuring PCI compliance for payment handling"
    ],
    solutions: [
      "Used Stripe's webhook system for reliable payment processing",
      "Implemented database indexing and query optimization",
      "Built real-time features using Socket.io",
      "Followed security best practices and conducted thorough testing"
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Real-time inventory updates"
    ],
    githubUrl: "https://github.com/yourusername/e-commerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    image: "/api/placeholder/800/400",
    href: "/projects/e-commerce-platform"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team features, and advanced project tracking capabilities.",
    longDescription: `
      This task management application was designed to streamline team collaboration and project tracking. Built with modern technologies, it provides real-time synchronization across multiple users, advanced project organization features, and comprehensive reporting capabilities.

      The application demonstrates expertise in real-time web technologies, database design for collaborative features, and creating intuitive user interfaces for complex workflows. The architecture supports scalable team management with role-based permissions and advanced notification systems.
    `,
    technologies: ["TypeScript", "Next.js", "Socket.io", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"],
    status: "In Progress",
    category: "Full-Stack",
    duration: "4 months",
    teamSize: "2 developers",
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Designing efficient database schema for complex relationships",
      "Building intuitive drag-and-drop interfaces",
      "Managing state synchronization across multiple users"
    ],
    solutions: [
      "Implemented operational transformation for conflict resolution",
      "Used PostgreSQL with optimized indexing and Prisma ORM",
      "Built custom drag-and-drop components with React DnD",
      "Used Redis for caching and Socket.io for real-time updates"
    ],
    features: [
      "Real-time collaborative editing",
      "Drag-and-drop task organization",
      "Team member management and permissions",
      "Project templates and workflows",
      "Advanced filtering and search",
      "Time tracking and reporting",
      "Mobile-responsive design",
      "Integration with popular tools"
    ],
    githubUrl: "https://github.com/yourusername/task-management-app",
    liveUrl: "https://taskmanager-demo.vercel.app",
    image: "/api/placeholder/800/400",
    href: "/projects/task-management-app"
  },
  {
    id: "data-dashboard",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing and visualizing complex datasets with D3.js, featuring real-time data updates and customizable charts.",
    longDescription: `
      This data visualization dashboard was created to help organizations make sense of complex datasets through interactive and customizable visualizations. The application processes large amounts of data in real-time and presents it through various chart types, filters, and analytical tools.

      The project showcases advanced skills in data processing, visualization libraries, and creating performant web applications that handle large datasets. The dashboard is designed to be flexible and extensible, allowing users to create custom views and export insights.
    `,
    technologies: ["D3.js", "React", "Python", "FastAPI", "PostgreSQL", "WebSockets", "Chart.js"],
    status: "Completed",
    category: "Data Science",
    duration: "5 months",
    teamSize: "Solo",
    challenges: [
      "Processing and visualizing large datasets efficiently",
      "Creating responsive and interactive charts",
      "Implementing real-time data streaming",
      "Optimizing performance for complex visualizations"
    ],
    solutions: [
      "Implemented data pagination and virtual scrolling",
      "Used D3.js with React for optimal performance",
      "Built WebSocket connections for real-time updates",
      "Applied data aggregation and caching strategies"
    ],
    features: [
      "Interactive charts and graphs",
      "Real-time data streaming",
      "Customizable dashboard layouts",
      "Advanced filtering and drill-down",
      "Data export and reporting",
      "Multiple visualization types",
      "Responsive design for all devices",
      "API integration capabilities"
    ],
    githubUrl: "https://github.com/yourusername/data-dashboard",
    liveUrl: "https://data-dashboard-demo.vercel.app",
    image: "/api/placeholder/800/400",
    href: "/projects/data-dashboard"
  },
  {
    id: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
    longDescription: `
      This mobile fitness application was developed to provide users with a comprehensive fitness tracking solution. The app includes personalized workout plans, progress tracking, social features for motivation, and integration with wearable devices.

      The project demonstrates expertise in mobile development, cross-platform frameworks, and creating engaging user experiences. The app is designed to work offline and sync data when connectivity is restored, ensuring users can track their fitness journey anywhere.
    `,
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo", "AsyncStorage"],
    status: "Completed",
    category: "Mobile",
    duration: "6 months",
    teamSize: "3 developers",
    challenges: [
      "Creating smooth animations and transitions",
      "Implementing offline functionality with data sync",
      "Integrating with device sensors and health APIs",
      "Designing intuitive workout tracking interfaces"
    ],
    solutions: [
      "Used React Native Reanimated for performant animations",
      "Implemented Redux Persist for offline data management",
      "Integrated with HealthKit and Google Fit APIs",
      "Created custom UI components for workout tracking"
    ],
    features: [
      "Personalized workout plans",
      "Progress tracking and analytics",
      "Social features and challenges",
      "Wearable device integration",
      "Offline functionality",
      "Custom exercise library",
      "Nutrition tracking",
      "Achievement system"
    ],
    githubUrl: "https://github.com/yourusername/mobile-fitness-app",
    liveUrl: "https://apps.apple.com/app/fitness-tracker",
    image: "/api/placeholder/800/400",
    href: "/projects/mobile-fitness-app"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description: "Intelligent chatbot using natural language processing for customer support and automated responses.",
    longDescription: `
      This AI-powered chatbot was developed to provide intelligent customer support and automated responses using advanced natural language processing techniques. The system can understand context, maintain conversation history, and provide relevant responses based on a knowledge base.

      The project showcases expertise in machine learning, natural language processing, and building scalable AI applications. The chatbot is designed to learn from interactions and improve its responses over time, while providing seamless integration with existing customer support systems.
    `,
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "Redis", "Docker", "OpenAI API"],
    status: "In Progress",
    category: "AI/ML",
    duration: "4 months",
    teamSize: "2 developers",
    challenges: [
      "Training models for accurate intent recognition",
      "Handling context and conversation flow",
      "Integrating with existing customer support systems",
      "Ensuring response accuracy and relevance"
    ],
    solutions: [
      "Used transfer learning with pre-trained language models",
      "Implemented conversation state management with Redis",
      "Built RESTful APIs for seamless integration",
      "Created comprehensive testing and evaluation frameworks"
    ],
    features: [
      "Natural language understanding",
      "Context-aware conversations",
      "Multi-language support",
      "Integration with support tickets",
      "Analytics and reporting",
      "Customizable responses",
      "Learning from interactions",
      "API for third-party integration"
    ],
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    liveUrl: "https://chatbot-demo.herokuapp.com",
    image: "/api/placeholder/800/400",
    href: "/projects/ai-chatbot"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and optimized performance.",
    longDescription: `
      This portfolio website was designed and developed to showcase projects and skills in a modern, professional manner. Built with the latest web technologies, it features a responsive design, dark mode support, optimized performance, and excellent SEO.

      The project demonstrates expertise in modern web development, performance optimization, and creating engaging user experiences. The website is designed to be fast, accessible, and easy to maintain, with a focus on clean code and best practices.
    `,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "MDX"],
    status: "Completed",
    category: "Frontend",
    duration: "2 months",
    teamSize: "Solo",
    challenges: [
      "Creating smooth animations and transitions",
      "Optimizing performance and SEO",
      "Implementing dark mode with system preference detection",
      "Building a flexible content management system"
    ],
    solutions: [
      "Used Framer Motion for performant animations",
      "Implemented Next.js optimization features and static generation",
      "Created a custom theme system with CSS variables",
      "Built MDX-based content management for blog posts"
    ],
    features: [
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Optimized performance and SEO",
      "Smooth animations and transitions",
      "Blog with MDX support",
      "Contact form with validation",
      "Project showcase with filtering",
      "Accessibility compliance"
    ],
    githubUrl: "https://github.com/yourusername/portfolio-website",
    liveUrl: "https://yourportfolio.com",
    image: "/api/placeholder/800/400",
    href: "/projects/portfolio-website"
  }
];

export const categories = ["All", "Full-Stack", "Frontend", "Mobile", "Data Science", "AI/ML"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
}

