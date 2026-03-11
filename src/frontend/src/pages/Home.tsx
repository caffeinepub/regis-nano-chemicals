import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useRef } from "react";
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

const features = [
  {
    icon: Sparkles,
    title: "Pearl Shine Formula",
    desc: "Cutting-edge nano-particle formulas that bond at the molecular level for a mirror-like shine.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Lasting Protection",
    desc: "Months of protection against UV rays, water, and environmental damage.",
  },
  {
    icon: Award,
    title: "Professional Grade",
    desc: "Trusted by detailing professionals and car enthusiasts across India.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick delivery across India with secure packaging to ensure product integrity.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

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
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/assets/generated/hero-banner.dim_1600x700.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-full h-0.5 bg-brand-yellow rotate-12 origin-right" />
          <div className="absolute top-1/2 right-0 w-3/4 h-0.5 bg-brand-yellow rotate-6 origin-right" />
          <div className="absolute top-3/4 right-0 w-1/2 h-0.5 bg-brand-yellow rotate-3 origin-right" />
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-brand-yellow/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 mb-6 fade-in-delay-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span className="text-brand-yellow text-xs font-poppins font-600 tracking-wider uppercase">
                Premium Car Care
              </span>
            </div>

            <h1 className="font-poppins font-900 text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2 fade-in-delay-2">
              Pearl Shine
            </h1>
            <p className="text-brand-yellow font-poppins font-600 text-lg sm:text-xl tracking-widest uppercase mb-6 fade-in-delay-2">
              Cleans · Shines · Protects
            </p>

            <p className="text-white/80 text-lg sm:text-xl font-inter font-400 leading-relaxed mb-8 fade-in-delay-3">
              Premium Nano Technology for Superior Car Care
            </p>

            <p className="text-white/60 text-base font-inter leading-relaxed mb-10 max-w-lg fade-in-delay-4">
              Experience the future of car detailing with our scientifically
              formulated products. Protect, shine, and restore your vehicle to
              showroom perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-4">
              <Link
                to="/products"
                className="yellow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-700 shadow-yellow"
                data-ocid="home.primary_button"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-600 text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
                data-ocid="home.secondary_button"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Introduction */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-3">
              Who We Are
            </span>
            <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl mb-5">
              Redefining Car Care with{" "}
              <span className="yellow-accent-line">Pearl Shine</span>
            </h2>
            <p className="text-brand-gray-text font-inter text-base leading-relaxed">
              Pearl Shine is India's premium car care brand. We combine
              cutting-edge nano-particle science with professional-grade
              formulations to deliver products that protect, restore, and
              enhance your vehicle's appearance. Our commitment to innovation
              has made us the trusted choice for car enthusiasts and detailing
              professionals nationwide.
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
                <h3 className="font-poppins font-700 text-brand-black group-hover:text-white text-base mb-2 transition-colors duration-300">
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
              <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-3">
                Our Products
              </span>
              <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl">
                Featured Products
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-blue font-poppins font-600 text-sm hover:text-brand-yellow transition-colors group"
            >
              View All Products{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="yellow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-700 shadow-yellow"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
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
            <h2 className="font-poppins font-800 text-white text-3xl sm:text-4xl mb-4">
              Ready to Transform Your Car?
            </h2>
            <p className="text-white/70 font-inter text-base mb-8 max-w-xl mx-auto">
              Explore our full range of Pearl Shine car care products and give
              your vehicle the treatment it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="yellow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-700 shadow-yellow"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-600 text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
