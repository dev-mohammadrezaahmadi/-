---
title: "Fixing a Memory Leak in a Production Node.js App"
description: "A detailed walkthrough of identifying, debugging, and fixing a memory leak in a production Node.js application, with practical debugging techniques and solutions."
date: "January 12th, 2023"
readTime: "15 min read"
category: "Node.js"
author: "Kent C. Dodds"
authorUrl: "https://kentcdodds.com"
---

# Fixing a Memory Leak in a Production Node.js App

Memory leaks in production are every developer's nightmare. Here's how I identified and fixed a critical memory leak in a production Node.js application.

## The Problem

Our application was experiencing gradual memory growth over time, eventually causing the server to crash. The symptoms were clear: memory usage would climb steadily, even during periods of low traffic.

## Identifying the Leak

### Monitoring Tools

First, we set up proper monitoring:
- **Heap snapshots**: Using Chrome DevTools
- **Memory profiling**: Node.js built-in profiler
- **APM tools**: Application Performance Monitoring

### Key Indicators

- Steady memory growth over time
- Memory not being garbage collected
- Increasing response times
- Server crashes after extended uptime

## Debugging Process

### Step 1: Take Heap Snapshots

Using Chrome DevTools, we took heap snapshots at different intervals to identify what was growing:

```javascript
// Enable heap snapshots
node --inspect app.js
```

### Step 2: Compare Snapshots

Comparing snapshots revealed that event listeners were accumulating. We found that database connection handlers weren't being properly cleaned up.

### Step 3: Identify Root Cause

The issue was in our database connection pool. Event listeners were being attached but never removed when connections were closed.

## The Fix

### Before (Leaky Code)

```javascript
class DatabaseConnection {
  constructor() {
    this.connection = createConnection();
    this.connection.on('error', this.handleError);
    // Listener never removed!
  }
}
```

### After (Fixed Code)

```javascript
class DatabaseConnection {
  constructor() {
    this.connection = createConnection();
    this.handleError = this.handleError.bind(this);
    this.connection.on('error', this.handleError);
  }

  close() {
    this.connection.removeListener('error', this.handleError);
    this.connection.close();
  }
}
```

## Best Practices

1. **Always remove event listeners** when cleaning up
2. **Use WeakMap/WeakSet** for references that shouldn't prevent garbage collection
3. **Monitor memory usage** in production
4. **Set up alerts** for memory thresholds
5. **Regular heap analysis** as part of your debugging toolkit

## Prevention

- Code reviews focused on resource cleanup
- Automated memory leak detection in CI/CD
- Regular production memory audits
- Clear documentation on resource management

---

*This article is republished with permission from [Kent C. Dodds](https://kentcdodds.com/blog/fixing-a-memory-leak-in-a-production-node-js-app). All rights reserved.*

