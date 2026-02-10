import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import { getLatestInsights, isConfigured } from "@/lib/sanity";
import { InsightCard } from "./InsightCard";
import { Skeleton } from "@/components/ui/skeleton";
import { PageSection } from "@/components/layout/PageSection";

export const LatestInsights = () => {
  const configured = isConfigured();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["latestInsights"],
    queryFn: () => getLatestInsights(3),
    enabled: configured,
  });

  // Don't render the section at all if Sanity isn't configured
  if (!configured) return null;

  return (
    <PageSection variant="muted">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4"
          >
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Latest Insights</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Stay Informed</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Explore our latest blog posts, news, and press releases.
          </p>
        </div>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          View All Insights
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-border/50">
              <Skeleton className="aspect-video" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <InsightCard key={post._id} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>No insights published yet. Check back soon!</p>
        </div>
      )}
    </PageSection>
  );
};
