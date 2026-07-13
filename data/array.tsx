 import {
  Clock3,
  BadgeCheck,
   Bot,
  Globe,
  ShoppingCart,
  LayoutDashboard,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Zap,
  Search,
  Palette,
  Sparkles,
  Code2,
  Rocket,
   MessageSquare,
  PenTool,
   Monitor,
  Server,
  BrainCircuit,
  Wrench,
  MessageSquareMore,
  TrendingUp,
  HeartHandshake,
  ClipboardList,
  Atom,
  Database,
  Wind,
  Cpu,
  Layers,
  GitBranch,
  Users,
  Headphones,
  ArrowRight,
   Gem,
  BriefcaseBusiness,
  Handshake,
  Check,
  ArrowUpRight,
  
 
} from "lucide-react";



export const projects = [
  {
    // ==========================
    // Basic Card Information
    // ==========================
    id: 1,
    slug: "urban-pulse",
    title: "Urban Pulse",
    category: "Full Stack E-Commerce",
    image: "/images/urban.png",
    description:
      "A modern fashion e-commerce platform with authentication, Stripe payments, admin dashboard, and complete order management.",

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],

    href: "/featureProduct/urban-pulse",

    // ==========================
    // Project Detail Page
    // ==========================

    details: {
      overview:
        "Urban Pulse is a full-stack fashion e-commerce platform designed to deliver a premium online shopping experience. The application enables customers to browse products, securely purchase items using Stripe, manage their accounts, and track orders, while administrators can efficiently manage inventory, customers, and sales from a dedicated dashboard.",

      challenges:
        "The primary challenge was creating a scalable architecture capable of handling authentication, secure online payments, inventory management, and role-based access without sacrificing performance. Another challenge was building a responsive user experience that feels modern across desktop and mobile devices.",

      process:
        "The project began with planning the application architecture and user flows before moving into UI/UX design. The frontend was developed using Next.js and Tailwind CSS, while the backend APIs were built with Node.js and MongoDB. Stripe payment integration, authentication, and admin functionality were implemented incrementally, followed by optimization, testing, and deployment.",

      timeline: "12 Weeks",

      img:"/images/urban.png",

      liveUrl: "",

      githubUrl: "",

      features: [
        "Secure Authentication",
        "Stripe Payment Integration",
        "Shopping Cart",
        "Order Management",
        "Admin Dashboard",
        "Inventory Management",
        "Responsive Design",
      ],
    },
  },

  {
    // ==========================
    // Basic Card Information
    // ==========================
    id: 2,
    slug: "foodies",
    title: "Foodies",
    category: "Restaurant Platform",
    image: "/images/foodies.png",
    description:
      "A multi-vendor restaurant platform with customer ordering, restaurant dashboard, online payments, and withdrawal system.",

    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],

    href: "/featureProduct/foodies",

    // ==========================
    // Project Detail Page
    // ==========================

    details: {
      overview:
        "Foodies is a multi-vendor restaurant ordering platform that connects customers with restaurants through a seamless digital experience. Customers can browse restaurants, place orders, complete secure payments, and monitor their order history, while restaurant owners manage menus, incoming orders, withdrawals, and business operations from their own dashboard.",

      challenges:
        "Building a system that supports multiple restaurants, separate user roles, secure authentication, online payments, and real-time order management required careful database design and scalable backend architecture. Maintaining a clean user experience while handling complex business logic was another major challenge.",

      process:
        "The project started with database planning and role-based authentication. Customer and restaurant dashboards were developed independently, followed by payment integration using Stripe. After implementing menu management, ordering, and withdrawal functionality, extensive testing and performance optimization were completed before deployment.",

      timeline: "10 Weeks",

      img:"/images/foodies.png",

      liveUrl: "",

      githubUrl: "",

      features: [
        "Customer Dashboard",
        "Restaurant Dashboard",
        "Stripe Payments",
        "Menu Management",
        "Order Tracking",
        "Withdrawal System",
        "Role-Based Authentication",
      ],
    },
  },

  {
    // ==========================
    // Basic Card Information
    // ==========================
    id: 3,
    slug: "tax-estimation",
    title: "Tax Estimation",
    category: "Business Automation",
    image: "/images/tax.png",
    description:
      "A tax automation system that calculates tax based on business sales and financial data.",

    technologies: [
      "Next.js",
      "SQL",
      "Node.js",
      "REST API",
    ],

    href: "/featureProduct/tax-estimation",

    // ==========================
    // Project Detail Page
    // ==========================

    details: {
      overview:
        "Tax Estimation is a business automation solution developed to simplify tax calculations by processing sales and financial records automatically. The system minimizes manual calculations, reduces errors, and helps businesses estimate tax liabilities quickly and accurately.",

      challenges:
        "The biggest challenge was implementing accurate tax calculation logic while ensuring flexibility for different financial scenarios. Another important aspect was creating an interface that presents complex financial information in a simple and understandable manner.",

      process:
        "Development started with gathering taxation requirements and designing the database structure. The backend calculation engine was implemented first, followed by REST APIs and the frontend dashboard. Finally, testing was performed using multiple financial datasets to validate calculation accuracy.",

      timeline: "6 Weeks",

       img:"/images/tax.png",

      liveUrl: "",

      githubUrl: "",

      features: [
        "Automated Tax Calculation",
        "Sales Analysis",
        "Financial Dashboard",
        "REST API Integration",
        "SQL Database",
        "Responsive Interface",
      ],
    },
  },
];

 
 
 
 
