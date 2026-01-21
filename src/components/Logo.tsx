import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/">
      <motion.div
        className={`flex items-center gap-3 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient Accent Bar */}
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-primary via-glow to-glow-purple" />
        
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xl font-display font-bold tracking-tight text-foreground">
            Informatics
          </span>
          <span className="text-xs text-muted-foreground tracking-wide">
            Consulting & Systems
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
