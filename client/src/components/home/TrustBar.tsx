import { Clock, Home, Users, Shield, CheckCircle, FileText } from "lucide-react";
import { trustBadges } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  clock: Clock,
  home: Home,
  users: Users,
  shield: Shield,
  "check-circle": CheckCircle,
  "file-text": FileText,
};

export function TrustBar() {
  return (
    <Section background="default" className="!py-12 border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {trustBadges.map((badge, index) => {
          const Icon = iconMap[badge.icon] || CheckCircle;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
              data-testid={`trust-bar-badge-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
