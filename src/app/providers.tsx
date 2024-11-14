"use client";

import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure code runs only on the client
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
      } else {
        const userPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.add(
          userPrefersDark ? "dark" : "light"
        );
      }
    }
  }, []);

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Providers;
