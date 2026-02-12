import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? logoDark : logoLight;

  return (
    <Link to="/">
      <motion.div
        className={`flex items-center gap-3 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <img src={logoSrc} alt="ICS Logo" className="h-10 w-10 object-contain" />
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
