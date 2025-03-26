
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";
import ProjectCard from "../ui-components/ProjectCard";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const categories = ["all", "shopify", "theme", "app", "custom"];

  const filteredProjects = filter === "all" 
    ? projects.slice(0, 6) 
    : projects.filter(project => project.tags.includes(filter)).slice(0, 6);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <Container className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my recent Shopify development work. Each project showcases my approach to creating beautiful, functional e-commerce experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        
        <div className="text-center pt-6">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all font-medium"
          >
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
