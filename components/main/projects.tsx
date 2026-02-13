"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden"
    >
      {/* Background from Data & compliance */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Content — same layout/size as original Projects */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <motion.h1
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 whitespace-nowrap"
        >
          My Projects
        </motion.h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
