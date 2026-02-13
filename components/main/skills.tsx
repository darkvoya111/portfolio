"use client";

import { SkillText } from "@/components/sub/skill-text";
import { SKILL_SECTIONS } from "@/constants";
import {
  SECTION_ICONS,
  SKILL_ICON_MAP,
  DEFAULT_SKILL_ICON,
} from "@/lib/skill-icons";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="w-full max-w-5xl px-6 flex flex-col gap-8 mt-4">
        {SKILL_SECTIONS.map((section) => {
          const SectionIcon = SECTION_ICONS[section.title] ?? SECTION_ICONS["AI/ML"];
          return (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center gap-2">
                <SectionIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => {
                  const SkillIcon = SKILL_ICON_MAP[skill] ?? DEFAULT_SKILL_ICON;
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-200 bg-[#7042f82b] border border-[#7042f88b] hover:border-cyan-500/50 hover:bg-[#7042f84d] transition-colors"
                    >
                      <SkillIcon className="w-4 h-4 text-cyan-400/90 shrink-0" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
