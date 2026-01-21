import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
}

export const PageHero = ({ title, subtitle, description, icon: Icon, badge }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 hero-grid opacity-20" />
      
      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-glow/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-glow-purple/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
            >
              {Icon && <Icon className="w-4 h-4 text-primary" />}
              <span className="text-sm font-medium text-primary">{badge}</span>
            </motion.div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
