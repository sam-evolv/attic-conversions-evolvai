import { useState, useCallback, useRef } from "react";

interface JourneyAdviceRequest {
  stepId: string;
  stepTitle: string;
  question: string;
  keyFact?: string;
  selectedOption?: string;
  selectedOptionLabel?: string;
  promptType: "suitability" | "planning" | "general";
}

interface JourneyAdviceResponse {
  status: "ok" | "degraded";
  summary: string;
  details: string[];
  nextQuestions: string[];
}

interface UseJourneyAdvisorReturn {
  advice: JourneyAdviceResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchAdvice: (request: JourneyAdviceRequest) => Promise<void>;
  clearAdvice: () => void;
}

export function useJourneyAdvisor(): UseJourneyAdvisorReturn {
  const retryCount = useRef(0);
  const [advice, setAdvice] = useState<JourneyAdviceResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = useCallback(async (request: JourneyAdviceRequest) => {
    setIsLoading(true);
    setError(null);

    const attemptFetch = async (): Promise<JourneyAdviceResponse | null> => {
      const response = await fetch("/api/journey/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to get advice");
      }

      return response.json();
    };

    try {
      const data = await attemptFetch();
      if (data) {
        setAdvice(data);
        setError(null);
      }
      retryCount.current = 0;
    } catch (err) {
      if (retryCount.current < 1) {
        retryCount.current++;
        try {
          const data = await attemptFetch();
          if (data) {
            setAdvice(data);
            setError(null);
          }
          retryCount.current = 0;
          setIsLoading(false);
          return;
        } catch {
        }
      }
      if (!advice) {
        setError("Unable to get advice right now. Please try again.");
      }
      retryCount.current = 0;
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
