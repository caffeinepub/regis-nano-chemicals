import { Link, useLocation } from "@tanstack/react-router";
import { Droplets, Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "How To Use", path: "/how-to-use" },
  { label: "Contact", path: "/contact" },
];

interface HeaderProps {
  onCartOpen: () => void;
}

export default function Header({ onCartOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center shadow-blue group-hover:scale-105 transition-transform">
              <Droplets
                className="w-5 h-5 text-brand-yellow"
                fill="currentColor"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-poppins font-800 text-brand-blue text-sm tracking-wider uppercase leading-none">
                Pearl Shine
              </span>
              <span className="font-poppins font-400 text-brand-black/60 text-[10px] tracking-wide leading-none mt-0.5">
                Cleans – Shines – Protects
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
                      ? "bg-brand-blue text-white shadow-blue"
                      : "text-brand-black hover:text-brand-blue hover:bg-brand-gray"
                  }`}
                  data-ocid={
                    link.path === "/"
                      ? "nav.home.link"
                      : link.path === "/products"
                        ? "nav.products.link"
                        : link.path === "/contact"
                          ? "nav.contact.link"
                          : undefined
                  }
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Cart Button */}
            <button
              type="button"
              onClick={onCartOpen}
              className="relative ml-2 p-2 rounded-lg text-brand-black hover:bg-brand-gray transition-colors"
              aria-label="Open cart"
              data-ocid="header.cart.button"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-yellow text-brand-black text-xs font-poppins font-700 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              to="/contact"
              className="ml-3 px-5 py-2 rounded-lg yellow-btn text-sm font-poppins font-600 shadow-yellow"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile: Cart + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onCartOpen}
              className="relative p-2 rounded-lg text-brand-black hover:bg-brand-gray transition-colors"
              aria-label="Open cart"
              data-ocid="header.cart.button"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-yellow text-brand-black text-xs font-poppins font-700 flex items-center justify-center">
                  {totalItems}
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
                      ? "bg-brand-blue text-white"
                      : "text-brand-black hover:text-brand-blue hover:bg-brand-gray"
                  }`}
                  data-ocid={
                    link.path === "/"
                      ? "nav.home.link"
                      : link.path === "/products"
                        ? "nav.products.link"
                        : link.path === "/contact"
                          ? "nav.contact.link"
                          : undefined
                  }
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
