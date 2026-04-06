import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { testimonials } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

const VISIBLE_TESTIMONIALS = testimonials || [];

const HERO_QUOTE = {
  text: "To say that we are delighted would be an understatement. Pat and his team were nothing but punctual, professional and diligent.",
  author: "Niall Murray",
  location: "Dublin",
};

const TRUSTED_PEOPLE_URL = "https://www.trustedpeople.ie";

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
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#B5311E] mb-4">
              WHAT CLIENTS SAY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[17px] text-gray-600 max-w-xl mx-auto leading-[1.75]">
              Over 1,000 Dublin families have trusted us — here's what they say
            </p>
          </div>
        </Reveal>

        {/* Hero pull-quote */}
        <Reveal delay={0.1}>
          <div className="relative text-center max-w-[700px] mx-auto mb-16 px-4">
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-[6rem] leading-none text-[#B5311E]/20 select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </span>
            <blockquote className="relative font-serif italic text-[1.6rem] leading-snug text-foreground mb-6 pt-8">
              {HERO_QUOTE.text}
            </blockquote>
            <cite className="not-italic">
              <p className="font-serif font-semibold text-[1rem] text-foreground">
                — {HERO_QUOTE.author}
              </p>
              <p className="text-gray-500 text-[13px] mt-0.5">{HERO_QUOTE.location}</p>
            </cite>
          </div>
        </Reveal>

        {/* Carousel */}
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
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-7 lg:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Star row */}
              <div className="flex gap-0.5 mb-4" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#B5311E] text-lg" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-foreground text-[17px] leading-[1.75] mb-6">
                "{testimonial.quote}"
              </blockquote>
              <footer className="border-t border-gray-100 pt-5">
                <cite className="not-italic">
                  <p className="font-serif font-semibold text-[15px] text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-[13px] mt-0.5">{testimonial.location}</p>
                </cite>
              </footer>
            </article>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-6 mb-10">
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
                className={`dot-indicator ${index === current ? "active" : ""}`}
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

        {/* Read all link */}
        <div className="text-center">
          <a
            href={TRUSTED_PEOPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 border-2 border-[#B5311E] text-[#B5311E] font-semibold text-[15px] rounded-md hover:bg-[#B5311E] hover:text-white transition-all duration-200 focus-ring"
          >
            Read all testimonials
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
