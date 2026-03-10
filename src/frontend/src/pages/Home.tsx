import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Droplets,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { useRef, useState } from "react";
import CartDrawer from "../components/CartDrawer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useFadeIn } from "../hooks/useFadeIn";

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

const features = [
  {
    icon: Droplets,
    title: "Nano Technology",
    desc: "Cutting-edge nano-particle formulas that bond at the molecular level for superior protection.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Lasting Protection",
    desc: "Our products provide months of protection against UV rays, water, and environmental damage.",
  },
  {
    icon: Award,
    title: "Professional Grade",
    desc: "Trusted by detailing professionals and car enthusiasts across India for showroom results.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick and reliable delivery across India with secure packaging to ensure product integrity.",
  },
];

const trustBadges = [
  { label: "100% Genuine Products", icon: CheckCircle2 },
  { label: "Secure Payments", icon: ShieldCheck },
  { label: "Fast Delivery Across India", icon: Truck },
  { label: "10,000+ Happy Customers", icon: Star },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "Pearl Shine transformed my car! The DBS solution gave it a mirror-like finish I've never seen before. Absolutely love it!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    text: "The Scratch Remover Pro is magic. Removed scratches I thought were permanent. Fast delivery too!",
    rating: 5,
  },
  {
    name: "Anil Verma",
    location: "Delhi",
    text: "The Car Care Kit Box is great value for money. All three products work perfectly together. Highly recommend Pearl Shine!",
    rating: 5,
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.14 250) 0%, oklch(0.35 0.15 250) 55%, oklch(0.42 0.13 240) 100%)",
        }}
      >
        {/* Background image — kept exactly as-is */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/assets/generated/hero-banner.dim_1600x700.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dynamic animated background */}
        <div className="hero-dynamic-bg">
          <div className="light-streak light-streak-1" />
          <div className="light-streak light-streak-2" />
          <div className="light-streak light-streak-3" />
          <div className="light-streak light-streak-4" />
          <div className="light-streak light-streak-5" />
          <div className="light-streak light-streak-6" />
          <div className="water-drop water-drop-1" />
          <div className="water-drop water-drop-2" />
          <div className="water-drop water-drop-3" />
          <div className="glow-pulse glow-pulse-1" />
          <div className="glow-pulse glow-pulse-2" />
        </div>

        {/* Soft gradient overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, oklch(0.22 0.14 250 / 0.85) 0%, oklch(0.22 0.14 250 / 0.55) 55%, transparent 100%)",
          }}
        />

        {/* Decorative lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-full h-0.5 bg-brand-yellow rotate-12 origin-right" />
          <div className="absolute top-1/2 right-0 w-3/4 h-0.5 bg-brand-yellow rotate-6 origin-right" />
          <div className="absolute top-3/4 right-0 w-1/2 h-0.5 bg-brand-yellow rotate-3 origin-right" />
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-brand-yellow/5 pointer-events-none" />

        {/* Additional pearl/luxury glow orbs */}
        <div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.18 85 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.18 85 / 0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Nano-tech badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 mb-8 fade-in-delay-1">
              <Droplets
                className="w-3.5 h-3.5 text-brand-yellow"
                fill="currentColor"
              />
              <span className="text-brand-yellow text-xs font-poppins font-semibold tracking-widest uppercase">
                Premium Nano Technology
              </span>
            </div>

            {/* Company name — large, italic serif, solid white */}
            <h1
              className="hero-brand-name fade-in-delay-2"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                lineHeight: 1.05,
                marginBottom: "0.5rem",
              }}
            >
              Pearl Shine
            </h1>

            {/* Decorative separator under company name */}
            <div
              className="hero-separator fade-in-delay-2"
              style={{ maxWidth: "380px", marginBottom: "1.25rem" }}
            >
              <div className="hero-separator-dot" />
              <div className="hero-separator-dot" />
              <div className="hero-separator-dot" />
            </div>

            {/* Tagline — each word individually styled */}
            <p
              className="hero-tagline fade-in-delay-3"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                marginBottom: "2rem",
              }}
            >
              <span className="hero-tagline-word">Cleans</span>
              <span className="hero-tagline-dash">—</span>
              <span className="hero-tagline-word">Shines</span>
              <span className="hero-tagline-dash">—</span>
              <span className="hero-tagline-word">Protects</span>
            </p>

            <p className="text-white/60 text-base font-inter leading-relaxed mb-10 max-w-lg fade-in-delay-4">
              Experience the future of car detailing with our scientifically
              formulated nano-technology products. Protect, shine, and restore
              your vehicle to showroom perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-4">
              <Link
                to="/products"
                data-ocid="hero.primary_button"
                className="yellow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-bold shadow-yellow"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand-black" />
                <span className="font-poppins font-bold text-brand-black text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Introduction */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-yellow font-poppins font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </span>
            <h2 className="font-poppins font-extrabold text-brand-blue text-3xl sm:text-4xl mb-5">
              Redefining Car Care with{" "}
              <span className="yellow-accent-line">Nano Science</span>
            </h2>
            <p className="text-brand-gray-text font-inter text-base leading-relaxed">
              Pearl Shine is India's premier nano-technology car care brand. We
              combine cutting-edge nano-particle science with professional-grade
              formulations to deliver products that protect, restore, and
              enhance your vehicle's appearance like never before. Our
              commitment to innovation and quality has made us the trusted
              choice for car enthusiasts and detailing professionals nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-brand-gray hover:bg-brand-blue transition-all duration-300 border border-brand-gray-mid hover:border-brand-blue hover:shadow-blue"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue group-hover:bg-brand-yellow flex items-center justify-center mb-4 transition-colors duration-300 shadow-blue group-hover:shadow-yellow">
                  <Icon className="w-6 h-6 text-white group-hover:text-brand-blue transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-bold text-brand-black group-hover:text-white text-base mb-2 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-brand-gray-text group-hover:text-white/70 text-sm font-inter leading-relaxed transition-colors duration-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* Featured Products */}
      <FadeSection className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-brand-yellow font-poppins font-semibold text-sm uppercase tracking-widest mb-3">
                Our Products
              </span>
              <h2 className="font-poppins font-extrabold text-brand-blue text-3xl sm:text-4xl">
                Featured Products
              </h2>
            </div>
            <Link
              to="/products"
              data-ocid="products.link"
              className="inline-flex items-center gap-2 text-brand-blue font-poppins font-semibold text-sm hover:text-brand-yellow transition-colors group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyNow={() => setCartOpen(true)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              data-ocid="products.primary_button"
              className="yellow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-bold shadow-yellow"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </FadeSection>

      {/* Testimonials */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-yellow font-poppins font-semibold text-sm uppercase tracking-widest mb-3">
              Customer Reviews
            </span>
            <h2 className="font-poppins font-extrabold text-brand-blue text-3xl sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-brand-gray rounded-2xl p-6 border border-brand-gray-mid hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      className="w-4 h-4 text-brand-yellow fill-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-brand-gray-text font-inter text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                    <span className="font-poppins font-bold text-white text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-brand-black text-sm">
                      {t.name}
                    </p>
                    <p className="text-brand-gray-text font-inter text-xs">
                      {t.location}
                    </p>
                  </div>
                  {i === 0 && (
                    <span className="ml-auto text-xs font-poppins font-bold bg-brand-yellow/20 text-brand-blue px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* CTA Banner */}
      <FadeSection>
        <div
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.14 250) 0%, oklch(0.38 0.15 250) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-extrabold text-white text-3xl sm:text-4xl mb-4">
              Ready to Transform Your Car?
            </h2>
            <p className="text-white/70 font-inter text-base mb-8 max-w-xl mx-auto">
              Explore our full range of nano-technology car care products and
              give your vehicle the treatment it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                data-ocid="cta.primary_button"
                className="yellow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-bold shadow-yellow"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                data-ocid="cta.secondary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Cart Drawer (for Buy Now from home page) */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
