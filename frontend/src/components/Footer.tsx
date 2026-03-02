import { Link } from '@tanstack/react-router';
import { Zap, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'How To Use', path: '/how-to-use' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: SiFacebook, label: 'Facebook', href: '#' },
  { icon: SiInstagram, label: 'Instagram', href: '#' },
  { icon: SiX, label: 'X (Twitter)', href: '#' },
  { icon: SiYoutube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'regis-nano-chemicals');

  return (
    <footer className="bg-brand-blue-dark text-white">
      {/* Yellow accent top bar */}
      <div className="h-1 bg-brand-yellow w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-brand-yellow flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-blue-dark" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-poppins font-800 text-white text-sm tracking-wider uppercase leading-none">
                  REGIS NANO
                </span>
                <span className="font-poppins font-600 text-white/70 text-xs tracking-widest uppercase leading-none">
                  CHEMICALS
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-inter max-w-xs">
              Advanced nano-technology solutions for superior car care. Trusted by professionals across India.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-yellow hover:text-brand-blue-dark flex items-center justify-center transition-all duration-200 text-white/80"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-600 text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-yellow inline-block" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-brand-yellow text-sm font-inter transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/40 group-hover:bg-brand-yellow transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-600 text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-yellow inline-block" />
              Contact
            </h3>
            <ul className="space-y-3 text-sm font-inter text-white/70">
              <li>
                <span className="text-brand-yellow font-500">Email:</span>
                <br />
                <a href="mailto:info@regisnanochemicals.com" className="hover:text-white transition-colors">
                  info@regisnanochemicals.com
                </a>
              </li>
              <li>
                <span className="text-brand-yellow font-500">Phone:</span>
                <br />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li>
                <span className="text-brand-yellow font-500">Location:</span>
                <br />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-inter">
          <p>© {year} REGIS NANO CHEMICALS. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-brand-yellow fill-brand-yellow mx-0.5" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
