import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  const articles: Article[] = [
    {
      slug: 'getting-started-with-nextjs-14',
      title: 'Getting Started with Next.js 14',
      description:
        'A comprehensive guide to building modern web applications with Next.js 14, covering the App Router, Server Components, and best practices.',
      date: 'March 2024',
      readTime: '5 min read',
      category: 'Web Development',
    },
    {
      slug: 'understanding-react-server-components',
      title: 'Understanding React Server Components',
      description:
        'Deep dive into React Server Components, how they work, and when to use them in your Next.js applications.',
      date: 'February 2024',
      readTime: '8 min read',
      category: 'React',
    },
    {
      slug: 'css-grid-vs-flexbox',
      title: 'CSS Grid vs Flexbox: When to Use What',
      description:
        'A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios in modern web development.',
      date: 'January 2024',
      readTime: '6 min read',
      category: 'CSS',
    },
    {
      slug: 'building-accessible-web-applications',
      title: 'Building Accessible Web Applications',
      description:
        'Best practices and techniques for creating accessible web applications that work for everyone, including WCAG guidelines and implementation tips.',
      date: 'December 2023',
      readTime: '10 min read',
      category: 'Accessibility',
    },
  ];

  return (
    <section id="blog" className="section-container">
      <h2 className="section-title">
        <span className="text-green dark:text-green-dark text-xl font-mono mr-2">04.</span>
        Latest Articles
      </h2>
      <div className="mt-12 space-y-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="liquid-glass-card rounded-xl p-6 group hover:border-green dark:hover:border-green-dark transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <span className="text-xs text-green dark:text-green-dark font-mono px-2 py-1 rounded bg-green-dark/10 dark:bg-green/10">
                  {article.category}
                </span>
                <span className="text-xs text-slate-dark dark:text-slate-light">
                  {article.date}
                </span>
                <span className="text-xs text-slate-dark dark:text-slate-light">
                  {article.readTime}
                </span>
              </div>
            </div>
            <Link href={`/blog/${article.slug}`}>
              <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-2 group-hover:text-green dark:group-hover:text-green-dark transition-colors">
                {article.title}
              </h3>
            </Link>
            <p className="text-slate-dark dark:text-slate-light text-sm mb-4">
              {article.description}
            </p>
            <Link
              href={`/blog/${article.slug}`}
              className="text-green dark:text-green-dark text-sm font-mono hover:underline inline-flex items-center gap-2"
            >
              Read more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;

