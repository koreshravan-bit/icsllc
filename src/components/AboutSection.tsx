import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Innovation", desc: "Constantly evolving and delivering cutting-edge solutions" },
  { icon: Heart, title: "Integrity", desc: "Commitment to honesty, transparency, and ethics" },
  { icon: Award, title: "Excellence", desc: "Dedication to superior quality in every engagement" },
  { icon: Users, title: "Collaboration", desc: "Building meaningful partnerships internally and externally" },
];

const differentiators = [
  { icon: Globe, title: "Global Reach", value: "12+ Countries" },
  { icon: Users, title: "Expert Team", value: "200+ Specialists" },
  { icon: Award, title: "Success Rate", value: "98%" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Transforming Businesses with <span className="gradient-text">Data-Driven</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Informatics Consulting & Systems is a leading consulting firm specializing in AI, 
            data-driven solutions, cloud services, and digital transformation.
          </p>
        </AnimatedSection>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full group hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-sm transition-all">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted partner globally, helping businesses navigate 
                and excel in the era of digital and data transformation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass-card p-8 h-full group hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-sm transition-all">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive to deliver innovative, scalable, and customized solutions that 
                enhance efficiency, optimize performance, and accelerate growth.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Our Core Values</h3>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-glow-purple/20 flex items-center justify-center mx-auto mb-4 group-hover:glow-sm transition-all">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Differentiators */}
        <AnimatedSection delay={0.4}>
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Why Choose Informatics Consulting?
                </h3>
                <p className="text-muted-foreground">
                  Deep expertise in AI, data analytics, and technology solutions combined with 
                  a proven track record across diverse industries and complex projects.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {differentiators.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-glow-purple flex items-center justify-center mx-auto mb-3 glow-sm">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
