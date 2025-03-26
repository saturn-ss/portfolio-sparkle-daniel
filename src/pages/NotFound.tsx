
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { cn } from "@/lib/utils";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center justify-center">
        <Container className="text-center max-w-2xl">
          <h1 className="text-9xl font-bold mb-6 animate-fade-in">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:0.1s]">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className={cn(
              "inline-block px-8 py-3 rounded-lg font-medium animate-fade-in [animation-delay:0.3s]",
              "bg-primary text-primary-foreground hover:opacity-90 transition-all"
            )}
          >
            Return Home
          </Link>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFound;
