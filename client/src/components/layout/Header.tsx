import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navigation, companyInfo } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 44" className={className} aria-label="Attic Conversions">
      <g fill="none">
        <path d="M4 40 L22 8 L40 40" stroke="#990101" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 32 L22 14 L33 32" stroke="#990101" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="22" y1="14" x2="22" y2="40" stroke="#990101" strokeWidth="2"/>
      </g>
      <text x="50" y="30" fontFamily="Georgia, 'Playfair Display', serif" fontSize="20" fontWeight="600" fill="#1F1F1F">Attic Conversions</text>
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "header-solid" : ""
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0 focus-ring rounded" data-testid="logo">
              <Logo className="h-10 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-8" role="navigation">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${location === item.href ? "active" : ""}`}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 flex-shrink-0">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                data-testid="header-phone"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-2 py-1"
                data-testid="header-email"
              >
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </a>
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
            <div className="lg:hidden pb-6 animate-fade-in" role="navigation">
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
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 px-4 py-2 text-base font-medium text-foreground"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    {companyInfo.phone}
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 px-4 py-2 text-base text-muted-foreground"
                  >
                    <Mail className="w-5 h-5" />
                    {companyInfo.email}
                  </a>
                </div>
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
