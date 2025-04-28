export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  skills: string[];
  link?: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
};

export type Certification = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
};

export type Skill = {
  id: number;
  name: string;
  level: number;
  category: "Business" | "Marketing" | "Technical" | "Soft Skills";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Market Expansion Strategy",
    category: "Strategy Consulting",
    description: "Developed a comprehensive market expansion strategy for a retail brand entering the European market, resulting in a successful launch across 3 countries.",
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: ["Market Analysis", "Strategic Planning", "Competitive Research", "Financial Modeling"],
  },
  {
    id: 2,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "Led a cross-platform digital marketing campaign that increased customer engagement by 45% and sales conversion by 23% over a 6-month period.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: ["Digital Marketing", "Campaign Management", "Analytics", "Content Strategy"],
  },
  {
    id: 3,
    title: "Supply Chain Optimization",
    category: "Operations",
    description: "Optimized supply chain processes for a CPG company, reducing costs by 18% and improving delivery times by 25%.",
    image: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: ["Supply Chain Management", "Process Optimization", "Cost Analysis", "Project Management"],
  },
  {
    id: 4,
    title: "Customer Experience Redesign",
    category: "Customer Experience",
    description: "Redesigned customer journey for a SaaS platform, resulting in improved NPS scores from 45 to 72 over two quarters.",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: ["CX Design", "User Research", "Journey Mapping", "Analytics"],
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Marketing Strategy Intern",
    company: "Global Consulting Group",
    duration: "May 2023 - August 2023",
    description: "Worked with senior consultants on developing marketing strategies for Fortune 500 clients.",
    achievements: [
      "Conducted market research for 3 major clients in the tech sector",
      "Assisted in developing go-to-market strategies that increased client revenue by 15%",
      "Created data visualizations and presentations for executive stakeholders"
    ]
  },
  {
    id: 2,
    role: "Business Analyst",
    company: "Tech Innovations Inc.",
    duration: "January 2022 - December 2022",
    description: "Analyzed business operations and recommended process improvements to enhance efficiency and profitability.",
    achievements: [
      "Identified cost-saving opportunities that reduced operational expenses by 12%",
      "Developed financial models for new product launches",
      "Collaborated with cross-functional teams to implement business process improvements"
    ]
  },
  {
    id: 3,
    role: "Product Marketing Coordinator",
    company: "Consumer Brands Co.",
    duration: "June 2020 - December 2021",
    description: "Coordinated product marketing initiatives and assisted in campaign development and execution.",
    achievements: [
      "Managed social media campaigns that increased engagement by 35%",
      "Assisted in the launch of 4 new product lines",
      "Conducted competitive analysis to inform marketing strategies"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Google Analytics Professional",
    issuer: "Google",
    date: "September 2023",
    image: "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 2,
    name: "Financial Modeling & Valuation Analyst",
    issuer: "Corporate Finance Institute",
    date: "March 2023",
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 3,
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    date: "January 2022",
    image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 4,
    name: "Digital Marketing Specialization",
    issuer: "HubSpot Academy",
    date: "July 2021",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  }
];

export const skills: Skill[] = [
  { id: 1, name: "Strategic Planning", level: 90, category: "Business" },
  { id: 2, name: "Market Analysis", level: 85, category: "Business" },
  { id: 3, name: "Financial Modeling", level: 80, category: "Business" },
  { id: 4, name: "Project Management", level: 85, category: "Business" },
  { id: 5, name: "Digital Marketing", level: 90, category: "Marketing" },
  { id: 6, name: "Brand Strategy", level: 85, category: "Marketing" },
  { id: 7, name: "Content Strategy", level: 80, category: "Marketing" },
  { id: 8, name: "SEO/SEM", level: 75, category: "Marketing" },
  { id: 9, name: "Data Analysis", level: 80, category: "Technical" },
  { id: 10, name: "CRM Systems", level: 75, category: "Technical" },
  { id: 11, name: "MS Excel/PowerBI", level: 85, category: "Technical" },
  { id: 12, name: "Leadership", level: 90, category: "Soft Skills" },
  { id: 13, name: "Communication", level: 95, category: "Soft Skills" },
  { id: 14, name: "Problem Solving", level: 85, category: "Soft Skills" },
  { id: 15, name: "Team Collaboration", level: 90, category: "Soft Skills" }
];

export const personalInfo = {
  name: "Jordan Smith",
  title: "MBA Candidate - Business Management & Marketing",
  bio: "Results-oriented MBA candidate at Stanford Business School with a specialization in Business Management and Marketing. Passionate about leveraging data-driven strategies to drive business growth and innovation. Experienced in digital marketing, business analytics, and strategic planning with a proven track record of delivering measurable results.",
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Stanford Graduate School of Business",
      duration: "2022 - 2024",
      details: "Specialization in Business Management and Marketing. GPA: 3.9/4.0"
    },
    {
      degree: "Bachelor of Science in Business Administration",
      school: "University of California, Berkeley",
      duration: "2018 - 2022",
      details: "Major in Marketing, Minor in Economics. GPA: 3.8/4.0"
    }
  ],
  contact: {
    email: "jordan.smith@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/jordansmith",
    location: "San Francisco, CA"
  },
  profileImage: "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};