import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { 
  Building2, 
  Heart, 
  ShoppingBag, 
  Wifi, 
  Factory, 
  Code2
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Finance & Banking", color: "from-blue-500 to-cyan-500" },
  { icon: Heart, name: "Healthcare", color: "from-rose-500 to-pink-500" },
  { icon: ShoppingBag, name: "Retail & E-commerce", color: "from-amber-500 to-orange-500" },
  { icon: Wifi, name: "Telecommunications", color: "from-violet-500 to-purple-500" },
  { icon: Factory, name: "Manufacturing", color: "from-emerald-500 to-teal-500" },
  { icon: Code2, name: "Technology", color: "from-indigo-500 to-blue-500" },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="relative py-24 bg-surface/30">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Expertise Across <span className="gradient-text">Diverse Sectors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep domain knowledge and proven track record in delivering transformative 
            solutions across multiple industries.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <StaggerContainer 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          staggerDelay={0.1}
        >
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-6 text-center group cursor-pointer hover:border-primary/30 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:glow-sm transition-all`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {industry.name}
                </h3>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
