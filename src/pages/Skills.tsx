
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const categories: SkillCategory[] = [
    {
      name: "Shopify Development",
      description: "Building and customizing Shopify stores with 4+ years of experience.",
      skills: [
        { name: "Shopify Theme Development", level: 5 },
        { name: "Liquid Template Language", level: 5 },
        { name: "Shopify API Integration", level: 4 },
        { name: "Headless Shopify", level: 4 },
        { name: "Custom App Development", level: 4 },
        { name: "Shopify Plus", level: 3 },
      ],
    },
    {
      name: "Front-end Development",
      description: "Creating responsive and interactive user interfaces.",
      skills: [
        { name: "HTML5 / CSS3", level: 5 },
        { name: "JavaScript / TypeScript", level: 4 },
        { name: "React.js", level: 4 },
        { name: "Tailwind CSS", level: 5 },
        { name: "SCSS / SASS", level: 4 },
        { name: "Responsive Design", level: 5 },
      ],
    },
    {
      name: "E-commerce Optimization",
      description: "Enhancing online stores for better user experience and conversions.",
      skills: [
        { name: "Conversion Rate Optimization", level: 4 },
        { name: "Search Engine Optimization", level: 3 },
        { name: "Performance Optimization", level: 4 },
        { name: "User Experience Design", level: 4 },
        { name: "A/B Testing", level: 3 },
        { name: "Analytics Integration", level: 4 },
      ],
    },
    {
      name: "Third-party Integrations",
      description: "Connecting Shopify with various external services and platforms.",
      skills: [
        { name: "Payment Gateways", level: 5 },
        { name: "Shipping & Fulfillment", level: 4 },
        { name: "Email Marketing", level: 4 },
        { name: "CRM Integration", level: 3 },
        { name: "Social Media Integration", level: 4 },
        { name: "Inventory Management", level: 3 },
      ],
    },
    {
      name: "Development Tools",
      description: "Tools and technologies used in development workflow.",
      skills: [
        { name: "Git / GitHub", level: 4 },
        { name: "Webpack / Vite", level: 4 },
        { name: "NPM / Yarn", level: 4 },
        { name: "Theme Kit / Shopify CLI", level: 5 },
        { name: "VS Code", level: 5 },
        { name: "Chrome DevTools", level: 5 },
      ],
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">My Skills</h1>
            <p className="text-muted-foreground animate-fade-in [animation-delay:0.1s]">
              With 4 years specializing in Shopify development, I've honed a diverse set of skills to create exceptional e-commerce experiences.
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in [animation-delay:0.2s]">
            {categories.map((category, index) => (
              <div 
                key={category.name} 
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className={cn(
                    "w-full flex items-center justify-between p-5 text-left",
                    "bg-secondary/50 hover:bg-secondary transition-colors",
                    expandedCategory === category.name && "border-b border-border"
                  )}
                >
                  <div>
                    <h3 className="text-xl font-medium">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                  {expandedCategory === category.name ? (
                    <ChevronUp className="text-primary flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-primary flex-shrink-0" size={20} />
                  )}
                </button>
                
                {expandedCategory === category.name && (
                  <div className="p-5 space-y-4 animate-fade-in">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center">
                          <Check size={16} className="text-primary mr-2" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(skill.level / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Skills;
