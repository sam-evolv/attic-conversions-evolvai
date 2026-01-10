import { Check } from "lucide-react";
import { journeySteps } from "@/content/siteContent";

interface JourneyStepperProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function JourneyStepper({ currentStep, onStepClick }: JourneyStepperProps) {
  return (
    <div className="flex items-center justify-between mb-12">
      {journeySteps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={step.id} className="flex items-center flex-1">
            <button
              onClick={() => onStepClick(index)}
              disabled={index > currentStep}
              className={`
                relative flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm
                transition-all duration-300
                ${isCompleted
                  ? "bg-secondary text-secondary-foreground"
                  : isCurrent
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-muted text-muted-foreground"
                }
                ${index <= currentStep ? "cursor-pointer hover:scale-105" : "cursor-not-allowed"}
              `}
              data-testid={`step-indicator-${index}`}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" />
              ) : (
                step.number
              )}
            </button>

            {index < journeySteps.length - 1 && (
              <div className="flex-1 h-1 mx-2">
                <div
                  className={`h-full rounded-full transition-colors duration-300 ${
                    isCompleted ? "bg-secondary" : "bg-muted"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
