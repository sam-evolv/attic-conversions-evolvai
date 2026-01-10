import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

interface JourneyStepProps {
  step: {
    id: string;
    number: number;
    title: string;
    intro: string;
    question?: string;
    options?: Array<{
      id: string;
      label: string;
      description: string;
    }>;
    truthBlock: string;
    whatThisMeans?: Record<string, string>;
  };
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
  onContinue: () => void;
  isLast: boolean;
}

export function JourneyStep({
  step,
  selectedOption,
  onSelectOption,
  onContinue,
  isLast,
}: JourneyStepProps) {
  const [showDetails, setShowDetails] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.15 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mb-8">
        <span className="text-sm font-medium text-primary mb-2 block">
          Step {step.number} of 5
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">
          {step.title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {step.intro}
        </p>
      </div>

      <div className="bg-accent/30 rounded-xl p-6 mb-8 border border-accent">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-accent-foreground font-medium mb-1">Key Fact</p>
            <p className="text-sm text-accent-foreground/80">{step.truthBlock}</p>
          </div>
        </div>
      </div>

      {step.question && step.options && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">{step.question}</h3>
          <div className="grid gap-3">
            {step.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSelectOption(option.id)}
                className={`
                  w-full text-left p-5 rounded-xl border-2 transition-all
                  ${selectedOption === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }
                `}
                data-testid={`option-${option.id}`}
              >
                <span className="font-medium text-foreground block mb-1">
                  {option.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {option.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedOption && step.whatThisMeans && step.whatThisMeans[selectedOption] && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.3 }}
          className="bg-card rounded-xl p-6 mb-8 border border-border card-shadow"
        >
          <h4 className="font-semibold mb-2 text-foreground">
            What This Means For You
          </h4>
          <p className="text-muted-foreground">
            {step.whatThisMeans[selectedOption]}
          </p>
        </motion.div>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        data-testid="toggle-details"
      >
        {showDetails ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        {showDetails ? "Hide Details" : "Show More Details"}
      </button>

      {showDetails && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.3 }}
          className="bg-muted/50 rounded-xl p-6 mb-8"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            For detailed information about {step.title.toLowerCase()}, we recommend
            visiting our dedicated page or speaking with one of our experts during
            your free survey. Every home is unique, and we'll provide personalised
            advice for your specific situation.
          </p>
        </motion.div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={onContinue}
          disabled={step.options && !selectedOption}
          className="group"
          data-testid="continue-button"
        >
          {isLast ? "See Your Summary" : "Continue"}
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}
