import { JSX } from "preact";
import NavbarScript from "./NavbarScript.tsx";

export interface NavbarProps {
  logo?: {
    type: "text" | "image";
    content: string;
    alt?: string;
    href?: string;
  };
  links?: Array<{
    text: string;
    href: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  logo = {
    type: "text",
    content: "AICADEMY",
    href: "/",
  },
  links = [
    { text: "Home", href: "#" },
    { text: "Classes", href: "#" },
    { text: "Experts", href: "#" },
    { text: "About", href: "#" },
  ],
  ctaText = "Join Free",
  ctaHref = "#",
}: NavbarProps): JSX.Element {
  return (
    <header id="navbar" className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-6">
      <NavbarScript />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Retângulo flutuante com blur */}
        <div className="absolute inset-0 bg-[#121212]/40 backdrop-blur-[12px] rounded-2xl border border-[#1F2937]/20 shadow-lg shadow-black/5"></div>
        
        <div className="relative z-10 px-6 py-4 flex justify-between items-center">
          {/* Logo - Sempre direciona para página principal */}
          <a href="/" className="flex items-center">
            {logo.type === "text" ? (
              <span className="text-[#D0EC1A] font-montserrat font-bold text-2xl">{logo.content}</span>
            ) : (
              <img src={logo.content} alt={logo.alt || "Logo"} className="h-10" />
            )}
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-white hover:text-[#D0EC1A] transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D0EC1A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <a 
            href={ctaHref} 
            className="hidden md:flex items-center gap-2 bg-[#D0EC1A] text-[#121212] px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#D0EC1A]/20 hover:translate-y-[-2px]"
          >
            {ctaText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-[#D0EC1A] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        #navbar {
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .navbar-hidden {
          transform: translateY(-100%);
          opacity: 0;
        }
      `}</style>
    </header>
  );
} 