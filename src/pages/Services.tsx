import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/navigation";
import { Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Technology Solutions"
        description="From AI strategy to cloud infrastructure, we offer end-to-end services to accelerate your digital transformation journey."
        badge="What We Do"
        icon={Layers}
      />

      {/* Services Grid */}
      <PageSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </PageSection>

      {/* Approach Section */}
      <PageSection variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-muted-foreground mb-6">
              We follow a proven methodology that ensures successful delivery of every project. 
              Our approach combines industry best practices with innovative thinking to deliver 
              solutions that exceed expectations.
            </p>
            
            <div className="space-y-4">
              {["Discover", "Design", "Develop", "Deploy", "Optimize"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <span className="text-lg font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-4">Why Our Approach Works</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Tailored solutions for your unique challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Agile methodology for faster time-to-market</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Continuous feedback and iteration</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Knowledge transfer and documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Post-deployment support and optimization</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection variant="gradient">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your business objectives.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Services;
