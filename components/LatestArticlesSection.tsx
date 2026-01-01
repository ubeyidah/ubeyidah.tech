import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";

const articles = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Exploring the latest features in Next.js 14 and how to build scalable web applications with the app router.",
    date: "2024-01-15",
    readTime: "5 min read",
    link: "/blog/nextjs-modern-apps",
  },
  {
    id: 2,
    title: "Self-Taught Developer Journey: From Ethiopia to Global Tech",
    excerpt: "My personal story of starting coding in grade 10 and navigating the challenges of self-learning in tech.",
    date: "2024-01-10",
    readTime: "8 min read",
    link: "/blog/self-taught-journey",
  },
  {
    id: 3,
    title: "Essential Tools for Full-Stack Development",
    excerpt: "A curated list of tools, frameworks, and practices that have helped me become a more efficient developer.",
    date: "2024-01-05",
    readTime: "6 min read",
    link: "/blog/essential-dev-tools",
  },
];

export default function LatestArticlesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 font-instrument-serif-italic">Latest Articles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="p-6 bg-muted/50 rounded-lg border hover:bg-muted/80 transition-colors">
            <h3 className="text-xl font-semibold mb-3 leading-tight">
              <a
                href={article.link}
                className="hover:text-primary transition-colors"
              >
                {article.title}
              </a>
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={Calendar01Icon} size={14} />
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</span>
              </div>
              <span>{article.readTime}</span>
            </div>

            <div className="mt-4">
              <a
                href={article.link}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Read more
                <HugeiconsIcon icon={ExternalLink} size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          View all articles
          <HugeiconsIcon icon={ExternalLink} size={16} />
        </a>
      </div>
    </section>
  );
}