
import { Code, ShoppingCart, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: string;
}

const SkillCard = ({ icon: Icon, title, description, delay }: SkillCardProps) => (
  <div 
    className={cn(
      "glass-card p-6 rounded-lg transition-all duration-300 hover:translate-y-[-4px] animate-scale-in",
      `[animation-delay:${delay}]`
    )}
  >
    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Building tailored Shopify themes and apps that perfectly align with your brand identity and business goals.",
      delay: "0.1s"
    },
    {
      icon: ShoppingCart,
      title: "Store Optimization",
      description: "Enhancing user experience and conversion rates through strategic design and functionality improvements.",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Client-Focused Approach",
      description: "Collaborating closely with businesses to create solutions that drive measurable results and customer satisfaction.",
      delay: "0.3s"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <Container className="space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm a specialized Shopify developer with 4 years of experience creating beautiful, high-converting e-commerce experiences. My approach combines technical expertise with strategic thinking to build stores that not only look great but drive real business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
