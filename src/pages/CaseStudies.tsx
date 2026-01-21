import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Fraud Detection",
    client: "Global Financial Institution",
    industry: "Financial Services",
    challenge: "Detecting sophisticated fraud patterns in real-time",
    solution: "Implemented ML-based fraud detection reducing false positives by 60%",
    results: ["$50M+ annual savings", "99.2% detection accuracy", "Real-time processing"],
  },
  {
    id: 2,
    title: "Healthcare Data Platform",
    client: "Leading Hospital Network",
    industry: "Healthcare",
    challenge: "Unifying patient data across 50+ facilities",
    solution: "Built unified data platform with advanced analytics capabilities",
    results: ["30% faster diagnoses", "40% reduction in admin work", "HIPAA compliant"],
  },
  {
    id: 3,
    title: "Retail Personalization Engine",
    client: "Major E-commerce Retailer",
    industry: "Retail",
    challenge: "Delivering personalized experiences at scale",
    solution: "Developed AI recommendation engine with real-time personalization",
    results: ["25% increase in conversion", "18% higher AOV", "50M+ daily recommendations"],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <PageHero
        title="Case Studies"
        subtitle="Real Results, Real Impact"
        description="Explore how we've helped leading organizations transform their businesses with innovative technology solutions."
        badge="Our Work"
        icon={Briefcase}
      />

      {/* Case Studies Grid */}
      <PageSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl glass border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-border/50">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground">{study.client}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Challenge</h4>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Solution</h4>
                  <p className="text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <Button variant="ghost" className="w-full group/btn">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* More Coming Soon */}
      <PageSection variant="muted">
        <div className="text-center">
          <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">More Case Studies Coming Soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're continuously adding new success stories. Check back soon for more examples of our work.
          </p>
        </div>
      </PageSection>
    </Layout>
  );
};

export default CaseStudies;
