// app/services/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchServices, API_BASE_URL } from "@/lib/api";
import type { Service } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Force static export
export const dynamic = "force-static";

export default async function ServicesPage() {
    // Fetch all services (adjust perPage if needed)
    const resp = await fetchServices({ page: 1, perPage: 100 });
    const data: Service[] = resp?.services ?? [];

    return (
        <main className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
            <Container className="py-12 sm:py-16 lg:py-20">
                <SectionHeader
                    title="Our Services"
                    subtitle="Discover the range of professional car rental services we provide."
                />

                {data.length === 0 ? (
                    <p className="text-center text-muted-foreground dark:text-muted-foreground-dark">
                        No services found.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((s: Service) => {
                            const fullImage = s.image ? `${API_BASE_URL}/${s.image}` : "/window.svg";

                            return (
                                <Link
                                    href={`/services/${s.id}`}
                                    key={s.id}
                                    className="flex flex-col justify-between group rounded-2xl shadow-sm ring-1 ring-border transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md bg-card-background dark:bg-card-background-dark animate-fade-in"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={fullImage}
                                            alt={s.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            unoptimized
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2 p-4">
                                        <h3 className="text-base font-semibold text-foreground dark:text-foreground-dark leading-6">
                                            {s.name}
                                        </h3>
                                        <p className="line-clamp-3 text-sm text-muted-foreground dark:text-muted-foreground-dark">
                                            {s.description}
                                        </p>
                                    </div>

                                    {/* View Details Button */}
                                    <div className="p-4 pt-0">
                                        <Button variant="primary" size="sm" className="w-full">
                                            View Details
                                        </Button>
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
