import { FaEnvelope, FaPhone, FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";

// Skill sections (category title + list of skills)
export const SKILL_SECTIONS = [
  {
    title: "AI/ML",
    skills: [
      "Gen AI", "LLM", "Agentic AI", "RAG pipeline", "NLP (BART, MarianMT, VADER)",
      "BERT", "GAN", "CNN", "DNN", "CrewAI", "OCR (Tesseract)",
      "Face Recognition (OpenCV, Dlib, VGGFace2)", "Fraud Detection", "Attention Tracking",
      "Student Behavior Modeling", "Lecture Summarization", "Emotion Analysis", "AutoGen",
    ],
  },
  {
    title: "DL/ML Frameworks",
    skills: [
      "TensorFlow", "TensorFlow Lite", "PyTorch", "Scikit-learn", "Hugging Face Transformers",
      "XGBoost", "MLflow", "Kubeflow", "Gensim", "spaCy", "NumPy", "Pandas",
    ],
  },
  {
    title: "MLOps & DevOps (CI/CD)",
    skills: [
      "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins",
      "FastAPI", "Flask", "Django", "Prometheus", "Grafana", "Nginx", "Airflow",
    ],
  },
  {
    title: "Cloud & Infra",
    skills: [
      "AWS SageMaker", "AWS Lambda", "AWS Bedrock", "Step Functions", "EC2", "S3", "RDS",
      "Bedrock", "API Gateway", "IAM", "Azure", "GCP", "Serverless Architecture",
      "Encrypted Storage", "Secure API Deployment",
    ],
  },
  {
    title: "Data & Storage",
    skills: [
      "SQL", "PostgreSQL", "MongoDB", "Apache Spark", "DataBricks", "FAISS", "Pinecone (HNSW)",
      "Snowflake SQL", "Data Compression", "Vector Search", "OpenSearch",
      "Privacy-Preserving Logging", "Data De-duplication",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Go", "C#", "Golang", "C++"],
  },
  {
    title: "Web Development",
    skills: [
      "ReactJS", "Next.js", "Express.js", "Flask", "Django", "REST APIs", "GraphQL", "Vue",
      "Angular", "Astro", "Gatsby", "WebSocket", "Tailwind CSS", "Redux", "Redux-Saga",
      "HTML5", "CSS3", "SCSS", "styled-components", "Material-UI", "RxJS", "Ramda", "lodash", "FP",
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      "TDD", "BDD", "Pytest", "Cucumber.js", "Mocha", "Jest", "Cypress", "A/B Testing",
      "LLM Evaluation", "Unit & Integration Testing", "Agile", "Scrum", "Kanban",
    ],
  },
  {
    title: "Messaging & Streaming",
    skills: ["WebSocket", "RabbitMQ", "Apache Kafka", "gRPC"],
  },
] as const;

export const SOCIALS = [
  {
    name: "Gmail",
    icon: FaEnvelope,
    link: "liamrichardlewis9@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/lewis-liam-richard-85a8563ab",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/liamsmith413",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "React", image: "react.svg", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.svg", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.svg", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.svg", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.svg", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.svg", width: 80, height: 80 },
  { skill_name: "Material UI", image: "mui.svg", width: 80, height: 80 },
  { skill_name: "Vue", image: "vue.svg", width: 70, height: 70 },
  { skill_name: "GraphQL", image: "graphql.svg", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Python", image: "python.svg", width: 80, height: 80 },
  { skill_name: "FastAPI", image: "fastapi.svg", width: 70, height: 70 },
  { skill_name: "Flask", image: "flask.svg", width: 70, height: 70 },
  { skill_name: "Django", image: "django.svg", width: 70, height: 70 },
  { skill_name: "Node.js", image: "node.svg", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.svg", width: 80, height: 80 },
  { skill_name: "PostgreSQL", image: "postgresql.svg", width: 70, height: 70 },
  { skill_name: "MongoDB", image: "mongodb.svg", width: 40, height: 40 },
  { skill_name: "Apache Spark", image: "spark.svg", width: 70, height: 70 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "docker.svg", width: 70, height: 70 },
  { skill_name: "Kubernetes", image: "kubernetes.svg", width: 70, height: 70 },
  { skill_name: "Terraform", image: "terraform.svg", width: 70, height: 70 },
  { skill_name: "GitHub Actions", image: "github.svg", width: 70, height: 70 },
  { skill_name: "Jenkins", image: "jenkins.svg", width: 70, height: 70 },
  { skill_name: "Kubeflow", image: "kubeflow.svg", width: 70, height: 70 },
  { skill_name: "Airflow", image: "airflow.svg", width: 70, height: 70 },
  { skill_name: "Prometheus", image: "prometheus.svg", width: 70, height: 70 },
  { skill_name: "Grafana", image: "grafana.svg", width: 70, height: 70 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.svg", width: 60, height: 60 },
  { skill_name: "C++", image: "cpp.svg", width: 60, height: 60 },
  { skill_name: "C#", image: "csharp.svg", width: 60, height: 60 },
] as const;

export const EXPERIENCE = [
  {
    role: "Principal AI/ML Engineer",
    company: "HubSpot",
    location: "Remote",
    period: "09/2023 – 01/2026",
    summary:
      "Led AI-driven innovation across HubSpot CRM with LLMs, Gen AI, and agentic systems. Built scalable AI pipelines on AWS and Kubeflow; reduced response times by 45% and improved operational accuracy by 30%.",
    highlights: [
      "LLM-powered automation with GPT-4 Turbo and Hugging Face Transformers; 40% productivity gain.",
      "Agentic workflows with LangGraph; autonomous triage and CRM operations; 45% faster turnaround.",
      "BERT-based intent classification; 32% reduction in misclassification.",
      "Semantic search for CRM notes with FAISS and embeddings; 45% faster retrieval.",
      "Serverless AI pipelines (Lambda, Step Functions); 60% infrastructure cost reduction.",
      "MLOps with Kubeflow and MLflow; RAG and Pinecone tuning for GenAI chatbots.",
    ],
  },
  {
    role: "Software ML Engineer",
    company: "Proctorio",
    location: "Remote",
    period: "07/2019 – 08/2023",
    summary:
      "Contributed to KYC identity verification and IVDL platforms: document verification, face recognition, engagement monitoring, and LLM-powered tutoring.",
    highlights: [
      "KYC with OCR (Tesseract), face recognition (OpenCV, Dlib); 40% fewer manual checks.",
      "Fraud detection with TensorFlow and PyTorch; 35% improvement in KYC accuracy.",
      "LLM assistant for student helpdesk; vector-search grounding with Flask APIs.",
      "Lecture transcription (DeepSpeech), FAISS indexing, BART summarization; 40% faster review.",
      "Multi-step agentic study assistant with LangGraph; multi-language support (MarianMT).",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Quizlet",
    location: "",
    period: "06/2018 – 06/2019",
    summary: "Early career role in software engineering.",
    highlights: [],
  },
] as const;

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Pennsylvania",
  location: "Pennsylvania",
  year: "2018",
} as const;

export type ProjectEntry = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const PROJECTS: ProjectEntry[] = [
  {
    title: "GenAI-Powered CRM Workflows",
    description:
      "Integrated GPT-4 Turbo and LangChain into HubSpot CRM for AI-powered document summarization, assistant recommendations, and autonomous agent workflows. LangGraph agents handle triage, compliance validation, and personalized CRM actions—reducing manual effort by 45%.",
    image: "/projects/project-1.png",
  },
  {
    title: "RAG & Vector Search Pipelines",
    description:
      "Tuned Pinecone with hybrid scoring and chunking strategies for fast, accurate retrieval in RAG pipelines. Semantic search over CRM notes and activity history using FAISS and Hugging Face embeddings, cutting information retrieval time by 45% and improving LLM response precision.",
    image: "/projects/project-2.png",
  },
  {
    title: "Serverless AI & MLOps",
    description:
      "Designed scalable serverless AI pipelines with AWS Lambda, Step Functions, and API Gateway (60% cost reduction). Model versioning, CI/CD, and retraining with SageMaker, Kubeflow, MLflow, and Airflow; monitoring with Prometheus and Grafana for drift, latency, and fairness.",
    image: "/projects/project-3.png",
  },
];

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/yourprofile",
      },
      {
        name: "Email",
        icon: FaEnvelope,
        link: "mailto:your.email@gmail.com",
      },
      {
        name: "Phone",
        icon: FaPhone,
        link: "tel:+1(347)646-7599",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/yourusername",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
