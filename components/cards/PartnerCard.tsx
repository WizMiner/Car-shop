"use client";

import Image from "next/image";

export type PartnerCardType = {
    id: string | number;
    name: string;
    contact?: string[];
    imageUrl?: string | null;
};

export default function PartnerCard({ partner }: { partner: PartnerCardType }) {
    return (
        <div
            className="group rounded-2xl shadow-sm ring-1 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md h-[350px] flex flex-col"
            style={{
                backgroundColor: "var(--color-background)",
                borderColor: "var(--color-muted)",
            }}
        >
            {/* Image */}
            <div
                className="relative aspect-video overflow-hidden rounded-t-2xl"
                style={{ backgroundColor: "var(--color-muted)" }}
            >
                {partner.imageUrl ? (
                    <Image
                        src={partner.imageUrl}
                        alt={partner.name}
                        fill
                        unoptimized
                        className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                        sizes="100%"
                    />
                ) : (
                    <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ color: "var(--color-muted)" }}
                    >
                        No Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-foreground)" }}
                >
                    {partner.name}
                </h3>

                <div className="flex-1 overflow-y-auto text-sm">
                    {partner.contact && partner.contact.length > 0 ? (
                        <ul style={{ color: "var(--color-muted)" }} className="space-y-1">
                            {partner.contact.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ color: "var(--color-muted)" }}>No contact info</p>
                    )}
                </div>
            </div>
        </div>
    );
}
