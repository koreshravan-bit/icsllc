import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface IndustryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
}

export const IndustryCard = ({ name, description, icon: Icon, href, index = 0 }: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={href} className="block group">
        <div className="h-full p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-glow-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-glow-purple/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>

            {/* Link */}
            <div className="flex items-center gap-2 text-primary font-medium">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
