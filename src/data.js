import { Database, LayoutTemplate, Server, Wrench, Mail, Linkedin, MessageCircle } from "lucide-react";

export const NAVIGATION = [
  { name: "About", href: "#about" },
  { name: "Companies", href: "#companies" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Muhammad Zahir Khan",
  role: "Fullstack Developer",
  title: "Crafting High-Performance Web Ecosystems",
  location: "Pakistan",
  email: "mzahirkhan302@gmail.com",
  phone: "+92 333 5075372",
  linkedin: "https://www.linkedin.com/in/mzk006/",
  github: "https://github.com/ZahirKhan97",
  whatsapp: "https://wa.me/923335075372",
  profileImage: `${import.meta.env.BASE_URL}/img/profile.jpeg`,
  about: "A passionate Fullstack Developer with over 4 years of hands-on experience in building scalable web applications, robust REST APIs, and modern user interfaces using JavaScript and PHP frameworks. I specialize in the Laravel and MERN stack, thriving on solving complex architectural problems and delivering pixel-perfect, accessible code that prioritizes user experience.",
};

export const COMPANIES = [
  {
    role: "Fullstack Developer (Part-Time)",
    company: "AAO Group of Companies",
    duration: "October 2024 – October 2025",
    location: "Islamabad, PK",
    description: "Developed and maintained scalable applications using Laravel and modern JavaScript frameworks. Built APIs and improved system performance across multiple corporate platforms.",
    tech: ["Laravel", "Node.js", "Express.js", "Vue.js", "MySQL", "REST APIs"],
    link: "https://aaogroup.online"
  },
  {
    role: "Php/Laravel Engineer (Remote)",
    company: "CCRIPT Agency",
    duration: "January 2026 – February 2026",
    location: "Islamabad, PK",
    description: "Working remotely on Laravel and Codeigniter based projects. Responsible for backend development, including backend APIs implementation. Collaborating with team members to deliver scalable and efficient solutions on time. Integrated MySQL/PostgreSQL databases and maintained project code quality and consistency.",
    tech: ["Laravel", "CodeIgniter", "MySQL", "PostgreSQL", "Remote"],
  },
  {
    role: "Laravel Developer (Backend)",
    company: "Priceoye",
    duration: "May 2025 – December 2025",
    location: "Islamabad, PK",
    description: "Built RESTful APIs and managed API data. Focused on bug fixing and system stability. Worked on search optimization using Elasticsearch and frontend components with Vue Js. Managed development environments using Docker.",
    tech: ["Laravel", "RESTful APIs", "Elasticsearch", "Vue Js", "Docker"],
    link: "https://priceoye.pk"
  },
  {
    role: "Junior Developer (Backend)",
    company: "LALA Group of Companies",
    duration: "October 2024 – January 2025",
    location: "Rawalpindi, PK",
    description: "Backend development using Codeigniter and Laravel. Worked with 6 different websites of LALA Group of Companies. Focused on building RESTful APIs and API data management. Responsible for bug fixing in APIs and working with PostgreSQL databases.",
    tech: ["CodeIgniter", "Laravel", "RESTful APIs", "PostgreSQL"],
    link: "https://lalagrouptravels.com"
  },
  {
    role: "Ecommerce Web Application (Full Time – Hybrid)",
    company: "Spark Zone Technologies PVT LTD",
    duration: "December 2023 – June 2024",
    location: "Peshawar, PK",
    description: "Developed the database and managed the project code. Used Codeigniter, JQuery and Bootstrap to establish a user interface that improved user experience significantly and effectively. Incorporated PHP and Bootstrap to create an interactive website.",
    tech: ["CodeIgniter", "PHP", "JQuery", "Bootstrap", "MySQL"],
    link: "https://sparkzonetech.com"
  }
];

export const CLIENT_PROJECTS = [
  {
    title: "Fifth Infiniti",
    description: "A premium automotive eCommerce platform specializing in high-end parts. Features a dynamic catalog and optimized user flow.",
    tech: ["CodeIgniter", "PHP", "jQuery", "Bootstrap"],
    image: `${import.meta.env.BASE_URL}/img/fifthinfiniti.png`,
    link: "https://fifthinfiniti.com"
  },
  {
    title: "Travel Jokes Tourism",
    description: "Full-scale travel and tourism platform for domestic and international tour management. Includes integrated booking and package handling.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: `${import.meta.env.BASE_URL}/img/traveljokes.png`,
    link: "https://traveljokestourism.com"
  },
  {
    title: "Pak Rents",
    description: "Comprehensive vehicle rental platform designed for simplicity and efficiency in the Pakistani market.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vue Js"],
    image: `${import.meta.env.BASE_URL}/img/pakrents.png`,
    link: "https://pakrents.com"
  },
  {
    title: "Mood As Food: Flutter & Admin",
    description: "A dual-component solution featuring a cross-platform Flutter app and a powerful Laravel Admin Dashboard. Currently in active development/review.",
    tech: ["Flutter", "React Js", "Express Js", "REST API", "MongoDB"],
    image: `${import.meta.env.BASE_URL}/img/mood-as-food.png`,
    link: "https://lawngreen-shrew-452437.hostingersite.com/"
  },
  {
    title: "Laravel Online Shop",
    description: "A full-featured eCommerce platform with dynamic product management and secure checkout.",
    tech: ["Laravel 10", "MySQL", "Stripe", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

export const SKILLS = [
  {
    title: "Backend",
    icon: Server,
    items: ["Laravel", "CodeIgniter", "Node Js", "Express Js", "PHP"]
  },
  {
    title: "Frontend",
    icon: LayoutTemplate,
    items: ["HTML", "CSS", "ReactJS", "Bootstrap", "Tailwind", "JQuery", "VueJs"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    items: ["Docker", "GitHub", "Postman", "REST APIs", "VS Code"]
  }
];

export const CONTACT_LINKS = [
  {
    name: "Email",
    icon: Mail,
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    value: "mzk006",
    href: PERSONAL_INFO.linkedin,
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    value: "+92 333 5075372",
    href: PERSONAL_INFO.whatsapp,
    color: "bg-green-500/10 text-green-500",
  },
];
