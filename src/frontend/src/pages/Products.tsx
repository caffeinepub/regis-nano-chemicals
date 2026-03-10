import {
  CheckCircle2,
  MessageCircle,
  Package,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";
import CartDrawer from "../components/CartDrawer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useFadeIn } from "../hooks/useFadeIn";

function FadeSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

const trustBadges = [
  { icon: CheckCircle2, label: "100% Genuine Products" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Truck, label: "Fast Delivery Across India" },
  { icon: Star, label: "10,000+ Happy Customers" },
];

export default function Products() {
  const individualProducts = products.filter((p) => !p.isBundle);
  const bundleProducts = products.filter((p) => p.isBundle);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Page Hero */}
      <div
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.14 250) 0%, oklch(0.38 0.15 250) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-4 fade-in-delay-1">
            Our Range
          </span>
          <h1 className="font-poppins font-900 text-white text-4xl sm:text-5xl lg:text-6xl fade-in-delay-2">
            Our <span className="text-brand-yellow">Products</span>
          </h1>
          <p className="text-white/70 font-inter text-base mt-4 max-w-xl mx-auto fade-in-delay-3">
            Professional-grade nano-technology car care solutions for every
            need.
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand-black" />
                <span className="font-poppins font-700 text-brand-black text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bundle / Combo Section */}
      <FadeSection className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Package className="w-5 h-5 text-brand-yellow" />
                <span className="text-brand-yellow font-poppins font-700 text-sm uppercase tracking-widest">
                  Combo Offer
                </span>
              </div>
              <h2 className="font-poppins font-800 text-brand-blue text-2xl sm:text-3xl">
                Bundle &amp; Save
              </h2>
              <p className="text-brand-gray-text font-inter text-sm mt-1">
                Get more for less with our exclusive combo kit
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 rounded-xl border border-brand-yellow/40">
              <Package className="w-4 h-4 text-brand-yellow" />
              <span className="text-brand-black font-inter text-sm font-600">
                Limited Combo Deal
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {bundleProducts.map((product) => (
              <div key={product.id} className="w-full sm:w-80 lg:w-96">
                <ProductCard
                  product={product}
                  onBuyNow={() => setCartOpen(true)}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* Individual Products Grid */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="font-poppins font-800 text-brand-blue text-2xl sm:text-3xl">
                All Products
              </h2>
              <p className="text-brand-gray-text font-inter text-sm mt-1">
                {individualProducts.length} individual products available
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-brand-gray rounded-xl border border-brand-gray-mid">
              <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span className="text-brand-black font-inter text-sm font-500">
                Top Rated Products
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyNow={() => setCartOpen(true)}
              />
            ))}
          </div>
        </div>
      </FadeSection>

      {/* Why Choose Pearl Shine */}
      <FadeSection className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl mb-4">
              Why Choose Pearl Shine?
            </h2>
            <p className="text-brand-gray-text font-inter text-base max-w-xl mx-auto">
              Every product is backed by nano-science and tested for real-world
              performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Nano-Particle Formula",
                desc: "Our products use nano-particles smaller than 100nm for molecular-level bonding and protection.",
                highlight: "100nm",
              },
              {
                title: "Satisfaction Guaranteed",
                desc: "Join over 10,000 satisfied customers who trust Pearl Shine for their car care needs.",
                highlight: "10K+",
              },
              {
                title: "Professional Results",
                desc: "Achieve showroom-quality results at home with our easy-to-use professional formulations.",
                highlight: "9H",
              },
            ].map(({ title, desc, highlight }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-card border border-brand-gray-mid text-center hover:shadow-card-hover transition-shadow"
              >
                <p className="font-poppins font-900 text-brand-yellow text-4xl mb-2">
                  {highlight}
                </p>
                <h3 className="font-poppins font-700 text-brand-blue text-lg mb-3">
                  {title}
                </h3>
                <p className="text-brand-gray-text font-inter text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* CTA */}
      <FadeSection>
        <div
          className="py-16"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.14 250) 0%, oklch(0.38 0.15 250) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShoppingBag className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
            <h2 className="font-poppins font-800 text-white text-2xl sm:text-3xl mb-3">
              Need Help Choosing?
            </h2>
            <p className="text-white/70 font-inter text-base mb-6 max-w-md mx-auto">
              Our team is ready to help you find the perfect product for your
              car care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="yellow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-700 shadow-yellow"
              >
                Contact Our Experts
              </a>
              <a
                href="https://wa.me/919353240921?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Pearl%20Shine%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-600 text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
