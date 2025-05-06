"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Products", "Services", "About"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBg, setHideTopBg] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBg(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full backdrop-blur-3xl md:px-16 px-6 md:py-5 py-4 fixed top-0 z-50">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Top background (conditionally hidden) */}
        <div
          className={`top-background md:block hidden transition-opacity duration-300 ${
            hideTopBg ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Finiotech Logo"
              width={163}
              height={36}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[16px] font-semibold text-[#222222] hover:border-b-2 hover:border-primary transition border-b-2 border-transparent"
            >
              {link}
            </Link>
          ))}
          <Button className="get-in-touch">Get in Touch</Button>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-green-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-7 px-1">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[16px] font-medium text-gray-800 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
            <Button className="get-in-touch-small">Get in Touch</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
