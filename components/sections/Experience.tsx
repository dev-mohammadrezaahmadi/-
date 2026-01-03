'use client';

import { useEffect, useRef, useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
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
      company: 'Company Name',
      location: 'Remote',
      period: '2024 — Present',
      description: [
        'Build and maintain critical components used to construct the frontend across the whole product.',
        'Work closely with cross-functional teams to implement and advocate for best practices.',
        'Lead initiatives to improve code quality and developer experience.',
      ],
      technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Frontend Engineer',
      company: 'Previous Company',
      location: 'City, Country',
      period: '2022 — 2024',
      description: [
        'Developed and shipped high-quality websites and web applications for various clients.',
        'Collaborated with designers and product managers to implement pixel-perfect designs.',
        'Optimized applications for maximum speed and scalability.',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Styled Components'],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Company',
      location: 'City, Country',
      period: '2020 — 2022',
      description: [
        'Built responsive web applications using modern JavaScript frameworks.',
        'Participated in code reviews and contributed to team knowledge sharing.',
        'Maintained and improved existing codebases.',
      ],
      technologies: ['JavaScript', 'React', 'CSS', 'HTML', 'Git'],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
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
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative pl-12 md:pl-20"
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
                      {exp.title} <span className="text-green dark:text-green-dark">@ {exp.company}</span>
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

