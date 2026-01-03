'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Switcher from './Switcher';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaCodepen 
} from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com' },
    { name: 'CodePen', icon: FaCodepen, href: 'https://codepen.io' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
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

  const navBgColor = isDark ? 'rgba(10, 25, 47, 0.8)' : 'rgba(255, 255, 255, 0.8)';
  const borderColor = isDark ? 'rgba(204, 214, 246, 0.1)' : 'rgba(73, 86, 112, 0.1)';
  const textColor = isDark ? '#ccd6f6' : '#495670';
  const hoverColor = isDark ? '#52d4b8' : '#64ffda';

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-200"
      style={{ 
        backgroundColor: navBgColor,
        borderColor: borderColor
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold transition-colors duration-200"
              style={{ 
                color: isDark ? 'white' : '#0a192f'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
              onMouseLeave={(e) => e.currentTarget.style.color = isDark ? 'white' : '#0a192f'}
            >
              Your Name
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm transition-colors duration-200"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = textColor}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: textColor }}
                    onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = textColor}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <Switcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
