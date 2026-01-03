---
title: "React Server Components with Dan Abramov and Joe Savona"
description: "An in-depth discussion about React Server Components, their benefits, use cases, and how they're changing the way we build React applications."
date: "March 14th, 2023"
readTime: "15 min read"
category: "React"
author: "Kent C. Dodds"
authorUrl: "https://kentcdodds.com"
---

# React Server Components with Dan Abramov and Joe Savona

React Server Components represent a fundamental shift in how we think about React applications. In this live stream discussion, we explore what they are, why they matter, and how to use them effectively.

## What Are Server Components?

React Server Components allow you to build UI that can fetch and render data on the server. Unlike traditional Server-Side Rendering (SSR), Server Components don't send their JavaScript to the client, resulting in smaller bundle sizes and faster initial loads.

## Key Benefits

### Reduced Bundle Size

Since Server Components don't ship JavaScript to the client, your bundle size decreases. This is especially beneficial for components that use heavy dependencies.

### Direct Database Access

Server Components can directly access databases and file systems without needing API routes. This simplifies data fetching and reduces latency.

### Better Security

Sensitive logic and API keys can stay on the server, never exposed to the client.

## When to Use Server Components

### Use Server Components For:
- Data fetching
- Accessing backend resources
- Large dependencies
- Sensitive information
- Static content

### Use Client Components For:
- Interactivity (onClick, onChange, etc.)
- Browser APIs (localStorage, window, etc.)
- State and effects
- Third-party libraries that require client-side JavaScript

## The Mental Model

Think of Server Components as the default, and Client Components as the exception. Start with Server Components and only mark components as Client Components when you need interactivity.

## Common Patterns

### Data Fetching

```javascript
// Server Component
async function BlogPost({ id }) {
  const post = await db.posts.findById(id);
  return <article>{post.content}</article>;
}
```

### Combining Server and Client Components

```javascript
// Server Component
function Page() {
  return (
    <div>
      <ServerData />
      <ClientInteractive />
    </div>
  );
}

// Client Component
'use client';
function ClientInteractive() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Migration Strategy

1. Start with new features using Server Components
2. Gradually migrate existing components
3. Keep Client Components for interactive parts
4. Use the `'use client'` directive sparingly

## The Future

Server Components are the future of React development. They enable better performance, simpler code, and improved developer experience. As the ecosystem matures, we'll see more patterns and best practices emerge.

---

*This article is based on a live stream discussion. Original content by [Kent C. Dodds](https://kentcdodds.com/blog/react-server-components-with-dan-abramov-and-joe-savona). All rights reserved.*

