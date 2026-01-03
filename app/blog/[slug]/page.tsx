import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const articles: Article[] = [
  {
    slug: 'getting-started-with-nextjs-14',
    title: 'Getting Started with Next.js 14',
    description:
      'A comprehensive guide to building modern web applications with Next.js 14, covering the App Router, Server Components, and best practices.',
    date: 'March 2024',
    readTime: '5 min read',
    category: 'Web Development',
    content: `
# Getting Started with Next.js 14

Next.js 14 introduces powerful new features that make building modern web applications easier and more efficient. In this article, we'll explore the key concepts and best practices.

## App Router

The App Router is the new default routing system in Next.js 13+. It provides a more intuitive file-based routing system with support for layouts, loading states, and error boundaries.

## Server Components

Server Components allow you to build faster applications by moving data fetching and rendering to the server. This reduces the amount of JavaScript sent to the client and improves performance.

## Best Practices

- Use Server Components by default
- Leverage the App Router for better organization
- Implement proper error boundaries
- Optimize images with next/image
- Use dynamic imports for code splitting
    `,
  },
  {
    slug: 'understanding-react-server-components',
    title: 'Understanding React Server Components',
    description:
      'Deep dive into React Server Components, how they work, and when to use them in your Next.js applications.',
    date: 'February 2024',
    readTime: '8 min read',
    category: 'React',
    content: `
# Understanding React Server Components

React Server Components represent a paradigm shift in how we think about React applications. Let's explore what makes them special.

## What are Server Components?

Server Components are React components that render on the server. They can directly access backend resources like databases and file systems without sending code to the client.

## Benefits

- Reduced bundle size
- Direct access to backend resources
- Improved security
- Better performance

## When to Use Server Components

Use Server Components for:
- Data fetching
- Accessing backend resources
- Large dependencies
- Sensitive information

Use Client Components for:
- Interactivity (onClick, onChange, etc.)
- Browser APIs
- State and effects
- Third-party libraries that require client-side JavaScript
    `,
  },
  {
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use What',
    description:
      'A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios in modern web development.',
    date: 'January 2024',
    readTime: '6 min read',
    category: 'CSS',
    content: `
# CSS Grid vs Flexbox: When to Use What

Both CSS Grid and Flexbox are powerful layout tools, but they excel in different scenarios. Let's break down when to use each.

## CSS Grid

CSS Grid is perfect for two-dimensional layouts where you need to control both rows and columns simultaneously.

### Use Grid for:
- Complex page layouts
- Two-dimensional layouts
- Overlapping elements
- Precise placement

## Flexbox

Flexbox is ideal for one-dimensional layouts, either in a row or a column.

### Use Flexbox for:
- Navigation bars
- Centering content
- One-dimensional layouts
- Flexible components

## Combining Both

You can use both Grid and Flexbox together! Use Grid for the overall page layout and Flexbox for individual components.
    `,
  },
  {
    slug: 'building-accessible-web-applications',
    title: 'Building Accessible Web Applications',
    description:
      'Best practices and techniques for creating accessible web applications that work for everyone, including WCAG guidelines and implementation tips.',
    date: 'December 2023',
    readTime: '10 min read',
    category: 'Accessibility',
    content: `
# Building Accessible Web Applications

Accessibility is not optional—it's essential. Let's explore how to build web applications that everyone can use.

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible content. The guidelines are organized into four principles:

1. **Perceivable** - Information must be presentable to users in ways they can perceive
2. **Operable** - Interface components must be operable
3. **Understandable** - Information and UI operation must be understandable
4. **Robust** - Content must be robust enough to be interpreted by assistive technologies

## Key Practices

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Maintain proper color contrast
- Use ARIA labels when needed
- Test with screen readers

## Tools and Testing

- Use automated testing tools
- Test with real users
- Validate with screen readers
- Check color contrast ratios
    `,
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

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
            <p className="text-lg text-slate-dark dark:text-slate-light">
              {article.description}
            </p>
          </header>

          {/* Article Content */}
          <div className="liquid-glass-card rounded-xl p-8">
            <div className="article-content text-slate-dark dark:text-slate-light">
              {article.content.split('\n').map((line, index) => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-white mb-4 mt-8 first:mt-0">
                      {trimmedLine.slice(2)}
                    </h1>
                  );
                }
                if (trimmedLine.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mb-3 mt-6">
                      {trimmedLine.slice(3)}
                    </h2>
                  );
                }
                if (trimmedLine.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-white mb-2 mt-4">
                      {trimmedLine.slice(4)}
                    </h3>
                  );
                }
                if (trimmedLine.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-6 mb-2 list-disc">
                      {trimmedLine.slice(2)}
                    </li>
                  );
                }
                if (trimmedLine === '') {
                  return <br key={index} />;
                }
                if (trimmedLine.match(/^\d+\.\s/)) {
                  return (
                    <li key={index} className="ml-6 mb-2 list-decimal">
                      {trimmedLine.replace(/^\d+\.\s/, '')}
                    </li>
                  );
                }
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {trimmedLine}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

