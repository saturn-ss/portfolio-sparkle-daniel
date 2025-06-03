
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { Mail, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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
    
    // Simulate form submission to FidenzioNucci@outlook.com
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Your message has been sent to FidenzioNucci@outlook.com",
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/saturn-ss",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      href: "https://wa.me/1234567890",
      color: "hover:bg-green-500 hover:text-white"
    },
    {
      name: "Telegram",
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785L24 5.159c.312-1.248-.537-1.81-1.335-1.442z"/>
        </svg>
      ),
      href: "https://t.me/yourusername",
      color: "hover:bg-blue-500 hover:text-white"
    },
    {
      name: "Microsoft Teams",
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.625 5.55c-1.875 0-3.375 1.5-3.375 3.375v7.725c0 .825-.675 1.5-1.5 1.5H8.625c-.825 0-1.5-.675-1.5-1.5V8.925c0-1.875-1.5-3.375-3.375-3.375S.375 7.05.375 8.925v7.725c0 2.475 2.025 4.5 4.5 4.5h14.25c2.475 0 4.5-2.025 4.5-4.5V8.925c0-1.875-1.5-3.375-3.375-3.375z"/>
          <path d="M3.75 3.75C3.75 1.675 5.425 0 7.5 0s3.75 1.675 3.75 3.75S9.575 7.5 7.5 7.5 3.75 5.825 3.75 3.75z"/>
        </svg>
      ),
      href: "https://teams.microsoft.com/l/chat/0/0?users=yourusername@domain.com",
      color: "hover:bg-purple-600 hover:text-white"
    }
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
          
          <div className="max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            <div className="bg-secondary/50 p-6 rounded-lg mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-muted-foreground">FidenzioNucci@outlook.com</p>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg mb-8 hidden">
              <h3 className="font-medium mb-4">Connect with me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                      "bg-secondary border border-border text-sm",
                      social.color
                    )}
                  >
                    <social.icon />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            
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
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
