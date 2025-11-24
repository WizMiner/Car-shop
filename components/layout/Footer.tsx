"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { name: "Products", href: "/cars" },
    { name: "Our Fleet", href: "/categories" },
  ];

  const companyLinks = [
    { name: "Blog", href: "/blogs" },
    { name: "About", href: "/abouts" },
    { name: "Service", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "Gallery", href: "/galleries" },
    { name: "Contact", href: "/contacts" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Addis Ababa, around Pushkin Square" },
    { icon: Phone, text: "0911 510313 / 0977 777717 / 911 323333", href: "tel:0911510313" },
    { icon: Mail, text: "soliyano10@gmail.com", href: "mailto:soliyano10@gmail.com" },
    { icon: Mail, text: "adinascarrent@gmail.com", href: "mailto:adinascarrent@gmail.com" },
    { icon: Globe, text: "www.adinascarrent.com", href: "https://adinascarrent.com" },
  ];

  return (
    <footer className="mt-16 border-t" style={{ borderColor: "var(--color-muted)" }}>
      <Container className="py-12 flex flex-col gap-10 md:gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="inline-flex h-10 w-20 items-center justify-center rounded-lg shadow-sm"
                style={{ backgroundColor: "var(--color-primary)", color: "var(--color-background)" }}
              >
                ADINAS
              </span>
              <span className="text-lg font-semibold" style={{ color: "var(--color-foreground)" }}>
                Car Rental
              </span>
            </Link>
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Adinas Car Rental – Your trusted partner in safe, reliable, and efficient transport solutions.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>Products</h3>
            <ul className="space-y-1 text-sm" style={{ color: "var(--color-muted)" }}>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "var(--color-muted)" }}
                    className="hover:text-primary transition-standard"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>Company</h3>
            <ul className="space-y-1 text-sm" style={{ color: "var(--color-muted)" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "var(--color-muted)" }}
                    className="hover:text-primary transition-standard"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>Contact</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-muted)" }}>
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <info.icon className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="underline hover:text-primary transition-standard"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--color-muted)", color: "var(--color-muted)" }}
        >
          <p>© {new Date().getFullYear()} Adinas Car Rental. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-standard">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-standard">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-standard">GitHub</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
