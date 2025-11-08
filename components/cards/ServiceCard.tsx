import Image from "next/image";
import Link from "next/link";

export type ServiceCardType = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string | null;
    createdAt?: string;
};

export default function ServiceCard({ service }: { service: ServiceCardType }) {
    return (
        <Link
            href={`/services/${service.id}`}
            className="group rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-[transform,box-shadow] duration-standard ease-standard hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800 animate-fade-in"
        >
            <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-900">
                {service.imageUrl ? (
                    <Image
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                    />
                ) : (
                    // optional: a placeholder icon or empty space
                    <div className="flex items-center justify-center h-full text-zinc-400">
                        No Image
                    </div>
                )}
            </div>

            <div className="space-y-3 p-4">
                {/* {service.createdAt && (
                    <time className="text-xs text-zinc-500">{service.createdAt}</time>
                )} */}
                <h3 className="text-base font-semibold leading-6">{service.name}</h3>
                <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {service.description}
                </p>
                <p className="text-sm font-medium text-primary">ETB {service.price.toFixed(0)}</p>
                <button className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md py-2 text-sm font-medium">
                    View Details
                </button>
            </div>
        </Link>
    );
}
