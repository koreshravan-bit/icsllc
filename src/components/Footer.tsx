import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "AI Consulting", href: "#" },
    { name: "Data Engineering", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "Digital Transformation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
  ],
  industries: [
    { name: "Finance", href: "#" },
    { name: "Healthcare", href: "#" },
    { name: "Retail", href: "#" },
    { name: "Technology", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@informaticsconsulting.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/">
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={logo} 
                  alt="Informatics Consulting & Systems Logo" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold gradient-text leading-tight">Informatics</span>
                  <span className="text-xs text-muted-foreground leading-tight">Consulting & Systems</span>
                </div>
              </motion.div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Empowering businesses through AI and data-driven solutions since 2014.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Tech Hub, Innovation City</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (234) 567-890</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Informatics Consulting & Systems. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-surface-elevated border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
