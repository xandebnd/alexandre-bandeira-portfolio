"use client";

import { ArrowUp } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const triggerPosition = document.body.offsetHeight * 0.8;
      setShowButton(scrollPosition >= triggerPosition);
    };

    handleScroll();

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="relative mx-auto max-w-screen-lg space-y-4">
        {children}
      </main>
      <div
        className={`fixed ${
          showButton ? "block" : "hidden"
        } right-4 bottom-4 z-99`}
      >
        <button
          type="button"
          className="rounded-full border border-blue-100 bg-white p-3 text-blue-600 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:text-blue-700"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default Main;
