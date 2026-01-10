import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { navigation, companyInfo } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

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
                  aria-label={`Call us at ${companyInfo.phone}`}
                >
                  <Phone className="w-3 h-3" aria-hidden="true" />
                  <span className="hidden sm:inline">{companyInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors focus-ring rounded"
                  data-testid="utility-email"
                  aria-label={`Email us at ${companyInfo.email}`}
                >
                  <Mail className="w-3 h-3" aria-hidden="true" />
                  <span>{companyInfo.email}</span>
                </a>
                <span className="hidden md:flex items-center gap-1.5 text-white/70">
                  <Clock className="w-3 h-3" aria-hidden="true" />
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
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link href="/" className="flex items-center gap-3 focus-ring rounded">
              <span className="text-xl md:text-2xl font-bold text-foreground" data-testid="logo">
                {navigation.logo}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-underline px-4 py-2 text-sm font-medium transition-colors focus-ring rounded ${
                    location === item.href
                      ? "text-primary active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  aria-current={location === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded p-1"
                data-testid="header-phone"
                aria-label={`Call ${companyInfo.phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{companyInfo.phone}</span>
              </a>
              <Link href={navigation.cta.href}>
                <Button className="hidden sm:flex btn-lift" data-testid="header-cta">
                  {navigation.cta.label}
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground focus-ring rounded"
                data-testid="mobile-menu-toggle"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden pb-4 animate-fade-in" role="navigation" aria-label="Mobile navigation">
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
                    aria-current={location === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href={navigation.cta.href} onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-2 btn-lift" data-testid="mobile-cta">
                    {navigation.cta.label}
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="mobile-sticky-cta" role="complementary" aria-label="Quick contact">
        <Link href="/contact" className="block">
          <Button className="w-full btn-lift" size="lg" data-testid="mobile-sticky-cta">
            Get a Quote
          </Button>
        </Link>
      </div>
    </>
  );
}
