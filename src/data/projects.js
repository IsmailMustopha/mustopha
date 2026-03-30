export const projects = [
  {
    id: 1,
    title: "Full-Stack eCommerce Web App",
    description:
      "A scalable eCommerce platform with authentication, admin dashboard, payments, and rich product management.",

    images: [
      "/images/projects/project1.png",
      "/images/projects/project1_2.png",
      "/images/projects/project1_3.png",
      "/images/projects/project1_4.png",
    ],
    category: "Full Stack",

    technologies: [
      "Next.js 15",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "MUI",
      "Radix UI",
      "Cloudinary",
      "CKEditor 5",
      "Fluterwave",
    ],

    metrics: "Production-ready + scalable architecture",

    demoUrl: "https://e-store-nguf.vercel.app",
    githubUrl: "https://github.com/IsmailMustopha/E-Store",

    caseStudy: {
      overview:
        "A modern, production-ready eCommerce platform built with Next.js App Router, designed for performance, scalability, and seamless user experience.",

      problem:
        "Many eCommerce platforms struggle with performance, poor state management, and lack of scalability when handling large product data and user interactions.",

      solution:
        "Built a scalable full-stack architecture using modern tools like React Query for efficient data fetching, Redux Toolkit for state management, and optimized UI frameworks for performance and responsiveness.",

      features: [
        "User authentication with JWT",
        "Admin dashboard for product management",
        "Rich product descriptions using CKEditor",
        "Secure payment integration (Fluterwave)",
        "Optimized data fetching with React Query",
        "Global state management using Redux Toolkit",
        "Cloud-based image upload with Cloudinary",
        "Fully responsive and SEO-optimized UI",
      ],

      challenges: [
        "Managing complex global state across multiple features",
        "Optimizing API data fetching and caching",
        "Handling secure authentication and protected routes",
        "Integrating third-party services like payments and media storage",
      ],

      results:
        "Successfully built a scalable, production-grade eCommerce system with clean architecture, optimized performance, and real-world feature implementation.",
    },
  },
  {
    id: 2,
    title: "AI-Powered Food Delivery Web App",
    description:
      "A full-stack food delivery platform with real-time tracking, AI chat, and seamless checkout experience.",
    images: [
      "/images/projects/project2.png",
      "/images/projects/project2_2.png",
      "/images/projects/project2_3.png",
      "/images/projects/project2_4.png",
    ],
    category: "Full Stack",
    technologies: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Socket.io",
      "Leaflet",
      "Gemini API",
      "Framer Motion",
      "JWT",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Cloudinary",
      "Fluterwave",
    ],
    metrics: "Real-time system + AI integration",
    demoUrl: "http://item7-go.vercel.app",
    githubUrl: "https://github.com/IsmailMustopha/Item7_Go",
    caseStudy: {
      overview:
        "A modern food delivery web app that allows users to shop, place orders, and track deliveries in real-time with AI-powered communication.",

      problem:
        "Most food platforms lack real-time tracking and direct communication between users and delivery agents, leading to poor user experience.",

      solution:
        "Built a full-stack system with live tracking, WebSocket updates, and AI chat to create a seamless and interactive delivery experience.",

      features: [
        "Product listing and cart system",
        "Secure authentication with NextAuth",
        "Real-time delivery tracking (Leaflet)",
        "Live order updates using Socket.io",
        "AI chat between user & delivery agent",
        "Responsive UI with smooth animations",
      ],

      challenges: [
        "Handling real-time updates across users",
        "Synchronizing delivery location on the map",
        "Managing complex app state",
      ],

      results:
        "Delivered a scalable real-time application combining AI, maps, and modern UI/UX patterns.",
    },
  },
  {
    id: 3,
    title: "Full-Stack eCommerce Backend API",
    description:
      "A secure and scalable REST API powering the eCommerce platform with authentication, product management, orders, and payments.",

    images: [
      "/images/projects/project3.png",
      "/images/projects/project3_2.png",
      "/images/projects/project3_3.png",
      "/images/projects/project3_4.png",
      "/images/projects/project3_5.png",
    ],
    category: "Backend",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Fluter wave API",
      "Cloudinary",
      "Cookie Parser",
      // "Dotenv",
    ],

    metrics: "Secure + scalable REST API architecture",

    demoUrl: "",
    githubUrl: "https://github.com/IsmailMustopha/E-Store",

    caseStudy: {
      overview:
        "A robust backend system built for a full-stack eCommerce application, handling authentication, product management, orders, payments, and media uploads.",

      problem:
        "Most frontend applications lack a secure and scalable backend that can handle authentication, payments, and large-scale product data efficiently.",

      solution:
        "Designed and implemented a RESTful API using Express and MongoDB with secure authentication, structured controllers, and integration with third-party services like Fluter wave and Cloudinary.",

      features: [
        "User authentication with JWT and password hashing",
        "Role-based access control (User/Admin)",
        "Product CRUD operations",
        "Order creation and management system",
        "Payment integration with Fluter wave",
        "Image upload and management using Cloudinary",
        "Secure cookie-based sessions",
      ],

      challenges: [
        "Securing authentication and protecting API routes",
        "Handling payment verification flow correctly",
        "Managing file uploads efficiently with Cloudinary",
        "Structuring scalable controllers and routes",
      ],

      results:
        "Delivered a production-ready backend system that securely powers the full eCommerce platform with scalable architecture and real-world integrations.",
    },
  },
  {
    id: 4,
    title: "CRUD Note-Taking App (Vanilla JavaScript)",
    description:
      "A simple and interactive note-taking application built with vanilla JavaScript demonstrating core CRUD operations.",

    images: [
      "/images/projects/project4.png",
      "/images/projects/project4_2.png",
      "/images/projects/project4_3.png",
      "/images/projects/project4_4.png",
    ],

    category: "Frontend",

    technologies: ["HTML", "CSS", "JavaScript (Vanilla)"],

    metrics: "Beginner-friendly CRUD implementation",

    demoUrl: "https://note-making-six.vercel.app",
    githubUrl: "https://github.com/IsmailMustopha/note-making",

    caseStudy: {
      overview:
        "A beginner-friendly CRUD (Create, Read, Update, Delete) note-taking application built using pure HTML, CSS, and JavaScript to demonstrate core frontend development concepts without frameworks.",

      problem:
        "Many beginners struggle to understand how real-world applications handle data operations like creating, updating, and deleting content in a structured way.",

      solution:
        "Built a lightweight note-taking app using vanilla JavaScript to simulate real-world CRUD operations, focusing on DOM manipulation and state handling without external libraries.",

      features: [
        "Create and save notes dynamically",
        "Display list of saved notes in real time",
        "Delete notes instantly from UI",
        "Simple and responsive interface",
        "Pure JavaScript DOM manipulation",
      ],

      challenges: [
        "Managing dynamic DOM updates without frameworks",
        "Keeping UI state in sync with user actions",
        "Structuring reusable JavaScript logic for CRUD operations",
      ],

      results:
        "Successfully built a functional CRUD application that strengthens understanding of JavaScript fundamentals and DOM interaction.",
    },
  },
  {
    id: 5,
    title: "Restaurant Website (HTML, CSS & JavaScript)",
    description:
      "A responsive restaurant website with modern UI, interactive sections, and smooth user experience built using pure frontend technologies.",

    images: [
      "/images/projects/project5.png",
      "/images/projects/project5_2.png",
      "/images/projects/project5_3.png",
      "/images/projects/project5_4.png",
    ],
    category: "Frontend",

    technologies: ["HTML", "CSS", "JavaScript"],

    metrics: "Responsive UI + interactive components",

    demoUrl: "https://gilli-smoky.vercel.app",
    githubUrl: "https://github.com/IsmailMustopha/gilli",

    caseStudy: {
      overview:
        "A modern restaurant website built using HTML, CSS, and JavaScript, designed to showcase menu items, services, and brand identity with a clean and responsive user interface.",

      problem:
        "Small restaurants often lack an online presence or have outdated websites that do not provide a good user experience across devices.",

      solution:
        "Developed a responsive and visually appealing website that highlights menu offerings, improves accessibility, and enhances user engagement through interactive UI elements.",

      features: [
        "Responsive design for mobile and desktop",
        "Interactive navigation menu",
        "Hero section with call-to-action",
        "Menu display section",
        "Smooth scrolling and UI interactions",
        "Clean and modern layout",
      ],

      challenges: [
        "Achieving responsiveness across different screen sizes",
        "Structuring clean and maintainable CSS",
        "Implementing smooth UI interactions using vanilla JavaScript",
      ],

      results:
        "Successfully built a responsive and visually appealing restaurant website that demonstrates strong frontend fundamentals and UI design skills.",
    },
  },
];

export const categories = ["All", "Full Stack", "Frontend", "Backend"];
