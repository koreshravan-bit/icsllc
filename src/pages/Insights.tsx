import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Newspaper } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { InsightCard } from "@/components/insights/InsightCard";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllInsights, getInsightsByType, isConfigured } from "@/lib/contentful";

const Insights = () => {
  const [activeTab, setActiveTab] = useState("all");
  const configured = isConfigured();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["insights", activeTab],
    queryFn: () =>
      activeTab === "all"
        ? getAllInsights()
        : getInsightsByType(
            activeTab === "blog" ? "blogPost" : activeTab === "news" ? "newsArticle" : "pressRelease"
          ),
    enabled: configured,
  });

  const renderContent = () => {
    if (!configured) {
      return (
        <div className="text-center py-20 text-muted-foreground">
          <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p>Our insights section is being set up. Check back soon!</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
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
      );
    }

    if (!posts || posts.length === 0) {
      return (
        <div className="text-center py-20 text-muted-foreground">
          <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <h3 className="text-xl font-semibold mb-2">No Posts Yet</h3>
          <p>We haven't published any content in this category yet.</p>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <InsightCard key={post._id} post={post} index={i} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          title="Insights"
          subtitle="Blog, News & Press Releases"
          description="Stay up to date with the latest from our team — industry trends, company news, and thought leadership."
          icon={Newspaper}
          badge="Insights Hub"
        />
        <PageSection>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="press">Press</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              {renderContent()}
            </TabsContent>
          </Tabs>
        </PageSection>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
