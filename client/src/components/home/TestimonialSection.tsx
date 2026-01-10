import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    const interval = setInterval(next, 5000);
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
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Real feedback from Dublin homeowners.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-3 gap-5 mb-8"
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
              className="card-refined p-6 animate-fade-in"
            >
              <Quote className="w-7 h-7 text-primary/20 mb-4" aria-hidden="true" />
              <blockquote className="text-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                "{testimonial.quote}"
              </blockquote>
              <footer className="border-t border-border pt-4">
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

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="bg-white h-10 w-10 rounded-full"
            data-testid="testimonial-prev"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2" role="tablist">
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
          
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="bg-white h-10 w-10 rounded-full"
            data-testid="testimonial-next"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
