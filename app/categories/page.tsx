// app/categories/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchCategories, API_BASE_URL } from "@/lib/api";
import type { Category } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

export default async function CategoriesPage() {
  const resp = await fetchCategories();
  const categories: Category[] = resp?.categories ?? [];

  return (
    <main className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
      <Container className="py-12 sm:py-16 lg:py-20">
        <SectionHeader
          title="Browse by Our Fleet"
          subtitle="Explore vehicles by type and purpose."
        />

        {categories.length === 0 ? (
          <p className="text-center text-muted-foreground dark:text-muted-foreground-dark">
            No categories available.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const fullImg = c.image
                ? `${API_BASE_URL}/${c.image}`
                : "/window.svg";

              return (
                <Link
                  key={c.id}
                  href={`/categories/${c.id}`}
                  className="group relative isolate overflow-hidden rounded-2xl p-4 shadow-sm ring-1 ring-border transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md block bg-card-background dark:bg-card-background-dark"
                >
                  {c.image && (
                    <div className="absolute inset-0 -z-10">
                      <Image
                        src={fullImg}
                        alt={c.name}
                        fill
                        className="object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                        unoptimized
                      />
                    </div>
                  )}

                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-base font-semibold">{c.name}</h3>
                      {c.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {c.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary">
                        <ArrowRight className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </main>
  );
}
