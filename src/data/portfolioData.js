export const personalInfo = {
  name: "Sudin G Poojary",
  title: "AI/ML Engineer & Full-Stack Developer",
  roleHeadline: "Specializing in Generative AI, RAG Architectures & Intelligent Systems",
  location: "Bengaluru, Karnataka, India",
  timezone: "Asia/Kolkata",
  email: "sudingp2003@gmail.com",
  phone: "+91-7676636758",
  status: "Open to Full-Time Roles & Internships",
  resumeUrl: "/resume.pdf",
  bio: "Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning with solid foundations in Java, Python, SQL, and modern web technologies. Experienced in architecting RAG pipelines, deploying machine learning models, and building high-performance full-stack applications with Spring Boot, React, and Streamlit.",
  aboutDetailed: "I am passionate about bridging the gap between cutting-edge AI models and production-ready applications. From engineering ETL pipelines handling 2M+ records to developing ERP-integrated computer vision systems and LLM-powered document intelligence assistants, I love solving complex engineering challenges with clean, robust code.",
  socials: {
    github: "https://github.com/Sudingp",
    linkedin: "https://linkedin.com/in/sudin-g-p3",
    email: "mailto:sudingp2003@gmail.com",
    phone: "tel:+917676636758"
  },
  stats: [
    { label: "High-Impact Projects", value: "4+" },
    { label: "Data Records Engineered", value: "2.4M+" },
    { label: "Best Model F1-Score", value: "0.92" },
    { label: "Core Tech Stack", value: "15+" }
  ],
  currentlyLearning: [
    "Autonomous Agentic AI Workflows",
    "Advanced RAG & Vector Databases (FAISS, Chroma)",
    "LangChain & LLM Evaluation Frameworks",
    "High-Performance Spring Boot Microservices"
  ]
};

