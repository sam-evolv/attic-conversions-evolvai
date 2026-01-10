import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

const VISIBLE_TESTIMONIALS = testimonials || [];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const cardsPerView = 3;
  const totalSlides = Math.ceil(VISIBLE_TESTIMONIALS.length / cardsPerView);

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
    const start = current * cardsPerView;
    return VISIBLE_TESTIMONIALS.slice(start, start + cardsPerView);
  };

  if (VISIBLE_TESTIMONIALS.length === 0) return null;

  return (
    <Section background="default" className="overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real feedback from homeowners across Dublin who trusted us with their attic conversion.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10"
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
              className="card-float p-7 lg:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/15 mb-5" aria-hidden="true" />
              <blockquote className="text-foreground text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <footer className="border-t border-gray-100 pt-5">
                <cite className="not-italic">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {testimonial.location}
                  </p>
                </cite>
              </footer>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="bg-white h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-shadow"
            data-testid="testimonial-prev"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2.5" role="tablist">
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
            className="bg-white h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-shadow"
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
