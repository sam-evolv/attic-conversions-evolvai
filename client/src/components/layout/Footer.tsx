import { Link } from "wouter";
import { footer, companyInfo } from "@/content/siteContent";
import { Phone, Mail, MapPin, Facebook, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-20" role="contentinfo">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5 logo-hover">
              <img 
                src="/attached_assets/ChatGPT_Image_Jan_10,_2026,_04_10_40_PM_1768061448942.png" 
                alt="Attic Conversions" 
                className="h-16 w-auto object-contain"
              />
            </Link>
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
