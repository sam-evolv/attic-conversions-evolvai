import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/siteContent"
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
          isScrolled || isOpen ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0 focus-ring rounded logo-hover" data-testid="logo">
              <img 
                src="/attached_assets/ChatGPT_Image_Jan_10,_2026,_04_55_11_PM_1768064127781.png" 
                alt="Attic Conversions" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-8" role="navigation">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${location === item.href ? "active" : ""} ${!isScrolled && !isOpen ? "nav-link-light" : ""}`}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href={navigation.cta.href}>
                <Button className="hidden sm:flex btn-primary h-11 px-6 text-sm" data-testid="header-cta">
                  {navigation.cta.label}
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground focus-ring rounded"
                data-testid="mobile-menu-toggle"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden pb-6 animate-fade-in bg-white" role="navigation">
              <nav className="flex flex-col gap-1">
                {navigation.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3.5 text-base font-medium rounded-lg transition-colors focus-ring ${
                      location === item.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href={navigation.cta.href} onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 btn-primary h-14 text-base" data-testid="mobile-cta">
                    {navigation.cta.label}
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="mobile-sticky-cta">
        <Link href="/contact" className="block">
          <Button className="w-full btn-primary h-14 text-base" size="lg" data-testid="mobile-sticky-cta">
            Get a Quote
          </Button>
        </Link>
      </div>
    </>
  );
}
