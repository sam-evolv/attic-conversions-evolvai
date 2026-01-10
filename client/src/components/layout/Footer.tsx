import { Link } from "wouter";
import { footer, companyInfo } from "@/content/siteContent";
import { Phone, Mail, MapPin, Facebook, Linkedin, ExternalLink } from "lucide-react";

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-label="Attic Conversions">
      <g fill="none">
        <path d="M4 40 L22 8 L40 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 32 L22 14 L33 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="22" y1="14" x2="22" y2="40" stroke="currentColor" strokeWidth="2"/>
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-20" role="contentinfo">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <LogoMark className="w-11 h-11 text-white/70" />
              <div>
                <span className="text-xl font-serif font-semibold block">
                  Attic Conversions
                </span>
                <span className="text-sm text-white/50">Family-run since 1995</span>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm text-sm leading-relaxed">
              {footer.tagline}
            </p>
            
            <address className="not-italic space-y-3 text-sm">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors focus-ring rounded"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors focus-ring rounded"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </a>
              <span className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4" />
                <span>{companyInfo.address}</span>
              </span>
            </address>

            <div className="flex items-center gap-3 mt-8">
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105 focus-ring"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105 focus-ring"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.trustedPeople}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors focus-ring rounded ml-3"
                data-testid="footer-trusted"
              >
                <span>TrustedPeople</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-semibold mb-5 text-sm text-white/80">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors focus-ring rounded inline-block"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-5 text-sm text-white/80">Hours</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {companyInfo.hours}
            </p>
            <p className="text-white/70 text-sm font-medium">
              {companyInfo.availability}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