export const badges = [
  {
    icon: Clock3,
    title: "Response within 24 Hours",
  },
  {
    icon: Globe,
    title: "Remote • Worldwide",
  },
  {
    icon: BadgeCheck,
    title: "Free Initial Consultation",
  },
];


// used on projecthighlights component
export const highlights = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate workflows and streamline business operations with intelligent AI-powered solutions.",
  },
  {
    icon: Globe,
    title: "Modern Web Applications",
    description:
      "Fast, scalable, and responsive web applications built with modern technologies.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with secure checkout, product management, and seamless shopping.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Powerful dashboards that simplify management, analytics, and business operations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Reliable authentication systems with protected routes and secure user management.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Secure payment experiences with smooth checkout flows and trusted transaction handling.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Beautiful user experiences optimized for desktops, tablets, and mobile devices.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimized applications focused on speed, clean architecture, and long-term scalability.",
  },
];



// projectIncludes component
export const includes = [
  {
    title: "Clean & Maintainable Code",
    description:
      "Well-structured, scalable code following modern development best practices.",
  },
  {
    title: "Fully Responsive Design",
    description:
      "Optimized layouts that provide a seamless experience on every device.",
  },
  {
    title: "SEO-Friendly Structure",
    description:
      "Built with search engine best practices to improve visibility and discoverability.",
  },
  {
    title: "High Performance",
    description:
      "Fast loading speeds, optimized assets, and smooth user interactions.",
  },
  {
    title: "Secure Development",
    description:
      "Authentication, validation, and security are considered from day one.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Designed to grow with your business and support future enhancements.",
  },
  {
    title: "Modern UI/UX",
    description:
      "Clean, intuitive interfaces focused on usability and user experience.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent performance across all modern browsers and platforms.",
  },
  {
    title: "Quality Assurance",
    description:
      "Every project is tested thoroughly before delivery for reliability and stability.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Continued support for improvements, updates, and future growth.",
  },
];



// for service 
export const services = [
  {
    title: "Web Development",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    description:
      "Custom websites and web applications built for speed, scalability, and business growth.",

    features: [
      "Business Websites",
      "Landing Pages",
      "E-Commerce Stores",
      "Custom Dashboards",
      "Full Stack Applications",
    ],
  },

  {
    title: "AI Automation",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
    description:
      "Reduce manual work using AI-powered workflows, assistants, and automation systems.",

    features: [
      "AI Chatbots",
      "Workflow Automation",
      "Customer Support AI",
      "Lead Qualification",
      "AI Agents",
    ],
  },

  {
    title: "UI / UX Design",
    icon: Palette,
    color: "from-pink-500 to-orange-500",
    description:
      "Modern interfaces focused on user experience, engagement, and conversion.",

    features: [
      "Responsive Design",
      "Wireframing",
      "Landing Pages",
      "Interactive Prototypes",
      "Design Systems",
    ],
  },

  {
    title: "SEO & Performance",
    icon: Search,
    color: "from-green-500 to-emerald-500",
    description:
      "Optimize your website for better rankings, lightning-fast loading, and improved visibility.",

    features: [
      "Technical SEO",
      "Performance Optimization",
      "Core Web Vitals",
      "Accessibility",
      "Analytics Setup",
    ],
  },
];

