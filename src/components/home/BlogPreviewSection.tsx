
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";
import BlogCard from "../ui-components/BlogCard";
import { blog } from "@/data/blog";
import { Link } from "react-router-dom";

const BlogPreviewSection = () => {
  // Show only the 3 most recent blog posts
  const recentPosts = blog.slice(0, 3);

  return (
    <section className="section-padding">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">E-commerce Insights</h2>
            <p className="text-muted-foreground max-w-xl">
              Stay up to date with the latest trends and strategies in the world of e-commerce.
            </p>
          </div>
          <Link
            to="/blog"
            className={cn(
              "px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap",
              "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            View All Posts
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogPreviewSection;
