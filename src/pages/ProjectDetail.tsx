import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Tag as TagIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import ProjectImageCarousel from "@/components/ui-components/ProjectImageCarousel";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find(p => p.id === parseInt(id || "0")));

  useEffect(() => {
    setProject(projects.find(p => p.id === parseInt(id || "0")));
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
            
            <ProjectImageCarousel 
              mainImage={project.image} 
              title={project.title} 
              additionalImages={project.additionalImages} 
            />
            
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
            <h2 className="text-2xl font-bold text-foreground">🍬 Project Overview</h2>
            <p>
              Sugar Rush by Steph – Product Page Optimization. This project involved working on the design and 
              development of a dynamic and user-friendly product detail page to enhance the shopping experience and boost conversion.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground">🎯 Objectives</h2>
            <ul>
              <li>Improve UX/UI for product pages, especially when landing directly on specific variants.</li>
              <li>Ensure seamless integration with Shopify's theme structure and dynamic URL parameters.</li>
              <li>Maintain brand consistency and playfulness aligned with Sugar Rush by Steph's aesthetic.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground">✅ Key Features Implemented</h2>
            <ul>
              <li>Variant-specific landing: Automatically displays the selected variant via URL (e.g., flavor or box size).</li>
              <li>Responsive design: Ensured flawless performance across mobile, tablet, and desktop.</li>
              <li>Custom styling: Matched the vibrant, colorful, and sweet-themed brand identity.</li>
              <li>Speed optimizations: Compressed assets and streamlined scripts for faster load times.</li>
              <li>Conversion-focused layout: Prioritized "Add to Cart" visibility and clear product information.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground">🛠️ Role & Contribution</h2>
            <p>
              I worked on the design and development of the product detail page, focusing on the user experience 
              and ensuring that the page was optimized for conversions. This included implementing variant-specific 
              landing pages, responsive design, and custom styling to match the brand identity.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground">🧰 Tools & Tech Used</h2>
            <ul>
              <li>Shopify (Online Store 2.0 / Liquid)</li>
              <li>HTML / CSS / JavaScript</li>
              <li>Shopify Theme Editor</li>
            </ul>
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
