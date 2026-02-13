"use client";

import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Work Experience
      </motion.h1>

      <div className="w-full max-w-4xl flex flex-col gap-10">
        {EXPERIENCE.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            variants={slideInFromLeft(index * 0.1 + 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#7042f88b] rounded-xl p-6 bg-[#030014]/60 backdrop-blur-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="text-xl font-semibold text-white">
                {job.role}
              </h2>
              <span className="text-sm text-cyan-400">{job.period}</span>
            </div>
            <p className="text-purple-300 font-medium">
              {job.company}
              {job.location ? ` · ${job.location}` : ""}
            </p>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              {job.summary}
            </p>
            {job.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}

        <motion.article
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#7042f88b] rounded-xl p-6 bg-[#030014]/60 backdrop-blur-sm"
        >
          <h2 className="text-xl font-semibold text-white mb-1">Education</h2>
          <p className="text-purple-300 font-medium">
            {EDUCATION.school} · {EDUCATION.location}
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            {EDUCATION.degree} — {EDUCATION.year}
          </p>
        </motion.article>
      </div>
    </section>
  );
};
