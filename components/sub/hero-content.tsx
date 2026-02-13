"use client";

import { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const images = ["/hero-bg.svg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Principal AI/ML Engineer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Liam Richard
            </span>{" "}
            — Gen AI & MLOps
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Principal AI/ML Engineer with 6+ years building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            LLM-powered CRM workflows
          </span>
          ,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            agentic systems
          </span>
          , and production MLOps pipelines. From research to scalable deployment on AWS and Kubernetes.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex flex-col justify-center items-center gap-4"
      >
        <motion.div
          key={images[currentIndex]} // This helps animate transitions
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-[650px] h-[650px] relative"
        >
          <Image
            src={images[currentIndex]}
            alt="Slider Image"
            fill
            draggable={false}
            className="object-contain rounded-xl select-none"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
