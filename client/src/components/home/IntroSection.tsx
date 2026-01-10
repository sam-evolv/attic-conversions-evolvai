import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { homeIntro } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
  return (
    <Section background="default">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
          {homeIntro.headline}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {homeIntro.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {homeIntro.steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-card rounded-xl p-8 border border-border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 group cursor-pointer"
            data-testid={`intro-step-${index}`}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-serif font-bold text-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
              {step.number}
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href={homeIntro.cta.href}>
          <Button size="lg" className="group" data-testid="intro-cta">
            {homeIntro.cta.label}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
