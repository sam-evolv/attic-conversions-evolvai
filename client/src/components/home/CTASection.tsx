import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/content/siteContent";

export function CTASection() {
  return (
    <section className="text-primary-foreground py-16 md:py-24 bg-[#D0021B]">
      <div className="container-wide text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
          Ready to Transform Your Attic?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Book your free, no-obligation survey today. We'll visit your home,
          assess your attic, and give you honest advice about your options.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 btn-lift"
              data-testid="cta-contact"
            >
              Book Free Survey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10"
              data-testid="cta-phone"
            >
              <Phone className="mr-2 w-4 h-4" />
              {companyInfo.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
