import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: [`var(--font-size-sm)`, `var(--line-height-sm)`],
      base: [`var(--font-size-base)`, `var(--line-height-base)`],
      lg: [`var(--font-size-lg)`, `var(--line-height-lg)`],
      xl: [`var(--font-size-xl)`, `var(--line-height-xl)`],
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
      transitionDuration: {
        base: "300ms",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
