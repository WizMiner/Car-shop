// app/categories/[id]/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchCategories, fetchProductsByCategory, API_BASE_URL } from "@/lib/api";
import type { Product } from "@/lib/types";
import PaginationRouter from "@/components/navigation/PaginationRouter";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingSection from "@/components/form/BookingSection";

// --- Copy inline ProductCard component ---
function ProductCardInline({ p }: { p: Product }) {
  let images: string[] = [];
  if (typeof p.images === "string") {
    try {
      images = JSON.parse(p.images);
      if (typeof images === "string") images = JSON.parse(images);
    } catch {
      images = [];
    }
  } else if (Array.isArray(p.images)) images = p.images;

  const cover = images?.[0];
  const fullCover = cover ? `${API_BASE_URL}/${cover}` : "/window.svg";

  return (
    <div className="flex flex-col justify-between group overflow-hidden rounded-2xl shadow-sm ring-1 ring-zinc-200 transition-[transform,box-shadow] duration-standard ease-standard hover:-translate-y-0.5 hover:shadow-md dark:ring-zinc-800 animate-fade-in">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {fullCover ? (
          <Image
            src={fullCover}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="h-full w-full bg-muted-100" />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-foreground shadow-sm ring-1 ring-black/5 dark:bg-black/60 dark:text-foregroundDark">
          {p.status}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="text-base font-semibold leading-6">{p.title}</h3>
        <p className="text-sm">{p.make} {p.model} • {p.year}</p>
      </div>

      <div className="flex items-start gap-2 p-4">
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

// --- Generate static paths for all categories ---
export async function generateStaticParams() {
  try {
    const resp = await fetchCategories();
    const categories = resp.categories ?? [];
    return categories.map((c) => ({ id: String(c.id) }));
  } catch {
    return [];
  }
}

// --- Page Component ---
export default async function CategoryCarsPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await params;
  // console.log("CategoryCarsPage params.id =", id);

  let products: Product[] = [];
  let meta = { currentPage: 1, totalPages: 1 };

  try {
    const res = await fetchProductsByCategory(id, { page: 1 });
    products = res.products ?? [];
    meta = res.meta ?? meta;
    // console.log(`Fetched ${products.length} products for category ${id}`);
  } catch (err) {
    console.warn(`Failed fetching products for category ${id}:`, err);
    products = [];
  }

  return (
    <main className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
      <Container className="py-12 sm:py-16 lg:py-20">
        <SectionHeader
          title="Cars in this Category"
          subtitle="Explore vehicles in your selected category."
        />

        {products.length === 0 ? (
          <p>No cars found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => <ProductCardInline key={p.id} p={p} />)}
          </div>
        )}

        <PaginationRouter currentPage={meta.currentPage} totalPages={meta.totalPages} />
      </Container>
    </main>
  );
}
