// app/testimonials/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchTestimonials, API_BASE_URL } from "@/lib/api";
import type { Testimonial } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Force static rendering
export const dynamic = "force-static";

export default async function TestimonialsPage() {
  const page = 1; // default page

  const resp = await fetchTestimonials({ page });
  const data: Testimonial[] = resp?.testimonials ?? [];

  return (
    <main className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
      <Container className="py-12 sm:py-16 lg:py-20">
        <SectionHeader title="What our customers say" subtitle="Real reviews from happy drivers." />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((t: Testimonial) => {
            const fullImage = t.image ? `${API_BASE_URL}/${t.image}` : "/user-placeholder.svg";

            return (
              <Link
                key={t.id}
                href={`/testimonials/${t.id}`}
                className="flex flex-col justify-between rounded-2xl p-5 shadow-sm ring-1 ring-border bg-card-background dark:bg-card-background-dark animate-fade-in transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="mb-3 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-border">
                        <Image src={fullImage} alt={t.clientName} fill className="object-cover" unoptimized />
                      </div>
                      <div className="text-sm font-medium text-foreground dark:text-foreground-dark">{t.clientName}</div>
                      {t.User?.email && (
                        <span className="text-xs text-muted-foreground dark:text-muted-foreground-dark">• {t.User.email}</span>
                      )}
                    </div>
                    {(t.position || t.company) && (
                      <div className="text-xs text-muted-foreground dark:text-muted-foreground-dark">
                        {t.position && <span>{t.position}</span>}
                        {t.position && t.company && <span> • </span>}
                        {t.company && <span>{t.company}</span>}
                      </div>
                    )}
                  </div>

                  <div className="mb-2 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < Math.max(0, Math.min(5, t.rating)) ? "★" : "☆"}</span>
                    ))}
                  </div>

                  <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark line-clamp-4">{t.content}</p>
                </div>

                <div className="mt-4">
                  <Button variant="primary" size="sm" className="w-full pointer-events-none">View Details</Button>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
