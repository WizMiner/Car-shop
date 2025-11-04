import React from "react";
import Container from "@/components/ui/Container";
import BlogCard, { Blog } from "@/components/cards/BlogCard";
import Link from "next/link";

const mockBlogs: Blog[] = [
  {
    id: "b1",
    title: "How to choose the right SUV in 2025",
    excerpt: "We compare size, safety, fuel economy, and tech across leading models...",
    imageUrl: "/next.svg",
    date: "Oct 21, 2025",
  },
  {
    id: "b2",
    title: "Electric cars: what you need to know",
    excerpt: "Charging networks, battery health, and the real cost of ownership...",
    imageUrl: "/globe.svg",
    date: "Oct 10, 2025",
  },
  {
    id: "b3",
    title: "Top maintenance tips for a longer car life",
    excerpt: "Simple routines that save thousands over the lifetime of your vehicle...",
    imageUrl: "/file.svg",
    date: "Sep 29, 2025",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">From the Blog</h2>
          <Link href="/blogs" className="text-sm font-medium text-primary-600 hover:underline">See all articles</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockBlogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}


