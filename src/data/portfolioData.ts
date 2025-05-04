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
    name: "Debt Market Certification ",
    issuer: "National Institute of Securities Markets (NISM)",
    date: "March 2025",
    image: "businessman-clicks-a-bonds-virtual-screen-bond-finance-banking-technology-concept-trade.jpg-s1024x1024wisk20c9EIV5QHO5fJNOgEobYtYGL9C8StlfAq28-6zdZVRrCI.jpg",
    link: "#"
  },
  {
    id: 2,
    name: "Social Stock Exchange Certification",
    issuer: "National Institute of Securities Markets (NISM)",
    date: "March 2025",
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 3,
    name: "Municipal Bonds Certification ",
    issuer: "National Institute of Securities Markets (NISM)",
    date: "January 2025",
    image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 4,
    name: "Microsoft Excel with AI Training",
    issuer: "Lovely Professional University",
    date: "January 2025",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 5,
    name: "Certificate in Financial Accounting ",
    issuer: "State Council for Technical Education & Vocational Training",
    date: "July 2023",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 6,
    name: "Certificate in Soft Skills  ",
    issuer: "State Council for Technical Education & Vocational Training",
    date: "July 2023",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 7,
    name: "Certificate in Language Skills ",
    issuer: "State Council for Technical Education & Vocational Training",
    date: "July 2023",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 8,
    name: "Financial Literacy for Bharat Certification ",
    issuer: "National Institute of Securities Markets (NISM)",
    date: "January 2025",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 5,
    name: "Investor Certification (SEBI)",
    issuer: "HubSpot Academy",
    date: "Jan 2025",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  }
];

export const skills: Skill[] = [
  { "id": 1, "name": "MS Excel", "level": 90, "category": "Technical" },
  { "id": 2, "name": "MS Word", "level": 85, "category": "Technical" },
  { "id": 3, "name": "MS PowerPoint", "level": 80, "category": "Technical" },
  { "id": 4, "name": "Canva", "level": 80, "category": "Technical" },

  { "id": 5, "name": "Leadership", "level": 90, "category": "Soft Skills" },
  { "id": 6, "name": "Problem-Solving Skills", "level": 85, "category": "Soft Skills" },
  { "id": 7, "name": "Team Player", "level": 90, "category": "Soft Skills" },
  { "id": 8, "name": "Negotiation", "level": 85, "category": "Soft Skills" },
  { "id": 9, "name": "Adaptability", "level": 80, "category": "Soft Skills" },
  { "id": 10, "name": "Goal-Oriented", "level": 85, "category": "Soft Skills" },
  { "id": 11, "name": "Teamwork", "level": 90, "category": "Soft Skills" }
];


export const personalInfo = {
  name: "Mohammad Imtiyaz",
  title: " MBA candidate specializing in Financial Markets",
  bio: "Results-oriented MBA candidate at Stanford Business School with a specialization in Business Management and Marketing. Passionate about leveraging data-driven strategies to drive business growth, optimize market opportunities, and enhance operational efficiency. Skilled in market analysis, strategic planning, and digital marketing, with a proven ability to translate insights into actionable initiatives. Adept at collaborating with cross-functional teams to deliver measurable results in dynamic business environments.",
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Lovely Professional University | Punjab,India",
      duration: "2024 - 2026",
      details: "Specialization in Financial Markets."
    },
    {
<<<<<<< HEAD
      degree: "Bachelor of Science in Business Administration",
      school: "Bhupendra Narayan Mandal University | Bihar, India",
      duration: "2018 - 2022",
      details: "general GPA: 8/10"
    }
  ],
  contact: {
    email: "muhd.imtiyaz9119@.com",
    phone: "+91 8877360992",
    linkedin: "https://www.linkedin.com/in/md-imtiyaz120/",
    location: "Phagwara, Punjab, India"
=======
      degree: "Bachelor of Business Administration (BBA)",
      school: "Bhupendra Narayan Mandal University, Bihar, India",
      duration: "2020 - 2024",
      details: "Major in Marketing, Minor in Economics. GPA: 8.0/10.0"
    }
  ],
  contact: {
    email: "muhd.imtiyaz9119@gmail.com",
    phone: "+1 (555) 123-4567",
<<<<<<< HEAD
    linkedin: "linkedin.com/in/md-imtiyaz120",
    location: "punjab, India",
=======
    linkedin: "linkedin.com/in/jordansmith",
    location: "San Francisco, CA"
>>>>>>> 70de4eb42c761b234e6e3d1c12646eed419bf049
>>>>>>> e43dec3ac59c2bbe9da568f99197051ea3a2371e
  },
  profileImage: "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};