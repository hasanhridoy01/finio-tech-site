"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBg, setHideTopBg] = useState(false);
  const pathname = usePathname();

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
              src={logo}
              alt="Finiotech Logo"
              width={163}
              height={36}
              priority
            />
            {/* <img src="/logo.png" alt="" className="max-w-[163px]" /> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className={`text-[16px] font-semibold text-[#222222] pb-1 border-b-2 transition duration-300 ${
                pathname === path
                  ? "text-primary border-primary"
                  : "border-transparent"
              } hover:border-primary`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="get-in-touch-small">Get in Touch</Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-7 px-1 h-screen">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className={`text-[16px] font-medium pb-2 ${
                  pathname === path ? "text-primary" : "text-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="get-in-touch-small">Get in Touch</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
