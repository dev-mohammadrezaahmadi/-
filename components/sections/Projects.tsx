'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  image?: string;
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  const projects: Project[] = [
    {
      title: 'Movie DB Finder',
      description:
        'A movie database finder built with Nuxt.js and TypeScript. Features include real-time updates, responsive design, and seamless user experience.',
      technologies: ['Nuxt.js', 'TypeScript', 'Tailwind CSS'],
      live: 'https://moviez-dev-mohammadrezaahmadi.vercel.app',
      featured: true,
      image: '/movie.png',
    },
    {
      title: 'Clothes Shop',
      description:
        'An e-commerce shopping platform with advanced filtering, search functionality, and payment integration. Built with modern web technologies.',
      technologies: ['React', 'Redux', 'TypeScript', 'Tailwind CSS', 'Jest', 'Styled-Components'],
      live: 'https://clothes-shop-dev-mohammadrezaahmadi.vercel.app/',
      featured: true,
      image: '/shop.png',
    },
    {
      title: 'Blog App',
      description:
        'Read, Write and Share new contents with world!',
      technologies: ['Next.js', 'React', 'GraphQL', 'TypeScript', 'Tailwind CSS'],
      live: 'https://blog-app-dev-mohammadrezaahmadi.vercel.app/',
      image: '/blog.png',
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title animate-slide-up">
        <span className="text-green dark:text-green-dark text-xl font-mono mr-2">03.</span>
        Some Things I've Built
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const cardUrl = project.live || project.github || '#';
          return (
            <a
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              href={cardUrl}
              target={cardUrl !== '#' ? '_blank' : undefined}
              rel={cardUrl !== '#' ? 'noopener noreferrer' : undefined}
              className={`group relative liquid-glass-card rounded-xl overflow-hidden transition-all duration-700 hover:scale-[1.02] block cursor-pointer ${
                visibleProjects.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
            {project.image && (
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green dark:group-hover:text-green-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-light text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-dark dark:text-slate-light font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-dark dark:text-slate-light hover:text-green dark:hover:text-green-dark transition-colors relative z-10"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-dark dark:text-slate-light hover:text-green dark:hover:text-green-dark transition-colors relative z-10"
                    aria-label="Live Site"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

