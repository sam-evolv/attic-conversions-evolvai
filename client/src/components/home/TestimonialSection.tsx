import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section background="default">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from Dublin homeowners we've helped.
          </p>
        </div>

        <div className="relative bg-card rounded-2xl p-8 md:p-12 card-shadow border border-border">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />

          <div className="relative z-10">
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].location} •{" "}
                  {testimonials[current].project}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  data-testid="testimonial-prev"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  data-testid="testimonial-next"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-border"
                }`}
                data-testid={`testimonial-dot-${index}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
