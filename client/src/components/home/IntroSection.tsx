import { Calendar, ClipboardList, Hammer, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    Icon: Calendar,
    title: "Free Survey",
    description:
      "We visit your home, assess your attic, and answer every question. No obligation, no jargon.",
  },
  {
    number: "02",
    Icon: ClipboardList,
    title: "Design & Quote",
    description: "You receive a clear, fixed-price quote. No hidden costs, ever.",
  },
  {
    number: "03",
    Icon: Hammer,
    title: "2-Week Build",
    description:
      "Our team completes the full conversion — clean, fast, minimal disruption to your home.",
  },
  {
    number: "04",
    Icon: ShieldCheck,
    title: "Cert & Handover",
    description:
      "You receive your compliance certificate and a fully certified, legal living space.",
  },
];

export function IntroSection() {
  return (
    <Section background="default">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#B5311E] mb-4">
          HOW IT WORKS
        </p>
        <h2 className="text-[2.5rem] font-serif font-semibold mb-5 leading-tight">
          From First Call to Finished Attic — In Just Two Weeks
        </h2>
        <p className="text-[17px] text-gray-600 leading-[1.75]">
          We handle everything. You just choose what you want.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-0">
        {steps.map(({ number, Icon, title, description }, index) => (
          <div
            key={number}
            className="relative px-6 py-8 flex flex-col items-start md:items-center text-left md:text-center animate-slide-up"
            style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
          >
            {/* Vertical divider between steps (desktop only) */}
            {index > 0 && (
              <div className="hidden md:block absolute left-0 top-8 bottom-8 w-px bg-[#B5311E]/20" />
            )}
            {/* Horizontal divider between steps (mobile only) */}
            {index > 0 && (
              <div className="md:hidden w-full h-px bg-[#B5311E]/20 mb-8" />
            )}

            <div className="text-[3.5rem] font-serif font-semibold text-[#B5311E] leading-none mb-4 select-none">
              {number}
            </div>
            <div className="w-10 h-10 rounded-full bg-[#B5311E]/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-[#B5311E]" />
            </div>
            <h3 className="text-[1.25rem] font-serif font-semibold mb-2">{title}</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
