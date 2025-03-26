
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  className?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  url,
  className,
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={cn(
      "group overflow-hidden rounded-lg glass-card transition-theme",
      className
    )}>
      <Link to={`/projects/${id}`} className="block">
        <div className="relative overflow-hidden aspect-video">
          <div className={cn(
            "absolute inset-0 bg-muted/30 backdrop-blur-sm transition-all duration-500",
            imageLoaded ? "opacity-0" : "opacity-100"
          )} />
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700 ease-out",
              "group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="p-5 space-y-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-medium leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="pt-2 flex items-center justify-between">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Site
              <ExternalLink size={14} className="ml-1" />
            </a>
            <span className="text-sm text-muted-foreground">
              View Case Study →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
