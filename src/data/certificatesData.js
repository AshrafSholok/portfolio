export const certificates = [
  {
    id: 1,
    title: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Linux Foundation',
    date: '2024',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Cloud & DevOps',
    description: 'Demonstrates competency in designing, building, configuring, and exposing cloud native applications for Kubernetes.',
  },
  {
    id: 2,
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2024',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Cloud & DevOps',
    description: 'Validates expertise in designing and managing robust, secure, scalable, highly available, and dynamic solutions.',
  },
  {
    id: 3,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Cloud & DevOps',
    description: 'Demonstrates ability to design distributed systems on AWS platform.',
  },
  {
    id: 4,
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Frontend Development',
    description: 'Comprehensive certification covering React fundamentals, hooks, and advanced patterns.',
  },
  {
    id: 5,
    title: 'Node.js Application Developer',
    issuer: 'OpenJS Foundation',
    date: '2023',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Backend Development',
    description: 'Validates skills in building scalable server-side applications with Node.js.',
  },
  {
    id: 6,
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2023',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'DevOps',
    description: 'Demonstrates proficiency in containerization and Docker platform.',
  },
  {
    id: 7,
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2022',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Database',
    description: 'Validates expertise in MongoDB database design and development.',
  },
  {
    id: 8,
    title: 'Git Professional Certification',
    issuer: 'GitHub',
    date: '2022',
    image: '/api/placeholder/300/200',
    link: 'https://www.credly.com/badges/example',
    category: 'Version Control',
    description: 'Demonstrates advanced Git skills and collaborative development practices.',
  },
];

export const certificateCategories = ['All', 'Cloud & DevOps', 'Frontend Development', 'Backend Development', 'Database', 'Version Control'];

export const certificateStats = [
  { number: '8+', label: 'Professional Certifications' },
  { number: '4', label: 'Cloud Platforms' },
  { number: '3', label: 'Years of Learning' },
  { number: '100%', label: 'Pass Rate' },
];

export const learningJourney = [
  {
    title: 'Online Courses',
    description: 'Completed 50+ online courses on platforms like Coursera, Udemy, and Pluralsight',
    icon: '💻',
  },
  {
    title: 'Hands-on Projects',
    description: 'Applied learning through real-world projects and open-source contributions',
    icon: '🛠️',
  },
  {
    title: 'Community Engagement',
    description: 'Active participation in developer communities and tech meetups',
    icon: '👥',
  },
];

// Helper function to get certificates by category
export const getCertificatesByCategory = (category) => {
  if (category === 'All') {
    return certificates;
  }
  return certificates.filter(certificate => certificate.category === category);
};

// Helper function to get certificates by issuer
export const getCertificatesByIssuer = (issuer) => {
  return certificates.filter(certificate => certificate.issuer === issuer);
};

// Helper function to get certificates by year
export const getCertificatesByYear = (year) => {
  return certificates.filter(certificate => certificate.date === year);
};
