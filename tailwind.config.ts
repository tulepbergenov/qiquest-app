import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-text-rendering"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

export default config;
