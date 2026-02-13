/**
 * Downloads skill icons from Simple Icons (jsDelivr CDN) to public/skills/
 * Run: node scripts/download-skill-icons.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const OUT_DIR = path.join(__dirname, "..", "public", "skills");
const CDN_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons";

// Map: our filename (without extension) -> Simple Icons slug
const SLUG_MAP = {
  python: "python",
  pytorch: "pytorch",
  tensorflow: "tensorflow",
  huggingface: "huggingface",
  langchain: "langchain",
  openai: "openai",
  scikit: "scikitlearn",
  spacy: "spacy",
  xgboost: "xgboost",
  mlflow: "mlflow",
  aws: "amazonaws",
  pinecone: "pinecone",
  react: "react",
  next: "nextdotjs",
  ts: "typescript",
  js: "javascript",
  tailwind: "tailwindcss",
  redux: "redux",
  mui: "mui",
  vue: "vuedotjs",
  graphql: "graphql",
  fastapi: "fastapi",
  flask: "flask",
  django: "django",
  node: "nodedotjs",
  express: "express",
  postgresql: "postgresql",
  mongodb: "mongodb",
  spark: "apachespark",
  docker: "docker",
  kubernetes: "kubernetes",
  terraform: "terraform",
  github: "github",
  jenkins: "jenkins",
  kubeflow: "kubeflow",
  airflow: "apacheairflow",
  prometheus: "prometheus",
  grafana: "grafana",
  go: "go",
  cpp: "cplusplus",
  csharp: "csharp",
};

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          return fetchUrl(res.headers.location.replace("http:", "https:")).then(resolve, reject);
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => (res.statusCode === 200 ? resolve(data) : reject(new Error(`HTTP ${res.statusCode}`))));
      })
      .on("error", reject);
  });
}

async function download(name, slug) {
  const url = `${CDN_BASE}/${slug}.svg`;
  const outPath = path.join(OUT_DIR, `${name}.svg`);
  try {
    const svg = await fetchUrl(url);
    if (!svg || !svg.includes("<svg")) {
      throw new Error("Invalid SVG");
    }
    fs.writeFileSync(outPath, svg, "utf8");
    console.log(`OK ${name}.svg (${slug})`);
    return true;
  } catch (e) {
    console.warn(`SKIP ${name}.svg (${slug}): ${e.message}`);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const entries = Object.entries(SLUG_MAP);
  let ok = 0;
  for (const [name, slug] of entries) {
    const success = await download(name, slug);
    if (success) ok++;
    await new Promise((r) => setTimeout(r, 100));
  }
  console.log(`\nDone: ${ok}/${entries.length} icons saved to public/skills/`);
}

main().catch(console.error);
