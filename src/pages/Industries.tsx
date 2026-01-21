import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { IndustryCard } from "@/components/shared/IndustryCard";
import { industries } from "@/data/navigation";
import { Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Industries = () => {
  return (
    <Layout>
      <PageHero
        title="Industries We Serve"
        subtitle="Deep Domain Expertise"
        description="We bring specialized knowledge and proven solutions to enterprises across diverse sectors, helping them navigate industry-specific challenges."
        badge="Our Expertise"
        icon={Building}
      />

      {/* Industries Grid */}
      <PageSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              name={industry.name}
              description={industry.description}
              icon={industry.icon}
              href={industry.href}
              index={index}
            />
          ))}
        </div>
      </PageSection>

      {/* Cross-Industry Capabilities */}
      <PageSection variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cross-Industry Capabilities</h2>
            <p className="text-muted-foreground mb-6">
              Beyond industry-specific expertise, we bring capabilities that drive value 
              across all sectors. Our cross-industry experience allows us to apply 
              best practices and innovations from one domain to another.
            </p>
            
            <ul className="space-y-3">
              {[
                "AI & Machine Learning Implementation",
                "Data Analytics & Business Intelligence",
                "Cloud Migration & Modernization",
                "Cybersecurity & Compliance",
                "Digital Customer Experience",
                "Process Automation & RPA",
              ].map((capability, index) => (
                <motion.li
                  key={capability}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{capability}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "6+", label: "Industries Served" },
              { number: "100+", label: "Enterprise Clients" },
              { number: "500+", label: "Projects Delivered" },
              { number: "95%", label: "Client Retention" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="p-6 rounded-2xl glass border border-border/50 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection variant="gradient">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for Industry Expertise?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of industry specialists is ready to help you tackle your unique challenges.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Industries;
