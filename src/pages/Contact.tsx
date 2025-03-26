
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { Github, Mail, Send, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface SocialLinkProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

const SocialLink = ({ icon: Icon, label, value, href }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
  >
    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-4">
      <Icon size={20} className="text-primary" />
    </div>
    <div>
      <p className="font-medium mb-1">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks: SocialLinkProps[] = [
    {
      icon: Mail,
      label: "Email",
      value: "web.hero218@gmail.com",
      href: "mailto:web.hero218@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/username",
      href: "#",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@danielxu",
      href: "#",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Message me on WhatsApp",
      href: "#",
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h1>
            <p className="text-muted-foreground animate-fade-in [animation-delay:0.1s]">
              Have a project in mind? Let's discuss how I can help you create an exceptional e-commerce experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in [animation-delay:0.2s]">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
            
            <div className="lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-secondary/50 border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-secondary/50 border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-secondary/50 border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-secondary/50 border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "transition-all duration-300 resize-none"
                    )}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg font-medium mt-2",
                    "bg-primary text-primary-foreground",
                    "hover:opacity-90 transition-all",
                    "disabled:opacity-70 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
