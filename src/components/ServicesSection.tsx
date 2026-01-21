import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { 
  Brain, 
  Database, 
  Shield, 
  Users, 
  Rocket, 
  Cog,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    href: "/services/ai-consulting",
    description: "Strategic AI guidance, machine learning implementation, and AI-driven business transformation.",
    features: ["AI Strategy & Advisory", "Machine Learning", "Data Science Solutions", "NLP & Computer Vision"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "cyan"
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    href: "/services/data-engineering",
    description: "Build robust data pipelines, warehouses, and gain actionable insights through powerful visualizations.",
    features: ["ETL Solutions", "Data Warehousing", "Business Intelligence", "Real-time Analytics"],
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "violet"
  },
  {
    icon: Shield,
    title: "Cloud & Cybersecurity",
    href: "/services/cloud-cybersecurity",
    description: "Seamless cloud migration, custom architecture, and comprehensive security solutions.",
    features: ["Cloud Migration", "Architecture Design", "Data Protection", "Compliance Management"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald"
  },
  {
    icon: Rocket,
    title: "Project & Offshore Services",
    href: "/services/project-services",
    description: "Expert project management, offshore development teams, and process automation.",
    features: ["Project Management", "Offshore Teams", "Managed Services", "Process Automation"],
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "orange"
  },
  {
    icon: Users,
    title: "Recruitment & Manpower",
    href: "/services/recruitment",
    description: "Connect with top talent through our specialized recruitment and staffing solutions.",
    features: ["Executive Search", "Technical Hiring", "Contract Staffing", "RPO Services"],
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "pink"
  },
  {
    icon: Cog,
    title: "Product Development & Innovation",
    href: "/services/product-development",
    description: "Build innovative products from concept to launch with our expert teams.",
    features: ["Strategy Planning", "Technology Integration", "Training Programs", "Change Management"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    accent: "indigo"
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-glow-purple/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Solutions for{" "}
            <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AI consulting to digital transformation, we provide end-to-end services 
            that drive innovation and accelerate growth.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link to={service.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="service-card h-full group cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:glow-sm transition-all duration-300`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-3 h-3 text-primary/60" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.6} className="text-center">
          <Link to="/services">
            <Button variant="hero" size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
