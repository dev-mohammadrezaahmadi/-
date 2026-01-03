import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="flex items-start gap-8 md:gap-12">
        <div className="flex-1">
          <h2 className="section-title">
            <span className="text-green dark:text-green-dark text-xl font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="space-y-4 text-slate-dark dark:text-slate-light">
            <p>
              Hello! I'm a developer passionate about crafting accessible, pixel-perfect user interfaces
              that blend thoughtful design with robust engineering. My favorite work lies at the intersection
              of design and development, creating experiences that not only look great but are meticulously
              built for performance and usability.
            </p>
            <p>
              I enjoy creating things that live on the internet, whether that be websites, applications,
              or anything in between. My goal is to always build products that provide pixel-perfect,
              performant experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-sm mt-4">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Nuxt.js</li>
              <li>Vue.js</li>
              <li>Nestjs</li>
              <li>GraphQL</li>
              <li>Docker</li>
              <li>PWA</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <div className="w-64 h-64 rounded-2xl liquid-glass-card relative overflow-hidden animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-green-dark/15 via-green-dark/8 to-transparent"></div>
            <div className="absolute inset-4 liquid-glass-soft rounded-xl overflow-hidden">
              <Image
                src="/my-photo.jpg"
                alt="Mohammad Reza Ahmadi"
                width={256}
                height={256}
                className="w-full h-full object-cover animate-fade-in hover:scale-105 transition-transform duration-500"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                quality={90}
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

