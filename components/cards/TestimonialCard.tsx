import React from "react";

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const stars = Math.max(0, Math.min(5, testimonial.rating ?? 5));
  return (
    <figure className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
      <div className="mb-3 flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < stars ? "★" : "☆"}</span>
        ))}
      </div>
      <blockquote className="text-sm text-zinc-700 dark:text-zinc-300">
        “{testimonial.content}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-medium">
        {testimonial.name}
        {testimonial.role && (
          <span className="text-zinc-500"> • {testimonial.role}</span>
        )}
      </figcaption>
    </figure>
  );
}


