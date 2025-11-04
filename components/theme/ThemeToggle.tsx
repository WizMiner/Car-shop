"use client";

import React from "react";

function getInitial(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setMode(getInitial());
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm shadow-token-sm transition-standard hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
    >
      {/* Render stable content on server to avoid hydration mismatch */}
      {mounted ? (mode === "dark" ? "🌙" : "☀️") : "☀️"}
    </button>
  );
}


