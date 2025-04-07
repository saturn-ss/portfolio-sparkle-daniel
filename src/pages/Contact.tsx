
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { Mail } from "lucide-react";
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
    
    // Simulate form submission to web.hero218@gmail.com
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Your message has been sent to web.hero218@gmail.com",
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
                <p className="text-sm text-muted-foreground">web.hero218@gmail.com</p>
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
