import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { navigation } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground" data-testid="logo">
              {navigation.logo}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              {navigation.tagline}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:01XXXXXXX"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="header-phone"
            >
              <Phone className="w-4 h-4" />
              <span>01 XXX XXXX</span>
            </a>
            <Link href={navigation.cta.href}>
              <Button className="hidden sm:flex" data-testid="header-cta">
                {navigation.cta.label}
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
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
                <Button className="w-full mt-2" data-testid="mobile-cta">
                  {navigation.cta.label}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
