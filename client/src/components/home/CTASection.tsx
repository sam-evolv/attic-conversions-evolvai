import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="relative text-primary-foreground py-16 md:py-24 bg-[#7a0101] overflow-hidden cta-grain">
      <div className="container-wide text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-5">
            Book Your Free Home Survey Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-[1.75]">
            We'll visit your Dublin home at a time that suits you, assess your attic, and give you
            honest advice — with no obligation and no hard sell.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="min-h-[48px] bg-white text-[#7a0101] hover:bg-white/90 font-semibold px-8 btn-lift"
                data-testid="cta-contact"
              >
                Book Free Survey →
              </Button>
            </Link>
            <a href="tel:0863175893">
              <Button
                size="lg"
                variant="outline"
                className="min-h-[48px] border-2 border-white/30 text-white hover:bg-white/10 px-8"
                data-testid="cta-phone"
              >
                <Phone className="mr-2 w-4 h-4" />
                Or Call Us: 086 317 5893
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
