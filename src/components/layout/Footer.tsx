import { Link } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Email", 
      icon: Mail, 
      href: "FidenzioNucci@outlook.com", 
      label: "Email Contact" 
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/saturn-ss",
      label: "GitHub Profile"
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   href: "https://linkedin.com/in/yourprofile",
    //   label: "LinkedIn Profile"
    // },
    // {
    //   name: "WhatsApp",
    //   icon: () => (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    //     </svg>
    //   ),
    //   href: "https://wa.me/1234567890",
    //   label: "WhatsApp Contact"
    // },
    // {
    //   name: "Telegram",
    //   icon: () => (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785L24 5.159c.312-1.248-.537-1.81-1.335-1.442z"/>
    //     </svg>
    //   ),
    //   href: "https://t.me/yourusername",
    //   label: "Telegram Contact"
    // },
    // {
    //   name: "Microsoft Teams",
    //   icon: () => (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M20.625 5.55c-1.875 0-3.375 1.5-3.375 3.375v7.725c0 .825-.675 1.5-1.5 1.5H8.625c-.825 0-1.5-.675-1.5-1.5V8.925c0-1.875-1.5-3.375-3.375-3.375S.375 7.05.375 8.925v7.725c0 2.475 2.025 4.5 4.5 4.5h14.25c2.475 0 4.5-2.025 4.5-4.5V8.925c0-1.875-1.5-3.375-3.375-3.375z"/>
    //       <path d="M3.75 3.75C3.75 1.675 5.425 0 7.5 0s3.75 1.675 3.75 3.75S9.575 7.5 7.5 7.5 3.75 5.825 3.75 3.75z"/>
    //     </svg>
    //   ),
    //   href: "https://teams.microsoft.com/l/chat/0/0?users=yourusername@domain.com",
    //   label: "Microsoft Teams Contact"
    // }
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 mt-auto border-t border-border transition-theme">
      <Container className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-medium inline-block">
              Fidenzio<span className="text-primary"> Nucci</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Shopify developer with 4 years of experience building high-performance, accessible e-commerce stores with exceptional code quality and lightning-fast load times.
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
            <div className="flex md:justify-end flex-wrap gap-2">
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
            © {currentYear} Fidenzio Nucci. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Performance-Focused Shopify Expert
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
