import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { navigation, companyInfo } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 40" className={className} aria-label="Attic Conversions">
      <g fill="none">
        <path d="M4 36 L20 8 L36 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
        <path d="M10 28 L20 12 L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
        <line x1="20" y1="12" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
      </g>
      <text x="44" y="28" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fill="currentColor" className="text-foreground">Attic Conversions</text>
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled ? "header-shadow" : ""
        }`}
      >
        <div className="bg-secondary text-secondary-foreground">
          <div className="container-wide">
            <div className="flex items-center justify-between h-9 text-xs">
              <div className="flex items-center gap-4 sm:gap-6">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-white/80 transition-colors focus-ring rounded"
                  data-testid="utility-phone"
                >
                  <Phone className="w-3 h-3" />
                  <span className="hidden sm:inline">{companyInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors focus-ring rounded"
                  data-testid="utility-email"
                >
                  <Mail className="w-3 h-3" />
                  <span>{companyInfo.email}</span>
                </a>
                <span className="hidden md:flex items-center gap-1.5 text-white/70">
                  <Clock className="w-3 h-3" />
                  <span>{companyInfo.availability}</span>
                </span>
              </div>
              <a
                href={companyInfo.trustedPeople}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors focus-ring rounded"
                data-testid="trusted-link"
              >
                <span>TrustedPeople</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link href="/" className="flex-shrink-0 focus-ring rounded" data-testid="logo">
              <Logo className="h-8 w-auto" />
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
                className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-2 py-1"
                data-testid="header-phone"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{companyInfo.phone}</span>
              </a>
              <Link href={navigation.cta.href}>
                <Button className="hidden sm:flex btn-primary h-10 px-5 text-sm" data-testid="header-cta">
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
            <div className="lg:hidden pb-4 animate-fade-in" role="navigation">
              <nav className="flex flex-col gap-1">
                {navigation.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors focus-ring ${
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
                  <Button className="w-full mt-2 btn-primary" data-testid="mobile-cta">
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
          <Button className="w-full btn-primary h-12" size="lg" data-testid="mobile-sticky-cta">
            Get a Quote
          </Button>
        </Link>
      </div>
    </>
  );
}
