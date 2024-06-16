import { cn } from "@/utils";
import { FC, useEffect, useState } from "react";

export const Splash: FC = () => {
  const [showAll, setShowAll] = useState(false);

  const title = "minimal index";
  const splitTitle = title.split(" ").map((word) => word.split(""));

  useEffect(() => {
    const to = setTimeout(() => setShowAll(true), 1000);
    return () => clearTimeout(to);
  }, [showAll]);

  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-background">
      <h1 className="flex select-none gap-8 text-lg uppercase text-content">
        {splitTitle.map((word, wordIndex) => (
          <span key={wordIndex} className="flex gap-3">
            {word.map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={cn(
                  "transition-colors duration-base",
                  letterIndex === 0
                    ? "text-content"
                    : showAll
                      ? "text-content"
                      : "text-background",
                )}
              >
                {letter}
              </span>
            ))}
            {wordIndex < splitTitle.length - 1 ? " " : ""}
          </span>
        ))}
      </h1>
    </div>
  );
};
