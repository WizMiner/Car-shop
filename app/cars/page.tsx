// app/cars/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PaginationRouter from "@/components/navigation/PaginationRouter";
import { fetchProducts, fetchCategories, API_BASE_URL } from "@/lib/api";
import type { Product, Category } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingSection from "@/components/form/BookingSection";

export const dynamic = "force-static";

function ProductCardInline({ p }: { p: Product }) {
  let imgs: string[] = [];

  try {
    if (typeof p.images === "string") imgs = JSON.parse(p.images);
    else if (Array.isArray(p.images)) imgs = p.images;
  } catch { }

  const cover = imgs?.[0];
  const fullCover = cover ? `${API_BASE_URL}/${cover}` : "/window.svg";

  return (
    <div className="group flex flex-col rounded-2xl shadow-sm ring-1 ring-zinc-200 hover:shadow-md overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={fullCover}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          unoptimized
        />
        <span className="absolute left-3 top-3 text-xs bg-white/90 px-2 py-1 rounded-full">
          {p.status}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm">{p.make} {p.model} • {p.year}</p>
      </div>

      <div className="p-4 flex gap-2">
        <Link href={`/cars/${p.id}`} className="flex-1">
          <Button size="lg" className="w-full">View Details</Button>
        </Link>
        <div className="flex-1">
          <BookingSection productId={p.id} />
        </div>
      </div>
    </div>
  );
}

export default async function CarsPage() {
  const categoriesResp = await fetchCategories();
  const categories: Category[] = categoriesResp?.categories ?? [];

  const page = 1;
  const resp = await fetchProducts({ page });
  const products: Product[] = resp?.products ?? [];
  const meta = resp?.meta ?? { currentPage: 1, totalPages: 1 };

  return (
    <main className="bg-background">
      <Container className="py-12 sm:py-16 lg:py-20">

        {/* CATEGORIES */}
        <SectionHeader title="Browse by Our Fleet" subtitle="Explore vehicles by type." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => {
            const full = c.image ? `${API_BASE_URL}/${c.image}` : "/window.svg";

            return (
              <Link
                key={c.id}
                href={`/categories/${c.id}`}  // ✔ static filtering
                className="group block rounded-2xl p-4 ring-1 ring-border shadow-sm hover:-translate-y-1 hover:shadow-md transition"
              >
                {c.image && (
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src={full}
                      alt={c.name}
                      fill
                      className="object-cover opacity-10 group-hover:opacity-20"
                      unoptimized
                    />
                  </div>
                )}
                <h3 className="font-semibold">{c.name}</h3>
                {c.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {c.description}
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        {/* PRODUCTS */}
        <SectionHeader
          title="Explore Our Premium Vehicles"
          subtitle="Choose from our fleet."
          className="mt-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCardInline key={p.id} p={p} />
          ))}
        </div>

        <PaginationRouter currentPage={meta.currentPage} totalPages={meta.totalPages} />

      </Container>
    </main>
  );
}
