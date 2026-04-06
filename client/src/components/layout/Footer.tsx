import { Link } from "wouter";
import { Phone, Mail, ExternalLink } from "lucide-react";
import { companyInfo } from "@/content/siteContent";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/process" },
  { label: "Gallery", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16 md:py-20" role="contentinfo">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-5 logo-hover">
              <img
                src="/attached_assets/ChatGPT_Image_Jan_10,_2026,_05_50_33_PM_1768069492587.png"
                alt="Attic Conversions"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Dublin's family-run attic specialists since 1992
            </p>
            <address className="not-italic space-y-3">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors focus-ring rounded text-lg font-semibold min-h-[48px]"
                data-testid="footer-phone"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors focus-ring rounded text-sm min-h-[48px]"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {companyInfo.email}
              </a>
            </address>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-semibold text-sm text-white/80 uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors focus-ring rounded inline-block text-sm py-1 min-h-[32px] flex items-center"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Trust & Hours */}
          <div>
            <h3 className="font-semibold text-sm text-white/80 uppercase tracking-wider mb-5">
              Hours & Trust
            </h3>
            <div className="space-y-3 text-sm mb-6">
              <p className="text-white/60 leading-relaxed">Mon–Fri 8am–6pm</p>
              <p className="text-white/60 leading-relaxed">Sat 9am–1pm</p>
              <p className="text-white/70 font-medium">Available anytime for enquiries</p>
            </div>
            <a
              href={companyInfo.trustedPeople}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors focus-ring rounded mb-4 min-h-[48px]"
              data-testid="footer-trusted"
            >
              <ExternalLink className="w-4 h-4" />
              View our TrustedPeople profile
            </a>
            <p className="text-white/40 text-sm">Fully insured &amp; compliance certified</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Attic Conversions. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">Built by EvolvAI</p>
        </div>
      </div>
    </footer>
  );
}
