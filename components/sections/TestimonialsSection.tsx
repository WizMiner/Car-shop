import React from "react";
import Container from "@/components/ui/Container";
import TestimonialCard, { Testimonial } from "@/components/cards/TestimonialCard";
import Link from "next/link";

const mockTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amina K.",
    role: "Verified Buyer",
    content:
      "The entire buying experience was smooth and transparent. I love my new SUV!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Carlos R.",
    role: "Fleet Manager",
    content:
      "Great selection and even better support after purchase. Highly recommend.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Lena P.",
    role: "First-time Owner",
    content:
      "They helped me find the perfect car within budget. Zero pressure sales.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">What customers say</h2>
          <Link href="/testimonials" className="text-sm font-medium text-primary-600 hover:underline">Read all</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}


