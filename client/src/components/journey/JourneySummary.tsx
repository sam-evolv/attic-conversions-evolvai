import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { journeySteps, companyInfo } from "@/content/siteContent";

interface JourneySummaryProps {
  selections: Record<string, string>;
}

export function JourneySummary({ selections }: JourneySummaryProps) {
  const getOptionLabel = (stepId: string, optionId: string) => {
    const step = journeySteps.find((s) => s.id === stepId);
    if (!step?.options) return optionId;
    const option = step.options.find((o) => o.id === optionId);
    return option?.label || optionId;
  };

  const hasLowHeight = selections.suitability === "low";
  const isHipped = selections["roof-type"] === "hipped";

  let scenario: "ready" | "questions" | "challenging" = "ready";
  if (hasLowHeight || isHipped) {
    scenario = hasLowHeight ? "challenging" : "questions";
  }

  const nextStepInfo = journeySteps[4].nextStepsOptions?.find(
    (opt) => opt.scenario === scenario
  ) || journeySteps[4].nextStepsOptions?.[0];

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <span className="text-sm font-medium text-primary mb-2 block">
          Your Results
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">
          Your Attic Conversion Profile
        </h2>
        <p className="text-lg text-muted-foreground">
          Based on your answers, here's a summary of your situation and our recommendation.
        </p>
      </div>

      <div className="bg-card rounded-xl p-6 mb-8 border border-border card-shadow">
        <h3 className="font-semibold mb-4">Your Selections</h3>
        <div className="space-y-3">
          {Object.entries(selections).map(([stepId, optionId]) => (
            <div key={stepId} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <span className="text-sm text-muted-foreground">
                  {journeySteps.find((s) => s.id === stepId)?.title}:
                </span>
                <span className="ml-2 font-medium">
                  {getOptionLabel(stepId, optionId)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`rounded-xl p-6 mb-8 border ${
          scenario === "ready"
            ? "bg-green-50 border-green-200"
            : scenario === "questions"
            ? "bg-primary/5 border-primary/20"
            : "bg-accent border-accent"
        }`}
      >
        <h3 className="font-serif text-xl font-semibold mb-2">
          {nextStepInfo?.title}
        </h3>
        <p className="text-muted-foreground mb-4">{nextStepInfo?.description}</p>
      </div>

      <div className="bg-muted/50 rounded-xl p-6 mb-8">
        <h4 className="font-semibold mb-3">What To Expect Next</h4>
        <ul className="space-y-2">
          {journeySteps[4].whatToExpect?.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact" className="flex-1">
          <Button size="lg" className="w-full btn-lift" data-testid="summary-contact">
            {nextStepInfo?.action || "Book Free Survey"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
        <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex-1">
          <Button size="lg" variant="outline" className="w-full" data-testid="summary-phone">
            <Phone className="mr-2 w-4 h-4" />
            Call {companyInfo.phone}
          </Button>
        </a>
      </div>
    </div>
  );
}
