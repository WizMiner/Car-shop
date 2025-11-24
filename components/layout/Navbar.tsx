"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Car" },
  { href: "/categories", label: "Our Fleet" },
  { href: "/blogs", label: "Blog" },
  { href: "/abouts", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/partners", label: "Partners" },
  { href: "/galleries", label: "Gallery" },
  { href: "/contacts", label: "Contact Us" },
  { href: "/rentals", label: "Rentals" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-primary">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo Section */}

        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/logo.png"
            alt="CarShop Logo"
            width={200}
            height={50}
            priority
            className="rounded-lg"
          />
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons and Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* <Link
            href="#login"
            className="hidden md:block rounded-full border border-primary px-4 py-2 text-sm hover:bg-primary/10"
          >
            Login
          </Link> */}
          <Link
            href="/cars"
            className="hidden md:block rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark"
          >
            Book Now
          </Link>
          <ThemeToggle />

          {/* Hamburger Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-black border-b border-primary/60 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <nav className="flex flex-col items-start gap-4 p-4 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="w-full py-2 hover:text-primary-600 transition-colors border-b border-primary/30"
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            href="#login"
            onClick={toggleMenu}
            className="w-full mt-2 rounded-full border border-primary px-4 py-2 text-sm text-center hover:bg-primary/10"
          >
            Login
          </Link> */}
          <Link
            href="/cars"
            onClick={toggleMenu}
            className="w-full rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark text-center"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
