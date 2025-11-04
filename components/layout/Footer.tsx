import React from "react";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/70 dark:border-zinc-800/60 bg-white/60 dark:bg-black/40">
      <Container className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} CarShop. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-foreground">Privacy</a>
          <a href="#terms" className="hover:text-foreground">Terms</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </Container>
    </footer>
  );
}


