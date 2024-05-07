import type { Config } from "tailwindcss";

const config: Config = {
  // eslint-disable-next-line quotes
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "app-clr-dark": "#141414",
        "app-clr-light": "#F3F3F3",
      },
      fontFamily: {
        "app-fm-inter": ["var(--app-fm-inter)", "system-ui"],
      },
    },
  },
  plugins: [
    require("tailwindcss-text-rendering"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

export default config;
