/**
 * Injects brand colors into skill SVGs for a vivid skills section.
 * Run after download: node scripts/colorize-skill-icons.js
 */

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = path.join(__dirname, "..", "public", "skills");

// Official or well-known brand hex colors (no # for regex)
const BRAND_COLORS = {
  python: "3776AB",
  pytorch: "EE4C2C",
  tensorflow: "FF6F00",
  huggingface: "FFD21E",
  langchain: "0C66F4",
  openai: "412991",
  scikit: "F89939",
  spacy: "09A3D5",
  xgboost: "3776AB",
  mlflow: "0194E2",
  aws: "FF9900",
  pinecone: "5C4D9D",
  react: "61DAFB",
  next: "FFFFFF",
  ts: "3178C6",
  js: "F7DF1E",
  tailwind: "06B6D4",
  redux: "764ABC",
  mui: "007FFF",
  vue: "4FC08D",
  graphql: "E10098",
  fastapi: "009688",
  flask: "C9C9C9",
  django: "092E20",
  node: "339933",
  express: "68A063",
  postgresql: "4169E1",
  mongodb: "47A248",
  spark: "E25A1C",
  docker: "2496ED",
  kubernetes: "326CE5",
  terraform: "7B42BC",
  github: "8B949E",
  jenkins: "D24939",
  kubeflow: "326CE5",
  airflow: "017CEE",
  prometheus: "E6522C",
  grafana: "F46800",
  go: "00ADD8",
  cpp: "00599C",
  csharp: "239120",
};

function colorizeSvg(content, hex) {
  // Remove any existing fill from <svg> then add brand color (paths inherit)
  const withoutFill = content.replace(/\s*fill="[^"]*"/g, "");
  const filled = withoutFill.replace(
    /<svg([^>]*)>/,
    `<svg$1 fill="#${hex}">`
  );
  return filled;
}

function main() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error("Skills dir not found:", SKILLS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(SKILLS_DIR).filter((f) => f.endsWith(".svg"));
  let done = 0;

  for (const file of files) {
    const name = file.replace(/\.svg$/, "");
    const hex = BRAND_COLORS[name];
    if (!hex) {
      console.warn("No color for", file);
      continue;
    }

    const filePath = path.join(SKILLS_DIR, file);
    let content = fs.readFileSync(filePath, "utf8");

    content = colorizeSvg(content, hex);
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Colored %s → #%s", file, hex);
    done++;
  }

  console.log("\nDone: %d icons colorized.", done);
}

main();
