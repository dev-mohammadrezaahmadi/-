const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <p className="text-green dark:text-green-dark text-sm sm:text-base font-mono mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-dark dark:text-white mb-4">
          Your Name.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark dark:text-slate-light mb-6">
          I build things for the web.
        </h2>
        <p className="text-lg sm:text-xl text-slate-dark dark:text-slate-light max-w-2xl mx-auto mb-8">
          I'm a software engineer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I'm focused on building accessible,
          human-centered products.
        </p>
        <a
          href="#projects"
          className="btn inline-block"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;

