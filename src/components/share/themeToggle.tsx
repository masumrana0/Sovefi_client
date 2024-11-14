"use client";

import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this code only runs on the client
      const savedTheme = localStorage.getItem("theme");
      const userTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const initialTheme = savedTheme || userTheme;
      setTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    if (theme && typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeToggle;
