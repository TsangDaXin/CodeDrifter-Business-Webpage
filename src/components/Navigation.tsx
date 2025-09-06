import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ChevronDown, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Video Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  const useCasesItems = [
    { label: "Notebook", href: "/use-cases/notebook" },
    { label: "Chat", href: "/use-cases/chat" },
    { label: "Individual", href: "/use-cases/individual" },
    { label: "Team", href: "/use-cases/team" }
  ];

  return (
    <nav className={`sticky-nav ${isScrolled ? 'shadow-lg' : ''} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-2xl font-bold text-primary">CodeDrifer</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            
            {/* Security Button */}
            <button
              onClick={() => navigate('/security')}
              className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              <Shield className="w-4 h-4 mr-1" />
              Security
            </button>

            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsUseCasesOpen(true)}
              onMouseLeave={() => setIsUseCasesOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Use Cases
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isUseCasesOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-glow-lg z-[100] overflow-hidden"
                  onMouseEnter={() => setIsUseCasesOpen(true)}
                  onMouseLeave={() => setIsUseCasesOpen(false)}
                >
                  {useCasesItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.href);
                        setIsUseCasesOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" className="interactive-element">
              <Download className="w-4 h-4 mr-2" />
              Download Extension
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Security Link */}
              <button
                onClick={() => {
                  navigate('/security');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                <Shield className="w-4 h-4 mr-1" />
                Security
              </button>

              {/* Mobile Use Cases */}
              <div className="space-y-2">
                <div className="text-foreground font-medium">Use Cases:</div>
                {useCasesItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      navigate(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block ml-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <Button variant="hero" className="w-full mt-4">
                <Download className="w-4 h-4 mr-2" />
                Download Extension
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};