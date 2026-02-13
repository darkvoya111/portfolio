"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const [imgError, setImgError] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center justify-center"
    >
      {!imgError ? (
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          onError={() => setImgError(true)}
          unoptimized
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-lg bg-[#7042f82b] border border-[#7042f88b] px-4 py-2 text-sm font-medium text-cyan-200"
          style={{ minWidth: width, minHeight: height }}
        >
          {name}
        </div>
      )}
      <span className="mt-1 text-xs text-gray-400 max-w-[90px] text-center truncate">
        {name}
      </span>
    </motion.div>
  );
};
