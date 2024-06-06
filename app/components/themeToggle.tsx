// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setEnabled(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <span className="mr-2 text-gray-700 dark:text-gray-300">Light</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-lilac-dark" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        />
      </Switch>
      <span className="ml-2 text-gray-700 dark:text-gray-300">Dark</span>
    </div>
  );
};

export default ThemeToggle;
