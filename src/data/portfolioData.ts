// This file contains the data for the portfolio, including projects, experiences, certifications, skills, and personal information.
// The data is structured in a way that can be easily consumed by the portfolio application.
// import img from "..\assets\public\assets\image.jpg"; // Removed unused import
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
    category: "Unbranded to Branded (Yadein)",
    description: "Led the transformation of an unbranded product into a recognized retail brand by identifying high-growth opportunities and executing a targeted go-to-market plan, resulting in ₹80K in revenue (20% margin).",
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: ["Market Research", "Sales Strategy ", "Client Negotiation", "Brand Development","Pricing & Revenue Optimization"],
  },
  {
    id: 2,
    title: "Augusto Biosciences",
    category: "affiliate marketing",
    description: "Led an affiliate marketing campaign for Augusto Biosciences, driving product visibility and sales through strategic partnerships, resulting in a significant increase in conversions and growth in revenue.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: ["Digital Marketing", "conversion Optimization", "Digital Marketing", "Revenue Sharing Model","Brand Promotion"],
  },
  {
    id: 3,
    title: "Financial Statement Analysis",
    category: "Hotel Industry",
    description: "Conducted a comprehensive financial statement analysis for leading hotel chains like Lemon Tree and Taj Hotels, identifying key strengths and weaknesses, and providing strategic recommendations that enhanced financial performance and market positioning.",
    image: "src/assets/Financial.jpg", // Updated with the correct image path
    skills: ["Comparative Analysis", "Financial Performance", " Market Positioning", "Key Financial Metrics","Competitive Advantage"],
  },
  {
    id: 4,
    title: "Technical Analysis",
    category: "Equity Markets",
    description: "Executed data-driven technical trades on blue-chip stocks using key indicators, delivering consistent portfolio gains and improved trade accuracy through disciplined analysis and risk management.",
    image: "src/assets/TechnicalAnalysis.jpg", // Updated with the correct image path
    skills: ["Equity Trades", "Technical Indicators", "Portfolio Optimization", "Price Data Analysis","Risk Management"],
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
    image: "src/assets/image.jpg", // Updated with the correct image path
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
    image: "src/assets/Microsoft_Excel.jpg", // Updated with the correct image path
    link: "#"
  },
  {
    id: 5,
    name: "Certificate in Financial Accounting ",
    issuer: "State Council for Technical Education & Vocational Training",
    date: "July 2023",
    image: "src/assets/Financial_Accounting.png", // Updated with the correct image path
    link: "#"
  },
  {
    id: 6,
    name: "Certificate in Soft Skills  ",
    issuer: "State Council for Technical Education & Vocational Training",
    date: "July 2023",
    image: "src/assets/Soft_Skills.webp", // Updated with the correct image path
    link: "#"
  },
  {
    id: 7,
    name: "Certificate in Language Skills ",
    issuer: "State Council for Technical Education & Vocational Training",
    date: "July 2023",
    image: "src/assets/Language_Skills.jpg", // Updated with the correct image path
    link: "#"
  },
  {
    id: 8,
    name: "Financial Literacy for Bharat Certification ",
    issuer: "National Institute of Securities Markets (NISM)",
    date: "January 2025",
    image: "src/assets/Financial_Literacy_gas_for_bharat.jpg", // Updated with the correct image path
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
  title: "MBA candidate specializing in Financial Markets",
  bio: "Results-oriented MBA candidate at Stanford Business School with a specialization in Business Management and Marketing. Passionate about leveraging data-driven strategies to drive business growth, optimize market opportunities, and enhance operational efficiency. Skilled in market analysis, strategic planning, and digital marketing, with a proven ability to translate insights into actionable initiatives. Adept at collaborating with cross-functional teams to deliver measurable results in dynamic business environments.",
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Lovely Professional University | Punjab, India",
      duration: "2024 - 2026",
      details: "Specialization in Financial Markets."
    },
    {
      degree: "Bachelor of Business Administration (BBA)",
      school: "Bhupendra Narayan Mandal University | Bihar, India",
      duration: "2020 - 2024",
      details: "Major in Marketing, Minor in Economics. GPA: 8.0/10.0"
    }
  ],
  contact: {
    email: "muhd.imtiyaz9119@gmail.com",
    phone: "+91 8877360992",
    linkedin: "https://www.linkedin.com/in/md-imtiyaz120/",
    location: "Phagwara, Punjab, India"
  },
  profileImage: "src/assets/profile_photo.jpg", // Updated with the correct image path
};
