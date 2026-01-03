'use client';

import { useEffect, useRef, useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Frontend Engineer',
      company: 'iToll | آیتول',
      companyUrl: 'https://pwa.itoll.com',
      location: 'Tehran, Iran',
      period: 'Nov 2023 — Present',
      description: [
        "Established modular multi-package architecture that broke down the frontend into composable modules, streamlining development by allowing feature teams to work independently on Business Lines without blocking each other.",
        "Contributed on migration from Nuxt.js 2 to Next.js 15, transitioning the majority of the legacy app to modern frameworks and laying groundwork for systematic refactoring, significantly improving project structure and developer onboarding.",
        "Led migration of order creation, invoicing, and payment services to the Gateway page (debt list), consolidating critical transactional flows into a unified interface for improved user experience and streamlined debt management.",
        "Assisted in the technical redesign of the Debt Certificate journey; by leveraging reusable UI components and refined business logic, the team achieved a 15% increase in conversion rates."
      ],
      technologies: ['JavaScript', 'TypeScript', 'Nuxt.js', 'Vue.js', 'GraphQL' ,'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Frontend Developer',
      company: 'Rabeeen | رابین',
      companyUrl: 'https://rabeeen.com/',
      location: 'Tehran, Iran',
      period: 'April 2023 — Oct 2023',
      description: [
        "Designed and developed an intuitive, user-friendly Vue.js marketplace to streamline the selling experience for suppliers and buyers.",
        "Developed an administrative dashboard using React-Admin to manage seller and customer accounts and track status."
      ],
      technologies: ['Nuxt.js', 'Vue.js', 'Nestjs'],
    },
    {
      title: 'Frontend Developer',
      company: 'Limoome | لیمومی',
      companyUrl: 'https://limoome.com',
      location: 'Tehran, Iran',
      period: 'Sep 2021 — Oct 2023',
      description: [
        "As a member of Limoome tech team, we provide solutions and ensure people to have a more robust and straight-forward experience to grow healthier habbits for a more quality life style through our applications.",
        "Led migration of legacy JSP codebase to Vue and React frameworks, converting more than 60% lines of code to modern front-end stack.",
        "Established modular monorepo architecture using Yarn workspaces and layered service boundaries, consolidating UI, Network, and Core services into unified dev environment.",
        "Partnered with UX designers to build out custom UI component library on top of TailwindCSS and Vant, implementing 30+ reusable UI components to standardize product design system.",
        "Developed multiple admin panels using React-Admin framework, increasing business agility and system maintainability.",
      ],
      technologies: ['Nuxt.js', 'Vue.js', 'Nestjs'],
    },
    {
      title: 'Frontend Developer',
      company: 'Baloot Saving | بلوط',
      companyUrl: 'https://balootsaving.ir',
      location: 'Tehran, Iran',
      period: 'Oct 2020 — Sep 2021',
      description: [
        "Implemented progressive web app capabilities into iOS MVP using React, integrating Web Core API (Push Notification, Offline Caching, ...) and service workers to provide native-like capabilities to 1,500+ mobile users.",
        "Developed interactive data visualizations using D3.js and Nivo.js to represent user balance metrics.",
        "Built and optimized company website using Next.js and React, leveraging SSG and ISR to improve Core Web Vitals metrics by 50%."
      ],
      technologies: ['Next.js', 'React', 'PWA', 'D3.js', 'Nivo.js'],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title animate-slide-up">
        <span className="text-green dark:text-green-dark text-xl font-mono mr-2">02.</span>
        Where I've Worked
      </h2>
      <div className="mt-12">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-dark/20 dark:bg-slate-light/20"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative pl-12 md:pl-20 transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-green-dark border-4 border-navy dark:border-navy-light z-10 transition-all duration-500 ${
                    visibleItems.has(index) 
                      ? 'timeline-dot-glow scale-125' 
                      : 'opacity-60'
                  }`}
                ></div>
                
                {/* Content */}
                <div>
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-navy-dark dark:text-white">
                      {exp.title}{' '}
                      <span className="text-green dark:text-green-dark">
                        @{' '}
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors"
                        >
                          {exp.company}
                        </a>
                      </span>
                    </h3>
                    <p className="text-sm text-slate-dark dark:text-slate-light">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-dark dark:text-slate-light flex items-start">
                        <span className="text-green dark:text-green-dark mr-2 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-slate-dark/10 dark:bg-slate-light/10 text-slate-dark dark:text-slate-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

