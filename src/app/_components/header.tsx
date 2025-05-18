"use client";

import Image from "next/image";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative mx-auto flex w-full max-w-screen-lg items-center justify-between rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] p-5 shadow-lg">
      <div className="flex cursor-pointer items-center">
        <Image
          src="/logo-mono.png"
          alt="Logo de Alexandre Bandeira"
          width={55}
          height={55}
        />
      </div>

      <button type="button" className="z-50 md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X className="text-white" />
        ) : (
          <Menu className="text-white" />
        )}
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={toggleMenu}
          onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
          tabIndex={0}
          role="button"
          aria-label="Close menu"
        />
      )}

      <nav
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-[#2C3E50] p-5 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:flex md:w-auto md:translate-x-0 md:gap-5 md:bg-transparent md:p-0`}
      >
        {["Sobre", "Projetos", "Formação", "Contato"].map((item, index) => {
          if (item === "Contato") {
            return (
              <Link
                key={index.toString()}
                href="/contact"
                onClick={toggleMenu}
                className="block w-fit cursor-pointer border-b border-transparent py-2 transition hover:border-b hover:border-blue-400 hover:text-blue-400 md:inline"
              >
                {item}
              </Link>
            );
          }

          return (
            <button
              key={index.toString()}
              type="button"
              onClick={() => {
                toggleMenu();
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block cursor-pointer border-b border-transparent py-2 transition hover:border-b hover:border-blue-400 hover:text-blue-400 md:inline"
            >
              {item}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
