import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { useFadeIn } from "../hooks/useFadeIn";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "regisnanochemicals2020@gmail.com",
      href: "mailto:regisnanochemicals2020@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 7483540921",
      href: "tel:+917483540921",
    },
    { icon: MapPin, label: "Location", value: "India", href: "#" },
  ];

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
            Get in Touch
          </span>
          <h1 className="font-poppins font-900 text-white text-4xl sm:text-5xl lg:text-6xl fade-in-delay-2">
            Contact <span className="text-brand-yellow">Us</span>
          </h1>
          <p className="text-white/70 font-inter text-base mt-4 max-w-xl mx-auto fade-in-delay-3">
            Have questions about our products? Reach out via the form, WhatsApp,
            or email.
          </p>
        </div>
      </div>

      {/* Quick Contact Buttons */}
      <div className="bg-white border-b border-brand-gray-mid py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/917483540921?text=Hello%20Pearl%20Shine%2C%20I%20have%20a%20query."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.primary_button"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-poppins font-600 text-sm transition-colors"
          >
            <SiWhatsapp className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/regis_nano_chemicals"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.secondary_button"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-poppins font-600 text-sm transition-all"
          >
            <SiInstagram className="w-4 h-4" />
            @regis_nano_chemicals
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <FadeSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-card border border-brand-gray-mid p-8 lg:p-10">
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                    </div>
                    <h3 className="font-poppins font-800 text-brand-blue text-2xl mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-brand-gray-text font-inter text-base max-w-sm">
                      Thank you, <strong>{formData.name}</strong>! We'll get
                      back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          message: "",
                        });
                      }}
                      className="mt-8 yellow-btn px-6 py-3 rounded-xl text-sm font-poppins font-600 shadow-yellow"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-blue">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="font-poppins font-800 text-brand-blue text-xl">
                          Send Us a Message
                        </h2>
                        <p className="text-brand-gray-text font-inter text-sm">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="name"
                            className="font-poppins font-600 text-brand-black text-sm"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            data-ocid="contact.input"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={`rounded-xl border-brand-gray-mid focus:border-brand-blue focus:ring-brand-blue/20 font-inter ${
                              errors.name ? "border-red-400" : ""
                            }`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs font-inter">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="email"
                            className="font-poppins font-600 text-brand-black text-sm"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            data-ocid="contact.input"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={`rounded-xl border-brand-gray-mid focus:border-brand-blue focus:ring-brand-blue/20 font-inter ${
                              errors.email ? "border-red-400" : ""
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs font-inter">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="font-poppins font-600 text-brand-black text-sm"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          data-ocid="contact.input"
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={`rounded-xl border-brand-gray-mid focus:border-brand-blue focus:ring-brand-blue/20 font-inter ${
                            errors.phone ? "border-red-400" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs font-inter">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="message"
                          className="font-poppins font-600 text-brand-black text-sm"
                        >
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          data-ocid="contact.textarea"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help..."
                          rows={5}
                          className={`rounded-xl border-brand-gray-mid focus:border-brand-blue focus:ring-brand-blue/20 font-inter resize-none ${
                            errors.message ? "border-red-400" : ""
                          }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs font-inter">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <button
                        data-ocid="contact.submit_button"
                        type="submit"
                        disabled={loading}
                        className="yellow-btn w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-poppins font-700 shadow-yellow disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-poppins font-800 text-brand-blue text-2xl mb-2">
                  Pearl Shine
                </h2>
                <div className="w-12 h-1 bg-brand-yellow rounded-full mb-6" />
              </div>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-5 bg-brand-gray rounded-2xl border border-brand-gray-mid hover:border-brand-blue hover:shadow-card transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue group-hover:bg-brand-yellow flex items-center justify-center flex-shrink-0 shadow-blue group-hover:shadow-yellow transition-all duration-200">
                    <Icon className="w-5 h-5 text-white group-hover:text-brand-blue-dark transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="font-poppins font-600 text-brand-gray-text text-xs uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="font-inter font-500 text-brand-black text-sm">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
              {/* Instagram */}
              <a
                href="https://www.instagram.com/regis_nano_chemicals"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-pink-200 hover:border-pink-400 hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <SiInstagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-poppins font-600 text-brand-gray-text text-xs uppercase tracking-wider mb-1">
                    Instagram
                  </p>
                  <p className="font-inter font-500 text-brand-black text-sm">
                    @regis_nano_chemicals
                  </p>
                </div>
              </a>
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-brand-gray-mid shadow-card">
                <div
                  className="h-48 flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.96 0 0) 0%, oklch(0.92 0.02 250) 100%)",
                  }}
                >
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-brand-blue mx-auto mb-2" />
                    <p className="font-poppins font-600 text-brand-blue text-sm">
                      India
                    </p>
                    <p className="text-brand-gray-text font-inter text-xs mt-1">
                      Serving customers nationwide
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.38 0.15 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.38 0.15 250) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-brand-gray-text font-inter text-xs text-center">
                    📍 Pearl Shine — India
                  </p>
                </div>
              </div>
              {/* Business Hours */}
              <div className="p-5 bg-brand-blue rounded-2xl shadow-blue">
                <h3 className="font-poppins font-700 text-white text-sm mb-3">
                  Business Hours
                </h3>
                <div className="space-y-1.5 text-sm font-inter">
                  <div className="flex justify-between text-white/80">
                    <span>Monday – Saturday</span>
                    <span className="text-brand-yellow font-500">
                      10:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Sunday</span>
                    <span className="text-white/50">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
