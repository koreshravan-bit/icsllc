import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the emerging AI trends that are reshaping how enterprises operate and compete in the digital age.",
    category: "AI & Machine Learning",
    author: "Dr. Sarah Chen",
    date: "Jan 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building a Data-Driven Culture: A Practical Guide",
    excerpt: "Learn the essential steps to transform your organization into a data-driven enterprise.",
    category: "Data Strategy",
    author: "Michael Rodriguez",
    date: "Jan 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Cloud Security Best Practices for Financial Services",
    excerpt: "Key security considerations when migrating sensitive financial workloads to the cloud.",
    category: "Cybersecurity",
    author: "James Wilson",
    date: "Jan 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Digital Transformation in Healthcare: Lessons Learned",
    excerpt: "Insights from successful digital transformation initiatives in the healthcare sector.",
    category: "Industry Insights",
    author: "Dr. Emily Park",
    date: "Dec 28, 2023",
    readTime: "7 min read",
  },
];

const categories = ["All", "AI & Machine Learning", "Data Strategy", "Cybersecurity", "Industry Insights"];

const Insights = () => {
  return (
    <Layout>
      <PageHero
        title="Insights & Blog"
        subtitle="Thought Leadership"
        description="Stay informed with the latest insights, trends, and best practices in AI, data, and digital transformation."
        badge="Knowledge Hub"
        icon={Lightbulb}
      />

      {/* Categories */}
      <PageSection className="!pt-8 !pb-0">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </PageSection>

      {/* Articles Grid */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl glass border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-semibold mt-4 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>

                {/* Read More */}
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  <span className="text-primary">Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-primary group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </PageSection>

      {/* Newsletter */}
      <PageSection variant="gradient">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none min-w-[300px]"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Insights;
