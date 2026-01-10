import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { services } from "@/content/siteContent";
import { CTASection } from "@/components/home/CTASection";
import { PageTransition } from "@/components/ui/PageTransition";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Layout>
      <Section first>
        <PageTransition>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
              {services.headline}
            </h1>
            <p className="text-lg text-muted-foreground">
              {services.subheadline}
            </p>
          </div>
        </PageTransition>

        <div className="grid gap-6">
          {services.items.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <ScrollReveal key={service.id} delay={index * 100}>
                <div
                  className="bg-card rounded-xl border border-border card-shadow overflow-hidden"
                  data-testid={`service-${service.id}`}
                >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4"
                >
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-semibold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 animate-fade-in">
                    <div className="border-t border-border pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-3">What's Included</h3>
                          <ul className="space-y-2">
                            {service.details.map((detail, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-accent/30 rounded-lg p-5">
                          <h3 className="font-semibold mb-2">Ideal For</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.idealFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400}>
            <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="group" data-testid="services-cta">
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
      <CTASection />
    </Layout>
  );
}
