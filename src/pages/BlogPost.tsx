
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { blog } from "@/data/blog";
import { cn } from "@/lib/utils";
import BlogCard from "@/components/ui-components/BlogCard";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blog.find(p => p.id === parseInt(id || "0")));
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Get related posts (excluding current post)
  const relatedPosts = blog
    .filter(p => p.id !== parseInt(id || "0"))
    .slice(0, 3);

  useEffect(() => {
    setPost(blog.find(p => p.id === parseInt(id || "0")));
    setImageLoaded(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <Layout>
        <Container className="section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-8 md:pt-12 pb-20">
        <Container className="px-4 sm:px-6 md:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8 text-sm text-muted-foreground animate-fade-in [animation-delay:0.1s]">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1.5" />
                <span>{post.date}</span>
              </div>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <Clock size={14} className="mr-1.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video mb-8 animate-fade-in [animation-delay:0.2s]">
              <div className={cn(
                "absolute inset-0 bg-muted/30 backdrop-blur-sm transition-all duration-500",
                imageLoaded ? "opacity-0" : "opacity-100"
              )} />
              <img
                src={post.image}
                alt={post.title}
                className={cn(
                  "w-full h-full object-cover transition-all duration-700 ease-out",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in [animation-delay:0.3s]">
            <p className="text-xl font-medium text-primary mb-6">
              {post.excerpt}
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Challenge</h2>
            <p>
              E-commerce businesses face unique challenges in today's competitive online marketplace. With consumers having more options than ever before, creating a standout shopping experience is essential for success. This article explores strategies for optimizing your Shopify store for maximum conversion and customer satisfaction.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Strategies for Success</h2>
            <p>
              When it comes to e-commerce optimization, there are several key areas that deserve your attention. Let's explore the most impactful strategies:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. User Experience Optimization</h3>
            <p>
              A seamless, intuitive user experience is the foundation of any successful e-commerce store. This includes fast loading times, intuitive navigation, and a mobile-responsive design. Studies show that even a one-second delay in page load time can reduce conversions by up to 7%.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. Conversion Rate Optimization</h3>
            <p>
              Implementing strategic CRO techniques can significantly impact your bottom line. This includes optimizing product pages, streamlining the checkout process, and implementing effective call-to-action elements.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. Content Marketing for E-commerce</h3>
            <p>
              Quality content not only helps with SEO but also builds trust with your customers. Product descriptions, buying guides, and educational blog posts all contribute to a more engaging and informative shopping experience.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Implementing These Strategies</h2>
            <p>
              Successfully implementing these strategies requires a thoughtful approach and ongoing optimization. Here are some practical steps to get started:
            </p>
            
            <ul>
              <li>Conduct a thorough audit of your current store</li>
              <li>Identify key areas for improvement</li>
              <li>Prioritize changes based on potential impact</li>
              <li>Implement changes systematically</li>
              <li>Test and measure results</li>
              <li>Iterate based on performance data</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p>
              In today's competitive e-commerce landscape, simply having a good product is no longer enough. By focusing on user experience, conversion optimization, and strategic content marketing, you can create a Shopify store that not only attracts customers but converts and retains them for the long term.
            </p>
          </div>
          
          {relatedPosts.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border animate-fade-in [animation-delay:0.4s]">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} {...relatedPost} />
                ))}
              </div>
            </section>
          )}
        </Container>
      </article>
    </Layout>
  );
};

export default BlogPost;
