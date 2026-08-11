/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* =========================
           ExpenseFlow Premium Theme
           Obsidian + Champagne Gold + Emerald
        ========================= */

        background: "#080A0D",
        surface: "#0D1014",
        card: "#12161B",

        primary: "#D4A84F",

        success: "#35C98A",
        danger: "#F06A78",
        warning: "#E8C978",

        textPrimary: "#F5F5F2",
        textSecondary: "#B8BEC7",
        textMuted: "#8B929C",

        borderColor: "#FFFFFF12",
      },

      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "22px",
      },

      boxShadow: {
        card: "0 10px 35px rgba(0, 0, 0, .28)",
      },
    },
  },

  plugins: [],
};