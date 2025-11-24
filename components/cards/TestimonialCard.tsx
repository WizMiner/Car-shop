import React from "react";
import Image from "next/image";

export type TestimonialCardType = {
  id: string;
  name: string;
  content: string;
  rating?: number;
  imageUrl?: string;
  email?: string;
  position?: string;
  company?: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: TestimonialCardType }) {
  const stars = Math.max(0, Math.min(5, testimonial.rating ?? 5));

  return (
    <figure className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800 animate-fade-in">
      {/* Top row: Image + Name */}
      <div className="mb-2 flex items-center gap-3">
        {testimonial.imageUrl && (
          <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              width={48}
              height={48}
              unoptimized
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="text-sm font-medium">
          {testimonial.name}
          {testimonial.email && <span className="text-zinc-500"> • {testimonial.email}</span>}
        </div>
      </div>

      {/* Stars */}
      <div className="mb-2 flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < stars ? "★" : "☆"}</span>
        ))}
      </div>

      {/* Position / Company (now above the quote) */}
      {(testimonial.position || testimonial.company) && (
        <div className="mb-3 text-xs text-zinc-500">
          {testimonial.position && <span>{testimonial.position}</span>}
          {testimonial.position && testimonial.company && <span> • </span>}
          {testimonial.company && <span>{testimonial.company}</span>}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-sm text-zinc-700 dark:text-zinc-300">
        “{testimonial.content}”
      </blockquote>
    </figure>
  );
}
