import { Link } from "wouter";
import { ArrowRight, Users, Home, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/attached_assets/Gemini_Generated_Image_mg7xtmg7xtmg7xtm_1768059709838.png')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      <div className="container-wide relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-8 animate-slide-up text-shadow-soft">
            Transform Your Attic Into Beautiful, Functional Space
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto animate-slide-up stagger-1">Family-run specialists since 1992 delivering over 1,000 certified attic conversions across Ireland.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14 animate-slide-up stagger-2">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto btn-primary text-lg h-16 px-10" data-testid="hero-primary-cta">
                Get a Quote
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/process">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto btn-secondary text-lg h-16 px-10"
                data-testid="hero-secondary-cta"
              >
                View Our Process
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4 animate-slide-up stagger-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Family-run since 1995</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              <Home className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">1,000+ conversions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Fully insured</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Certified compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
