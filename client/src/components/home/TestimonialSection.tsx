import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "wouter";
import { testimonials } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

const VISIBLE_TESTIMONIALS = testimonials?.slice(0, 9) || [];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const totalSlides = Math.ceil(VISIBLE_TESTIMONIALS.length / 3);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused || VISIBLE_TESTIMONIALS.length === 0) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const getVisibleTestimonials = () => {
    const start = current * 3;
    return VISIBLE_TESTIMONIALS.slice(start, start + 3);
  };

  if (VISIBLE_TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <Section background="muted">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-2">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Real feedback from Dublin homeowners.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="bg-white h-9 w-9"
              data-testid="testimonial-prev"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="bg-white h-9 w-9"
              data-testid="testimonial-next"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-3 gap-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Testimonials"
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <article
              key={`${current}-${index}`}
              className="card-refined p-5 animate-fade-in"
            >
              <Quote className="w-6 h-6 text-primary/15 mb-3" aria-hidden="true" />
              <blockquote className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial.quote}"
              </blockquote>
              <footer className="border-t border-border pt-3">
                <cite className="not-italic">
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </cite>
              </footer>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8" role="tablist">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`dot-indicator ${index === current ? 'active' : ''}`}
              data-testid={`testimonial-dot-${index}`}
              aria-label={`Page ${index + 1}`}
              aria-selected={index === current}
              role="tab"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/contact">
            <Button variant="outline" size="sm" className="text-sm">
              Read All Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
