
import { ArrowUpRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  className?: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  image,
  readTime,
  className,
}: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/blog/${id}`}
      className={cn(
        "group flex flex-col glass-card rounded-lg overflow-hidden",
        "transition-all duration-300 hover:shadow-md",
        className
      )}
    >
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
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground flex-grow mb-4">
          {excerpt}
        </p>
        <div className="mt-auto">
          <span className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors">
            Read Article
            <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
