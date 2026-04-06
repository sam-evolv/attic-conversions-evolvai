const stats = [
  { number: "1,000+", label: "Attic Conversions Completed" },
  { number: "30+", label: "Years of Experience" },
  { number: "2 Weeks", label: "Typical Build Time" },
  { number: "100%", label: "Compliance Certified" },
];

export function StatsBar() {
  return (
    <div className="bg-[#1C1C1C] py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center py-6 px-4 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              } ${index >= 2 ? "border-t border-white/10 lg:border-t-0" : ""}`}
            >
              <span className="font-serif text-white text-[3rem] font-semibold leading-none mb-3">
                {stat.number}
              </span>
              <span className="font-sans text-[#9CA3AF] text-[14px] uppercase tracking-wider leading-snug max-w-[140px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
