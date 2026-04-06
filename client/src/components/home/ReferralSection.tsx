export function ReferralSection() {
  return (
    <section className="bg-[#FAF8F6] border-t border-b border-gray-200 py-16 md:py-20">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column — text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#B5311E] mb-4">
              REFER A FRIEND
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-5 leading-tight">
              Know Someone Who Needs an Attic Conversion?
            </h2>
            <p className="text-[17px] text-gray-600 leading-[1.75] mb-8">
              We'll pay you €250 cash for any recommendation that results in a booking.
              No forms, no fuss — just call us and mention you have someone in mind.
            </p>
            <a
              href="tel:0863175893"
              className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 border-2 border-[#B5311E] text-[#B5311E] font-semibold text-[15px] rounded-md hover:bg-[#B5311E] hover:text-white transition-all duration-200 focus-ring"
            >
              Find Out More → 086 317 5893
            </a>
          </div>

          {/* Right column — reward graphic */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-serif text-[5rem] font-semibold text-[#B5311E] leading-none">
              €250
            </span>
            <span className="font-sans text-gray-500 text-[17px] mt-2">Cash Reward</span>
          </div>
        </div>
      </div>
    </section>
  );
}
