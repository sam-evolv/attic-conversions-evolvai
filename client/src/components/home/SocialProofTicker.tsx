const snippets = [
  `⭐ "Amazed with the high standard of finish" — Marie & Damien, Sandyford`,
  `⭐ "Smooth and stress-free from start to finish" — Hilary, Dublin`,
  `⭐ "Speed, efficiency and quality second to none" — Orla, South Circular Rd`,
  `⭐ "Exceeded my expectations every step" — Jesse, Dublin`,
  `⭐ "We've been singing your praises since it finished" — Sean & Martina, Tallaght`,
  `⭐ "Pat and his team were outstanding in every way" — Niall, Dublin`,
];

// Duplicate for seamless loop
const allSnippets = [...snippets, ...snippets];

export function SocialProofTicker() {
  return (
    <div
      className="overflow-hidden bg-[#1a1a1a] py-[14px]"
      aria-label="Customer testimonials ticker"
      aria-live="off"
    >
      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {allSnippets.map((snippet, i) => (
          <span
            key={i}
            className="text-white/80 text-[15px] font-medium flex-shrink-0 px-4"
          >
            {snippet}
          </span>
        ))}
      </div>
    </div>
  );
}
