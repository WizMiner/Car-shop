import Container from "@/components/ui/Container";
import BlogCard, { BlogCardType } from "@/components/cards/BlogCard";
import { Blog as BackendBlog } from "@/lib/types";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/api";

function mapBackendBlog(b: BackendBlog): BlogCardType {
  const fullImage = b.image ? `${API_BASE_URL}/${b.image}` : "/window.svg";

  return {
    id: b.id.toString(),
    title: b.title,
    excerpt: b.content.substring(0, 150) + "...",
    imageUrl: fullImage,
    author: b.User ? `${b.User.firstName} ${b.User.lastName}` : undefined,
    date: b.createdAt ? new Date(b.createdAt).toLocaleDateString() : undefined,
    category: b.Category?.name,
  };
}

interface BlogSectionProps {
  blogs: BackendBlog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  const cardBlogs = blogs.map(mapBackendBlog);

  return (
    <section id="blog" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Latest Articles</h2>
          <Link href="/blogs" className="text-sm font-medium text-primary-600 hover:underline">
            Read all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardBlogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
