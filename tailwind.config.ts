import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(circle, #151d2d, #262626)",
      }),
      backgroundColor: (theme) => ({
        dark: "#111A2F",
      }),
    },
  },
  plugins: [],
};
export default config;
