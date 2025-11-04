import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/window.svg"
          alt="Hero background"
          fill
          className="object-cover opacity-10 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-black/40 dark:to-black" />
      </div>
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:ring-blue-900/50">Premium Cars, Premium Service</span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Find your next car with confidence
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-prose">
              Explore top-rated vehicles, read expert insights, and shop with transparent pricing. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link href="/cars">
                <Button size="lg">Browse Cars</Button>
              </Link>
              <Link href="/blogs">
                <Button size="lg" variant="ghost">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 shadow-lg ring-1 ring-black/5 dark:from-zinc-900 dark:to-zinc-950 dark:ring-white/10">
            <Image
              src="/globe.svg"
              alt="Featured car"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}


