"use client";

import { useState, useEffect, FC } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    setIsVisible(window?.pageYOffset > 300);
  };

  useEffect(() => {
    window?.addEventListener("scroll", toggleVisibility);
    return () => {
      window?.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div title="Scroll To Top">
      <div className="fixed bottom-10 right-10 group">
        {isVisible && (
          <Button variant="default" size="round" onClick={scrollToTop}>
            <ArrowUpIcon className="w-5 h-5 transform group-hover:-translate-y-1 transition duration-300 ease-in-out" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
