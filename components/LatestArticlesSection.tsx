import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";

const articles = [
  {
    id: 1,
    title: "The Best Way to Learn Programming Is When You Actually Need It",
    excerpt: "I had this thought in my mind for a long time, and it kept coming back: the best way to learn programming is when you actually need the thing you're learning.",
    date: "2025-11-22",
    readTime: "3 min read",
    link: "https://medium.com/@ubeyidah/the-best-way-to-learn-programming-is-when-you-actually-need-it-cddb4b4af0f5",
  },
];

export default function LatestArticlesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-2 font-sans italic">Latest Articles</h2>
      <p className="text-muted-foreground mb-8">Insights from my development journey</p>
      <article className="rounded-xl border bg-linear-to-br from-background to-muted/10 border-muted/30 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <h3 className="text-2xl font-semibold mb-3 leading-tight">
          <a
            href={articles[0].link}
            className="hover:text-primary transition-colors"
          >
            {articles[0].title}
          </a>
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {articles[0].excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <HugeiconsIcon icon={Calendar01Icon} size={14} />
            <span>{new Date(articles[0].date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
          </div>
          <span>{articles[0].readTime}</span>
        </div>

        <div className="mt-4">
          <a
            href={articles[0].link}
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            Read more
            <HugeiconsIcon icon={ExternalLink} size={14} />
          </a>
        </div>
      </article>

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
