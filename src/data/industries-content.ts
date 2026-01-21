import { 
  Building2,
  Heart,
  ShoppingCart,
  Cpu,
  Factory,
  Radio,
  Shield,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Lock,
  Globe,
  Target,
  Truck,
  Stethoscope,
  CreditCard,
  Smartphone,
  Wifi,
  Cog,
  Package,
  LineChart,
  FileText,
  Bot
} from "lucide-react";

export const industryDetails = {
  "financial-services": {
    name: "Financial Services",
    tagline: "Digital Transformation for Modern Finance",
    description: "Empowering banks, insurers, and fintechs with technology solutions that enhance customer experience, ensure compliance, and drive operational efficiency.",
    icon: Building2,
    overview: [
      "The financial services industry is undergoing unprecedented transformation. From digital banking to embedded finance, organizations must adapt rapidly while maintaining security and regulatory compliance.",
      "We partner with financial institutions to modernize legacy systems, implement AI-driven insights, and create seamless digital experiences. Our deep sector expertise ensures solutions that address the unique challenges of banking, insurance, and fintech."
    ],
    solutions: [
      { icon: CreditCard, title: "Digital Banking Platforms", description: "Modern, API-first banking solutions for seamless customer experiences" },
      { icon: Bot, title: "AI-Powered Risk Management", description: "Machine learning models for credit scoring, fraud detection, and AML" },
      { icon: Lock, title: "Regulatory Compliance", description: "Automated compliance solutions for KYC, AML, and reporting requirements" },
      { icon: Smartphone, title: "Mobile-First Experiences", description: "Native and progressive apps for banking, trading, and insurance" },
      { icon: BarChart3, title: "Data Analytics & Insights", description: "Customer analytics, portfolio optimization, and market intelligence" },
      { icon: Shield, title: "Cybersecurity Solutions", description: "Zero-trust architecture and advanced threat protection" }
    ],
    challenges: [
      "Legacy system modernization without service disruption",
      "Meeting evolving regulatory requirements across jurisdictions",
      "Delivering personalized experiences at scale",
      "Protecting against sophisticated cyber threats",
      "Competing with agile fintech disruptors"
    ],
    stats: [
      { value: "50+", label: "Financial Clients" },
      { value: "$5B+", label: "Transactions Processed" },
      { value: "100%", label: "Audit Compliance" },
      { value: "40%", label: "Cost Reduction" }
    ]
  },
  "healthcare": {
    name: "Healthcare & Life Sciences",
    tagline: "Technology for Better Patient Outcomes",
    description: "Advancing healthcare delivery and life sciences research with innovative digital solutions that improve patient care, accelerate research, and optimize operations.",
    icon: Heart,
    overview: [
      "Healthcare is at an inflection point, with technology enabling new models of care delivery, drug discovery, and patient engagement. We help healthcare organizations harness these opportunities while navigating complex regulatory requirements.",
      "From electronic health records to AI-assisted diagnostics, our solutions help providers deliver better care more efficiently. We also support life sciences companies in accelerating research, improving clinical trials, and bringing therapies to market faster."
    ],
    solutions: [
      { icon: Stethoscope, title: "Telehealth Platforms", description: "Virtual care solutions for remote consultations and monitoring" },
      { icon: Bot, title: "AI Clinical Decision Support", description: "Machine learning tools that enhance diagnostic accuracy and treatment planning" },
      { icon: FileText, title: "EHR Integration", description: "Seamless interoperability solutions connecting healthcare systems" },
      { icon: LineChart, title: "Clinical Analytics", description: "Population health management and outcomes analytics" },
      { icon: Lock, title: "HIPAA Compliance", description: "Security and privacy solutions meeting healthcare regulations" },
      { icon: Target, title: "Patient Engagement", description: "Digital tools that empower patients in their care journey" }
    ],
    challenges: [
      "Integrating siloed healthcare data systems",
      "Maintaining HIPAA and regulatory compliance",
      "Improving patient access and engagement",
      "Reducing administrative burden on clinicians",
      "Accelerating clinical research timelines"
    ],
    stats: [
      { value: "30+", label: "Healthcare Clients" },
      { value: "10M+", label: "Patient Records Managed" },
      { value: "99.99%", label: "System Uptime" },
      { value: "25%", label: "Efficiency Gains" }
    ]
  },
  "retail": {
    name: "Retail & E-commerce",
    tagline: "Creating Seamless Shopping Experiences",
    description: "Helping retailers thrive in the digital age with omnichannel solutions that unify customer experiences, optimize operations, and drive revenue growth.",
    icon: ShoppingCart,
    overview: [
      "Retail has evolved beyond physical stores and basic e-commerce. Today's consumers expect seamless experiences across all touchpoints, personalized recommendations, and instant fulfillment.",
      "We help retailers build the technology foundations for modern commerce—from unified commerce platforms to AI-powered personalization engines. Our solutions help you meet customers wherever they are while optimizing your operations for efficiency and profitability."
    ],
    solutions: [
      { icon: ShoppingCart, title: "Unified Commerce Platforms", description: "Integrated systems connecting online, mobile, and in-store experiences" },
      { icon: Bot, title: "AI Personalization", description: "Machine learning-driven recommendations and dynamic pricing" },
      { icon: Package, title: "Inventory Optimization", description: "Real-time inventory management and demand forecasting" },
      { icon: Users, title: "Customer Data Platforms", description: "360-degree customer views for targeted marketing" },
      { icon: Truck, title: "Fulfillment Solutions", description: "Order management and last-mile delivery optimization" },
      { icon: Smartphone, title: "Mobile Commerce", description: "Native apps and PWAs for mobile-first shopping" }
    ],
    challenges: [
      "Unifying customer data across channels",
      "Managing complex omnichannel fulfillment",
      "Personalizing experiences at scale",
      "Competing on speed and convenience",
      "Balancing online and physical retail investments"
    ],
    stats: [
      { value: "40+", label: "Retail Clients" },
      { value: "$2B+", label: "GMV Enabled" },
      { value: "30%", label: "Conversion Lift" },
      { value: "50%", label: "Faster Fulfillment" }
    ]
  },
  "technology": {
    name: "Technology & Software",
    tagline: "Accelerating Innovation for Tech Leaders",
    description: "Partnering with technology companies to accelerate product development, scale engineering capabilities, and stay ahead in fast-moving markets.",
    icon: Cpu,
    overview: [
      "Technology companies face unique challenges: the need to innovate constantly, scale rapidly, and attract top talent in a competitive market. We help tech organizations execute on their vision with extended engineering capabilities and specialized expertise.",
      "Whether you're a startup scaling your MVP or an enterprise modernizing your platform, we bring the technical depth and agile delivery practices to help you succeed. Our engineers integrate seamlessly with your teams to accelerate your roadmap."
    ],
    solutions: [
      { icon: Cpu, title: "Platform Engineering", description: "Scalable architecture design and implementation for SaaS products" },
      { icon: Zap, title: "Engineering Acceleration", description: "Dedicated teams that extend your development capacity" },
      { icon: Bot, title: "AI/ML Integration", description: "Embedding intelligence into products and workflows" },
      { icon: Globe, title: "API Development", description: "RESTful and GraphQL APIs for platform extensibility" },
      { icon: Shield, title: "DevSecOps", description: "Secure, automated deployment pipelines and infrastructure" },
      { icon: TrendingUp, title: "Performance Optimization", description: "Scalability improvements and technical debt reduction" }
    ],
    challenges: [
      "Scaling engineering teams quickly",
      "Maintaining velocity while improving quality",
      "Modernizing technical architecture",
      "Building for global scale and performance",
      "Attracting and retaining technical talent"
    ],
    stats: [
      { value: "60+", label: "Tech Clients" },
      { value: "500+", label: "Engineers Deployed" },
      { value: "2x", label: "Development Velocity" },
      { value: "99.9%", label: "Platform Uptime" }
    ]
  },
  "manufacturing": {
    name: "Manufacturing & Logistics",
    tagline: "Industry 4.0 and Smart Supply Chains",
    description: "Transforming manufacturing and logistics operations with IoT, automation, and data analytics for improved efficiency, quality, and visibility.",
    icon: Factory,
    overview: [
      "The Fourth Industrial Revolution is reshaping manufacturing and logistics. Smart factories, connected supply chains, and predictive maintenance are no longer futuristic concepts—they're competitive necessities.",
      "We help manufacturers and logistics companies embrace Industry 4.0 technologies, from IoT sensor networks to AI-powered quality control. Our solutions provide the visibility and intelligence needed to optimize operations across the value chain."
    ],
    solutions: [
      { icon: Factory, title: "Smart Factory Solutions", description: "IoT platforms for real-time production monitoring and control" },
      { icon: Cog, title: "Predictive Maintenance", description: "ML models that prevent equipment failures before they occur" },
      { icon: Truck, title: "Supply Chain Visibility", description: "End-to-end tracking and logistics optimization" },
      { icon: BarChart3, title: "Production Analytics", description: "OEE dashboards and continuous improvement insights" },
      { icon: Bot, title: "Quality Automation", description: "Computer vision and AI for automated quality inspection" },
      { icon: Package, title: "Warehouse Optimization", description: "WMS integration and fulfillment automation" }
    ],
    challenges: [
      "Connecting legacy equipment and systems",
      "Achieving end-to-end supply chain visibility",
      "Reducing unplanned downtime",
      "Meeting sustainability and compliance requirements",
      "Scaling digital initiatives across facilities"
    ],
    stats: [
      { value: "35+", label: "Manufacturing Clients" },
      { value: "25%", label: "Downtime Reduction" },
      { value: "15%", label: "Quality Improvement" },
      { value: "20%", label: "Logistics Savings" }
    ]
  },
  "telecom": {
    name: "Telecom & Media",
    tagline: "Connected Experiences, Delivered",
    description: "Enabling telecommunications and media companies to modernize networks, enhance customer experiences, and monetize new digital services.",
    icon: Radio,
    overview: [
      "The telecom and media landscape is evolving rapidly with 5G, streaming, and digital content reshaping the industry. Companies must modernize infrastructure, create compelling digital experiences, and find new revenue streams.",
      "We help telecom operators and media companies navigate this transformation—from network modernization to digital service platforms. Our solutions enhance operational efficiency while enabling the innovative services that customers demand."
    ],
    solutions: [
      { icon: Wifi, title: "Network Modernization", description: "Cloud-native infrastructure for 5G and next-gen networks" },
      { icon: Smartphone, title: "Digital Experience Platforms", description: "Self-service portals and mobile apps for subscribers" },
      { icon: Radio, title: "Content Delivery", description: "Streaming platforms and CDN optimization" },
      { icon: Bot, title: "AI Customer Service", description: "Intelligent chatbots and automated support solutions" },
      { icon: BarChart3, title: "Network Analytics", description: "Real-time monitoring and predictive network optimization" },
      { icon: TrendingUp, title: "Revenue Management", description: "Billing, rating, and revenue assurance platforms" }
    ],
    challenges: [
      "Modernizing legacy BSS/OSS systems",
      "Managing network complexity and costs",
      "Reducing customer churn",
      "Monetizing 5G and new services",
      "Competing with OTT providers"
    ],
    stats: [
      { value: "25+", label: "Telecom Clients" },
      { value: "100M+", label: "Subscribers Served" },
      { value: "40%", label: "Support Cost Reduction" },
      { value: "99.99%", label: "Network Reliability" }
    ]
  }
};

export type IndustryId = keyof typeof industryDetails;
