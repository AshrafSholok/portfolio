export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive full-stack e-commerce solution with advanced features like inventory management, payment processing, and admin dashboard.',
    image: '/api/placeholder/400/300',
    category: 'freelance',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/ashrafmohamed/ecommerce',
    featured: true,
    year: '2024',
    client: 'TechCorp Solutions',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Built a complete e-commerce platform from scratch with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard for inventory control.',
    challenges: 'Implementing real-time inventory updates and handling high-traffic scenarios',
    results: 'Increased client sales by 40% and reduced cart abandonment by 25%'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.',
    image: '/api/placeholder/400/300',
    category: 'personal',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'JWT'],
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/ashrafmohamed/taskmanager',
    featured: true,
    year: '2024',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Developed a comprehensive task management solution with real-time collaboration features. Includes drag-and-drop functionality, team workspaces, deadline tracking, and notification system.',
    challenges: 'Implementing real-time updates across multiple clients and managing complex state',
    results: 'Helped teams increase productivity by 35% through better task organization'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: '/api/placeholder/400/300',
    category: 'personal',
    tech: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/ashrafmohamed/weather-dashboard',
    featured: false,
    year: '2023',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Created an intuitive weather application with real-time data from multiple weather APIs. Features include 7-day forecasts, hourly predictions, and weather alerts.',
    challenges: 'Handling API rate limits and optimizing data visualization performance',
    results: 'Served over 10,000 users with 99.9% uptime'
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A modern content management system for blogs with rich text editing, SEO optimization, and multi-author support.',
    image: '/api/placeholder/400/300',
    category: 'freelance',
    tech: ['Next.js', 'Prisma', 'MySQL', 'AWS', 'Tailwind CSS'],
    liveUrl: 'https://blog-cms-demo.com',
    githubUrl: 'https://github.com/ashrafmohamed/blog-cms',
    featured: true,
    year: '2024',
    client: 'Digital Media Agency',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Built a scalable blog CMS with advanced features including WYSIWYG editor, SEO tools, comment system, and analytics dashboard. Deployed on AWS with auto-scaling capabilities.',
    challenges: 'Implementing real-time collaboration in the editor and optimizing for SEO',
    results: 'Reduced content publishing time by 60% and improved SEO scores by 45%'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with dark mode, animations, and bilingual support (Arabic/English).',
    image: '/api/placeholder/400/300',
    category: 'personal',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'i18next'],
    liveUrl: 'https://ashrafmohamed.dev',
    githubUrl: 'https://github.com/ashrafmohamed/portfolio',
    featured: false,
    year: '2024',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Designed and developed a modern portfolio website with smooth animations, responsive design, and internationalization support. Features include project showcase, skills section, and contact form.',
    challenges: 'Creating smooth animations and implementing RTL support for Arabic',
    results: 'Improved user engagement by 50% with interactive design'
  },
  {
    id: 6,
    title: 'API Gateway',
    description: 'A microservices API gateway with authentication, rate limiting, and load balancing for distributed systems.',
    image: '/api/placeholder/400/300',
    category: 'openSource',
    tech: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    liveUrl: 'https://api-gateway-demo.com',
    githubUrl: 'https://github.com/ashrafmohamed/api-gateway',
    featured: true,
    year: '2023',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Developed a robust API gateway solution for microservices architecture. Includes JWT authentication, rate limiting, request/response transformation, and monitoring capabilities.',
    challenges: 'Handling high concurrency and implementing efficient caching strategies',
    results: 'Reduced API response time by 40% and improved system reliability'
  },
  {
    id: 7,
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
    image: '/api/placeholder/400/300',
    category: 'freelance',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Biometric Auth'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2024',
    client: 'FinTech Solutions',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Built a comprehensive mobile banking solution with advanced security features. Includes biometric authentication, real-time transaction processing, and comprehensive audit logging.',
    challenges: 'Implementing secure authentication and ensuring PCI compliance',
    results: 'Processed over $1M in transactions with zero security incidents'
  },
  {
    id: 8,
    title: 'AI Chatbot Platform',
    description: 'An intelligent chatbot platform with natural language processing, multi-language support, and analytics dashboard.',
    image: '/api/placeholder/400/300',
    category: 'personal',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL'],
    liveUrl: 'https://chatbot-platform-demo.com',
    githubUrl: 'https://github.com/ashrafmohamed/chatbot-platform',
    featured: false,
    year: '2023',
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    longDescription: 'Developed an AI-powered chatbot platform with custom training capabilities. Features include conversation analytics, sentiment analysis, and integration with popular messaging platforms.',
    challenges: 'Optimizing AI model performance and handling multiple concurrent conversations',
    results: 'Achieved 85% customer satisfaction rate and reduced support tickets by 30%'
  }
];

export const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'freelance', label: 'Freelance Projects' },
  { key: 'personal', label: 'Personal Projects' },
  { key: 'openSource', label: 'Open Source' },
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
