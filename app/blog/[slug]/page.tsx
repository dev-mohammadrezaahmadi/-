import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { getPostBySlug, getAllSlugs } from '../../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  const article = getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(article.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Navbar />
      <article className="min-h-screen pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-green dark:text-green-dark hover:text-green-dark dark:hover:text-green transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Articles
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-green dark:text-green-dark font-mono px-3 py-1.5 rounded-full bg-green-dark/10 dark:bg-green/10">
                {article.category}
              </span>
              <span className="text-sm text-slate-dark dark:text-slate-light">
                {article.date}
              </span>
              <span className="text-sm text-slate-dark dark:text-slate-light">
                {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy-dark dark:text-white mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-slate-dark dark:text-slate-light mb-4">
              {article.description}
            </p>
            <div className="text-sm text-slate-dark dark:text-slate-light">
              <span>By </span>
              <a
                href={article.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green dark:text-green-dark hover:underline"
              >
                {article.author}
              </a>
            </div>
          </header>

          {/* Article Content */}
          <div className="liquid-glass-card rounded-xl p-8">
            <div
              className="article-content text-slate-dark dark:text-slate-light prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-light prose-p:leading-relaxed prose-p:mb-4 prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h1:mt-8 prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-3 prose-h2:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-ul:ml-6 prose-li:mb-2 prose-a:text-green prose-a:dark:text-green-dark prose-a:hover:underline prose-code:text-green prose-code:dark:text-green-dark prose-code:bg-navy-light/20 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-strong:text-white prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
          
          {/* Attribution Footer */}
          <div className="mt-8 pt-8 border-t border-slate-dark/20 dark:border-slate-light/20">
            <p className="text-sm text-slate-dark dark:text-slate-light text-center">
              Article by{' '}
              <a
                href={article.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green dark:text-green-dark hover:underline"
              >
                {article.author}
              </a>
              . Republished with permission. All rights reserved.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
