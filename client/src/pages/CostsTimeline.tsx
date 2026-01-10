import { Link } from "wouter";
import { ArrowRight, AlertCircle, Clock, Euro } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { costsTimeline } from "@/content/siteContent";
import { CTASection } from "@/components/home/CTASection";

export default function CostsTimeline() {
  return (
    <Layout>
      <Section first>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            {costsTimeline.headline}
          </h1>
          <p className="text-lg text-muted-foreground">
            {costsTimeline.subheadline}
          </p>
        </div>

        <div className="bg-accent/30 rounded-xl p-6 mb-12 border border-accent">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-accent-foreground">
              {costsTimeline.costDisclaimer}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {costsTimeline.costRanges.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border card-shadow p-6"
              data-testid={`cost-card-${index}`}
            >
              <h3 className="text-xl font-serif font-semibold mb-2">
                {item.type}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <Euro className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-primary">
                  {item.range.replace('€', '')}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {item.includes.map((include, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {include}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4" />
                Typical timeline: {item.timeline}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl border border-border card-shadow p-6 sm:p-8">
            <h2 className="text-xl font-serif font-semibold mb-6">
              {costsTimeline.costFactors.headline}
            </h2>
            <div className="space-y-4">
              {costsTimeline.costFactors.factors.map((item, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-1">{item.factor}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border card-shadow p-6 sm:p-8">
            <h2 className="text-xl font-serif font-semibold mb-6">
              {costsTimeline.timelineFactors.headline}
            </h2>
            <ul className="space-y-3">
              {costsTimeline.timelineFactors.factors.map((factor, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href={costsTimeline.cta.href}>
            <Button size="lg" className="group" data-testid="costs-cta">
              {costsTimeline.cta.label}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
}
