"use client";

import { useState } from "react";

const COPY = [
  "Our exploration began with an appreciation for aesthetic purity and functional clarity.",
  "The masters of less inspired us to create this index.",
  "This minimal curation elevates the first seven masters of our collection.",
];

export const GenesisContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function getOpacity(index: number) {
    if (hoveredIndex === null) return "opacity-40";
    if (hoveredIndex === index) return "opacity-100";
    if (Math.abs(hoveredIndex - index) === 1) return "opacity-40";
    return "opacity-20";
  }

  return (
    <div className="flex max-w-3xl flex-col items-start gap-20 text-balance pt-[14px] text-xl tracking-[0.02rem] text-content-bold">
      {COPY.map((text, index) => (
        <p
          key={index}
          className={`transition-opacity duration-300 ${getOpacity(index)}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {text}
        </p>
      ))}
    </div>
  );
};
