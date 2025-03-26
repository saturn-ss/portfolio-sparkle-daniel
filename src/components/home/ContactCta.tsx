
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";
import { Link } from "react-router-dom";

const ContactCta = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <Container>
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
            Let's Work Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your E-commerce Store?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to launch a new Shopify store or optimize an existing one, 
            I'm here to help you create an exceptional e-commerce experience that drives results.
          </p>
          <Link
            to="/contact"
            className={cn(
              "inline-block px-8 py-3 rounded-lg transition-all font-medium",
              "bg-primary text-primary-foreground hover:opacity-90"
            )}
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactCta;
