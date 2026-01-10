import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { JourneyStepper } from "@/components/journey/JourneyStepper";
import { JourneyStep } from "@/components/journey/JourneyStep";
import { JourneySummary } from "@/components/journey/JourneySummary";
import { journeySteps } from "@/content/siteContent";

export default function AtticJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelectOption = (optionId: string) => {
    setSelections((prev) => ({
      ...prev,
      [journeySteps[currentStep].id]: optionId,
    }));
  };

  const handleContinue = () => {
    if (currentStep < journeySteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const isLastStep = currentStep === journeySteps.length - 1;
  const showSummary = isLastStep && Object.keys(selections).length >= 4;

  return (
    <Layout>
      <Section container="narrow">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
            Your Attic Journey
          </h1>
          <p className="text-lg text-muted-foreground">
            Answer a few questions to discover what's possible with your attic.
          </p>
        </div>

        <JourneyStepper currentStep={currentStep} onStepClick={handleStepClick} />

        <div className="bg-card rounded-2xl p-6 sm:p-10 border border-border card-shadow">
          {showSummary ? (
            <JourneySummary selections={selections} />
          ) : (
            <JourneyStep
              step={journeySteps[currentStep] as any}
              selectedOption={selections[journeySteps[currentStep].id] || null}
              onSelectOption={handleSelectOption}
              onContinue={handleContinue}
              isLast={isLastStep}
            />
          )}
        </div>
      </Section>
    </Layout>
  );
}
