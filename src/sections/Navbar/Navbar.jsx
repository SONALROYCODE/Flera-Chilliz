import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ onOpenPricing }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(() =>
    location.pathname === "/about" ? "about" : "hero"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname === "/about") {
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "process",
        "services",
        "toolkit",
        "about",
        "contact",
        "faq",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const currentActiveSection =
    location.pathname === "/about" ? "about" : activeSection;

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);

    if (id === "about" && location.pathname !== "/about") {
      // Navigate to /about page if clicking about
      navigate("/about");
      return;
    }

    if (location.pathname !== "/") {
      // If on another route, navigate home first then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 88;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 88;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setActiveSection(id);
      }
    }
  };

  const navItems = [
    { id: "process", label: "Approach" },
    { id: "services", label: "Services" },
    { id: "toolkit", label: "Why Us" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact Us" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Main Navbar Pill Card */}
        <div
          className={`w-full bg-white/95 backdrop-blur-md border border-[#E4E4E7] rounded-full px-5 sm:px-7 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              : "shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Brand Logo (Left) */}
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              } else {
                scrollToSection("hero");
              }
            }}
            className="flex items-center group cursor-pointer border-none bg-transparent"
          >
            <img
              src="/logo.svg"
              alt="FLERA CHILLIZ FZ - LLC"
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </button>

          {/* Navigation Links (Center Individual Pills) - Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = currentActiveSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#EDE6FF] text-[#7234F8] hover:text-blue-600 shadow-xs"
                      : "bg-[#ECEEF2] hover:bg-[#E2E4E9] text-[#09090B] hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Talk to an expert CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPricing}
              className="bg-[#7234F8] hover:bg-black text-white hover:text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight shadow-[0_4px_14px_rgba(114,52,248,0.35)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Talk to an expert
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-[#ECEEF2] text-[#09090B] hover:bg-black hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-[1280px] mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-[#E4E4E7] rounded-3xl p-5 shadow-[0_12px_36px_rgba(0,0,0,0.12)] pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#09090B] hover:bg-[#ECEEF2] hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[#E4E4E7] mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPricing();
                  }}
                  className="w-full bg-[#7234F8] hover:bg-black text-white hover:text-white py-3 rounded-full text-sm font-semibold tracking-tight shadow-md flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <span>Talk to an expert</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
