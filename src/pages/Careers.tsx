import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { motion } from "framer-motion";
import { Users, MapPin, Clock, ArrowRight, Heart, Zap, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const openPositions = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "New York / Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Data Engineering Lead",
    department: "Data",
    location: "London / Hybrid",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "Infrastructure",
    location: "Singapore / Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Product Manager - AI Products",
    department: "Product",
    location: "New York / Hybrid",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Sales",
    location: "London",
    type: "Full-time",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Continuous learning opportunities and certification support",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible working hours",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description: "Competitive salary, equity, and amazing office perks",
  },
];

const Careers = () => {
  return (
    <Layout>
      <PageHero
        title="Join Our Team"
        subtitle="Build the Future With Us"
        description="We're looking for passionate individuals who want to make an impact. Explore opportunities to grow your career at Informatics."
        badge="Careers"
        icon={Users}
      />

      {/* Why Join Us */}
      <PageSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Informatics?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join a team of innovators working on cutting-edge technology projects for world-class clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass border border-border/50 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* Open Positions */}
      <PageSection variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find your perfect role and start making an impact today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {openPositions.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="group/btn flex-shrink-0">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection variant="gradient">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See a Fit?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Careers;
