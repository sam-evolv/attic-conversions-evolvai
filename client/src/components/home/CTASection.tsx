import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/siteContent";

export function CTASection() {
  return (
    <section className="bg-foreground text-background py-16 md:py-24">
      <div className="container-wide text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
          Ready to Transform Your Attic?
        </h2>
        <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
          Book your free, no-obligation survey today. We'll visit your home,
          assess your attic, and give you honest advice about your options.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              data-testid="cta-contact"
            >
              Book Free Survey
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10"
              data-testid="cta-phone"
            >
              <Phone className="mr-2 w-4 h-4" />
              {contact.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
