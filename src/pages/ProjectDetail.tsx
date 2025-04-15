
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

  // Mapping each project's content based on ID
  let projectContent;
  
  if (id === "2") {
    projectContent = (
      <>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🌶️ Project Overview</h2>
        <p className="text-base mb-5">
          I led the full development and customization of Tuyo, a modern Shopify store focused on personalized products 
          for the Brazilian market. This project involved tailoring the store's UI/UX to align with the brand's vibrant 
          identity while ensuring performance and mobile responsiveness.
        </p>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🎯 Objectives</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Elevate TUYO's brand presence through a visually immersive and flavor-forward design.</li>
          <li>Create an intuitive and responsive e-commerce experience.</li>
          <li>Emphasize the artisanal quality and gourmet appeal of the products.</li>
          <li>Facilitate seamless online shopping and checkout flow.</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">✅ Key Features Implemented</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
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
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🛠️ Role & Contribution</h2>
        <p className="text-base mb-5">
          Contributed to the design, development, and optimization of a premium e-commerce platform focused on enhancing 
          brand storytelling and conversion across product pages and the homepage.
        </p>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🧰 Tools & Tech Used</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Shopify / Shopify Plus</li>
          <li>Liquid (Shopify templating)</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Adobe XD / Figma</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">💫 Impact</h2>
        <p className="text-base mb-5">
          The result is a clean, intuitive shopping experience tailored to Tuyo's target audience, driving both 
          conversions and customer engagement from day one.
        </p>
      </>
    );
  } else if (id === "3") {
    projectContent = (
      <>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">👕 Project Overview</h2>
        <p className="text-base mb-5">
          Champion System – Custom Kit Ordering. This project involved the development and customization of a 
          Shopify storefront tailored for team-based custom apparel ordering, focusing on performance, flexibility, and user 
          experience for clients placing bulk or personalized kit orders.
        </p>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🎯 Objectives</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Customize Shopify to support complex product configurations and team stores.</li>
          <li>Implement a clean, branded interface for showcasing cycling, triathlon, and running apparel.</li>
          <li>Simplify the order flow for teams and individuals purchasing customized products.</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">✅ Key Features Implemented</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>
            <span className="font-medium">Custom Product Pages:</span> Built Shopify templates to support multiple variants, 
            size charts, and customization options.
          </li>
          <li>
            <span className="font-medium">Team Store Functionality:</span> Developed separate storefronts or collections 
            for individual teams or clubs.
          </li>
          <li>
            <span className="font-medium">Advanced Theme Customizations:</span> Customized Shopify Liquid files to meet 
            brand and UX goals.
          </li>
          <li>
            <span className="font-medium">Mobile-First Design:</span> Ensured full responsiveness and ease of ordering 
            on mobile devices.
          </li>
          <li>
            <span className="font-medium">App Integrations:</span> Implemented apps for order deadlines, file uploads 
            (e.g., artwork), and advanced form handling.
          </li>
          <li>
            <span className="font-medium">Performance Optimization:</span> Minified code, optimized images, and reduced 
            render-blocking elements.
          </li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🛠️ Role & Contribution</h2>
        <p className="text-base mb-5">
          Worked on the development and customization of a Shopify storefront tailored for team-based custom apparel ordering, 
          focusing on performance, flexibility, and user experience for clients placing bulk or personalized kit orders.
        </p>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🧰 Tools & Tech Used</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Shopify (Online Store 2.0)</li>
          <li>Liquid (Shopify templating language)</li>
          <li>HTML / SCSS / JavaScript</li>
          <li>Shopify Apps (for file uploads, custom options, or team stores)</li>
          <li>Shopify Admin / Custom Metafields</li>
          <li>ThemeKit or Shopify CLI (for deployment)</li>
        </ul>
      </>
    );
  } else {
    projectContent = (
      <>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🍬 Project Overview</h2>
        <p className="text-base mb-5">
          Sugar Rush by Steph – Product Page Optimization. This project involved working on the design and 
          development of a dynamic and user-friendly product detail page to enhance the shopping experience and boost conversion.
        </p>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🎯 Objectives</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Improve UX/UI for product pages, especially when landing directly on specific variants.</li>
          <li>Ensure seamless integration with Shopify's theme structure and dynamic URL parameters.</li>
          <li>Maintain brand consistency and playfulness aligned with Sugar Rush by Steph's aesthetic.</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">✅ Key Features Implemented</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Variant-specific landing: Automatically displays the selected variant via URL (e.g., flavor or box size).</li>
          <li>Responsive design: Ensured flawless performance across mobile, tablet, and desktop.</li>
          <li>Custom styling: Matched the vibrant, colorful, and sweet-themed brand identity.</li>
          <li>Speed optimizations: Compressed assets and streamlined scripts for faster load times.</li>
          <li>Conversion-focused layout: Prioritized "Add to Cart" visibility and clear product information.</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🛠️ Role & Contribution</h2>
        <p className="text-base mb-5">
          I worked on the design and development of the product detail page, focusing on the user experience 
          and ensuring that the page was optimized for conversions. This included implementing variant-specific 
          landing pages, responsive design, and custom styling to match the brand identity.
        </p>
        
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">🧰 Tools & Tech Used</h2>
        <ul className="list-disc pl-5 mb-5 space-y-1.5 text-base">
          <li>Shopify (Online Store 2.0 / Liquid)</li>
          <li>HTML / CSS / JavaScript</li>
          <li>Shopify Theme Editor</li>
        </ul>
      </>
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

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in [animation-delay:0.1s]">
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
              <p className="text-base font-medium">Client Project</p>
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
          
          <div className="prose prose-sm dark:prose-invert max-w-none animate-fade-in [animation-delay:0.4s]">
            {projectContent}
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
