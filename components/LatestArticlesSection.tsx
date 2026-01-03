import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";

const articles = [
  {
    id: 1,
    title: "The Best Way to Learn Programming Is When You Actually Need It",
    excerpt:
      "I had this thought in my mind for a long time, and it kept coming back: the best way to learn programming is when you actually need the thing you're learning.",
    date: "2025-11-22",
    readTime: "3 min read",
    link: "https://medium.com/@ubeyidah/the-best-way-to-learn-programming-is-when-you-actually-need-it-cddb4b4af0f5",
  },
  {
    id: 2,
    title: "How SSS (Single Source Structure) Ended My Project Organization Nightmare",
    excerpt:
      "You know that moment when you open your project and nothing is where you expect it to be? SSS helped me consolidate files and stop wasting time searching.",
    date: "2026-01-03",
    readTime: "5 min read",
    link: "https://medium.com/@ubeyidah/how-sss-single-source-structure-ended-my-project-organization-nightmare-c3edbd6f2774",
  },
];

export default function LatestArticlesSection() {
  return (
    <section className="py-6 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans italic">Latest Articles</h2>
      <p className="text-muted-foreground mb-8">Insights from my development journey</p>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="rounded-xl border bg-linear-to-br from-background to-muted/10 border-muted/30 p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-tight">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
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
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <span>{article.readTime}</span>
            </div>

            <div className="mt-4">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                aria-label={`Read full article: ${article.title}`}
              >
                Read more
                <HugeiconsIcon icon={ExternalLink} size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
        >
          View all articles
          <HugeiconsIcon icon={ExternalLink} size={14} />
        </a>
      </div>
    </section>
  );
}
