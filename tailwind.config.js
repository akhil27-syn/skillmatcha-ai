/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#090D16",
          surface: "#111827",
          border: "#1F2937",
          hover: "#1E293B",
        },
        emerald: {
          accent: "#10B981",
          hover: "#34D399",
          tint: "rgba(16, 185, 129, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        "emerald-glow": "0 0 25px rgba(16, 185, 129, 0.15)",
        "emerald-glow-strong": "0 0 35px rgba(16, 185, 129, 0.3)",
      },
    },
  },
  plugins: [],
};
