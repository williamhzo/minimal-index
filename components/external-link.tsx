import { ComponentProps } from "react";

export const ExternalLink = ({ href, children }: ComponentProps<"a">) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors flex items-center gap-2 text-content-light duration-base hover:text-content-medium"
    >
      {children}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.90246 0.555542H9.44455M9.44455 0.555542V8.09765M9.44455 0.555542L0.555664 9.44443"
          stroke="currentColor"
        />
      </svg>
    </a>
  );
};
