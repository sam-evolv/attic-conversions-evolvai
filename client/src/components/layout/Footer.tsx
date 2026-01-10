import { Link } from "wouter";
import { footer, contact } from "@/content/siteContent";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Dublin Attic Conversions
            </h3>
            <p className="text-background/70 mb-6 max-w-md">
              {footer.tagline}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </a>
              <span className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>{contact.address}</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/90">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/60 hover:text-background transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/90">Hours</h4>
            <p className="text-background/60 text-sm leading-relaxed">
              {contact.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-background/50 text-sm text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
