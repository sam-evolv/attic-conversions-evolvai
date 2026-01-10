import { Link } from "wouter";
import { Phone, CheckCircle } from "lucide-react";
import { hero, companyInfo } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container-wide relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 animate-slide-up">
              {hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up stagger-1">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up stagger-2">
              <Link href={hero.primaryCta.href}>
                <Button size="lg" className="w-full sm:w-auto btn-lift" data-testid="hero-primary-cta">
                  {hero.primaryCta.label}
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2"
                  data-testid="hero-secondary-cta"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  {hero.secondaryCta.label}
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 animate-slide-up stagger-3">
              {hero.trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-foreground"
                  data-testid={`trust-badge-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-slide-up stagger-2">
            <div className="bg-white rounded-2xl card-shadow p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">Your Journey Starts Here</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">
                3 Steps to Your New Space
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Free Survey</p>
                    <p className="text-sm text-muted-foreground">We assess your attic</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Detailed Quote</p>
                    <p className="text-sm text-muted-foreground">Clear pricing, no surprises</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Expert Build</p>
                    <p className="text-sm text-muted-foreground">3-6 weeks to completion</p>
                  </div>
                </div>
              </div>
              <Link href="/attic-journey" className="block mt-6">
                <Button className="w-full btn-lift" data-testid="hero-journey-cta">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
