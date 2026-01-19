/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        sidebar: "hsl(var(--sidebar-bg))",
        card: "hsl(var(--card-bg))",
        "card-hover": "hsl(var(--card-hover))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        text: {
          main: "hsl(var(--text-main))",
          muted: "hsl(var(--text-muted))",
        },
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
}