import OpenAI from "openai";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export const journeyAdviceRequestSchema = z.object({
  stepId: z.string(),
  stepTitle: z.string(),
  question: z.string(),
  keyFact: z.string().optional(),
  selectedOption: z.string().optional(),
  selectedOptionLabel: z.string().optional(),
  promptType: z.enum(["suitability", "planning", "timeline", "general"]),
});

export type JourneyAdviceRequest = z.infer<typeof journeyAdviceRequestSchema>;

export interface JourneyAdviceResponse {
  summary: string;
  keyPoints: string[];
  nextStep?: string;
}

const SYSTEM_PROMPT = `You are a friendly, expert attic conversion advisor for Attic Conversions, a family-run business in Dublin with 30+ years of experience. Your role is to provide clear, helpful guidance to homeowners considering an attic conversion.

Guidelines:
- Be concise and helpful, not salesy
- Use plain language, avoid jargon
- Focus on practical, actionable information
- Be encouraging but honest about limitations
- Reference Irish building regulations when relevant
- Keep responses brief and scannable

Always respond with valid JSON in this format:
{
  "summary": "A brief 1-2 sentence overview",
  "keyPoints": ["Point 1", "Point 2", "Point 3"],
  "nextStep": "Optional suggestion for what to do next"
}`;

function buildUserPrompt(request: JourneyAdviceRequest): string {
  const { stepTitle, question, keyFact, selectedOption, selectedOptionLabel, promptType } = request;
  
  let context = `The user is on step "${stepTitle}" of the attic conversion journey.\n`;
  context += `Current question: "${question}"\n`;
  
  if (keyFact) {
    context += `Key fact for this step: "${keyFact}"\n`;
  }
  
  if (selectedOption && selectedOptionLabel) {
    context += `They selected: "${selectedOptionLabel}"\n`;
  }

  const prompts: Record<string, string> = {
    suitability: "Explain whether their attic is likely suitable for conversion based on their selection, and what factors matter most.",
    planning: "Explain the planning permission requirements in Ireland for attic conversions, especially relevant to their situation.",
    timeline: "Explain typical timelines for attic conversions and factors that can affect duration.",
    general: "Provide helpful context about this stage of the attic conversion decision process.",
  };

  context += `\nUser wants to know: ${prompts[promptType]}`;
  
  return context;
}

export async function getJourneyAdvice(request: JourneyAdviceRequest): Promise<JourneyAdviceResponse> {
  const userPrompt = buildUserPrompt(request);
  
  const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
    response_format: { type: "json_object" },
    max_completion_tokens: 512,
  });

  const content = response.choices[0]?.message?.content || "{}";
  
  try {
    const parsed = JSON.parse(content);
    return {
      summary: parsed.summary || "Unable to generate advice at this time.",
      keyPoints: Array.isArray(parsed.keyPoints) ? parsed.keyPoints : [],
      nextStep: parsed.nextStep,
    };
  } catch {
    return {
      summary: "Unable to generate advice at this time.",
      keyPoints: [],
    };
  }
}
