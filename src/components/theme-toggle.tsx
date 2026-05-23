"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const nowDark = html.classList.toggle("dark");
    localStorage.setItem("jedyx-theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  if (isDark === null) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="w-9 h-9 flex items-center justify-center rounded-xl
                 border border-[var(--border-card)] bg-[var(--bg-card)]
                 hover:border-bluegreen-400/50 hover:bg-bluegreen-400/10
                 transition-all duration-300 hover:-translate-y-0.5
                 text-[var(--text-2)] hover:text-bluegreen-400"
    >
      {isDark ? (
        /* Sol — modo oscuro activo, click cambia a claro */
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        /* Luna — modo claro activo, click cambia a oscuro */
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
