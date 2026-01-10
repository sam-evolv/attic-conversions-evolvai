import { useState } from "react";
import { Lightbulb, ChevronDown, ChevronUp, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useJourneyAdvisor } from "@/hooks/useJourneyAdvisor";

interface JourneyAdvisorPanelProps {
  stepId: string;
  stepTitle: string;
  question: string;
  keyFact?: string;
  selectedOption?: string;
  selectedOptionLabel?: string;
}

const QUICK_PROMPTS = [
  { type: "suitability" as const, label: "Is my attic suitable?", icon: "🏠" },
  { type: "planning" as const, label: "Do I need planning permission?", icon: "📋" },
  { type: "timeline" as const, label: "How long will it take?", icon: "⏱️" },
];

export function JourneyAdvisorPanel({
  stepId,
  stepTitle,
  question,
  keyFact,
  selectedOption,
  selectedOptionLabel,
}: JourneyAdvisorPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { advice, isLoading, error, fetchAdvice, clearAdvice } = useJourneyAdvisor();

  const prefersReducedMotion = typeof window !== "undefined" 
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handlePromptClick = (promptType: "suitability" | "planning" | "timeline" | "general") => {
    fetchAdvice({
      stepId,
      stepTitle,
      question,
      keyFact,
      selectedOption,
      selectedOptionLabel,
      promptType,
    });
  };

  const toggleExpanded = () => {
    if (isExpanded) {
      clearAdvice();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-6">
      <button
        onClick={toggleExpanded}
        className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg border-2 transition-all ${
          prefersReducedMotion ? "" : "transition-all duration-200"
        } ${
          isExpanded
            ? "border-primary/30 bg-primary/5"
            : "border-border hover:border-primary/20 hover:bg-muted/50"
        }`}
        data-testid="journey-advisor-toggle"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <span className="font-medium text-sm">Need tailored advice?</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {isExpanded && (
        <div 
          className={`mt-3 p-4 rounded-lg bg-muted/30 border border-border ${
            prefersReducedMotion ? "" : "animate-fade-in"
          }`}
          style={{ minHeight: advice || isLoading || error ? "180px" : "auto" }}
        >
          {!advice && !isLoading && !error && (
            <>
              <p className="text-sm text-muted-foreground mb-3">
                Get quick answers about your attic conversion:
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <Button
                    key={prompt.type}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePromptClick(prompt.type)}
                    className="text-xs"
                    disabled={!selectedOption}
                    data-testid={`advisor-prompt-${prompt.type}`}
                  >
                    <span className="mr-1.5">{prompt.icon}</span>
                    {prompt.label}
                  </Button>
                ))}
              </div>
              {!selectedOption && (
                <p className="text-xs text-muted-foreground mt-3 italic">
                  Select an option above to get personalized advice.
                </p>
              )}
            </>
          )}

          {isLoading && (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="w-5 h-5 animate-spin text-primary mr-2" />
              <span className="text-sm text-muted-foreground">Getting advice...</span>
            </div>
          )}

          {error && (
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-red-700">{error}</p>
                <button
                  onClick={() => handlePromptClick("general")}
                  className="text-xs text-red-600 underline mt-1"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          {advice && !isLoading && (
            <div className={prefersReducedMotion ? "" : "animate-fade-in"}>
              <div className="flex items-start gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">{advice.summary}</p>
                  {advice.status === "degraded" && (
                    <span className="text-xs text-muted-foreground">(general guidance)</span>
                  )}
                </div>
              </div>
              
              {advice.details.length > 0 && (
                <ul className="space-y-1.5 ml-6 mb-3">
                  {advice.details.map((point, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {advice.nextQuestions.length > 0 && (
                <p className="text-xs text-primary font-medium mt-3 pt-3 border-t border-border">
                  {advice.nextQuestions[0]}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {QUICK_PROMPTS.map((prompt) => (
                  <Button
                    key={prompt.type}
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePromptClick(prompt.type)}
                    className="text-xs h-7"
                    data-testid={`advisor-followup-${prompt.type}`}
                  >
                    {prompt.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
