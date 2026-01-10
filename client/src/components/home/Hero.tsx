import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { hero } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      <div className="container-wide relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6 animate-slide-up">
              {hero.headline}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-slide-up stagger-1">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-slide-up stagger-2">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto btn-lift text-base px-8" data-testid="hero-primary-cta">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/attic-journey">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 text-base px-8"
                  data-testid="hero-secondary-cta"
                >
                  Start Attic Journey
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 animate-slide-up stagger-3">
              {hero.trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                  data-testid={`trust-badge-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-slide-up stagger-2">
            <Link href="/attic-journey" className="block group">
              <div className="bg-white rounded-xl card-shadow p-8 border border-border transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Your Journey Starts Here
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-6">
                  3 Steps to Your New Space
                </h3>
                <div className="space-y-4">
                  {[
                    { num: 1, title: "Free Survey", desc: "We assess your attic" },
                    { num: 2, title: "Detailed Quote", desc: "Clear pricing, no surprises" },
                    { num: 3, title: "Expert Build", desc: "3-6 weeks to completion" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4 p-4 rounded-lg bg-muted border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <p className="font-semibold">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-primary font-semibold group-hover:underline">
                    Start Your Journey →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
