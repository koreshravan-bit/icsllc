import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full blur-[80px] bg-primary/20"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 w-48 h-48 rounded-full blur-[60px] bg-glow-purple/20"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 opacity-20">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <Zap className="w-8 h-8 text-glow-purple" />
            </div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="gradient-text">Business?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Let's collaborate and unlock the full potential of your data and technology. 
                Contact us today for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="mailto:contact@icsllc.ai">
                    Request Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/services">
                    Explore Services
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-8"
            >
              <motion.a 
                href="mailto:contact@icsllc.ai" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-3 py-1 rounded-lg hover:bg-primary/5"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                contact@icsllc.ai
              </motion.a>
              <span className="text-border">|</span>
              <motion.a 
                href="tel:+1234567890" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-3 py-1 rounded-lg hover:bg-primary/5"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                +1 (234) 567-890
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
