import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, User, Newspaper, PenLine, FileText } from "lucide-react";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RichTextRenderer } from "@/components/insights/RichTextRenderer";
import { Skeleton } from "@/components/ui/skeleton";
import { getPostBySlug, isConfigured } from "@/lib/contentful";

const typeMap: Record<string, { contentfulType: string; label: string; icon: any }> = {
  blog: { contentfulType: "blogPost", label: "Blog", icon: PenLine },
  news: { contentfulType: "newsArticle", label: "News", icon: Newspaper },
};

const InsightDetail = () => {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  const config = typeMap[type || "blog"];
  const configured = isConfigured();

  const { data: post, isLoading } = useQuery({
    queryKey: ["insight", type, slug],
    queryFn: () => getPostBySlug(config.contentfulType, slug!),
    enabled: !!slug && !!config && configured,
  });

  const Icon = config?.icon || PenLine;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {!configured ? (
            <div className="text-center py-20 text-muted-foreground">
              <Icon className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <h3 className="text-xl font-semibold mb-2">Content Not Available</h3>
              <p>The CMS is not yet configured.</p>
            </div>
          ) : isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-6 w-48" />
              <Skeleton className="aspect-video w-full rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ) : !post ? (
            <div className="text-center py-20 text-muted-foreground">
              <Icon className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <h3 className="text-xl font-semibold mb-2">Post Not Found</h3>
              <p>This content may have been removed or doesn't exist.</p>
            </div>
          ) : (
            <article>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                <Icon className="w-3.5 h-3.5" />
                {config.label}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                {post.publishedAt && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                  </span>
                )}
                {post.author && (
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                )}
              </div>
              {post.coverImage && (
                <img
                  src={`${post.coverImage}?w=800&h=450&fit=fill`}
                  alt={post.title}
                  className="w-full rounded-xl mb-8"
                />
              )}
              <RichTextRenderer content={post.body} />
              {post.source && (
                <p className="mt-8 text-sm text-muted-foreground">
                  Source: <span className="text-foreground">{post.source}</span>
                </p>
              )}
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightDetail;
