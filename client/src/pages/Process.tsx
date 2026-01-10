import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { process } from "@/content/siteContent";
import { CTASection } from "@/components/home/CTASection";

export default function Process() {
  return (
    <Layout>
      <Section first>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            {process.headline}
          </h1>
          <p className="text-lg text-muted-foreground">
            {process.subheadline}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {process.steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6"
                data-testid={`process-step-${index}`}
              >
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center font-serif text-2xl font-bold z-10">
                  {step.number}
                </div>

                <div className="flex-1 bg-card rounded-xl border border-border card-shadow p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="md:hidden w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-bold mb-3">
                        {step.number}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-serif font-semibold">
                        {step.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>

                  <div className="bg-muted/50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold mb-3 text-sm">What Happens</h3>
                    <ul className="space-y-2">
                      {step.whatHappens.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={process.cta.href}>
            <Button size="lg" className="group" data-testid="process-cta">
              {process.cta.label}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
}
