import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { hero } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero-gradient grain-overlay relative overflow-hidden">
      <div className="container-wide section-padding relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 animate-slide-up">
            {hero.headline}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up stagger-1">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up stagger-2">
            <Link href={hero.primaryCta.href}>
              <Button size="lg" className="w-full sm:w-auto group" data-testid="hero-primary-cta">
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={hero.secondaryCta.href}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                data-testid="hero-secondary-cta"
              >
                {hero.secondaryCta.label}
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 animate-slide-up stagger-3">
            {hero.trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                data-testid={`trust-badge-${index}`}
              >
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
