
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Tag as TagIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find(p => p.id === parseInt(id || "0")));
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setProject(projects.find(p => p.id === parseInt(id || "0")));
    setImageLoaded(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <Container className="section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
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
            to="/projects"
            className="inline-flex items-center text-sm hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in [animation-delay:0.1s]">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                >
                  <TagIcon size={12} className="mr-1.5" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video mb-8 animate-fade-in [animation-delay:0.2s]">
              <div className={cn(
                "absolute inset-0 bg-muted/30 backdrop-blur-sm transition-all duration-500",
                imageLoaded ? "opacity-0" : "opacity-100"
              )} />
              <img
                src={project.image}
                alt={project.title}
                className={cn(
                  "w-full h-full object-cover transition-all duration-700 ease-out",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            <div className="flex items-center justify-between animate-fade-in [animation-delay:0.3s]">
              <p className="text-lg font-medium">Client Project</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-secondary/80 transition-colors"
              >
                Visit Live Site <ExternalLink size={14} className="ml-1.5" />
              </a>
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in [animation-delay:0.4s]">
            <h2>Project Overview</h2>
            <p>
              This project for {project.title} involved creating a custom Shopify store that aligned with their brand vision and business objectives. The client needed a solution that would showcase their products effectively while providing an intuitive shopping experience for their customers.
            </p>
            
            <h2>The Challenge</h2>
            <p>
              The client was facing challenges with their previous e-commerce platform, including poor conversion rates, limited customization options, and difficulties managing their inventory. They needed a more flexible and user-friendly solution that would help them scale their business.
            </p>
            
            <h2>The Solution</h2>
            <p>
              I developed a custom Shopify store that addressed all of the client's pain points. The solution included:
            </p>
            <ul>
              <li>A custom theme designed to showcase their unique product offerings</li>
              <li>Optimized product pages with enhanced imagery and detailed descriptions</li>
              <li>Streamlined checkout process to improve conversion rates</li>
              <li>Integration with their inventory management system</li>
              <li>Mobile-responsive design for seamless shopping on any device</li>
            </ul>
            
            <h2>The Results</h2>
            <p>
              Following the launch of their new Shopify store, the client saw significant improvements in their key metrics:
            </p>
            <ul>
              <li>35% increase in conversion rate</li>
              <li>28% decrease in cart abandonment</li>
              <li>42% increase in average order value</li>
              <li>Improved customer satisfaction and repeat purchases</li>
            </ul>
            
            <h2>Technologies Used</h2>
            <ul>
              <li>Shopify Liquid</li>
              <li>JavaScript & jQuery</li>
              <li>HTML5 & CSS3</li>
              <li>Shopify APIs</li>
              <li>Custom App Development</li>
            </ul>
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
