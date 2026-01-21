import { 
  Brain, 
  Database, 
  Cloud, 
  Briefcase, 
  Globe, 
  Users, 
  Lightbulb,
  Cpu,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Lock,
  Server,
  GitBranch,
  UserCheck,
  Rocket,
  LineChart,
  Settings,
  Network,
  FileSearch,
  Bot,
  Workflow
} from "lucide-react";

export const serviceDetails = {
  "ai-consulting": {
    name: "AI Consulting",
    tagline: "Unlock the Power of Artificial Intelligence",
    description: "Transform your business operations with cutting-edge AI solutions. Our expert consultants guide you from strategy to implementation, ensuring measurable ROI and sustainable competitive advantage.",
    icon: Brain,
    overview: [
      "In today's rapidly evolving digital landscape, artificial intelligence isn't just an advantage—it's a necessity. Our AI consulting services help organizations navigate the complexities of AI adoption, from identifying high-impact use cases to deploying production-ready solutions.",
      "We combine deep technical expertise with business acumen to deliver AI strategies that align with your organizational goals. Whether you're looking to automate processes, enhance customer experiences, or unlock insights from your data, we provide the guidance and implementation support you need."
    ],
    capabilities: [
      { icon: Brain, title: "AI Strategy Development", description: "Comprehensive roadmaps tailored to your business objectives and technical maturity" },
      { icon: Cpu, title: "Machine Learning Solutions", description: "Custom ML models for prediction, classification, and pattern recognition" },
      { icon: Bot, title: "Generative AI Integration", description: "Leverage LLMs and generative AI to transform content creation and customer interactions" },
      { icon: Workflow, title: "Process Automation", description: "Intelligent automation solutions that reduce manual effort and improve accuracy" },
      { icon: TrendingUp, title: "AI-Powered Analytics", description: "Advanced analytics platforms that turn data into actionable intelligence" },
      { icon: Target, title: "Computer Vision", description: "Image and video analysis solutions for quality control, security, and more" }
    ],
    benefits: [
      "Accelerate time-to-value with proven AI implementation frameworks",
      "Reduce operational costs through intelligent automation",
      "Enhance decision-making with data-driven insights",
      "Stay competitive with cutting-edge AI capabilities",
      "Minimize risk with expert guidance and best practices"
    ],
    stats: [
      { value: "50+", label: "AI Projects Delivered" },
      { value: "40%", label: "Average Cost Reduction" },
      { value: "3x", label: "Faster Time to Market" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  },
  "data-engineering": {
    name: "Data Engineering & Analytics",
    tagline: "Turn Data Into Your Greatest Asset",
    description: "Build robust data infrastructure and unlock actionable insights. We help you collect, process, and analyze data at scale to drive informed decision-making across your organization.",
    icon: Database,
    overview: [
      "Data is the foundation of digital transformation. Our data engineering and analytics services help you build scalable, reliable data pipelines that transform raw data into business intelligence.",
      "From designing modern data architectures to implementing advanced analytics solutions, we ensure your organization can harness the full potential of its data assets. Our approach combines technical excellence with a deep understanding of business requirements."
    ],
    capabilities: [
      { icon: Database, title: "Data Architecture Design", description: "Modern, scalable architectures including data lakes, warehouses, and mesh" },
      { icon: Server, title: "ETL/ELT Pipeline Development", description: "Robust data pipelines for reliable, real-time data processing" },
      { icon: BarChart3, title: "Business Intelligence", description: "Interactive dashboards and reports that drive business decisions" },
      { icon: LineChart, title: "Advanced Analytics", description: "Statistical analysis, forecasting, and predictive modeling" },
      { icon: FileSearch, title: "Data Quality Management", description: "Comprehensive data governance and quality assurance frameworks" },
      { icon: Zap, title: "Real-time Analytics", description: "Stream processing solutions for instant insights and alerting" }
    ],
    benefits: [
      "Make faster, more informed business decisions",
      "Improve data quality and trustworthiness",
      "Reduce time spent on manual data processes",
      "Enable self-service analytics across teams",
      "Build a foundation for AI and machine learning"
    ],
    stats: [
      { value: "10PB+", label: "Data Processed Daily" },
      { value: "60%", label: "Faster Reporting" },
      { value: "100+", label: "Dashboards Deployed" },
      { value: "99.9%", label: "Pipeline Reliability" }
    ]
  },
  "cloud-cybersecurity": {
    name: "Cloud & Cybersecurity",
    tagline: "Secure, Scalable Cloud Infrastructure",
    description: "Modernize your infrastructure with secure cloud solutions. We design, implement, and manage cloud environments that balance performance, security, and cost efficiency.",
    icon: Cloud,
    overview: [
      "Cloud adoption is essential for modern business agility, but it must be done right. Our cloud and cybersecurity services help you migrate, optimize, and secure your infrastructure across leading cloud platforms.",
      "We take a security-first approach, ensuring your cloud environment meets compliance requirements while enabling innovation. From architecture design to 24/7 monitoring, we provide end-to-end cloud excellence."
    ],
    capabilities: [
      { icon: Cloud, title: "Cloud Migration", description: "Seamless migration strategies for AWS, Azure, and Google Cloud" },
      { icon: Shield, title: "Security Architecture", description: "Zero-trust security frameworks and defense-in-depth strategies" },
      { icon: Lock, title: "Compliance & Governance", description: "SOC 2, HIPAA, GDPR, and industry-specific compliance solutions" },
      { icon: Settings, title: "DevSecOps", description: "Security-integrated CI/CD pipelines and infrastructure as code" },
      { icon: Network, title: "Cloud Networking", description: "Secure, high-performance network architectures and VPN solutions" },
      { icon: Zap, title: "Cost Optimization", description: "FinOps practices to maximize cloud ROI and minimize waste" }
    ],
    benefits: [
      "Reduce infrastructure costs by up to 40%",
      "Improve system reliability and uptime",
      "Meet regulatory compliance requirements",
      "Enable faster application deployment",
      "Protect against evolving cyber threats"
    ],
    stats: [
      { value: "500+", label: "Cloud Migrations" },
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "0", label: "Security Breaches" },
      { value: "35%", label: "Cost Savings" }
    ]
  },
  "project-services": {
    name: "Project & Consulting Services",
    tagline: "Delivering Excellence, On Time, Every Time",
    description: "End-to-end project management and consulting expertise. We bring structure, methodology, and proven practices to ensure your initiatives succeed.",
    icon: Briefcase,
    overview: [
      "Successful projects require more than technical skills—they demand leadership, methodology, and stakeholder alignment. Our project and consulting services provide the expertise needed to deliver complex initiatives on time and within budget.",
      "Whether you're implementing new systems, transforming processes, or managing organizational change, we bring proven frameworks and experienced professionals to drive success."
    ],
    capabilities: [
      { icon: Briefcase, title: "Program Management", description: "Oversight of complex, multi-project initiatives and portfolios" },
      { icon: GitBranch, title: "Agile Transformation", description: "Adoption and scaling of agile methodologies across your organization" },
      { icon: Target, title: "Strategy Consulting", description: "Business and technology strategy development and execution" },
      { icon: TrendingUp, title: "Change Management", description: "People-focused approaches to organizational transformation" },
      { icon: UserCheck, title: "PMO Services", description: "Establishing and running project management offices" },
      { icon: LineChart, title: "Performance Analytics", description: "Project metrics, KPIs, and continuous improvement" }
    ],
    benefits: [
      "Improve project success rates and predictability",
      "Reduce costs through efficient resource utilization",
      "Accelerate time-to-value for strategic initiatives",
      "Enhance team capabilities and methodologies",
      "Mitigate risks with proactive management"
    ],
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "95%", label: "On-Time Delivery" },
      { value: "4.8/5", label: "Client Rating" },
      { value: "20%", label: "Cost Under Budget" }
    ]
  },
  "offshore-delivery": {
    name: "Offshore Delivery Centre",
    tagline: "Global Talent, Local Excellence",
    description: "Cost-effective global delivery solutions with quality and reliability. Access skilled professionals and dedicated teams that extend your capabilities around the clock.",
    icon: Globe,
    overview: [
      "In a global economy, leveraging distributed talent is key to staying competitive. Our offshore delivery centers provide access to world-class engineering talent while significantly reducing costs.",
      "We don't just provide resources—we build dedicated teams that become true extensions of your organization. With rigorous processes, continuous training, and transparent communication, we deliver quality that matches or exceeds onshore alternatives."
    ],
    capabilities: [
      { icon: Globe, title: "Dedicated Teams", description: "Custom-built teams aligned with your culture and processes" },
      { icon: Users, title: "Staff Augmentation", description: "Flexible scaling of your workforce with skilled professionals" },
      { icon: Rocket, title: "Product Development", description: "Full-cycle product engineering from concept to deployment" },
      { icon: Settings, title: "Maintenance & Support", description: "24/7 application support and continuous improvement" },
      { icon: Shield, title: "Quality Assurance", description: "Comprehensive testing and quality management services" },
      { icon: Zap, title: "Rapid Scaling", description: "Quick ramp-up capabilities to meet project demands" }
    ],
    benefits: [
      "Reduce development costs by up to 60%",
      "Access a deep pool of specialized talent",
      "Enable 24/7 development and support cycles",
      "Scale teams up or down based on project needs",
      "Maintain quality with proven delivery processes"
    ],
    stats: [
      { value: "500+", label: "Dedicated Resources" },
      { value: "60%", label: "Cost Reduction" },
      { value: "15+", label: "Years Experience" },
      { value: "50+", label: "Global Clients" }
    ]
  },
  "recruitment": {
    name: "Recruitment & Manpower",
    tagline: "Finding the Right Talent for Your Success",
    description: "Comprehensive talent acquisition and workforce solutions. We connect you with exceptional candidates who drive business results.",
    icon: Users,
    overview: [
      "The right talent can transform your organization. Our recruitment and manpower services help you find, attract, and retain the professionals you need to achieve your business objectives.",
      "We combine deep industry knowledge with advanced sourcing techniques to identify candidates who not only have the skills but also fit your culture. From executive search to high-volume hiring, we deliver results."
    ],
    capabilities: [
      { icon: Users, title: "Executive Search", description: "Senior and C-level recruitment with rigorous vetting" },
      { icon: UserCheck, title: "Technical Recruitment", description: "Specialized sourcing for IT, engineering, and digital roles" },
      { icon: Briefcase, title: "Contract Staffing", description: "Flexible workforce solutions for project-based needs" },
      { icon: Target, title: "RPO Services", description: "Full recruitment process outsourcing for scale" },
      { icon: TrendingUp, title: "Talent Consulting", description: "Workforce planning and talent strategy advisory" },
      { icon: FileSearch, title: "Background Verification", description: "Comprehensive screening and reference checks" }
    ],
    benefits: [
      "Reduce time-to-hire with efficient processes",
      "Access passive candidates through expert sourcing",
      "Improve quality of hire with rigorous screening",
      "Scale recruitment up or down as needed",
      "Enhance employer brand in the market"
    ],
    stats: [
      { value: "5000+", label: "Placements Made" },
      { value: "30", label: "Days Avg Time-to-Fill" },
      { value: "92%", label: "Retention Rate" },
      { value: "100+", label: "Client Companies" }
    ]
  },
  "product-development": {
    name: "Product Development & Innovation",
    tagline: "From Vision to Market-Leading Products",
    description: "Build innovative digital products from concept to launch. We combine design thinking, engineering excellence, and agile practices to create products users love.",
    icon: Lightbulb,
    overview: [
      "Great products don't happen by accident. Our product development services bring together strategy, design, and engineering to create digital products that solve real problems and delight users.",
      "We work as your strategic partner throughout the product lifecycle—from ideation and validation through development, launch, and iteration. Our human-centered approach ensures we build products that meet market needs."
    ],
    capabilities: [
      { icon: Lightbulb, title: "Product Strategy", description: "Market research, competitive analysis, and product roadmapping" },
      { icon: Target, title: "UX/UI Design", description: "User research, prototyping, and interface design" },
      { icon: Rocket, title: "MVP Development", description: "Rapid prototyping and minimum viable product creation" },
      { icon: Cpu, title: "Full-Stack Engineering", description: "Web, mobile, and backend development excellence" },
      { icon: TrendingUp, title: "Growth Engineering", description: "Analytics, A/B testing, and conversion optimization" },
      { icon: GitBranch, title: "DevOps & Scaling", description: "Infrastructure, CI/CD, and performance optimization" }
    ],
    benefits: [
      "Validate ideas before major investment",
      "Accelerate time-to-market with proven processes",
      "Build products that users actually want",
      "Scale seamlessly as your product grows",
      "Iterate quickly based on user feedback"
    ],
    stats: [
      { value: "75+", label: "Products Launched" },
      { value: "10M+", label: "End Users Served" },
      { value: "4.7", label: "Avg App Store Rating" },
      { value: "3x", label: "Faster Than In-House" }
    ]
  }
};

export type ServiceId = keyof typeof serviceDetails;
