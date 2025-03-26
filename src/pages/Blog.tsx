
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import BlogCard from "@/components/ui-components/BlogCard";
import { blog } from "@/data/blog";
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blog.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section className="section-padding">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">E-commerce Blog</h1>
            <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:0.1s]">
              Insights, strategies, and tips to help you succeed in the world of e-commerce
            </p>
            
            <div className="relative max-w-xl mx-auto animate-fade-in [animation-delay:0.2s]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-lg",
                  "bg-secondary/50 border border-border/50",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                  "transition-all duration-300"
                )}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in [animation-delay:0.3s]">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
