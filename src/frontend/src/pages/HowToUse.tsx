import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  CheckCircle,
  Clock,
  Droplets,
  Move,
  Pipette,
  RotateCw,
  Search,
  Sparkles,
  SprayCan,
  Trash2,
  Wind,
} from "lucide-react";
import { instructions } from "../data/instructions";
import { useFadeIn } from "../hooks/useFadeIn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  wind: Wind,
  "spray-can": SprayCan,
  "rotate-cw": RotateCw,
  sparkles: Sparkles,
  search: Search,
  pipette: Pipette,
  move: Move,
  clock: Clock,
  car: Car,
  "trash-2": Trash2,
  "check-circle": CheckCircle,
};

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

export default function HowToUse() {
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
            Usage Guide
          </span>
          <h1 className="font-poppins font-900 text-white text-4xl sm:text-5xl lg:text-6xl fade-in-delay-2">
            How to Use Our <span className="text-brand-yellow">Products</span>
          </h1>
          <p className="text-white/70 font-inter text-base mt-4 max-w-xl mx-auto fade-in-delay-3">
            Follow these simple step-by-step instructions to get the best
            results from every REGIS NANO product.
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {instructions.map((product, productIndex) => (
              <FadeSection key={product.id}>
                <div
                  className={`rounded-3xl overflow-hidden shadow-card border border-brand-gray-mid ${
                    productIndex % 2 === 0 ? "bg-white" : "bg-brand-gray"
                  }`}
                >
                  {/* Product Header */}
                  <div
                    className="px-8 py-6 flex items-center gap-4"
                    style={{
                      background:
                        product.color === "blue"
                          ? "linear-gradient(135deg, oklch(0.28 0.14 250) 0%, oklch(0.38 0.15 250) 100%)"
                          : "linear-gradient(135deg, oklch(0.72 0.18 85) 0%, oklch(0.82 0.18 85) 100%)",
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-poppins font-800 text-lg ${
                        product.color === "blue"
                          ? "bg-brand-yellow text-brand-blue-dark"
                          : "bg-brand-blue text-white"
                      }`}
                    >
                      {productIndex + 1}
                    </div>
                    <h2
                      className={`font-poppins font-800 text-2xl sm:text-3xl ${
                        product.color === "blue"
                          ? "text-white"
                          : "text-brand-blue-dark"
                      }`}
                    >
                      {product.name}
                    </h2>
                  </div>

                  {/* Steps */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      {product.steps.map((step, stepIndex) => {
                        const IconComponent = iconMap[step.icon] || Sparkles;
                        return (
                          <div
                            key={`step-${step.icon}-${stepIndex}`}
                            className="relative flex flex-col items-center text-center group"
                          >
                            {/* Connector line */}
                            {stepIndex < product.steps.length - 1 && (
                              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-gray-mid z-0" />
                            )}
                            {/* Step circle */}
                            <div
                              className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-card group-hover:scale-110 transition-transform duration-200 ${
                                product.color === "blue"
                                  ? "bg-brand-blue text-white group-hover:bg-brand-yellow group-hover:text-brand-blue-dark"
                                  : "bg-brand-yellow text-brand-blue-dark group-hover:bg-brand-blue group-hover:text-white"
                              }`}
                            >
                              <IconComponent className="w-7 h-7" />
                            </div>
                            {/* Step number badge */}
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-poppins font-700 mb-3 ${
                                product.color === "blue"
                                  ? "bg-brand-yellow text-brand-blue-dark"
                                  : "bg-brand-blue text-white"
                              }`}
                            >
                              {stepIndex + 1}
                            </div>
                            <p className="text-brand-black font-inter text-sm leading-relaxed">
                              {step.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <FadeSection className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-800 text-brand-blue text-3xl sm:text-4xl mb-4">
              Pro Tips for Best Results
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tip: "Always work in shade",
                desc: "Avoid applying products in direct sunlight or on hot surfaces to prevent streaking.",
              },
              {
                tip: "Use quality microfiber",
                desc: "Premium microfiber cloths ensure even application and prevent scratching.",
              },
              {
                tip: "Less is more",
                desc: "A small amount of product goes a long way. Over-application can cause residue buildup.",
              },
              {
                tip: "Clean surface first",
                desc: "Always start with a clean, dry surface for maximum product adhesion and performance.",
              },
              {
                tip: "Work in sections",
                desc: "Apply products in small sections for better control and more even coverage.",
              },
              {
                tip: "Allow proper cure time",
                desc: "Give products adequate time to bond before exposing to water or harsh conditions.",
              },
            ].map(({ tip, desc }) => (
              <div
                key={tip}
                className="bg-white rounded-2xl p-6 shadow-card border border-brand-gray-mid hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-brand-blue-dark" />
                  </div>
                  <h3 className="font-poppins font-700 text-brand-blue text-base">
                    {tip}
                  </h3>
                </div>
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
            <h2 className="font-poppins font-800 text-white text-2xl sm:text-3xl mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 font-inter text-base mb-6 max-w-md mx-auto">
              Shop our full range of nano-technology car care products today.
            </p>
            <Link
              to="/products"
              className="yellow-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-poppins font-700 shadow-yellow"
            >
              Shop Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
