
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import ProjectCard from "@/components/ui-components/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const categories = ["all", "shopify", "theme", "app", "custom"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <Layout>
      <section className="section-padding">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">My Projects</h1>
            <p className="text-muted-foreground animate-fade-in [animation-delay:0.1s]">
              Browse through my work with Shopify stores across various industries. Each project represents a unique approach to solving e-commerce challenges.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 my-8 animate-fade-in [animation-delay:0.2s]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in [animation-delay:0.3s]">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Projects;
