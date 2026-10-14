// Portfolio Projects Data

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  images?: string[];
  client: string;
  year: number;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern E-Commerce Platform',
    description: 'Complete redesign of an e-commerce platform with focus on user experience and conversion optimization.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=500&h=350&fit=crop',
    client: 'Tech Startup',
    year: 2024,
    link: 'https://example.com/project-1',
    tags: ['Web Design', 'UX/UI', 'E-commerce'],
    featured: true,
  },
  {
    id: '2',
    title: 'Brand Identity System',
    description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop',
    client: 'Fashion Brand',
    year: 2024,
    tags: ['Branding', 'Logo Design', 'Typography'],
    featured: true,
  },
  {
    id: '3',
    title: 'Mobile App Design',
    description: 'User-friendly mobile app for fitness tracking with social features and analytics dashboard.',
    category: 'App Design',
    image: 'https://images.unsplash.com/photo-1512941691920-25d6b3dadc16?w=500&h=350&fit=crop',
    client: 'Fitness Startup',
    year: 2023,
    tags: ['Mobile Design', 'App Design', 'UX'],
  },
  {
    id: '4',
    title: 'Website Redesign',
    description: 'Complete website redesign for a digital agency with improved navigation and modern design.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop',
    client: 'Digital Agency',
    year: 2023,
    tags: ['Web Design', 'Responsive', 'Development'],
  },
  {
    id: '5',
    title: 'Social Media Campaign',
    description: 'Integrated social media campaign with custom graphics and content strategy.',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=350&fit=crop',
    client: 'Marketing Company',
    year: 2023,
    tags: ['Social Media', 'Graphics', 'Content'],
  },
  {
    id: '6',
    title: 'Dashboard Design',
    description: 'Complex analytics dashboard for data visualization and reporting.',
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop',
    client: 'Analytics Company',
    year: 2023,
    tags: ['Dashboard', 'Data Visualization', 'UI'],
  },
];

export const categories = [...new Set(projects.map(p => p.category))];

export const getFeaturedProjects = () => projects.filter(p => p.featured);

export const getProjectsByCategory = (category: string) =>
  projects.filter(p => p.category === category);

export const getProjectById = (id: string) =>
  projects.find(p => p.id === id);