//for serviceHero componsneet
export const stats = [
  {
    icon: Code2,
    title: "Modern Development",
    value: "Web Apps",
  },
  {
    icon: Bot,
    title: "AI Automation",
    value: "Smart Solutions",
  },
  {
    icon: Rocket,
    title: "Performance",
    value: "Fast & Scalable",
  },
];





//for process in servcie folder
export const process = [
  {
    step: "01",
    title: "Discovery",
    icon: MessageSquare,
    description:
      "We begin by understanding your business, goals, audience, and project requirements. Every successful project starts with a clear strategy.",
  },
  {
    step: "02",
    title: "Planning & Design",
    icon: PenTool,
    description:
      "We create the structure, user experience, and visual design before development begins, ensuring everything aligns with your vision.",
  },
  {
    step: "03",
    title: "Development",
    icon: Code2,
    description:
      "Using modern technologies, we build fast, scalable, and secure digital solutions with clean, maintainable code.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    icon: Rocket,
    description:
      "After testing and deployment, we continue optimizing your solution so it performs reliably and supports long-term business growth.",
  },
];






//for technoligysection in service folder
export const techStacks = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "from-cyan-500 to-blue-500",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-indigo-500 to-violet-500",
    tech: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    color: "from-pink-500 to-fuchsia-500",
    tech: [
      "OpenAI",
      "AI Agents",
      "Workflow Automation",
      "Chatbots",
      "Prompt Engineering",
    ],
  },
  {
    title: "Deployment & Tools",
    icon: Wrench,
    color: "from-emerald-500 to-green-500",
    tech: [
      "Git & GitHub",
      "Vercel",
      "Stripe",
      "Cloud Deployment",
      "Performance Optimization",
    ],
  },
];





//for chosse in servise folder
export const reasons = [
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "We value your time and follow a structured workflow to deliver projects efficiently without compromising quality.",
  },
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description:
      "Every project is built using modern best practices, making it easier to maintain, scale, and improve over time.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Security",
    description:
      "We prioritize fast loading, responsive experiences, and secure development to ensure reliable results.",
  },
  {
    icon: MessageSquareMore,
    title: "Transparent Communication",
    description:
      "You'll stay informed throughout the project with clear updates, collaboration, and honest feedback.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Solutions",
    description:
      "We don't just build websites—we create digital solutions designed to support your business goals and long-term growth.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end at launch. We're here to help with improvements, maintenance, and future enhancements.",
  },
];







// for feature product.tsx
export const pro = [
  {
    id: 1,
    title: "Urban Pulse",
    category: "Full Stack E-Commerce",
    image: "/images/urban.png",
    description:
      "A modern e-commerce platform featuring secure authentication, inventory management, product management, admin dashboard, Stripe payments, analytics, and responsive shopping experience.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind",
    ],
  },

  {
    id: 2,
    title: "Foodies",
    category: "Restaurant Ordering Platform",
    image: "/images/foodies.png",
    description:
      "A restaurant ordering platform where customers browse restaurants, place orders, pay securely using Stripe, while restaurant owners manage menus, orders, earnings, and withdrawals.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind",
    ],
  },

  {
    id: 3,
    title: "Laboratory Platform",
    category: "Business Website",
    image: "/images/lab.png",
    description:
      "A professional laboratory business platform focused on showcasing products, improving online presence, and simplifying customer inquiries.",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
    ],
  },

  {
    id: 4,
    title: "TaxCal",
    category: "Utility Tool",
    image: "/images/tax.png",
    description:
      "A lightweight tax calculator that instantly calculates taxes using a clean interface and responsive design.",
    tech: [
      "React",
      "Tailwind",
      "JavaScript",
    ],
  },
];





