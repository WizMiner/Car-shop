import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const productLinks = [
    { name: "Products", href: "/cars" },
    { name: "Categories", href: "/categories" },
  ];

  const companyLinks = [
    { name: "Blog", href: "/blogs" },
    { name: "About", href: "/abouts" },
    { name: "Service", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mt-16 border-t border-zinc-200/70 dark:border-zinc-800/60 bg-white/60 dark:bg-black/40">
      <Container className="py-12 flex flex-col gap-10 md:gap-16">
        {/* Top: Brand + Multi-column Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-10 w-20 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                ADDINAS
              </span>
              <span className="text-lg font-semibold">Car Rental</span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Your trusted platform for quality cars and automotive resources.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Products</h3>
            <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Company</h3>
            <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Legal</h3>
            <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Addinas Car Rental. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary-600 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary-600 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-primary-600 transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
