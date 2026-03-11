import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "How To Use", path: "/how-to-use" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setMenuOpen is stable
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-card border-b border-brand-gray-mid"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="flex items-center group"
            data-ocid="header.link"
          >
            <img
              src="/assets/uploads/IMG_6702-1.jpg"
              alt="Pearl Shine Logo"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-ocid="header.link"
                  className={`px-4 py-2 rounded-lg font-inter font-500 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-blue"
                      : "text-brand-black hover:text-brand-blue hover:bg-brand-gray"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              data-ocid="header.primary_button"
              onClick={() => setIsOpen(true)}
              className="ml-2 relative p-2 rounded-lg text-brand-black hover:bg-brand-gray transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-yellow text-brand-black text-[10px] font-poppins font-700 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            <Link
              to="/contact"
              data-ocid="header.link"
              className="ml-3 px-5 py-2 rounded-lg yellow-btn text-sm font-poppins font-600 shadow-yellow"
            >
              Get in Touch
            </Link>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              data-ocid="header.primary_button"
              onClick={() => setIsOpen(true)}
              className="relative p-2 rounded-lg text-brand-black hover:bg-brand-gray transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-yellow text-brand-black text-[10px] font-poppins font-700 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="p-2 rounded-lg text-brand-black hover:bg-brand-gray transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-gray-mid shadow-card animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-ocid="header.link"
                  className={`px-4 py-3 rounded-lg font-inter font-500 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-brand-blue text-white"
                      : "text-brand-black hover:text-brand-blue hover:bg-brand-gray"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              data-ocid="header.link"
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
