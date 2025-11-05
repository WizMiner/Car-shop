"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { API_BASE_URL } from "@/lib/api";

interface HeroProductsCarouselProps {
    products: Product[];
}

function parseImages(images: unknown): string[] {
    if (!images) return [];

    let parsed: unknown = images;

    // If it's a string, try JSON parsing
    if (typeof parsed === "string") {
        try {
            parsed = JSON.parse(parsed);
        } catch {
            return [];
        }
    }

    // Handle double-encoded JSON strings
    if (typeof parsed === "string") {
        try {
            parsed = JSON.parse(parsed);
        } catch {
            return [];
        }
    }

    return Array.isArray(parsed) ? parsed.map(String) : [];
}

export default function HeroProductsCarousel({ products }: HeroProductsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (!products || products.length === 0) return;

        const interval = setInterval(() => {
            setFade(false); // fade out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [products]);

    if (!products || products.length === 0) return null;

    const product = products[currentIndex];
    const images = parseImages(product.images);
    const imageUrl = images[0] ? `${API_BASE_URL}/${images[0].replace(/^\/+/, "")}` : "/placeholder.png";
    const title = product.title || "Product";

    return (
        <div className="relative w-full overflow-hidden rounded-lg">
            <div
                className={`relative w-full transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            >
                {/* Wrapper with reduced aspect ratio */}
                <div className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] relative">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover w-full h-full"
                        unoptimized
                    />

                    {/* Bottom-centered overlay */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    );
}
