"use client";
import Container from "@/components/ui/Container";
import AboutCard, { AboutCardType } from "@/components/cards/AboutCard";
import { About as BackendAbout } from "@/lib/types";
import { API_BASE_URL } from "@/lib/api";
import Link from "next/link";
import Carousel from "@/components/ui/Carousel";

interface AboutSectionProps {
  abouts: BackendAbout[];
}

export default function AboutSection({ abouts }: AboutSectionProps) {
  const cardAbouts: AboutCardType[] = abouts.map((b) => ({
    id: b.id.toString(),
    title: b.title,
    description: b.description,
    imageUrl: b.image ? `${API_BASE_URL}/${b.image}` : undefined,
    createdAt: b.createdAt ? new Date(b.createdAt).toLocaleDateString() : undefined,
  }));

  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">About Us</h2>
          <Link href="/abouts" className="text-sm font-medium text-primary-600 hover:underline">
            Read all
          </Link>
        </div>

        {/* Continuous Carousel with reverse direction */}
        <Carousel
          slidesPerView={1}
          continuous={true}
          reverse={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cardAbouts.map((a) => (
            <AboutCard key={a.id} about={a} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
