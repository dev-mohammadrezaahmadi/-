import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/dev-mohammadrezaahmadi' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohammad-reza-ahmadi-7b5b01258' },
  ];

  return (
    <footer className="section-container border-t border-slate-dark/10 dark:border-slate-light/10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-dark dark:text-slate-light hover:text-green dark:hover:text-green-dark transition-colors"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-slate-dark dark:text-slate-light text-center">
          Designed & Built by Mohammad Reza Ahmadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;

