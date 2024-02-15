import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ["0.75rem", "1rem"],
      base: ["0.875rem", "1.25rem"],
      lg: ["1rem", "1.5rem"],
      xl: ["3.375rem", "1"],
    },
    extend: {
      colors: {
        content: {
          DEFAULT: "var(--foreground-bold)",
          lightest: "var(--foreground-lightest)",
          light: "var(--foreground-light)",
          medium: "var(--foreground-medium)",
          bold: "var(--foreground-bold)",
        },
        background: {
          DEFAULT: "var(--background-lightest)",
          // lightest: 'var(--background-lightest)',
          light: "var(--background-light)",
          medium: "var(--background-medium)",
          bold: "var(--background-bold)",
          boldest: "var(--background-boldest)",
        },
        border: {
          DEFAULT: "var(--background-boldest)",
          light: "var(--border-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
