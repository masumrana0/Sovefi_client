"use client";
import { useState, useEffect, FC } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMounted, setIsMounted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true); // Ensure this runs on the client
      toggleVisibility(); // Set initial visibility based on scroll position
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <div suppressHydrationWarning title="Scroll To Top">
      <div className="fixed bottom-10 right-10 group">
        {isVisible && (
          <Button variant="default" onClick={scrollToTop}>
            <ArrowUpIcon className="w-5 h-5 transform group-hover:-translate-y-1 transition duration-300 ease-in-out" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
