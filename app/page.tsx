import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Blog from '../components/sections/Blog';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}

