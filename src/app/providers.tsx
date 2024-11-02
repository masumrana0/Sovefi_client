"use client";

import React, { ReactNode, useEffect } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.add(
        userPrefersDark ? "dark" : "light",
      );
    }
  }, []);

  return <>{children}</>;
};

export default Providers;
