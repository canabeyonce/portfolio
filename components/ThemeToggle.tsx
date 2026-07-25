"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

function isTheme(value: string | null | undefined): value is Theme {
  return value === "dark" || value === "light";
}

function getStoredTheme() {
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  return isTheme(storedTheme) ? storedTheme : null;
}

function getSystemTheme(mediaQuery?: MediaQueryList): Theme {
  const prefersDark =
    mediaQuery?.matches ?? window.matchMedia(COLOR_SCHEME_QUERY).matches;

  return prefersDark ? "dark" : "light";
}

function getResolvedTheme(mediaQuery?: MediaQueryList): Theme {
  return getStoredTheme() ?? getSystemTheme(mediaQuery);
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);

    function syncTheme() {
      const activeTheme = getResolvedTheme(mediaQuery);

      applyTheme(activeTheme);
      setTheme(activeTheme);
    }

    function handleSystemThemeChange() {
      if (!getStoredTheme()) {
        syncTheme();
      }
    }

    syncTheme();
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const activeTheme = theme ?? "dark";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";
  const label = theme ? `Switch to ${nextTheme} theme` : "Toggle color theme";

  function handleToggle() {
    const currentTheme = theme ?? getResolvedTheme();
    const selectedTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(selectedTheme);
    applyTheme(selectedTheme);
    window.localStorage.setItem(STORAGE_KEY, selectedTheme);
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={theme ? theme === "light" : undefined}
      title={label}
      onClick={handleToggle}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[color:var(--site-border-strong)] bg-[var(--site-chip-bg)] text-[var(--site-fg)] transition hover:border-[color:var(--site-accent)] hover:text-[var(--site-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-accent)]"
    >
      {activeTheme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="m4.22 4.22 1.42 1.42" />
          <path d="m18.36 18.36 1.42 1.42" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="m4.22 19.78 1.42-1.42" />
          <path d="m18.36 5.64 1.42-1.42" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M20.99 13.32A8.5 8.5 0 1 1 10.68 3.01 6.5 6.5 0 0 0 20.99 13.32Z" />
        </svg>
      )}
    </button>
  );
}
