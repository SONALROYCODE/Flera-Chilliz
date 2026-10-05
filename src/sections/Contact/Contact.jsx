import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    service_type: "Web Development",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id_here";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id_here";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here";

    // Check if user has provided real credentials or placeholders
    const isConfigured =
      serviceId &&
      serviceId !== "your_service_id_here" &&
      templateId &&
      templateId !== "your_template_id_here" &&
      publicKey &&
      publicKey !== "your_public_key_here";

    if (!isConfigured) {
      // Graceful fallback for demonstration when EmailJS keys aren't set yet
      setTimeout(() => {
        setStatus("success");
        setStatusMessage(
          "Form submission simulated! To send real emails, add your EmailJS credentials (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) in a .env file."
        );
        setFormData({
          user_name: "",
          user_email: "",
          service_type: "Web Development",
          message: "",
        });
      }, 1000);
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      });

      if (result.status === 200 || result.text === "OK") {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. We will get back to you shortly.");
        setFormData({
          user_name: "",
          user_email: "",
          service_type: "Web Development",
          message: "",
        });
      } else {
        throw new Error(result.text || "Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setStatusMessage(
        error?.text || error?.message || "Something went wrong while sending your message. Please try again later."
      );
    }
  };

  return (
    <section id="contact" className="w-full bg-[#FAFAFA] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#F3ECFF] text-[#7234F8] text-xs font-bold tracking-wide border border-[#EDE6FF]">
            <Sparkles className="w-3.5 h-3.5" />
            Contact Us
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#09090B] leading-tight mb-4">
            Please Contact Us for Any Types of Services
          </h2>
          <p className="text-[#555555] text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Have a project in mind, need custom development, or want to consult with our expert team? Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <h3 className="text-xl font-bold text-[#09090B] mb-2">Let's Build Together</h3>
              <p className="text-[#52525B] text-xs sm:text-sm leading-relaxed mb-6">
                We support businesses with specialized technology solutions tailored to unique demands.
              </p>

              {/* Contact Info List */}
              <div className="space-y-4 pt-2 border-t border-[#F4F4F5]">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F3ECFF] text-[#7234F8] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider">Email Us</p>
                    <a href="mailto:info@flerachilliz.com" className="text-sm font-semibold text-[#09090B] hover:text-[#7234F8] transition-colors">
                      info@flerachilliz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F3ECFF] text-[#7234F8] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider">Call Us</p>
                    <p className="text-sm font-semibold text-[#09090B]">+971 (0)4 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F3ECFF] text-[#7234F8] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-[#09090B]">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Service Badges */}
              <div className="mt-6 pt-5 border-t border-[#F4F4F5]">
                <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-3">
                  Services We Offer
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Web App Dev", "UI/UX Design", "AI Integration", "Cloud & DevOps", "Custom Software", "IT Consulting"].map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-lg bg-[#ECEEF2] text-[#3F3F46] text-[11px] font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Guarantee Box */}
            <div className="bg-[#F3ECFF]/60 border border-[#EDE6FF] rounded-2xl p-5 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#7234F8] shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#09090B]">Rapid Response Commitment</p>
                <p className="text-[11px] text-[#52525B]">Direct access to senior engineering leads on every inquiry.</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#09090B] mb-1">Send Us a Message</h3>
              <p className="text-[#52525B] text-xs sm:text-sm leading-relaxed mb-6">
                Fill out the form below and let us know how we can assist you.
              </p>

              {/* Status Banner */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-950 mb-0.5">Message Submitted!</p>
                      <p className="leading-relaxed text-emerald-800">{statusMessage}</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-rose-950 mb-0.5">Submission Error</p>
                      <p className="leading-relaxed text-rose-800">{statusMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="user_name" className="block text-xs font-semibold text-[#09090B] mb-1.5">
                      Your Name <span className="text-[#7234F8]">*</span>
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7234F8] focus:ring-2 focus:ring-[#7234F8]/15 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="user_email" className="block text-xs font-semibold text-[#09090B] mb-1.5">
                      Your Email <span className="text-[#7234F8]">*</span>
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7234F8] focus:ring-2 focus:ring-[#7234F8]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service_type" className="block text-xs font-semibold text-[#09090B] mb-1.5">
                    Service Required <span className="text-[#7234F8]">*</span>
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] text-sm text-[#09090B] focus:outline-none focus:border-[#7234F8] focus:ring-2 focus:ring-[#7234F8]/15 transition-all cursor-pointer"
                  >
                    <option value="Web Development">Web App & Frontend Development</option>
                    <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                    <option value="AI Solutions">AI Chatbots & Integration</option>
                    <option value="Cloud Infrastructure">Cloud & API Services</option>
                    <option value="Custom Software">Custom Enterprise Software</option>
                    <option value="Other Services">Other Services / General Inquiry</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#09090B] mb-1.5">
                    Message / Project Details <span className="text-[#7234F8]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements or what type of service you need..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7234F8] focus:ring-2 focus:ring-[#7234F8]/15 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#7234F8] hover:bg-black text-white py-3 px-6 rounded-full text-sm font-semibold tracking-tight shadow-[0_4px_16px_rgba(114,52,248,0.35)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#A1A1AA] pt-1">
                  We respect your privacy. No spam guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
