import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { hero } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      <div className="container-wide relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-serif font-semibold text-foreground leading-[1.1] mb-6 animate-slide-up">
              {hero.headline}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg animate-slide-up stagger-1">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up stagger-2">
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

            <div className="flex flex-wrap gap-x-6 gap-y-2 animate-slide-up stagger-3">
              {hero.trustBadges.slice(0, 3).map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                  data-testid={`trust-badge-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8 animate-slide-up stagger-2">
            <Link href="/attic-journey" className="block group">
              <div className="card-static p-6 sm:p-8 transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Your Journey Starts Here
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-6">
                  3 Steps to Your New Space
                </h3>
                
                <div className="space-y-4 mb-6">
                  {[
                    { num: 1, title: "Free Survey", desc: "We assess your attic's potential" },
                    { num: 2, title: "Detailed Quote", desc: "Clear pricing, no surprises" },
                    { num: 3, title: "Expert Build", desc: "Certified completion in 3-6 weeks" },
                  ].map((step, index) => (
                    <div 
                      key={step.num} 
                      className="flex gap-4 p-4 rounded-lg bg-muted/50 border border-border/50"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="text-primary font-semibold group-hover:underline underline-offset-4">
                    Start Your Journey
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
