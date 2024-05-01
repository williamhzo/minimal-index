"use client";

import { cn } from "@/utils";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "transition-colors text-content-light duration-base hover:text-content-medium",
        className,
      )}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

const SunIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14.6875C12.5888 14.6875 14.6875 12.5888 14.6875 10C14.6875 7.41117 12.5888 5.3125 10 5.3125C7.41117 5.3125 5.3125 7.41117 5.3125 10C5.3125 12.5888 7.41117 14.6875 10 14.6875Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.8125V1.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.91406 4.91406L3.8125 3.8125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8125 10H1.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.91406 15.0859L3.8125 16.1875"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.1875V18.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0859 15.0859L16.1875 16.1875"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1875 10H18.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0859 4.91406L16.1875 3.8125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MoonIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4634 10.7452C17.3223 12.158 16.7831 13.5017 15.9084 14.6202C15.0337 15.7386 13.8595 16.5858 12.5224 17.0632C11.1852 17.5406 9.74002 17.6287 8.35478 17.3172C6.96953 17.0057 5.70116 16.3074 4.69712 15.3035C3.69308 14.2996 2.99462 13.0313 2.68294 11.6461C2.37127 10.2609 2.45917 8.81569 2.93645 7.47847C3.41372 6.14126 4.26075 4.96698 5.37907 4.09217C6.49739 3.21735 7.84104 2.67793 9.25383 2.53662L9.25384 2.53668C8.76216 3.68516 8.62579 4.9546 8.86232 6.18131C9.09886 7.40802 9.69744 8.53574 10.5809 9.41907C11.4643 10.3024 12.5921 10.9008 13.8189 11.1372C15.0456 11.3736 16.315 11.237 17.4635 10.7452L17.4634 10.7452Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
