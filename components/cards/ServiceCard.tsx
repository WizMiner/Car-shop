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
            className="group flex flex-col h-[400px] rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-zinc-950 dark:ring-zinc-800"
        >
            {/* Image */}
            <div className="relative h-40 overflow-hidden rounded-t-2xl">
                {service.imageUrl ? (
                    <Image
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-zinc-400">
                        No Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 justify-between">
                <div>
                    <h3 className="text-base font-semibold leading-6">{service.name}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mt-1">
                        {service.description}   
                    </p>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                    {/* <p className="text-sm font-medium text-primary">ETB {service.price.toFixed(0)}</p> */}
                    <button className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md py-2 text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </Link>

    );
}
