"use client";

import {
  FaBrain,
  FaCloud,
  FaDatabase,
  FaCode,
  FaServer,
  FaCheckCircle,
  FaStream,
  FaFlask,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithub,
  SiJenkins,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiPrometheus,
  SiGrafana,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiApache,
  SiDatabricks,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiCsharp,
  SiGo,
  SiPytest,
  SiJest,
  SiCypress,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpenai,
  SiMlflow,
  SiApacheairflow,
  SiNginx,
  SiRabbitmq,
  SiApachekafka,
} from "react-icons/si";
import type { IconType } from "react-icons";

// Section title -> icon for section header
export const SECTION_ICONS: Record<string, IconType> = {
  "AI/ML": FaBrain,
  "DL/ML Frameworks": SiTensorflow,
  "MLOps & DevOps (CI/CD)": SiDocker,
  "Cloud & Infra": FaCloud,
  "Data & Storage": FaDatabase,
  "Programming Languages": FaCode,
  "Web Development": SiReact,
  "Testing & QA": FaCheckCircle,
  "Messaging & Streaming": FaStream,
};

// Skill name -> icon for pill (partial match or exact)
export const SKILL_ICON_MAP: Record<string, IconType> = {
  // AI/ML & frameworks
  "Gen AI": FaBrain,
  "LLM": FaBrain,
  TensorFlow: SiTensorflow,
  "TensorFlow Lite": SiTensorflow,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "Hugging Face Transformers": FaBrain,
  XGBoost: FaBrain,
  MLflow: SiMlflow,
  Kubeflow: SiKubernetes,
  Gensim: FaBrain,
  spaCy: FaBrain,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  // MLOps & DevOps
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  "GitHub Actions": SiGithub,
  Jenkins: SiJenkins,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  Django: SiDjango,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Nginx: SiNginx,
  Airflow: SiApacheairflow,
  // Cloud
  "AWS SageMaker": SiAmazonaws,
  "AWS Lambda": SiAmazonaws,
  "AWS Bedrock": SiAmazonaws,
  EC2: SiAmazonaws,
  S3: SiAmazonaws,
  RDS: SiAmazonaws,
  Azure: SiMicrosoftazure,
  GCP: SiGooglecloud,
  // Data & Storage
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Apache Spark": SiApache,
  DataBricks: SiDatabricks,
  // Languages
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "C/C++": SiCplusplus,
  "C++": SiCplusplus,
  Go: SiGo,
  "C#": SiCsharp,
  Golang: SiGo,
  // Web
  ReactJS: SiReact,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  GraphQL: SiGraphql,
  Vue: SiVuedotjs,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  SCSS: SiSass,
  // Testing
  Pytest: SiPytest,
  Jest: SiJest,
  Cypress: SiCypress,
  // Messaging
  RabbitMQ: SiRabbitmq,
  "Apache Kafka": SiApachekafka,
};

export const DEFAULT_SKILL_ICON = FaCodeBranch;

export function getSkillIcon(skillName: string): IconType {
  return SKILL_ICON_MAP[skillName] ?? DEFAULT_SKILL_ICON;
}

export function getSectionIcon(sectionTitle: string): IconType {
  return SECTION_ICONS[sectionTitle] ?? FaCode;
}
