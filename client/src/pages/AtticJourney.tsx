import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown, ChevronUp, Phone, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { JourneyAdvisorPanel } from "@/components/journey/JourneyAdvisorPanel";
import { journeySteps, companyInfo } from "@/content/siteContent";

export default function AtticJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showDetails, setShowDetails] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const totalSteps = journeySteps.length;
  const currentStepData = journeySteps[currentStep];
  const isLastStep = currentStep === totalSteps - 1;
  const currentSelection = selections[currentStepData.id];

  const handleSelectOption = (optionId: string) => {
    setSelections((prev) => ({ ...prev, [currentStepData.id]: optionId }));
  };

  const handleContinue = () => {
    if (isLastStep) {
      setShowSummary(true);
    } else {
      setCurrentStep((prev) => prev + 1);
      setShowDetails(false);
    }
  };

  const handleBack = () => {
    if (showSummary) {
      setShowSummary(false);
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setShowDetails(false);
    }
  };

  const getOptionLabel = (stepId: string, optionId: string) => {
    const step = journeySteps.find((s) => s.id === stepId);
    const option = step?.options?.find((o) => o.id === optionId);
    return option?.label || optionId;
  };

  const getWhatThisMeans = () => {
    if (!currentSelection || !currentStepData.whatThisMeans) return null;
    return currentStepData.whatThisMeans[currentSelection as keyof typeof currentStepData.whatThisMeans];
  };

  return (
    <Layout>
      <Section first>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Your Attic Journey
            </h1>
            <p className="text-muted-foreground">
              Answer a few questions to see if your attic is suitable for conversion.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentStep + 1) / totalSteps) * 100)}% complete
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {journeySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-colors ${
                    index < currentStep
                      ? "bg-primary text-primary-foreground"
                      : index === currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
              ))}
            </div>
          </div>

          {showSummary ? (
            <div className="bg-card rounded-xl p-6 sm:p-8 border border-border card-shadow animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                  Your Results
                </span>
                <h2 className="text-2xl font-bold mb-2">Your Attic Profile</h2>
                <p className="text-muted-foreground">
                  Based on your answers, here's what we recommend.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3">Your Selections</h3>
                <div className="space-y-2">
                  {Object.entries(selections).map(([stepId, optionId]) => (
                    <div key={stepId} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">
                          {journeySteps.find((s) => s.id === stepId)?.title}:
                        </span>{" "}
                        <span className="font-medium">{getOptionLabel(stepId, optionId)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-900 mb-2">Ready for a Survey</h3>
                <p className="text-sm text-green-800">
                  Your attic sounds like a good candidate for conversion. The next step is a free, no-obligation survey where we'll confirm the details and provide an exact quote.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full btn-lift" data-testid="journey-get-quote">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="block">
                  <Button size="lg" variant="outline" className="w-full" data-testid="journey-call">
                    <Phone className="mr-2 w-4 h-4" />
                    Call {companyInfo.phone}
                  </Button>
                </a>
              </div>

              <button
                onClick={handleBack}
                className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Go back and change answers
              </button>
            </div>
          ) : (
            <div className="bg-card rounded-xl p-6 sm:p-8 border border-border card-shadow animate-fade-in">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 flex gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Key Fact</span>
                  <p className="text-sm text-foreground mt-1">{currentStepData.keyFact}</p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-2">{currentStepData.title}</h2>
              <p className="text-muted-foreground mb-6">{currentStepData.question}</p>

              <div className="space-y-3 mb-6">
                {currentStepData.options?.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      currentSelection === option.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30 hover:bg-muted/50"
                    }`}
                    data-testid={`option-${option.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{option.label}</p>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          currentSelection === option.id
                            ? "border-primary bg-primary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {currentSelection === option.id && (
                          <CheckCircle className="w-3 h-3 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {currentSelection && getWhatThisMeans() && (
                <div className="bg-muted rounded-lg p-4 mb-6 animate-fade-in">
                  <p className="text-sm font-semibold mb-1">What this means:</p>
                  <p className="text-sm text-muted-foreground">{getWhatThisMeans()}</p>
                </div>
              )}

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showDetails ? "Hide details" : "Show more details"}
              </button>

              {showDetails && (
                <div className="bg-muted/50 rounded-lg p-4 mb-6 text-sm text-muted-foreground animate-fade-in">
                  {currentStepData.moreDetails}
                </div>
              )}

              <JourneyAdvisorPanel
                stepId={currentStepData.id}
                stepTitle={currentStepData.title}
                question={currentStepData.question}
                keyFact={currentStepData.keyFact}
                selectedOption={currentSelection}
                selectedOptionLabel={
                  currentStepData.options?.find((o) => o.id === currentSelection)?.label
                }
              />

              <div className="flex gap-3 mt-6">
                {currentStep > 0 && (
                  <Button variant="outline" onClick={handleBack} className="flex-1" data-testid="journey-back">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleContinue}
                  disabled={!currentSelection}
                  className="flex-1 btn-lift"
                  data-testid="journey-continue"
                >
                  {isLastStep ? "See Results" : "Continue"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </Section>
    </Layout>
  );
}
