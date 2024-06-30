import { cn } from "@/utils";
import { motion } from "framer-motion";
import { FC } from "react";

export const Splash: FC = () => {
  const title = "minimal index";
  const splitTitle = title.split(" ").map((word) => word.split(""));

  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-background">
      <motion.div
        className="flex items-center gap-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="flex select-none gap-8 text-lg uppercase text-content">
          {splitTitle.map((word, wordIndex) => (
            <span key={wordIndex} className="flex gap-3">
              {word.map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  className="text-content transition-colors duration-500"
                  initial={{ opacity: letterIndex === 0 ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: letterIndex * 0.04 + wordIndex * 0.2,
                    duration: 0.3,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {wordIndex < splitTitle.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <span className="flex gap-4 uppercase">
          <motion.h2
            className={cn(
              "border-b-[0.5px] border-background-light tracking-widest transition-colors duration-base",
            )}
            initial={{ color: "var(--foreground-lightest)" }}
            animate={{ color: "var(--foreground-bold)" }}
            exit={{ color: "var(--foreground-lightest)" }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: "easeInOut",
            }}
          >
            Influences of minimalism
          </motion.h2>

          <motion.p
            className={cn(
              "border-b-[0.5px] border-background-light tracking-widest text-content-lightest transition-opacity duration-base",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              ease: "easeInOut",
            }}
          >
            Keyboard enabled
          </motion.p>
        </span>
      </motion.div>
    </div>
  );
};
