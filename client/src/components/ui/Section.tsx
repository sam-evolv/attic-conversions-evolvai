import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: "wide" | "narrow";
  background?: "default" | "muted" | "accent";
  id?: string;
  first?: boolean;
}

export function Section({
  children,
  className,
  container = "wide",
  background = "default",
  id,
  first = false,
}: SectionProps) {
  const bgClasses = {
    default: "bg-[#FAF8F6]",
    muted: "bg-[#F7F5F2]",
    accent: "bg-primary/5",
  };

  const containerClasses = {
    wide: "container-wide",
    narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
  };

  return (
    <section
      id={id}
      className={cn(
        first ? "pt-8 pb-20 md:pt-12 md:pb-28" : "section-padding",
        bgClasses[background],
        className
      )}
    >
      <div className={containerClasses[container]}>{children}</div>
    </section>
  );
}
