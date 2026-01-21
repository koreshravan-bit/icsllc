import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/">
      <motion.div
        className={`flex flex-col ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xl font-display font-bold tracking-tight text-foreground">
          Informatics
        </span>
        <span className="text-xs text-muted-foreground tracking-wide">
          Consulting & Systems
        </span>
      </motion.div>
    </Link>
  );
};
