import Hero from "@/components/sections/Hero";
import ProductsSection from "@/components/sections/ProductsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BlogSection from "@/components/sections/BlogSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-black">
      <Hero />
      <ProductsSection />
      <CategoriesSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
}
