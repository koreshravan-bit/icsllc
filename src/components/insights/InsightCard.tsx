import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper, FileText, PenLine } from "lucide-react";
import { format } from "date-fns";
import { ContentfulPost } from "@/lib/contentful";

const typeConfig = {
  blogPost: { label: "Blog", icon: PenLine, route: "blog", color: "text-primary" },
  newsArticle: { label: "News", icon: Newspaper, route: "news", color: "text-[hsl(var(--glow))]" },
  pressRelease: { label: "Press Release", icon: FileText, route: "press", color: "text-[hsl(var(--glow-purple))]" },
};

interface InsightCardProps {
  post: ContentfulPost;
  index?: number;
}

export const InsightCard = ({ post, index = 0 }: InsightCardProps) => {
  const config = typeConfig[post._type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/insights/${config.route}/${post.slug.current}`} className="block group">
        <div className="h-full rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
          {post.coverImage ? (
            <div className="aspect-video overflow-hidden">
              <img
                src={`${post.coverImage}?w=600&h=340&fit=fill`}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-[hsl(var(--glow-purple)/0.1)] flex items-center justify-center">
              <Icon className="w-12 h-12 text-muted-foreground/30" />
            </div>
          )}

          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${config.color}`}>
                <Icon className="w-3.5 h-3.5" />
                {config.label}
              </span>
              {post.publishedAt && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {format(new Date(post.publishedAt), "MMM d, yyyy")}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
