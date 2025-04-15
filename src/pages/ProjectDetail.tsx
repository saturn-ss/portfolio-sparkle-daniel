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

  const projectContent = id === "2" ? (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🌶️ Project Overview</h2>
      <p className="text-lg mb-6">
        I led the full development and customization of Tuyo, a modern Shopify store focused on personalized products 
        for the Brazilian market. This project involved tailoring the store's UI/UX to align with the brand's vibrant 
        identity while ensuring performance and mobile responsiveness.
      </p>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🎯 Objectives</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Elevate TUYO's brand presence through a visually immersive and flavor-forward design.</li>
        <li>Create an intuitive and responsive e-commerce experience.</li>
        <li>Emphasize the artisanal quality and gourmet appeal of the products.</li>
        <li>Facilitate seamless online shopping and checkout flow.</li>
      </ul>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">✅ Key Features Implemented</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>
          <span className="font-medium">Homepage Design:</span> Featured high-quality lifestyle imagery, bold typography, 
          and hero banners to reflect the brand's premium positioning.
        </li>
        <li>
          <span className="font-medium">Product Presentation:</span> Designed clean, scroll-friendly product pages with 
          focus on packaging, ingredients, and pairings.
        </li>
        <li>
          <span className="font-medium">Mobile Optimization:</span> Ensured fast, frictionless experience across all devices.
        </li>
        <li>
          <span className="font-medium">UX/UI Enhancements:</span> Smooth transitions and hover effects for a modern, 
          interactive feel. Sticky headers and call-to-actions to keep important options accessible.
        </li>
        <li>
          <span className="font-medium">Checkout Optimization:</span> Streamlined cart and checkout pages to reduce drop-offs.
        </li>
      </ul>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🛠️ Role & Contribution</h2>
      <p className="text-lg mb-6">
        Contributed to the design, development, and optimization of a premium e-commerce platform focused on enhancing 
        brand storytelling and conversion across product pages and the homepage.
      </p>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🧰 Tools & Tech Used</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Shopify / Shopify Plus</li>
        <li>Liquid (Shopify templating)</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Adobe XD / Figma</li>
      </ul>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">💫 Impact</h2>
      <p className="text-lg mb-6">
        The result is a clean, intuitive shopping experience tailored to Tuyo's target audience, driving both 
        conversions and customer engagement from day one.
      </p>
    </>
  ) : (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🍬 Project Overview</h2>
      <p className="text-lg mb-6">
        Sugar Rush by Steph – Product Page Optimization. This project involved working on the design and 
        development of a dynamic and user-friendly product detail page to enhance the shopping experience and boost conversion.
      </p>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🎯 Objectives</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Improve UX/UI for product pages, especially when landing directly on specific variants.</li>
        <li>Ensure seamless integration with Shopify's theme structure and dynamic URL parameters.</li>
        <li>Maintain brand consistency and playfulness aligned with Sugar Rush by Steph's aesthetic.</li>
      </ul>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">✅ Key Features Implemented</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Variant-specific landing: Automatically displays the selected variant via URL (e.g., flavor or box size).</li>
        <li>Responsive design: Ensured flawless performance across mobile, tablet, and desktop.</li>
        <li>Custom styling: Matched the vibrant, colorful, and sweet-themed brand identity.</li>
        <li>Speed optimizations: Compressed assets and streamlined scripts for faster load times.</li>
        <li>Conversion-focused layout: Prioritized "Add to Cart" visibility and clear product information.</li>
      </ul>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🛠️ Role & Contribution</h2>
      <p className="text-lg mb-6">
        I worked on the design and development of the product detail page, focusing on the user experience 
        and ensuring that the page was optimized for conversions. This included implementing variant-specific 
        landing pages, responsive design, and custom styling to match the brand identity.
      </p>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🧰 Tools & Tech Used</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Shopify (Online Store 2.0 / Liquid)</li>
        <li>HTML / CSS / JavaScript</li>
        <li>Shopify Theme Editor</li>
      </ul>
    </>
  );

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
            {projectContent}
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
