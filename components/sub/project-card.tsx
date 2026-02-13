"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
}: ProjectCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col cursor-default">
      {!imgError ? (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain min-h-[200px]"
          onError={() => setImgError(true)}
          unoptimized
        />
      ) : (
        <div className="w-full min-h-[200px] flex items-center justify-center bg-[#0d0d1a] border-b border-[#2A0E61]">
          <span className="text-4xl text-[#7042f88b]">◆</span>
        </div>
      )}

      <div className="relative p-4 flex-1">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};
