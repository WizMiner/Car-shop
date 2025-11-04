/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base brand palette (light)
        background: "#ffffff",
        foreground: "#171717",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          600: "#2563eb",
          700: "#1d4ed8",
          DEFAULT: "#2563eb",
        },
        secondary: {
          500: "#f97316",
          600: "#ea580c",
          DEFAULT: "#f97316",
        },
        accent: {
          500: "#ef4444",
          DEFAULT: "#ef4444",
        },
        muted: {
          50: "#f8fafc",
          100: "#f1f5f9",
          700: "#334155",
        },
        // Dark-specific tokens (use with dark:)
        backgroundDark: "#0a0a0a",
        foregroundDark: "#ededed",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      // Keep default spacing, add custom steps
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 10px -2px rgb(0 0 0 / 0.08)",
        lg: "0 10px 20px -5px rgb(0 0 0 / 0.15)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0.6, 0.2, 1)",
      },
      transitionDuration: {
        standard: "200ms",
        slow: "350ms",
      },
      keyframes: {
        "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
        "fade-out": { from: { opacity: 1 }, to: { opacity: 0 } },
        "slide-up": {
          from: { transform: "translateY(8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in var(--transition-standard,200ms) both",
        "fade-out": "fade-out var(--transition-standard,200ms) both",
        "slide-up": "slide-up var(--transition-standard,200ms) both",
        "slide-down": "slide-down var(--transition-standard,200ms) both",
        "bounce-soft": "bounce-soft 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};


