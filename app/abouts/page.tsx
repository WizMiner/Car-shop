// app/about/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchAbouts, fetchPartners, API_BASE_URL } from "@/lib/api";
import type { About, Partner } from "@/lib/types";
import Image from "next/image";
import Excellence from "@/app/staticsPages/Excellence";
import PartnersSection from "@/components/sections/PartnersSection";

export default async function AboutPage() {
    let abouts: About[] = [];
    let partners: Partner[] = [];

    try {
        const resp = await fetchAbouts({ page: 1 });
        abouts = resp?.abouts ?? [];
    } catch {
        abouts = [];
    }

    try {
        const res = await fetchPartners();
        partners = res?.data ?? [];
    } catch {
        partners = [];
    }

    return (
        <main className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
            <Container className="py-12 sm:py-16 lg:py-20">
                <SectionHeader
                    title="About Us"
                    subtitle="Learn more about our company, vision, and values."
                />

                {abouts.length === 0 ? (
                    <p>No About entries found.</p>
                ) : (
                    <div className="space-y-16">
                        {abouts.map((a: About) => {
                            const fullImage = a.image ? `${API_BASE_URL}/${a.image}` : "/window.svg";
                            return (
                                <section key={a.id} className="flex flex-col lg:flex-row lg:items-center gap-8">
                                    <div className="relative w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden rounded-xl">
                                        <Image
                                            src={fullImage}
                                            alt={a.title}
                                            width={1200}
                                            height={675}
                                            className="object-cover w-full h-full"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="lg:w-1/2 space-y-4">
                                        <h2 className="text-3xl font-bold">{a.title}</h2>
                                        {a.description && <p className="text-lg">{a.description}</p>}
                                        {a.mission && <p className="text-lg"><strong>Mission:</strong> {a.mission}</p>}
                                        {a.vision && <p className="text-lg"><strong>Vision:</strong> {a.vision}</p>}
                                        {a.values && <p className="text-lg"><strong>Values:</strong> {a.values}</p>}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                )}

                <div className="mt-20">
                    <Excellence />
                </div>

                {partners.length > 0 && (
                    <div className="mt-20">
                        <PartnersSection partners={partners} />
                    </div>
                )}
            </Container>
        </main>
    );
}
