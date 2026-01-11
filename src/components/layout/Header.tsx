import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#contact", label: "Contact" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll only - simplified
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/#hero" className="flex items-center gap-3 group z-[110]">
            <div className="w-8 h-8">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-serif tracking-tight text-foreground">
              <span className="text-gradient-navy">Zerion</span> Atelier
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="w-[1px] h-4 bg-border" />
            <a href="https://wa.me/+919746004720" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden z-[110]">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground p-2">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* FIXED MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-background z-[105] md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto visible" 
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center w-full h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="text-2xl font-serif tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-8 border-t border-border w-32 flex justify-center">
            <SocialLinks className="gap-8" iconSize={24} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;