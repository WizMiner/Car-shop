// lib/api.ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

import type {
  Meta,
  Product,
  Booking,
  // CreateBookingInput,
  Testimonial,
  Blog,
  Category,
  About,
  Service,
  Partner,
  Gallery,
} from "./types";

type FetchOptions = RequestInit & { next?: { revalidate?: number } };

async function request<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  if (!API_BASE_URL) throw new Error("API base URL is not configured");
  const url = `${API_BASE_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

export function buildQuery(
  params: Record<string, string | number | undefined>
) {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) sp.set(k, String(v));
  });
  const q = sp.toString();
  return q ? `?${q}` : "";
}

// Products
export async function fetchProducts(
  query: { page?: number; categoryId?: string; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    categoryId: query.categoryId,
    perPage: query.perPage,
  });
  return request<{ products: Product[]; meta: Meta }>(`/api/products${q}`, {
    cache: "force-cache",
  });
}

export async function fetchProduct(id: string) {
  return request<Product>(`/api/products/${id}`, {
    cache: "force-cache",
  });
}

// Bookings
export async function fetchBookings(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });
  return request<{ bookings: Booking[]; meta: Meta }>(`/api/bookings${q}`, {
    cache: "force-cache",
  });
}

export async function fetchBooking(id: string) {
  return request<Booking>(`/api/bookings/${id}`, {
    cache: "force-cache",
  });
}

// export async function createBooking(data: CreateBookingInput) {
//   return request<{
//     message: string;
//     booking: Booking;
//   }>("/api/bookings", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
// }

// Testimonials
export async function fetchTestimonials(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });
  return request<{ testimonials: Testimonial[]; meta: Meta }>(
    `/api/testimonials${q}`,
    {
      cache: "force-cache",
    }
  );
}

export async function fetchTestimonial(id: string) {
  return request<Testimonial>(`/api/testimonials/${id}`, {
    cache: "force-cache",
  });
}

// Blogs
export async function fetchBlogs(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });
  return request<{ blogs: Blog[]; meta: Meta }>(`/api/blogs${q}`, {
    cache: "force-cache",
  });
}

export async function fetchBlog(id: string) {
  return request<Blog>(`/api/blogs/${id}`, { cache: "force-cache" });
}

// Categories
export async function fetchCategories() {
  return request<{ categories: Category[]; meta: Meta }>(`/api/categories`, {
    cache: "force-cache",
  });
}

// products by category ID
export async function fetchProductsByCategory(
  categoryId: string | number | undefined,
  query: { page?: number; perPage?: number } = {}
) {
  if (!categoryId) {
    return { products: [], meta: { currentPage: 1, totalPages: 1 } };
  }

  const id = categoryId.toString();
  const q = buildQuery({ page: query.page, perPage: query.perPage });

  try {
    return await request<{ products: Product[]; meta: Meta }>(
      `/api/products/category/${id}${q}`,
      { cache: "force-cache" }
    );
  } catch {
    return { products: [], meta: { currentPage: 1, totalPages: 1 } };
  }
}


// About
export async function fetchAbouts(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });

  return request<{ abouts: About[]; meta: Meta }>(`/api/about${q}`, {
    cache: "force-cache",
  });
}

export async function fetchAbout(id: string | number) {
  return request<About>(`/api/about/${id}`, {
    cache: "force-cache",
  });
}

// Services
export async function fetchServices(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });
  return request<{ services: Service[]; meta: Meta }>(`/api/services${q}`, {
    cache: "force-cache",
  });
}

export async function fetchService(id: string | number) {
  return request<Service>(`/api/services/${id}`, { cache: "force-cache" });
}

// Partners
export async function fetchPartners(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });

  const res = await request<{ data: Partner[]; meta: Meta }>(
    `/api/partners${q}`,
    { cache: "force-cache" }
  );

  return {
    data: res.data,
    meta: res.meta,
  };
}

export async function fetchPartner(id: string | number) {
  return request<Partner>(`/api/partners/${id}`, {
    cache: "force-cache",
  });
}

// Fetch paginated galleries
export async function fetchGalleries(
  query: { page?: number; perPage?: number } = {}
) {
  const q = buildQuery({
    page: query.page,
    perPage: query.perPage,
  });

  return request<{ data: Gallery[]; meta: Meta }>(`/api/galleries${q}`, {
    cache: "force-cache",
  });
}

// Fetch a single gallery by ID

export async function fetchGallery(id: number | string): Promise<Gallery> {
  const res = await request<{ success: boolean; data: Gallery }>(
    `/api/galleries/${id}`,
    {
      cache: "force-cache",
    }
  );
  return res.data;
}
