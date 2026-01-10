import { Link } from "wouter";
import { footer, companyInfo } from "@/content/siteContent";
import { Phone, Mail, MapPin, Facebook, Linkedin, ExternalLink } from "lucide-react";

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-label="Attic Conversions">
      <g fill="none">
        <path d="M4 36 L20 8 L36 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 28 L20 12 L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="12" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5"/>
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16" role="contentinfo">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="w-9 h-9 text-white/70" />
              <span className="text-xl font-serif font-semibold">
                Attic Conversions
              </span>
            </div>
            <p className="text-secondary-foreground/60 mb-2 max-w-sm text-sm leading-relaxed">
              {footer.tagline}
            </p>
            <p className="text-secondary-foreground/50 text-sm mb-6">
              Family-run since 1995
            </p>
            
            <address className="not-italic space-y-3 text-sm">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors focus-ring rounded"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors focus-ring rounded"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </a>
              <span className="flex items-center gap-3 text-secondary-foreground/60">
                <MapPin className="w-4 h-4" />
                <span>{companyInfo.address}</span>
              </span>
            </address>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-ring"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-ring"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.trustedPeople}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-secondary-foreground/60 hover:text-secondary-foreground transition-colors focus-ring rounded ml-2"
                data-testid="footer-trusted"
              >
                <span>TrustedPeople</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-semibold mb-4 text-sm text-secondary-foreground/80">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors focus-ring rounded"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-secondary-foreground/80">Hours</h3>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed mb-3">
              {companyInfo.hours}
            </p>
            <p className="text-secondary-foreground/70 text-sm font-medium">
              {companyInfo.availability}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-secondary-foreground/40 text-xs text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
