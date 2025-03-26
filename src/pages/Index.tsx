
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import ContactCta from "@/components/home/ContactCta";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReviewsSection />
      <BlogPreviewSection />
      <ContactCta />
    </Layout>
  );
};

export default Index;
