import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories, popularQuestions } from "@/content/siteContent";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/Reveal";

const DISPLAY_CATEGORIES = faqCategories || [];
const DISPLAY_POPULAR = popularQuestions || [];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(DISPLAY_CATEGORIES[0]?.id || "");

  if (DISPLAY_CATEGORIES.length === 0) {
    return (
      <Layout>
        <Section first>
          <div className="text-center py-12">
            <h1 className="text-3xl font-serif font-semibold mb-4">FAQ</h1>
            <p className="text-muted-foreground">No questions available at this time.</p>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section first>
        <Reveal distance={16}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about attic conversions.
            </p>
          </div>
        </Reveal>

        {DISPLAY_POPULAR.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mb-16">
            <h2 className="text-lg font-semibold mb-4">Popular Questions</h2>
            <div className="card-static">
              <Accordion type="single" collapsible>
                {DISPLAY_POPULAR.map((q, index) => (
                  <AccordionItem
                    key={index}
                    value={`popular-${index}`}
                    className="border-b border-border last:border-0"
                  >
                    <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/50 text-sm">
                      <span className="text-left font-medium">{q.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {q.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
              Categories
            </h2>
            <nav className="space-y-1">
              {DISPLAY_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                    activeCategory === category.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  data-testid={`faq-category-${category.id}`}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            {DISPLAY_CATEGORIES.filter((cat) => cat.id === activeCategory).map(
              (category) => (
                <div key={category.id}>
                  <h2 className="text-xl font-serif font-semibold mb-4">
                    {category.title}
                  </h2>
                  <div className="card-static">
                    <Accordion type="single" collapsible>
                      {category.questions.map((q, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.id}-${index}`}
                          className="border-b border-border last:border-0"
                        >
                          <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/50 text-sm">
                            <span className="text-left font-medium">
                              {q.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-5 pb-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {q.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              )
            )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 text-sm">
            Can't find the answer you're looking for?
          </p>
          <Link href="/contact">
            <Button className="btn-primary" data-testid="faq-cta">
              Ask Us Directly
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          </div>
        </Reveal>
      </Section>
      <CTASection />
    </Layout>
  );
}
