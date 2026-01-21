import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart,
  Zap,
  Shield,
  Users,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to drive transformation.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our business dealings.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering exceptional quality.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients as partners to achieve shared success.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Our clients' success is at the heart of everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We foster continuous learning and development for our team and clients.",
  },
];

const differentiators = [
  "10+ years of industry expertise across multiple domains",
  "100+ successful enterprise transformations delivered",
  "Global delivery model with local expertise",
  "Certified experts in AI, Cloud, and Data technologies",
  "Proven methodologies and frameworks",
  "24/7 support and dedicated account management",
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Empowering Businesses Through Technology"
        description="Since 2014, we've been helping organizations navigate digital transformation with AI, data, and cloud solutions."
        badge="Our Story"
        icon={Users}
      />

      {/* Mission & Vision */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border border-border/50"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              enhance efficiency, and create sustainable competitive advantages. We are committed 
              to delivering excellence through AI, data analytics, and digital transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border border-border/50"
          >
            <div className="w-14 h-14 rounded-xl bg-glow-purple/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-glow-purple" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted technology partner for enterprises worldwide, 
              recognized for our expertise in AI and data-driven solutions. We envision 
              a future where every business can harness the full potential of technology.
            </p>
          </motion.div>
        </div>
      </PageSection>

      {/* Core Values */}
      <PageSection variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* Why Choose Us */}
      <PageSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Informatics?</h2>
            <p className="text-muted-foreground mb-8">
              We combine deep industry expertise with cutting-edge technology to deliver 
              solutions that truly make a difference. Our client-centric approach ensures 
              that every engagement is tailored to your specific needs and goals.
            </p>
            <ul className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl glass border border-border/50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold gradient-text mb-4">10+</div>
                <p className="text-xl text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-glow-purple/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection variant="gradient">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your goals with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default About;
