import { cn } from "@/utils";
import { Fragment } from "react";

export const Title = () => {
  const title = "minimal index";
  const splitTitle = title.split(" ").map((word) => word.split(""));

  return (
    <h1 className="group flex select-none gap-8 text-4xl uppercase">
      {splitTitle.map((word, wordIndex) => (
        <span key={wordIndex} className="flex gap-3">
          {word.map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={cn(
                "transition-colors duration-300",
                letterIndex === 0
                  ? "text-content"
                  : "group-hover:text-content text-background",
              )}
            >
              {letter}
            </span>
          ))}
          {wordIndex < splitTitle.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
};
