
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

  // Dynamic content based on the post ID
  const renderDynamicContent = () => {
    // This function returns different article content based on the post ID
    if (post.id === 6) { // SEO Checklist article
      return (
        <>
          <p className="text-xl font-medium text-primary mb-6">
            {post.excerpt}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Shopify SEO Matters in 2025</h2>
          <p>
            With over a million active Shopify stores competing for attention, search engine optimization has become more crucial than ever. Google's algorithm updates in the past year have placed even greater emphasis on user experience, content quality, and technical performance.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">The Complete Shopify SEO Checklist</h2>
          <p>
            After optimizing dozens of Shopify stores and tracking their results, I've compiled this comprehensive checklist organized by priority and impact. Let's dive in:
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">1. Technical SEO Foundations</h3>
          <p>
            Technical SEO forms the backbone of your optimization strategy. Without these elements in place, even the best content strategy will underperform.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 mb-5">
            <li>Ensure your store is using the latest Shopify 2.0 theme architecture</li>
            <li>Implement proper canonical tags to avoid duplicate content issues</li>
            <li>Set up structured data for products, collections, and blog articles</li>
            <li>Optimize robots.txt and create a comprehensive XML sitemap</li>
            <li>Implement proper redirects for any changed or removed URLs</li>
            <li>Ensure your store passes Core Web Vitals assessments</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-6 mb-3">2. On-Page SEO Elements</h3>
          <p>
            On-page SEO involves optimizing individual pages for both users and search engines. This includes proper keyword placement and content structure.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 mb-5">
            <li>Create unique, keyword-rich titles for all pages (60-70 characters)</li>
            <li>Write compelling meta descriptions (150-160 characters)</li>
            <li>Implement a logical heading structure (H1, H2, H3)</li>
            <li>Use descriptive, keyword-optimized URLs</li>
            <li>Optimize image alt text and filenames</li>
            <li>Include primary keywords in the first 100 words of content</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-6 mb-3">3. Content Strategy for Shopify</h3>
          <p>
            Content remains king for SEO. A strategic approach to content creation can significantly impact your store's visibility and authority.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 mb-5">
            <li>Develop comprehensive product descriptions (minimum 300 words)</li>
            <li>Create detailed collection pages with unique content</li>
            <li>Maintain an active blog with industry-relevant topics</li>
            <li>Implement FAQ sections to target long-tail keywords</li>
            <li>Develop category and buying guides for complex product lines</li>
            <li>Create linkable assets like tools, calculators, or detailed guides</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Strategy</h2>
          <p>
            Implementing all these optimizations at once can be overwhelming. I recommend a phased approach based on impact and difficulty:
          </p>
          
          <ol className="list-decimal pl-6 space-y-2 mt-3 mb-5">
            <li>Start with technical foundations to ensure crawlability</li>
            <li>Optimize your highest-traffic and highest-converting pages first</li>
            <li>Develop a content calendar for ongoing blog and guide creation</li>
            <li>Implement regular audits to identify new opportunities</li>
            <li>Monitor rankings and performance to refine your strategy</li>
          </ol>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Measuring Success</h2>
          <p>
            SEO is a long-term investment, but there are several key metrics you should track to measure your progress:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 mb-5">
            <li>Organic traffic growth (via Google Analytics)</li>
            <li>Keyword rankings for primary and secondary terms</li>
            <li>Organic conversion rate and revenue</li>
            <li>Page load times and Core Web Vitals</li>
            <li>Backlink acquisition and domain authority growth</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>
            Shopify SEO is a complex but rewarding endeavor that can dramatically increase your store's visibility and sales. By systematically working through this checklist, you'll build a strong foundation for sustainable organic growth in 2025 and beyond.
          </p>
          <p className="mt-4">
            If you have questions about implementing any of these strategies for your specific Shopify store, feel free to reach out through the contact form.
          </p>
        </>
      );
    } else {
      // Default content for other articles
      return (
        <>
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
        </>
      );
    }
  };

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
            {renderDynamicContent()}
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
