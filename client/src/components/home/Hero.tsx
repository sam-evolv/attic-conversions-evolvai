import { Link } from "wouter";
import { ArrowRight, Home, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="roof-pattern" x="0" y="0" width="100" height="70" patternUnits="userSpaceOnUse">
              <path
                d="M0 70 L50 20 L100 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground"
              />
              <path
                d="M15 70 L50 30 L85 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
              <line x1="50" y1="20" x2="50" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roof-pattern)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-[1.12] mb-8 animate-slide-up">
            Transform Your Attic Into Beautiful, Functional Space
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto animate-slide-up stagger-1">
            Family-run specialists with over 30 years' experience delivering certified attic conversions across Dublin.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-slide-up stagger-2">
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

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-muted-foreground animate-slide-up stagger-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Family-Run Since 1995</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-primary" />
              <span>1,000+ Conversions</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Fully Insured</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Certified Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
