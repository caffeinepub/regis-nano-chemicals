import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'How To Use', path: '/how-to-use' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-card border-b border-brand-gray-mid'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center shadow-blue group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-brand-yellow" fill="currentColor" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-poppins font-800 text-brand-blue text-sm tracking-wider uppercase leading-none">
                REGIS NANO
              </span>
              <span className="font-poppins font-600 text-brand-black text-xs tracking-widest uppercase leading-none">
                CHEMICALS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-inter font-500 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-blue'
                      : 'text-brand-black hover:text-brand-blue hover:bg-brand-gray'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 rounded-lg yellow-btn text-sm font-poppins font-600 shadow-yellow"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-brand-black hover:bg-brand-gray transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-gray-mid shadow-card animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-inter font-500 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-black hover:text-brand-blue hover:bg-brand-gray'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-2 px-5 py-3 rounded-lg yellow-btn text-sm font-poppins font-600 text-center"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
