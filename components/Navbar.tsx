'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaCodepen 
} from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/dev-mohammadrezaahmadi' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohammad-reza-ahmadi-7b5b01258' },

  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'liquid-glass-nav-scrolled' : 'liquid-glass-nav'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-green-dark transition-colors relative z-10">
              Mohammad Reza Ahmadi
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-slate-light hover:text-green-dark transition-colors relative z-10 px-3 py-1.5 rounded-xl hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-green-dark transition-all relative z-10 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
