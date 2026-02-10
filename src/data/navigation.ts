import { 
  Brain, 
  Database, 
  Cloud, 
  Briefcase, 
  Globe, 
  Users, 
  Lightbulb,
  Building2,
  Heart,
  ShoppingCart,
  Cpu,
  Factory,
  Radio
} from "lucide-react";

export const services = [
  {
    id: "ai-consulting",
    name: "AI Consulting",
    description: "Transform your business with AI strategy and implementation",
    icon: Brain,
    href: "/services/ai-consulting",
  },
  {
    id: "data-engineering",
    name: "Data Engineering & Analytics",
    description: "Turn data into actionable insights",
    icon: Database,
    href: "/services/data-engineering",
  },
  {
    id: "cloud-cybersecurity",
    name: "Cloud & Cybersecurity",
    description: "Secure, scalable cloud infrastructure",
    icon: Cloud,
    href: "/services/cloud-cybersecurity",
  },
  {
    id: "project-services",
    name: "Project & Consulting Services",
    description: "End-to-end project management excellence",
    icon: Briefcase,
    href: "/services/project-services",
  },
  {
    id: "offshore-delivery",
    name: "Offshore Delivery Centre",
    description: "Cost-effective global delivery solutions",
    icon: Globe,
    href: "/services/offshore-delivery",
  },
  {
    id: "recruitment",
    name: "Recruitment & Manpower",
    description: "Find the right talent for your needs",
    icon: Users,
    href: "/services/recruitment",
  },
  {
    id: "product-development",
    name: "Product Development & Innovation",
    description: "Build innovative products from concept to launch",
    icon: Lightbulb,
    href: "/services/product-development",
  },
];

export const industries = [
  {
    id: "financial-services",
    name: "Financial Services",
    description: "Banking, insurance, and fintech solutions",
    icon: Building2,
    href: "/industries/financial-services",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    description: "Digital health and pharma innovation",
    icon: Heart,
    href: "/industries/healthcare",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Omnichannel retail transformation",
    icon: ShoppingCart,
    href: "/industries/retail",
  },
  {
    id: "technology",
    name: "Technology & Software",
    description: "Tech-forward solutions for tech companies",
    icon: Cpu,
    href: "/industries/technology",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    description: "Smart manufacturing and supply chain",
    icon: Factory,
    href: "/industries/manufacturing",
  },
  {
    id: "telecom",
    name: "Telecom & Media",
    description: "Connected experiences and content delivery",
    icon: Radio,
    href: "/industries/telecom",
  },
];

export const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Industries", href: "/industries", hasDropdown: true },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];
