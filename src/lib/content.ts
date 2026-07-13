/**
 * ============================================================
 *  PORTFOLIO CONTENT — Kotaprolu Pavan Kumar
 * ============================================================
 */

export const siteConfig = {
  name: "Kotaprolu Pavan Kumar",
  role: "CS Student · Full Stack & AI/ML Developer",
  tagline: "Building intelligent software — from web apps to AI agents.",
  location: "Visakhapatnam, India",
  email: "pavan.kotaprolu@gmail.com",
  github: "https://github.com/Pavan-pa178",
  linkedin: "https://www.linkedin.com/in/kotaprolupavankumar/",
  twitter: "",
  leetcode: "https://leetcode.com/u/wR8Y6sTCdx/",
  leetcodeUsername: "wR8Y6sTCdx",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  bio: [
    "Computer Science student with hands-on experience in Web Development, Artificial Intelligence, Machine Learning, Data Analytics, and Data Science. Skilled in C, Python, Java, JavaScript, React.js, SQL, and modern data analysis tools.",
    "Experienced in building responsive web applications, developing machine learning models, and analysing data to solve real-world problems. Passionate about learning emerging technologies and contributing to innovative projects through internships and collaborative environments.",
  ],
};

export const navSections = [
  { id: "home",           label: "Home" },
  { id: "about",          label: "About" },
  { id: "skills",         label: "Skills" },
  { id: "experience",     label: "Experience" },
  { id: "projects",       label: "Projects" },
  { id: "hackathons",     label: "Hackathons" },
  { id: "certifications", label: "Certifications" },
  //{ id: "leetcode",       label: "LeetCode" },
  { id: "contact",        label: "Contact" },
] as const;

