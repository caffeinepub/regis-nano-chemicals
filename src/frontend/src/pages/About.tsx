import { Atom, CheckCircle2, Eye, Star, Target } from "lucide-react";
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

const values = [
  { icon: CheckCircle2, text: "ISO-compliant manufacturing processes" },
  { icon: CheckCircle2, text: "Rigorously tested on all paint types" },
  { icon: CheckCircle2, text: "Eco-friendly, biodegradable formulas" },
  { icon: CheckCircle2, text: "No harmful solvents or abrasives" },
  { icon: CheckCircle2, text: "Trusted by 10,000+ customers across India" },
  { icon: CheckCircle2, text: "Professional detailer approved" },
];

export default function About() {
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
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1600x700.png')",
            backgroundSize: "cover",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-4 fade-in-delay-1">
              Our Story
            </span>
            <h1 className="font-poppins font-900 text-white text-4xl sm:text-5xl lg:text-6xl fade-in-delay-2">
              About <span className="text-brand-yellow">Pearl Shine</span>
            </h1>
            <p className="text-white/70 font-inter text-base mt-4 max-w-xl mx-auto fade-in-delay-3">
              Cleans – Shines – Protects
            </p>
          </div>
        </div>
      </div>

      {/* Brand Story */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl mb-6">
                Born from a Passion for{" "}
                <span className="yellow-accent-line">Perfection</span>
              </h2>
              <div className="space-y-4 text-brand-gray-text font-inter text-base leading-relaxed">
                <p>
                  Pearl Shine was founded with a singular vision: to bring
                  professional-grade, nano-technology car care products to every
                  car owner in India. What began as a small research initiative
                  by a team of automotive chemists and detailing enthusiasts has
                  grown into one of India's most trusted car care brands.
                </p>
                <p>
                  Our founders recognized a gap in the market — car owners
                  deserved access to the same advanced formulations used by
                  professional detailers, at accessible prices. By harnessing
                  the power of nano-particle science, we developed a product
                  line that delivers results previously only achievable in
                  high-end detailing studios.
                </p>
                <p>
                  Today, Pearl Shine serves thousands of satisfied customers
                  across India, from everyday car owners to professional
                  detailing shops, all united by their pursuit of automotive
                  excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/hero-banner.dim_1600x700.png"
                  alt="Pearl Shine - Car Care Excellence"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-hover p-5 border border-brand-gray-mid">
                <p className="font-poppins font-800 text-brand-blue text-3xl">
                  10K+
                </p>
                <p className="text-brand-gray-text text-sm font-inter">
                  Happy Customers
                </p>
              </div>
              <div className="absolute -top-6 -right-6 bg-brand-yellow rounded-2xl shadow-yellow p-5">
                <p className="font-poppins font-800 text-brand-black text-3xl">
                  4+
                </p>
                <p className="text-brand-black/70 text-sm font-inter">
                  Years of Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Mission & Vision */}
      <FadeSection className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-3">
              Our Purpose
            </span>
            <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-brand-gray-mid hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center mb-6 shadow-blue">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div className="w-12 h-1 bg-brand-yellow rounded-full mb-4" />
              <h3 className="font-poppins font-700 text-brand-blue text-2xl mb-4">
                Our Mission
              </h3>
              <p className="text-brand-gray-text font-inter text-base leading-relaxed">
                To democratize professional car care by making advanced
                nano-technology formulations accessible to every car owner in
                India. We are committed to delivering products that combine
                scientific innovation with ease of use, empowering individuals
                to achieve professional detailing results at home.
              </p>
            </div>
            <div className="bg-brand-blue rounded-2xl p-8 shadow-blue hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center mb-6 shadow-yellow">
                <Eye className="w-7 h-7 text-brand-blue-dark" />
              </div>
              <div className="w-12 h-1 bg-brand-yellow rounded-full mb-4" />
              <h3 className="font-poppins font-700 text-white text-2xl mb-4">
                Our Vision
              </h3>
              <p className="text-white/80 font-inter text-base leading-relaxed">
                To become India's most innovative and trusted car care brand,
                recognized globally for our pioneering use of nano-technology.
                We envision a future where every vehicle on Indian roads
                benefits from our advanced protection solutions, setting new
                standards for automotive care excellence.
              </p>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Nano Technology */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Nano Particle Size",
                    value: "< 100nm",
                    sub: "Ultra-fine protection",
                  },
                  {
                    label: "Bond Strength",
                    value: "9H",
                    sub: "Hardness rating",
                  },
                  { label: "UV Protection", value: "99%", sub: "Rays blocked" },
                  {
                    label: "Durability",
                    value: "12mo",
                    sub: "Long-lasting shine",
                  },
                ].map(({ label, value, sub }) => (
                  <div
                    key={label}
                    className="bg-brand-gray rounded-2xl p-6 border border-brand-gray-mid hover:border-brand-blue transition-colors"
                  >
                    <p className="font-poppins font-800 text-brand-blue text-3xl mb-1">
                      {value}
                    </p>
                    <p className="font-poppins font-600 text-brand-black text-sm">
                      {label}
                    </p>
                    <p className="text-brand-gray-text text-xs font-inter mt-1">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-3">
                The Science
              </span>
              <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl mb-6">
                Nano-Technology{" "}
                <span className="yellow-accent-line">Innovation</span>
              </h2>
              <div className="space-y-4 text-brand-gray-text font-inter text-base leading-relaxed">
                <p>
                  At the heart of every Pearl Shine product lies our proprietary
                  nano-particle technology. Unlike conventional car care
                  products that sit on the surface, our nano-formulas penetrate
                  at the molecular level, creating an invisible shield that
                  bonds directly with your vehicle's paint, glass, and interior
                  surfaces.
                </p>
                <p>
                  Our nano-particles, measuring less than 100 nanometers, fill
                  microscopic imperfections in paint surfaces, creating a
                  perfectly smooth, hydrophobic layer that repels water, dirt,
                  UV rays, and environmental contaminants with unprecedented
                  effectiveness.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/20">
                <Atom className="w-8 h-8 text-brand-blue flex-shrink-0" />
                <p className="text-brand-blue font-inter text-sm font-500">
                  Our formulas are developed in state-of-the-art laboratories
                  and tested to meet international automotive care standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Quality Commitment */}
      <FadeSection className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-yellow font-poppins font-600 text-sm uppercase tracking-widest mb-3">
              Our Standards
            </span>
            <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl mb-4">
              Commitment to Quality
            </h2>
            <p className="text-brand-gray-text font-inter text-base max-w-2xl mx-auto">
              Every product that leaves our facility undergoes rigorous quality
              testing to ensure it meets our exacting standards for performance,
              safety, and environmental responsibility.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {values.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-card border border-brand-gray-mid"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-brand-blue" />
                </div>
                <p className="text-brand-black font-inter text-sm font-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-brand-blue rounded-2xl shadow-blue">
              <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
              <p className="text-white font-poppins font-600 text-base">
                Rated 4.9/5 by over 10,000 satisfied customers across India
              </p>
              <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
