
import { Link } from "react-router-dom";
import { Github, Mail, MessageSquare, Telegram } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      href: "#", 
      label: "GitHub Profile" 
    },
    { 
      name: "Telegram", 
      icon: Telegram, 
      href: "#", 
      label: "Telegram Contact" 
    },
    { 
      name: "WhatsApp", 
      icon: MessageSquare, 
      href: "#", 
      label: "WhatsApp Contact" 
    },
    { 
      name: "Email", 
      icon: Mail, 
      href: "mailto:web.hero218@gmail.com", 
      label: "Email Contact" 
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 mt-auto border-t border-border transition-theme">
      <Container className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-medium inline-block">
              Daniel<span className="text-primary"> Xu</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Shopify developer with 4 years of experience building high-converting e-commerce stores.
            </p>
          </div>
          
          <div className="md:text-center space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="md:text-right space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Connect</h3>
            <div className="flex md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-secondary hover:bg-primary text-primary hover:text-primary-foreground",
                    "transition-colors duration-300 ease-in-out"
                  )}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Daniel Xu. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Shopify Expert & E-commerce Developer
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