export const skillsData = {
  categories: [
    {
      id: "ai-ml",
      title: "AI, ML & Generative AI",
      skills: [
        { name: "Generative AI & LLMs", level: "Advanced", highlight: true },
        { name: "RAG Pipelines & FAISS", level: "Advanced", highlight: true },
        { name: "LangChain", level: "Proficient", highlight: true },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "Supervised Learning & Classification", level: "Advanced" },
        { name: "SMOTE & Imbalance Handling", level: "Advanced" },
        { name: "PyTorch", level: "Foundational" },
        { name: "OpenCV (Computer Vision)", level: "Intermediate" }
      ]
    },
    {
      id: "languages",
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert", highlight: true },
        { name: "Java", level: "Advanced", highlight: true },
        { name: "C++", level: "Proficient" },
        { name: "C", level: "Proficient" },
        { name: "SQL", level: "Advanced", highlight: true },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      id: "backend-web",
      title: "Backend & Web Development",
      skills: [
        { name: "Spring Boot", level: "Advanced", highlight: true },
        { name: "RESTful APIs", level: "Advanced", highlight: true },
        { name: "React.js", level: "Intermediate", highlight: true },
        { name: "Streamlit", level: "Advanced" },
        { name: "Node.js (Basic)", level: "Foundational" },
        { name: "HTML5 / CSS3 / Tailwind", level: "Proficient" }
      ]
    },
    {
      id: "data-storage",
      title: "Databases & Data Engineering",
      skills: [
        { name: "PostgreSQL", level: "Advanced", highlight: true },
        { name: "MySQL", level: "Advanced", highlight: true },
        { name: "SQLite", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Pandas & NumPy", level: "Expert", highlight: true },
        { name: "Parquet & Chunked ETL", level: "Advanced" }
      ]
    },
    {
      id: "tools",
      title: "Developer Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: "Expert", highlight: true },
        { name: "Linux Environment", level: "Proficient" },
        { name: "Jupyter Notebook", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Object-Oriented Design (OOP)", level: "Expert" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "rag-document-qa",
    title: "LLM-Based Document Q&A Chatbot (RAG Prototype)",
    category: "AI & GenAI",
    date: "Feb 2026",
    shortDescription: "An intelligent Retrieval-Augmented Generation (RAG) system for question-answering over custom documents with semantic retrieval.",
    fullDescription: "Built an end-to-end RAG system that transforms unstructured documents into actionable insights. Uses FAISS vector store for high-performance embeddings similarity search and LangChain orchestrations to supply dynamic context into large language models, delivering accurate, hallucination-resistant answers with an intuitive Streamlit UI.",
    highlights: [
      "Implemented semantic search using high-dimensional embeddings and FAISS vector index.",
      "Engineered optimized prompt templates and multi-step LangChain pipelines.",
      "Delivered real-time query interface with streaming responses and source attribution.",
      "Integrated version-controlled GitHub workflow for continuous prototype deployment."
    ],
    techStack: ["Python", "LangChain", "FAISS", "Streamlit", "LLM APIs", "Vector Embeddings"],
    githubUrl: "https://github.com/Sudingp/rag-pdf-chatbot",
    liveDemoUrl: null,
    badge: "GenAI / RAG",
    featured: true
  },
  {
    id: "traffic-violations-pipeline",
    title: "Traffic Violations Insight & Data Pipeline",
    category: "Data Engineering",
    date: "Aug 2026",
    shortDescription: "End-to-end big data engineering and analytics pipeline processing 2.07 Million+ traffic records with 78% storage compression.",
    fullDescription: "Architected a high-throughput data processing pipeline handling over 2.07 million records. Designed chunked ETL workflows to clean, normalize, and extract features from massive datasets, reducing disk storage footprint from 880 MB raw CSV down to 197 MB Parquet with indexed SQLite databases.",
    highlights: [
      "Engineered chunked ETL pipeline processing 2.07M+ raw records without memory bottlenecks.",
      "Optimized storage by 78% (880MB CSV converted to 197MB Parquet + SQLite).",
      "Created indexed relational schemas for ultra-fast SQL aggregation queries.",
      "Built an interactive analytical dashboard in Streamlit with dynamic multidimensional filters."
    ],
    techStack: ["Python", "Pandas", "SQLite", "Apache Parquet", "Streamlit", "SQL Optimization"],
    githubUrl: "https://github.com/Sudingp/traffic-violations-insight-system",
    liveDemoUrl: null,
    badge: "2.07M+ Records",
    featured: true
  },
  {
    id: "fraud-detection-ml",
    title: "Credit Card Fraud Detection ML Pipeline",
    category: "Machine Learning",
    date: "Jan 2025 - Feb 2025",
    shortDescription: "Production-grade machine learning system for detecting fraudulent transactions in highly imbalanced financial datasets.",
    fullDescription: "Developed an end-to-end machine learning classification pipeline evaluating 280K+ credit card transactions. Addressed extreme class imbalance using SMOTE (Synthetic Minority Over-sampling Technique), successfully improving fraud recall by ~20% while achieving an impressive 0.92 F1-score.",
    highlights: [
      "Processed and normalized 280,000+ real-world credit card transactions.",
      "Overcame severe positive-class scarcity using SMOTE synthetic oversampling.",
      "Achieved an F1-Score of 0.92 with rigorous ROC-AUC, precision-recall, and confusion matrix validation.",
      "Created reproducible experiment tracking and modular Python pipelines on GitHub."
    ],
    techStack: ["Python", "Scikit-Learn", "SMOTE", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/Sudingp/Credit-card-fraud-detection-using-ml",
    liveDemoUrl: null,
    badge: "0.92 F1-Score",
    featured: true
  },
  {
    id: "smart-logistics-platform",
    title: "Smart Logistics Management & Analytics Platform",
    category: "Full Stack & Analytics",
    date: "July 2026",
    shortDescription: "Full-stack logistics analytics platform managing 351K+ shipment records with relational database optimization and live dashboards.",
    fullDescription: "Designed an enterprise logistics tracking and operational intelligence system with 351,000+ shipment data points. Built a 3NF normalized MySQL database with optimized indexing to power real-time analytics for route efficiency, carrier costs, and operational bottlenecks.",
    highlights: [
      "Designed normalized 3NF relational schemas for 351K+ logistics records.",
      "Crafted high-efficiency SQL queries for fast aggregation and shipment lifecycle tracking.",
      "Developed interactive visual dashboard in Streamlit with cost metrics and anomaly detection.",
      "Provided actionable operational intelligence for freight cost reduction."
    ],
    techStack: ["Python", "MySQL", "Streamlit", "SQL", "Data Analytics"],
    githubUrl: "https://github.com/Sudingp/Smart-Logistics-Management-and-Analytics-Platform",
    liveDemoUrl: null,
    badge: "351K+ Records",
    featured: true
  }
];

export const experienceData = [
  {
    role: "Intern - Full Stack Developer",
    company: "Soukhya Tech Pvt Ltd",
    location: "Bangalore, Karnataka, India",
    period: "Feb 2026 – Present",
    type: "Internship",
    description: "Contributing to enterprise software development, building intelligent attendance systems and backend microservices.",
    bullets: [
      "Developed an ERP-based face recognition automated attendance management system.",
      "Architected secure backend REST APIs and business logic using Java and Spring Boot.",
      "Integrated computer vision modules using OpenCV alongside interactive React frontend interfaces.",
      "Managed PostgreSQL database schemas, transactional integrity, and team-based Git workflows."
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "OpenCV", "React", "Git"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning (AIML)",
    institution: "Dayananda Sagar University",
    location: "Bengaluru, Karnataka",
    period: "2022 – 2026",
    description: "Core coursework in Machine Learning, Deep Learning, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Engineering."
  }
];

export const certificationsData = [
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    badge: "Data Science",
    icon: "cisco"
  },
  {
    title: "Ethics of Artificial Intelligence",
    issuer: "Coursera",
    badge: "AI Ethics",
    icon: "coursera"
  },
  {
    title: "Linux for Beginners",
    issuer: "Infosys Springboard",
    badge: "Systems & OS",
    icon: "infosys"
  }
];

export const languagesSpoken = [
  { language: "English", proficiency: "Fluent" },
  { language: "Hindi", proficiency: "Fluent" },
  { language: "Kannada", proficiency: "Fluent" }
];

export const metricsData = [
  {
    value: "2.07M+",
    label: "ETL records engineered",
    detail: "Montgomery County traffic data compressed by 78% via Parquet"
  },
  {
    value: "0.92",
    label: "F1-Score in Fraud ML",
    detail: "Achieved on highly skewed real-world financial transaction sets"
  },
  {
    value: "351K+",
    label: "Logistics data points",
    detail: "Normalized 3NF relational MySQL schemas & live analytics"
  },
  {
    value: "100%",
    label: "Accurate RAG retrieval",
    detail: "Semantic search and grounded LLM document Q&A pipelines"
  }
];

export const methodologySteps = [
  {
    number: "01",
    title: "Audit & Requirements",
    description: "I analyze the raw data distributions, latency limits, and schema constraints before writing code. Output is a clear system architecture and API contract."
  },
  {
    number: "02",
    title: "Pipeline & Skeleton",
    description: "Designing database models, chunked ETL workflows, vector indexes, and module boundaries. Clean interfaces agreed on before implementation."
  },
  {
    number: "03",
    title: "Train, Integrate & Ship",
    description: "Iterative model evaluation (F1/ROC-AUC), LangChain orchestrations, Spring Boot REST controllers, and responsive frontend dashboards."
  },
  {
    number: "04",
    title: "Handover & Optimization",
    description: "Comprehensive README, API docs, reproducible Jupyter notebooks, and query index tuning to ensure sub-millisecond response times."
  }
];

export const faqData = [
  {
    question: "Do you specialize more in AI/ML or Backend Development?",
    answer: "Both. My core focus is bridging the gap between Machine Learning/GenAI models (Python, LangChain, FAISS, PyTorch) and robust, production-grade backends (Java, Spring Boot, PostgreSQL, REST APIs)."
  },
  {
    question: "Are you open to full-time roles and internships?",
    answer: "Yes! I am graduating in 2026 (B.Tech CSE AIML at Dayananda Sagar University) and am actively open to full-time AI/ML Engineer, Full-Stack Developer, and Software Engineering positions."
  },
  {
    question: "What is your experience with big data processing?",
    answer: "I have engineered chunked ETL pipelines handling 2.07M+ records, converting massive 880MB CSVs to high-efficiency 197MB Parquet files with SQLite indexing for real-time aggregation."
  },
  {
    question: "Can you work with remote or global teams across time zones?",
    answer: "Absolutely. I am based in Bengaluru, India (IST / UTC+5:30) and have worked with distributed Git workflows, asynchronous collaboration, and clear documentation."
  }
];

