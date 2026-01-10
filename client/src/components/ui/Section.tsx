import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: "wide" | "narrow";
  background?: "default" | "muted" | "accent";
  id?: string;
}

export function Section({
  children,
  className,
  container = "wide",
  background = "default",
  id,
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/50",
    accent: "bg-accent/30",
  };

  const containerClasses = {
    wide: "container-wide",
    narrow: "container-narrow",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", bgClasses[background], className)}
    >
      <div className={containerClasses[container]}>{children}</div>
    </section>
  );
}
