
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui-components/Container";
import { Download, Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const ResumeSection = ({ 
  title, 
  children,
  icon: Icon
}: { 
  title: string; 
  children: React.ReactNode;
  icon: React.ElementType;
}) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon size={20} className="text-primary" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="pl-13 space-y-4">
      {children}
    </div>
  </div>
);

const TimelineItem = ({ 
  title, 
  company, 
  location, 
  period, 
  description 
}: { 
  title: string; 
  company: string; 
  location: string; 
  period: string; 
  description: string;
}) => (
  <div className="relative pl-8 pb-8 border-l border-border last:border-l-0 last:pb-0">
    <div className="absolute top-0 left-0 w-4 h-4 -translate-x-2 rounded-full bg-primary" />
    <div className="space-y-2">
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1">
        <span className="font-medium text-foreground">{company}</span>
        <span className="flex items-center">
          <MapPin size={14} className="mr-1" />
          {location}
        </span>
        <span className="flex items-center">
          <Calendar size={14} className="mr-1" />
          {period}
        </span>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const EducationItem = ({ 
  degree, 
  institution, 
  location, 
  period 
}: { 
  degree: string; 
  institution: string; 
  location: string; 
  period: string;
}) => (
  <div className="relative pl-8 pb-8 border-l border-border last:border-l-0 last:pb-0">
    <div className="absolute top-0 left-0 w-4 h-4 -translate-x-2 rounded-full bg-primary" />
    <div className="space-y-2">
      <h3 className="text-xl font-medium">{degree}</h3>
      <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1">
        <span className="font-medium text-foreground">{institution}</span>
        <span className="flex items-center">
          <MapPin size={14} className="mr-1" />
          {location}
        </span>
        <span className="flex items-center">
          <Calendar size={14} className="mr-1" />
          {period}
        </span>
      </div>
    </div>
  </div>
);

const Resume = () => {
  return (
    <Layout>
      <section className="section-padding">
        <Container className="space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Fidenzio Nucci</h1>
              <p className="text-xl text-primary font-medium mb-4 animate-fade-in [animation-delay:0.1s]">
                Shopify Developer & E-commerce Specialist
              </p>
              <p className="text-muted-foreground animate-fade-in [animation-delay:0.2s]">
                4+ years of experience building high-converting Shopify stores and e-commerce solutions.
                Specializing in custom theme development, third-party integrations, and performance optimization.
              </p>
            </div>
            {/* <a
              href="/Fidenzio_Nucci.pdf"
              download="Fidenzio_Nucci.pdf"
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg transition-colors whitespace-nowrap shrink-0",
                "bg-primary text-primary-foreground hover:opacity-90",
                "animate-fade-in [animation-delay:0.3s]"
              )}
            >
              <Download size={18} />
              Download Resume
            </a> */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 space-y-8 animate-fade-in [animation-delay:0.3s]">
              <div className="p-6 bg-card rounded-lg border border-border space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-muted-foreground w-20">Email:</span>
                      <a href="FidenzioNucci@outlook.com" className="text-primary hover:underline">
                        FidenzioNucci@outlook.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-muted-foreground w-20">Location:</span>
                      <span>Caronno Pertusella, Lombardy, Italy</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Expertise</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Shopify Theme Development</li>
                    <li>Custom App Development</li>
                    <li>E-commerce Optimization</li>
                    <li>Performance Optimization</li>
                    <li>Responsive Web Design</li>
                    <li>Third-party Integrations</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Technical Skills</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Shopify Liquid</li>
                    <li>JavaScript / TypeScript</li>
                    <li>HTML5 / CSS3</li>
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>Git / GitHub</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>English</span>
                      <span className="text-muted-foreground">Fluent</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mandarin</span>
                      <span className="text-muted-foreground">Native</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-12 animate-fade-in [animation-delay:0.4s]">
              <ResumeSection title="Work Experience" icon={Briefcase}>
                <TimelineItem
                  title="Shopify Developer"
                  company="Echt Inc"
                  location="Australia"
                  period="Jan 2023 - Mar 2025"
                  description="Played a key role in elevating ECHT’s Shopify experience—one of Australia's fastest-growing activewear brands—by engineering a sleek, high-conversion storefront built for performance and scale. Overhauled core theme architecture to reduce load times by 35%, enabling smooth handling of high-volume traffic during major product drops. Designed and implemented custom UX features like live inventory indicators, rapid-add cart flows, and mobile-first optimizations that helped drive a 20%+ uplift in conversion. Partnered closely with ECHT’s creative and marketing teams to launch high-impact, campaign-driven pages that captured the brand’s athletic aesthetic while supporting global expansion."
                />
                <TimelineItem
                  title="Shopify Developer"
                  company="Sugar Rush by Steph"
                  location="Australia"
                  period="Mar 2020 - Dec 2022"
                  description="Spearheaded the Shopify development for Sugar Rush by Steph over a three-year period, scaling the store to support a 300% growth in online orders. Designed and implemented a fully custom theme that reflected the brand’s vibrant, playful identity while achieving a 40% improvement in page load speed. Integrated advanced features like product personalization, gifting flows, and limited-time drops, contributing to a 25% increase in conversion rates. Collaborated with the client on continuous optimizations, seasonal campaigns, and backend enhancements to ensure a seamless and scalable e-commerce experience."
                />
              </ResumeSection>
              
              <ResumeSection title="Education" icon={GraduationCap}>
                <EducationItem
                  degree="Bachelor of Science in Computer Science"
                  institution="Marche Polytechnic Universitym"
                  location="Ancona, Itaily"
                  period="2012 - 2017"
                />
                <EducationItem
                  degree="Shopify Partner Certification"
                  institution="Shopify Academy"
                  location="Online"
                  period="2018"
                />
              </ResumeSection>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Resume;
