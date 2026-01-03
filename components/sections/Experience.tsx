'use client';

import { useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-dark/20 dark:border-slate-light/20">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-left whitespace-nowrap text-sm border-b-2 md:border-b-0 md:border-l-2 transition-colors ${
                  activeTab === index
                    ? 'border-green dark:border-green-dark text-green dark:text-green-dark'
                    : 'border-transparent hover:border-green dark:hover:border-green-dark hover:text-green dark:hover:text-green-dark'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="flex-1">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-8 last:mb-0 ${activeTab === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl font-semibold text-navy-dark dark:text-white">
                  {exp.title} <span className="text-green dark:text-green-dark">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-slate-dark dark:text-slate-light mb-4">{exp.period}</p>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-dark dark:text-slate-light flex items-start">
                      <span className="text-green dark:text-green-dark mr-2">▹</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