export type SkillCategory = { category: string; items: string[] };

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Bootstrap", "HTML5", "CSS3", "Tailwind CSS", "Streamlit"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Django", "Flask", "REST APIs"],
  },
  {
    category: "AI / ML & Data Science",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "NLP", "LangChain", "Computer Vision", "Reinforcement Learning", "IBM Watsonx"],
  },
  {
    category: "Agentic AI",
    items: ["LLM Engineering", "RAG", "QLoRA", "MCP", "Google ADK", "Multi-Agent Systems"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Cloud & Tools",
    items: ["Microsoft Azure", "IBM Cloud", "Oracle Cloud", "Git", "GitHub", "VS Code", "Docker", "Linux", "Windows"],
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Intelligent Candidate Ranking Engine",
    description: "Redrob × India.Runs Hackathon Project — AI-powered candidate shortlisting at scale.",
    bullets: [
      "Built a rule-based candidate ranking system that scores 100,000 profiles against a job description and produces a ranked top-100 shortlist with written justification for each candidate.",
      "Designed multi-signal scoring across title fit, skill relevance, experience, career-history evidence, and behavioral availability — achieving sub-65-second runtime on CPU with no external dependencies.",
    ],
    techStack: ["Python", "Streamlit", "Git"],
    githubUrl: "https://github.com/Pavan-pa178/India_Runs_hackthon-Unemployed_Asian-.git",
    liveUrl: "https://indiaruns-unemployedasians.streamlit.app/",
    featured: true,
  },
  {
    id: 2,
    title: "FieldWise — Multi-Agent Crop Health Advisor",
    description: "AI agent built for smallholder farmers to diagnose and treat sick crops.",
    bullets: [
      "Takes a photo and plain-text description of a sick crop and returns a specific diagnosis, locally available treatment options with real supplier names and prices, and a follow-up schedule.",
      "Honestly escalates to a human expert when not confident enough — built with Google ADK multi-agent architecture.",
    ],
    techStack: ["Python", "MCP", "Google ADK", "Streamlit"],
    githubUrl: "https://github.com/Pavan-pa178/fieldwise.git",
    liveUrl: "https://fieldwise-101.streamlit.app/",
    featured: true,
  },
  {
    id: 3,
    title: "FoodieHub — Full-Stack Food Ordering App",
    description: "Fully interactive food ordering UI with dynamic filtering and a persistent client-side data layer.",
    bullets: [
      "Built dynamic filtering (search + veg/non-veg), a live countdown-based delivery tracker, and state-synced cart controls across menu cards and the cart drawer.",
      "Designed a persistent client-side data layer using IndexedDB to store user accounts and order history with real-time delivery status.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "IndexedDB"],
    githubUrl: "https://github.com/Pavan-pa178/FoodieHub.git",
    liveUrl: "https://foodie-hub-pavan-pa178s-projects.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Real-Time Object Detection & Tracking",
    description: "Real-time object detection and tracking system for video streams.",
    bullets: [
      "Developed a real-time object detection and tracking system using YOLO and OpenCV to accurately identify and track multiple objects in video streams.",
    ],
    techStack: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    githubUrl: "https://github.com/Pavan-pa178/Object-Detection-And-Tracking.git",
    liveUrl: "",
    featured: true,
  },
  {
    id: 5,
    title: "NutriGenie — AI Nutrition Assistant",
    description: "AI-powered virtual nutrition assistant using IBM Watsonx and Granite models.",
    bullets: [
      "Provides personalised meal plans based on user input such as age, gender, weight, health goals, and dietary preferences using IBM Watsonx and IBM Granite models.",
    ],
    techStack: ["IBM Cloud", "IBM Watsonx", "Agentic AI"],
    githubUrl: "https://github.com/Pavan-pa178/NutriGenie.git",
    liveUrl: "",
    featured: false,
  },
  {
    id: 6,
    title: "Tree Species Classification",
    description: "ML model to classify tree species using environmental and morphological features.",
    bullets: [
      "Built through data preprocessing, feature engineering, and evaluation of Decision Tree, Random Forest, and SVM algorithms to improve classification accuracy.",
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Pavan-pa178/Tree_Species_Classification.git",
    liveUrl: "",
    featured: false,
  },
  {
    id: 7,
    title: "FAQ Chatbot",
    description: "AI-powered chatbot to answer frequently asked questions using NLP.",
    bullets: [
      "Designed an AI-powered chatbot using Natural Language Processing to handle FAQs with Flask as the web backend.",
    ],
    techStack: ["Python", "NLTK", "Flask", "OpenAI API"],
    githubUrl: "https://github.com/Pavan-pa178/FAQ_ChatBot.git",
    liveUrl: "",
    featured: false,
  },
  {
    id: 8,
    title: "Weather App",
    description: "Responsive weather application with real-time data via REST APIs.",
    bullets: [
      "Displays real-time weather data based on user location or city search with dynamic UI updates and error handling.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    githubUrl: "https://github.com/Pavan-pa178/WeatherApp.git",
    liveUrl: "https://weather-app-pavan-pa178s.vercel.app/",
    featured: false,
  },
  {
    id: 9,
    title: "Task Manager / To-Do App",
    description: "Task management app with CRUD operations and persistent storage.",
    bullets: [
      "Built with React.js with full CRUD operations, persistent storage via Local Storage, and a responsive UI for task tracking.",
    ],
    techStack: ["React.js", "Local Storage"],
    githubUrl: "https://github.com/Pavan-pa178/To-Do.git",
    liveUrl: "",
    featured: false,
  },
  {
    id: 10,
    title: "Tic Tac Toe — Python GUI",
    description: "Interactive two-player Tic Tac Toe game with Minimax AI.",
    bullets: [
      "Built an interactive two-player Tic Tac Toe game with a Tkinter GUI and Minimax algorithm for optimal AI play.",
    ],
    techStack: ["Python", "Tkinter", "Minimax Algorithm"],
    githubUrl: "https://github.com/Pavan-pa178/Tic_Tac_Toe.git",
    liveUrl: "",
    featured: false,
  },
  {
    id: 11,
    title: "Language Translation Tool",
    description: "Real-time language translation tool supporting multiple languages.",
    bullets: [
      "Developed a real-time translation tool using Google Translate API with a Tkinter GUI for multi-language support.",
    ],
    techStack: ["Python", "Google Translate API", "Tkinter"],
    githubUrl: "https://github.com/Pavan-pa178/Language_Translation_Tool.git",
    liveUrl: "",
    featured: false,
  },
];

export type Experience = {
  id: number;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Microsoft Azure Intern",
    organization: "Microsoft",
    location: "Remote",
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    description:
      "Learned and worked with Microsoft Azure cloud services including virtual machines, storage accounts, networking, and resource groups. Explored IaaS, PaaS, and SaaS cloud computing paradigms.",
  },
  {
    id: 2,
    role: "Full Stack Web Development Intern",
    organization: "IBM SkillsBuild",
    location: "Remote",
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    description:
      "Completed intensive training in web development and cloud fundamentals. Developed responsive web applications using HTML, CSS, and JavaScript. Built a Food Ordering Website with responsive UI components, menu browsing, and user-friendly navigation.",
  },
  {
    id: 3,
    role: "AI & Machine Learning Intern",
    organization: "Shell Edunet Skills4Future",
    location: "Remote",
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    description:
      "Gained practical experience in ML workflows including data preprocessing, feature engineering, model training, evaluation, and optimisation. Built a Tree Species Classification model and compared Decision Tree, Random Forest, and SVM algorithms.",
  },
  {
    id: 4,
    role: "Emerging Technologies (AI & Cloud) Intern",
    organization: "IBM SkillsBuild",
    location: "Remote",
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    description:
      "Developed NutriGenie — an AI-powered virtual nutrition assistant using IBM Watsonx and IBM Granite models to provide personalised meal plans based on user input.",
  },
];

export type Hackathon = {
  id: number;
  name: string;
  organizer: string;
  date: string;
  description: string;
  result?: string;
  certificateUrl?: string;
  projectUrl?: string;
};

export const hackathons: Hackathon[] = [
  {
    id: 1,
    name: "Redrob × India.Runs Hackathon",
    organizer: "India.Runs",
    date: "2025",
    description:
      "Built the Intelligent Candidate Ranking Engine — a rule-based AI system that scores 100,000 candidate profiles against a job description and produces a ranked top-100 shortlist in under 65 seconds on CPU.",
    result: "Participant",
    projectUrl: "https://indiaruns-unemployedasians.streamlit.app/",
    certificateUrl: "-",
  },
];

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Full-Stack AI Engineer 2026: ML, Deep Learning, Generative AI",
    issuer: "Udemy",
    date: "Jul 9, 2026",
    credentialUrl: "https://ude.my/UC-30bd5758-ff88-466d-a986-ad8edb9f6e00",
  },
  {
    id: 2,
    title: "Machine Learning using Python",
    issuer: "Udemy",
    date: "Jul 8, 2026",
    credentialUrl: "https://ude.my/UC-e7524be3-97c7-4162-af5a-18557c167a07",
  },
  {
    id: 3,
    title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    issuer: "Udemy",
    date: "Jul 11, 2026",
    credentialUrl: "https://ude.my/UC-da39b409-25df-4ce6-aa59-371f5b718a5d",
  },
  {
    id: 4,
    title: "Al Engineer Production Track: Deploy LLMs & Agents at Scale",
    issuer: "Udemy",
    date: "Jul 5, 2026",
    credentialUrl: "https://ude.my/UC-1af3db1f-fb68-4a36-a952-3b8fc618e082",
  },
  {
    id: 5,
    title: "Agentic AI Development with Agent Framework, MCP and .NET",
    issuer: "Udemy",
    date: "Jul 5, 2026",
    credentialUrl: "https://ude.my/UC-6a5ad064-f2f5-4bbe-ac63-29fe962c688d",
  },
  {
    id: 6,
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "Udemy",
    date: "Jun 24, 2026",
    credentialUrl: "https://ude.my/UC-fa979348-f0d7-49ee-8063-078b89ebc80a",
  },
  {
    id: 7,
    title: "Data Science: Complete Data Science & Machine Learning",
    issuer: "Udemy",
    date: "Jun 30, 2026",
    credentialUrl: "https://ude.my/UC-1286ca97-9188-4197-808d-ede131bf5fa5",
  },
  {
    id: 8,
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    date: "Jun 10, 2026",
    credentialUrl: "https://verify.skilljar.com/c/kfwjh9wd43q8",
  },
  {
    id: 9,
    title: "Claude 101",
    issuer: "Anthropic Education",
    date: "Jun 11, 2026",
    credentialUrl: "https://verify.skilljar.com/c/xyd2545jcq4n",
  },
  {
    id: 10,
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    date: "Oct 29, 2025",
    credentialUrl: "",
  },
  {
    id: 11,
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Oct 24, 2025",
    credentialUrl: "",
  },
  {
    id: 12,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 24, 2025",
    credentialUrl: "",
  },
  {
    id: 13,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 23, 2025",
    credentialUrl: "",
  },
  {
    id: 14,
    title: "Gen AI Exchange Program",
    issuer: "Google Cloud",
    date: "May 28, 2025",
    credentialUrl: "",
  },
  {
    id: 15,
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "Dec 30, 2025",
    credentialUrl: "",
  },
  {
    id: 16,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "May 5, 2025",
    credentialUrl: "",
  },
];

export const emailjsConfig = {
  serviceId:  "service_0lknxhg",
  templateId: "template_kt9ohyj",
  publicKey:  "xADux_vapS-LyQ0nF",
};
