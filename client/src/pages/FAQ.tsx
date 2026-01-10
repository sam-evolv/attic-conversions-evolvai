import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ArrowRight, Star } from "lucide-react";
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

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  return (
    <Layout>
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about attic conversions.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-serif font-semibold">Most Popular Questions</h2>
          </div>
          <div className="bg-card rounded-xl border border-border card-shadow">
            <Accordion type="single" collapsible>
              {popularQuestions.map((q, index) => (
                <AccordionItem
                  key={index}
                  value={`popular-${index}`}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/50">
                    <span className="text-left font-medium">{q.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {q.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <nav className="space-y-1">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
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
            {faqCategories
              .filter((cat) => cat.id === activeCategory)
              .map((category) => (
                <div key={category.id}>
                  <h2 className="text-2xl font-serif font-semibold mb-6">
                    {category.title}
                  </h2>
                  <div className="bg-card rounded-xl border border-border card-shadow">
                    <Accordion type="single" collapsible>
                      {category.questions.map((q, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.id}-${index}`}
                          className="border-b border-border last:border-0"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/50">
                            <span className="text-left font-medium">
                              {q.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {q.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for?
          </p>
          <Link href="/contact">
            <Button size="lg" className="group" data-testid="faq-cta">
              Ask Us Directly
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
}
