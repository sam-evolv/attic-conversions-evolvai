import { useState, useCallback } from "react";

interface JourneyAdviceRequest {
  stepId: string;
  stepTitle: string;
  question: string;
  keyFact?: string;
  selectedOption?: string;
  selectedOptionLabel?: string;
  promptType: "suitability" | "planning" | "timeline" | "general";
}

interface JourneyAdviceResponse {
  summary: string;
  keyPoints: string[];
  nextStep?: string;
}

interface UseJourneyAdvisorReturn {
  advice: JourneyAdviceResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchAdvice: (request: JourneyAdviceRequest) => Promise<void>;
  clearAdvice: () => void;
}

export function useJourneyAdvisor(): UseJourneyAdvisorReturn {
  const [advice, setAdvice] = useState<JourneyAdviceResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = useCallback(async (request: JourneyAdviceRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/journey/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to get advice");
      }

      const data: JourneyAdviceResponse = await response.json();
      setAdvice(data);
    } catch (err) {
      setError("Unable to get advice right now. Please try again.");
      setAdvice(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearAdvice = useCallback(() => {
    setAdvice(null);
    setError(null);
  }, []);

  return { advice, isLoading, error, fetchAdvice, clearAdvice };
}
