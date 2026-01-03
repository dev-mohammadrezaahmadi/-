const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className=" mx-auto text-center animate-fade-in relative z-10">
        <p className="text-green dark:text-green-dark text-sm sm:text-base font-mono mb-4">
          Hi, my name is
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-4 animate-gradient">
          Mohammad Reza Ahmadi
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark dark:text-slate-light mb-6">
        Blending Design and Technology to Create User Delight.
        </h2>
        <p className="text-lg sm:text-xl text-slate-dark dark:text-slate-light max-w-2xl mx-auto mb-8">
          I'm a software engineer and providing solutions mainly in JavaScript Ecosystem.
        </p>
        <a
          href="#projects"
          className="btn inline-block"
        >
          Explore My Work!
        </a>
      </div>
    </section>
  );
};

export default Hero;