// for process timelin.tsx
export const steps = [
  {
    number: "01",
    title: "Discovery",
    icon: Search,
    description:
      "We start by understanding your business, goals, audience, and project requirements. Every successful solution begins with asking the right questions.",
  },
  {
    number: "02",
    title: "Planning",
    icon: ClipboardList,
    description:
      "We define the project structure, user experience, features, milestones, and delivery roadmap before development begins.",
  },
  {
    number: "03",
    title: "Development",
    icon: Code2,
    description:
      "Using modern technologies and clean architecture, we build a fast, scalable, and responsive solution tailored to your needs.",
  },
  {
    number: "04",
    title: "Testing",
    icon: ShieldCheck,
    description:
      "Every feature is carefully tested for performance, responsiveness, SEO, accessibility, and reliability before launch.",
  },
  {
    number: "05",
    title: "Launch",
    icon: Rocket,
    description:
      "After final approval, we deploy your project, connect your domain, optimize performance, and make everything live.",
  },
  {
    number: "06",
    title: "Support",
    icon: HeartHandshake,
    description:
      "Our relationship doesn't end after launch. We're available for updates, improvements, maintenance, and future growth.",
  },
];



// for technoligies in process frolder

 export const technologies = [
  {
    icon: Atom,
    title: "React",
    description: "Modern UI development.",
  },
  {
    icon: Layers,
    title: "Next.js",
    description: "Fast & SEO-friendly apps.",
  },
  {
    icon: Wind,
    title: "Tailwind CSS",
    description: "Beautiful responsive UI.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Safer scalable code.",
  },
  {
    icon: Server,
    title: "Node.js",
    description: "Powerful backend services.",
  },
  {
    icon: Cpu,
    title: "Express.js",
    description: "Fast REST APIs.",
  },
  {
    icon: Database,
    title: "MongoDB",
    description: "Flexible NoSQL database.",
  },
  {
    icon: Sparkles,
    title: "Framer Motion",
    description: "Smooth animations.",
  },
  {
    icon: CreditCard,
    title: "Stripe",
    description: "Secure online payments.",
  },
  {
    icon: Globe,
    title: "OpenAI API",
    description: "AI-powered automation.",
  },
  {
    icon: GitBranch,
    title: "Vercel",
    description: "Fast deployment.",
  },
];




// for whyProcess.tsx in process folder
export const features = [
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Stay informed throughout every stage with clear updates, honest timelines, and open collaboration.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient Delivery",
    description:
      "A structured workflow helps us move quickly while maintaining quality and keeping your project on track.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Every feature is carefully tested to ensure reliability, responsiveness, and an excellent user experience.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "Our support doesn't stop at launch. We're here to help your business grow with future improvements.",
  },
];





//choseUs.tsx 
export const feat = [
  {
    icon: Cpu,
    title: "Modern Technologies",
    description:
      "We build with Next.js, React, AI, Node.js, and other modern technologies for fast, scalable applications.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "Every project starts by understanding your business goals so we can build solutions that truly fit your needs.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimized code, responsive design, and performance-focused development ensure an excellent user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Security and stability are built into every project to keep your business running smoothly.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Our solutions are designed to grow alongside your business without sacrificing performance.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "We continue supporting your business after launch with updates, improvements, and technical assistance.",
  },
];





//corevalues.tsx
export const values = [
  {
    icon: Gem,
    title: "Quality First",
    description:
      "Every project is built with clean code, modern architecture, and attention to detail to ensure long-term reliability.",
  },
  {
    icon: MessageSquareMore,
    title: "Transparent Communication",
    description:
      "We believe great projects come from clear communication, regular updates, and honest collaboration.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Focused",
    description:
      "We don't just build websites—we create digital solutions that support your business goals and growth.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end after launch. We're here to support, improve, and help your business evolve.",
  },
];




// for sservice.tsx
export const serve = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites and web applications built using the latest technologies.",
    features: [
      "Business Websites",
      "E-Commerce Stores",
      "Custom Web Applications",
    ],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate repetitive work and improve productivity with AI-powered solutions tailored for your business.",
    features: [
      "AI Agents",
      "Workflow Automation",
      "AI Integrations",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description:
      "Helping businesses establish a stronger online presence and scale with confidence.",
    features: [
      "SEO Optimization",
      "Sales Strategy",
      "Meta Adds",
    ],
  },
];






export default projects