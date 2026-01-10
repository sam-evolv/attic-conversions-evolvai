import { Home, Users, Shield, CheckCircle, FileText, MapPin } from "lucide-react";
import { trustBadges } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  users: Users,
  shield: Shield,
  "check-circle": CheckCircle,
  "file-text": FileText,
  "map-pin": MapPin,
};

const DISPLAY_BADGES = (trustBadges || []).slice(0, 4);

export function TrustBar() {
  if (DISPLAY_BADGES.length === 0) return null;

  return (
    <Section background="default" className="!py-8 border-b border-border/50">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {DISPLAY_BADGES.map((badge, index) => {
          const Icon = iconMap[badge.icon] || CheckCircle;
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
              data-testid={`trust-bar-badge-${index}`}
            >
              <Icon className="w-4 h-4 text-primary/70" aria-hidden="true" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
