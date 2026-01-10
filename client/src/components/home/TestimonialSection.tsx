import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react";
import { Link } from "wouter";
import { testimonials } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, next]);

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <Section background="muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from Dublin homeowners we've helped.
            </p>
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Carousel controls">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full hover:bg-white transition-colors focus-ring"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
              data-testid="testimonial-pause"
            >
              {isPaused ? (
                <Play className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Pause className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="bg-white"
              data-testid="testimonial-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="bg-white"
              data-testid="testimonial-next"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Testimonials carousel"
          aria-live="polite"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${current}-${index}`}
              className="bg-white rounded-xl p-6 card-shadow card-shadow-hover border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" aria-hidden="true" />
              <blockquote className="text-foreground leading-relaxed mb-6 min-h-[80px]">
                "{testimonial.quote}"
              </blockquote>
              <footer className="border-t border-border pt-4">
                <cite className="not-italic">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </cite>
              </footer>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all focus-ring ${
                index === current
                  ? "bg-primary w-6"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              data-testid={`testimonial-dot-${index}`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === current}
              role="tab"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/contact">
            <Button variant="outline" data-testid="testimonial-read-all">
              Read All Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
