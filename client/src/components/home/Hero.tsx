import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="roof-pattern" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M0 80 L60 30 L120 80 M20 80 L60 45 L100 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground"
              />
              <line x1="60" y1="30" x2="60" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roof-pattern)" />
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(30 20% 99%) 100%)',
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-[1.15] mb-8 animate-slide-up">
            Transform Your Attic Into Beautiful, Functional Space
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up stagger-1">
            Dublin's trusted specialists with 30+ years of certified attic conversions. 
            Family-run quality you can rely on.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-up stagger-2">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto btn-primary text-base h-14 px-8" data-testid="hero-primary-cta">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/attic-journey">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto btn-secondary text-base h-14 px-8"
                data-testid="hero-secondary-cta"
              >
                Start Attic Journey
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 animate-slide-up stagger-3">
            {["30+ Years Experience", "Fully Certified", "Free Survey"].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/70"
                data-testid={`trust-badge-${index}`}
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
