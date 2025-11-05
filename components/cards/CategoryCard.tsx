import React from "react";
import Image from "next/image";

export type CategoryCardType = {
  id: string;
  name: string;
  imageUrl?: string;
  count?: number;
  description?: string;
};

export default function CategoryCard({ category }: { category: CategoryCardType }) {
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800">
      {category.imageUrl && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover opacity-10 transition duration-300 group-hover:opacity-20"
            unoptimized
          />
        </div>
      )}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{category.name}</h3>
          {category.count !== undefined && (
            <p className="text-sm text-zinc-500">{category.count} items</p>
          )}
          {category.description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
              {category.description}
            </p>
          )}
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-sm">
          →
        </span>
      </div>
    </div>
  );
}
