
export const resumeData = {
  name: "Samruddhi Bansode",
  role: "Software Engineer | RAG · Computer Vision · Backend · AWS",
  location: "Mumbai, India",
  email: "samruddhipb@gmail.com",
  phone: "+91-8850235898",
  github: "github.com/Samruddhi2003github",
  linkedin: "linkedin.com/in/samruddhi-bansode-030015264",
  resumeUrl: "/Samruddhi_Bansode_Software_Engineer_Resume.pdf",
  summary: "I currently work at Aurionpro, where I contribute to cloud infrastructure and deployment workflows. My background started in Java backend development and gradually expanded into machine learning systems, computer vision projects, and RAG-based applications. I enjoy building practical ML systems that can move beyond notebooks into production-style environments.",
  
  whatIBring: [
    {
      title: "ML Systems & RAG",
      description: "Building production-style RAG pipelines with semantic search, reranking, and secure access control."
    },
    {
      title: "Computer Vision",
      description: "Developing robust detection pipelines using YOLOv8, OpenCV, and EasyOCR for real-world monitoring."
    },
    {
      title: "Cloud & Infrastructure",
      description: "Automating AWS-based infrastructure, log archival, and CI/CD pipelines for scalable deployments."
    }
  ],

  experience: [
    {
      company: "Aurionpro Solutions Ltd",
      role: "Engineer – Cloud Infrastructure & Automation",
      period: "Sep 2025 – Present",
      location: "Navi Mumbai, India",
      bullets: [
        "Designed and automated log archival pipelines using AWS CLI, EventBridge, and S3 lifecycle policies for cost-optimal data retention.",
        "Automated monitoring and alerting workflows integrating CloudWatch and SNS for infrastructure health tracking.",
        "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions to streamline application deployments.",
        "Configured and managed IAM policies, security groups, and VPC components to ensure secure cloud environments.",
        "Supporting containerization and deployment workflows for high-concurrency microservices."
      ]
    },
    {
      company: "Aurionpro Solutions Ltd",
      role: "Software Developer Trainee (Backend)",
      period: "Jun 2025 – Sep 2025",
      location: "Navi Mumbai, India",
      bullets: [
        "Developed core backend modules using Java Spring Boot across 4 key internal projects.",
        "Implemented SOLID principles and MVC architecture to ensure maintainable and scalable codebases.",
        "Designed and optimized REST APIs and relational database schemas with MySQL.",
        "Built robust role-based access control (RBAC) systems for internal platforms.",
        "Transitioned to cloud infrastructure team to focus on technical system reliability."
      ]
    }
  ],

  projects: [
    {
      title: "FinAI — Financial RAG Platform",
      type: "AI/ML",
      year: "2025",
      image: "/projects/finai_dashboard.png", 
      tech: ["Python", "FastAPI", "LangChain", "FAISS", "FlashRank", "Docker", "JWT"],
      description: "Built a production-style RAG system that lets financial analysts query unstructured financial documents using semantic search instead of keyword matching.",
      architecture: "Two-stage retrieval pipeline: FAISS vector search followed by FlashRank cross-encoder reranking for high-precision grounding. Includes secure JWT-based RBAC.",
      deployment: "Dockerized deployment with FastAPI backend and Streamlit dashboard interface.",
      results: "Achieved 0.9888 relevance score on semantic search, significantly reducing LLM hallucination risk through grounded context.",
      screenshots: [
        "/projects/finai_dashboard.png",
        "/projects/finai_search_result.png",
        "/projects/finai_index_success.png",
        "/projects/finai_register_success.png"
      ],
      highlights: [
        "Semantic search over complex financial PDFs",
        "Two-stage retrieval: FAISS + FlashRank Reranker",
        "Secure multi-role access (Admin/Analyst/Auditor) via JWT",
        "API-based question answering with grounded truth"
      ],
      github: "https://github.com/Samruddhi2003github/financial-document-rag-ai",
      caseStudy: "#"
    },
    {
      title: "MediMonitor Plus",
      type: "B.E. Major Project",
      year: "2025",
      image: "/projects/medimonitor_diagnosis_ui.png", 
      tech: ["Python", "TensorFlow", "ResNet-50", "Scikit-learn", "Streamlit"],
      description: "Intelligent health assessment platform predicting diabetes, liver disease, and pneumonia from patient clinical data and chest X-ray images.",
      architecture: "Unified multi-model ML pipeline handling 4 disease types. Uses ResNet-50 (Transfer Learning) for image-based pneumonia classification.",
      deployment: "Multi-page Streamlit application providing diagnostic overviews and specialist recommendations.",
      results: "Pneumonia model achieved 68.21% confidence on bacterial detection; provides holistic patient treatment advice.",
      screenshots: [
        "/projects/medimonitor_diagnosis_ui.png",
        "/projects/medimonitor_overview.png",
        "/projects/medimonitor_diabetes_1.png",
        "/projects/medimonitor_diabetes_result.png",
        "/projects/medimonitor_liver_result.png",
        "/projects/medimonitor_pneumonia_1.png",
        "/projects/medimonitor_pneumonia_2.png",
        "/projects/medimonitor_advice.png"
      ],
      highlights: [
        "ResNet-50 for Bacterial/Viral pneumonia detection from X-rays",
        "Random Forest & Logistic Regression for clinical diagnosis",
        "Integrated nearby specialist recommendations via location",
        "Comprehensive disease overviews and precaution guides"
      ],
      github: "https://github.com/Samruddhi2003github",
      caseStudy: "#"
    },
    {
      title: "Traffic Safety CV",
      type: "Computer Vision",
      year: "2024",
      image: "/projects/helmet_1.png", 
      tech: ["Python", "YOLOv8", "OpenCV", "EasyOCR"],
      description: "Computer vision system that automatically detects helmet violations from live camera feeds and flags non-compliant riders with bounding box annotations.",
      architecture: "Custom-trained YOLOv8 model for helmet and vehicle detection, with localized license plate region detection.",
      deployment: "Optimized for real-time video frame processing with high-confidence detections.",
      results: "Achieved 0.98 confidence on bike detection; localizes violation regions for automated follow-up.",
      screenshots: ["/projects/helmet_1.png", "/projects/helmet_2.png", "/projects/helmet_3.png"],
      highlights: [
        "Real-time helmet presence detection with YOLOv8",
        "Automatic localization of license plate regions",
        "High-confidence bike and rider identification",
        "Processed live frame-by-frame traffic monitoring"
      ],
      github: "https://github.com/Samruddhi2003github",
      caseStudy: "#"
    },
    {
      title: "Bitcoin Price Prediction",
      type: "Machine Learning",
      year: "2024",
      image: "/projects/bitcoin_result.png", 
      tech: ["Python", "Random Forest", "NLTK", "Pandas", "Scikit-learn"],
      description: "Forecasting model combining historical OHLCV market data with Wikipedia edit-based sentiment analysis to predict directional price shifts.",
      architecture: "Merged 9+ years of Yahoo Finance market data with sentiment scores extracted using NLTK from Wikipedia edit frequency.",
      deployment: "Iteratively validated through backtesting on 5,200+ rows of historical data.",
      results: "Achieved precision score of 0.52 on backtesting; identified strong correlations between edit frequency and market volatility.",
      screenshots: ["/projects/bitcoin_architecture.png", "/projects/bitcoin_result.png"],
      highlights: [
        "Precision score of 0.5207 on real market backtesting",
        "Merged financial time-series with NLP-based sentiment signals",
        "Trained on 9+ years (2014–2023) of historical Bitcoin data",
        "Iterative error evaluation for trend analysis"
      ],
      github: "https://github.com/Samruddhi2003github",
      caseStudy: "#"
    },
    {
      title: "DevOps CI/CD — Spring Boot Pipeline",
      type: "Capstone Project",
      year: "2024",
      image: "/projects/devops_jenkins.png", 
      tech: ["Java", "Spring Boot", "Jenkins", "Terraform", "Maven", "AWS EC2", "Apache Tomcat", "Linux"],
      description: "Developed and deployed a complete CI/CD pipeline for a Spring Boot application using Jenkins, Maven, Terraform, AWS EC2, and Apache Tomcat. Automated the build, infrastructure provisioning, and deployment process using Infrastructure as Code (IaC) and DevOps practices.",
      architecture: "Jenkins-driven CI/CD pipeline with Terraform-managed AWS infrastructure and Apache Tomcat deployment on EC2.",
      deployment: "Infrastructure automated via Terraform; application automated build and deployment via Jenkins.",
      results: "Successfully automated the build and deployment lifecycle; infrastructure provisioning reduced setup overhead using Terraform modules.",
      screenshots: [
        "/projects/devops_jenkins.png",
        "/projects/devops_tomcat.png"
      ],
      highlights: [
        "Built automated CI/CD pipeline using Jenkins",
        "Automated AWS EC2 infrastructure provisioning using Terraform",
        "Integrated Maven for build and dependency management",
        "Deployed Spring Boot application on Apache Tomcat server",
        "Configured Linux server commands and deployment workflow",
        "Managed source code using GitHub"
      ],
      github: "https://github.com/Samruddhi2003github/Devops_Project",
      caseStudy: "#"
    }
  ],
  
  skills: {
    ai_ml: ["RAG Pipelines", "LangChain", "Vector DBs", "Computer Vision", "OpenCV", "YOLOv8", "TensorFlow", "FAISS"],
    backend_engineering: ["FastAPI", "Spring Boot", "REST APIs", "SQL", "JWT"],
    cloud_devops: ["AWS (EC2, S3, ECS, IAM)", "Docker", "Jenkins", "GitHub Actions", "Terrafom"]
  },
  
  education: [
    {
      institution: "Terna Engineering College",
      degree: "B.E. in Artificial Intelligence & Data Science",
      period: "2021 – 2025",
      grade: "CGPA: 8.48 / 10",
      courses: ["Machine Learning", "Deep Learning", "Cloud Computing", "DSA", "Statistics"]
    }
  ],
  
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Solutions Architect Associate (Preparing)",
    "Microsoft Career Essentials in Generative AI",
    "Google Cloud Intro to Generative AI"
  ]
};
