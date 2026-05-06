import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#3d444d",
        primary: "#91c4b6",
        secondary: "#f1f8f6",
        ink: "#f1f8f6",
        muted: "rgba(241, 248, 246, 0.72)",
        glass: "rgba(255, 255, 255, 0.12)"
      },
      fontFamily: {
        display: ["Montserrat", "Inter", "sans-serif"],
        body: ["Lato", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(19, 26, 32, 0.28)",
        soft: "0 16px 48px rgba(19, 26, 32, 0.22)"
      },
      borderRadius: {
        card: "0.75rem"
      }
    }
  },
  plugins: []
};

export default config;
