import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "gradient";
  delay?: number;
}

export const PageSection = ({ 
  children, 
  className, 
  id, 
  variant = "default",
  delay = 0 
}: PageSectionProps) => {
  const variantClasses = {
    default: "",
    muted: "bg-surface-elevated/50",
    gradient: "relative overflow-hidden",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", variantClasses[variant], className)}>
      {variant === "gradient" && (
        <div className="absolute inset-0 mesh-gradient opacity-20" />
      )}
      <AnimatedSection delay={delay} className="relative z-10">
        <div className="container mx-auto px-6">
          {children}
        </div>
      </AnimatedSection>
    </section>
  );
};
