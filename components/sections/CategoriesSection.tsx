import React from "react";
import Container from "@/components/ui/Container";
import CategoryCard, { Category } from "@/components/cards/CategoryCard";
import Link from "next/link";

const mockCategories: Category[] = [
  { id: "c1", name: "SUVs", imageUrl: "/window.svg", count: 124 },
  { id: "c2", name: "Sedans", imageUrl: "/file.svg", count: 98 },
  { id: "c3", name: "Trucks", imageUrl: "/globe.svg", count: 76 },
  { id: "c4", name: "Electric", imageUrl: "/next.svg", count: 64 },
  { id: "c5", name: "Luxury", imageUrl: "/vercel.svg", count: 42 },
  { id: "c6", name: "Hybrid", imageUrl: "/globe.svg", count: 53 },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Browse by category</h2>
          <Link href="/categories" className="text-sm font-medium text-primary-600 hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockCategories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}


