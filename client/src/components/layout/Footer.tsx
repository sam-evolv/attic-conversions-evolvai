import { Link } from "wouter";
import { footer, companyInfo } from "@/content/siteContent";
import { Phone, Mail, MapPin, Facebook, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Attic Conversions
            </h3>
            <p className="text-secondary-foreground/70 mb-6 max-w-md">
              {footer.tagline}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </a>
              <span className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>{companyInfo.address}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.trustedPeople}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                data-testid="footer-trusted"
              >
                <span>TrustedPeople</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground/90">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground/90">Hours</h4>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-4">
              {companyInfo.hours}
            </p>
            <p className="text-secondary-foreground/80 text-sm font-medium">
              {companyInfo.availability}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-secondary-foreground/50 text-sm text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
