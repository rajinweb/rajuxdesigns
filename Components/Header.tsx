'use client';
import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

const navigationItems = [
  { title: "Home", href: "#hero" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .parallax-slow {
          transform: translateY(${scrollY * 0.1}px);
        }
        
        .parallax-fast {
          transform: translateY(${scrollY * 0.3}px);
        }
      `}</style>

      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? '' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center  m-auto border border-purple-100 p-4 glass-morphism rounded-full lg:text-sm text-xs">
              <div className="text-xl font-bold text-gradient cursor-pointer">
               Raj<span className="rounded-full inline-flex justify-center items-center">UX</span>Designs
              </div>
              <div className="font-medium mx-4">
              {navigationItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2  transition-colors "
                >
                  {item.title}
                </button>
              ))}
              </div>
                <a href="/RC_ux_ui.pdf"          
                    className="px-4 py-2 text-white bg-linear-to-t from-purple-600 to-blue-600 hover:to-purple-700 transition-colors font-medium rounded-4xl"
                  >
                    Download CV
                  </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
         

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 glass-morphism border-t border-blue-800">
              <div className="container mx-auto px-6 py-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item.title}
                  </button>
                ))}
                  <button            
                    className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Download CV
                  </button>
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 glow-effect transition-all duration-300 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5 text-white"/>
        </button>
      )}

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-slow absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
        <div className="parallax-fast absolute top-1/3 right-20 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
        <div className="parallax-slow absolute bottom-1/4 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
      </div>
    </>
  );
}