// app/bookings/page.tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchBookings } from "@/lib/api";
import type { Booking } from "@/lib/types";
import Link from "next/link";
import PaginationRouter from "@/components/navigation/PaginationRouter";

// Force static rendering for next export
export const dynamic = "force-static";

export default async function BookingsPage() {
  const resp = await fetchBookings({ page: 1, perPage: 100 });
  let data: Booking[] = resp?.bookings ?? [];
  const meta = resp?.meta ?? { currentPage: 1, totalPages: 1 };

  // Filter out broken entries
  data = data.filter((b) => b && b.totalPrice != null);

  return (
    <main className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
      <Container className="py-12 sm:py-16 lg:py-20">
        <SectionHeader title="Your Bookings" subtitle="Manage and review your rental bookings." />

        <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
          <div className="hidden grid-cols-6 gap-4 bg-muted-50 px-4 py-3 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 sm:grid">
            <div>Product</div>
            <div>Renter</div>
            <div>Dates</div>
            <div>Total</div>
            <div>Status</div>
            <div>Payment</div>
          </div>

          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {data.map((b: Booking) => {
              const total = b.totalPrice ?? 0;
              const productTitle = b.Product?.title ?? "Untitled";
              const productId = b.Product?.id ?? "";
              const pricePerDay = b.Product?.pricePerDay;

              return (
                <li key={b.id} className="grid grid-cols-1 gap-3 px-4 py-4 text-sm sm:grid-cols-6 sm:items-center">
                  <div>
                    <Link href={productId ? `/cars/${productId}` : "#"} className="font-medium hover:text-primary-600">
                      {productTitle}
                    </Link>
                    {pricePerDay && <div className="text-xs text-zinc-500">ETB {pricePerDay}/day</div>}
                  </div>
                  <div>{b.User?.firstName ?? ""} {b.User?.lastName ?? ""}</div>
                  <div>
                    <div>{b.startDate ? new Date(b.startDate).toLocaleDateString() : "N/A"} → {b.endDate ? new Date(b.endDate).toLocaleDateString() : "N/A"}</div>
                  </div>
                  <div className="font-medium">ETB {total.toFixed(2)}</div>
                  <div>
                    <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{b.status ?? "N/A"}</span>
                  </div>
                  <div>
                    <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{b.paymentStatus ?? "N/A"}</span>
                  </div>
                  <div className="sm:col-span-6">
                    {b.id && <Link href={`/bookings/${b.id}`} className="text-primary-600 hover:underline">View details</Link>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <PaginationRouter currentPage={meta.currentPage} totalPages={meta.totalPages} />
      </Container>
    </main>
  );
}
