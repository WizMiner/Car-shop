import React from "react";
import Container from "@/components/ui/Container";
import ProductCard, { Product } from "@/components/cards/ProductCard";
import Link from "next/link";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "2024 Tesla Model 3",
    price: "$38,990",
    imageUrl: "/window.svg",
    tags: ["Electric", "Autopilot"],
  },
  {
    id: "2",
    name: "2024 BMW M3",
    price: "$76,995",
    imageUrl: "/file.svg",
    tags: ["Sport", "Twin-Turbo"],
  },
  {
    id: "3",
    name: "2024 Toyota RAV4",
    price: "$29,500",
    imageUrl: "/globe.svg",
    tags: ["SUV", "Hybrid"],
  },
  {
    id: "4",
    name: "2024 Ford F-150",
    price: "$33,835",
    imageUrl: "/vercel.svg",
    tags: ["Truck", "Towing"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Featured Cars</h2>
          <Link href="/cars" className="text-sm font-medium text-primary-600 hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}


