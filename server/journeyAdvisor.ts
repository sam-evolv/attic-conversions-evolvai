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
  status: "ok" | "degraded";
  summary: string;
  details: string[];
  nextQuestions: string[];
}

const FALLBACK_RESPONSES: Record<string, Record<string, JourneyAdviceResponse>> = {
  suitability: {
    default: {
      status: "degraded",
      summary: "Most attics in Irish homes can be converted, but it depends on a few key factors.",
      details: [
        "Minimum head height of 2.2m at the ridge is typically required",
        "Roof pitch ideally between 35-45 degrees works best",
        "Trussed roofs need more structural work than traditional cut roofs",
        "A free survey is the best way to get a definitive answer",
      ],
      nextQuestions: ["Book a free survey to assess your specific attic"],
    },
    "not-sure": {
      status: "degraded",
      summary: "Not sure about your roof type? That's completely normal - most homeowners don't know until a professional takes a look.",
      details: [
        "Our surveyor can identify your roof type during a free home visit",
        "They'll measure head height and assess structural requirements",
        "You'll get honest advice on whether conversion is viable",
        "No obligation - just clear information to help you decide",
      ],
      nextQuestions: ["Book a free no-obligation survey"],
    },
  },
  planning: {
    default: {
      status: "degraded",
      summary: "Most attic conversions in Ireland don't require planning permission under 'exempted development' rules.",
      details: [
        "Converting within existing roof space is usually exempt",
        "Dormer windows to the rear are typically allowed",
        "Front-facing dormers usually need planning permission",
        "Listed buildings and conservation areas have special requirements",
        "Building regulations certification is always required",
      ],
      nextQuestions: ["We handle all compliance paperwork for you"],
    },
  },
  timeline: {
    default: {
      status: "degraded",
      summary: "A typical attic conversion takes 3-6 weeks from start to finish, depending on complexity.",
      details: [
        "Simple conversions (bedroom/office): 3-4 weeks",
        "Bathroom additions extend timeline by 1-2 weeks",
        "Dormer installations add complexity but are often worth it",
        "Weather rarely affects work as it's mostly internal",
        "We work to minimise disruption to your daily life",
      ],
      nextQuestions: ["Get a personalised timeline with a free quote"],
    },
  },
  general: {
    default: {
      status: "degraded",
      summary: "An attic conversion is one of the best ways to add valuable living space to your home.",
      details: [
        "Typically adds 10-15% to property value",
        "No loss of garden space unlike extensions",
        "Less disruptive than ground-floor building work",
        "Perfect for home offices, bedrooms, or playrooms",
        "Family-run business with 30+ years experience in Dublin",
      ],
      nextQuestions: ["Explore our services or request a free quote"],
    },
  },
};

function getFallbackResponse(promptType: string, selectedOption?: string): JourneyAdviceResponse {
  const typeResponses = FALLBACK_RESPONSES[promptType] || FALLBACK_RESPONSES.general;
  const response = (selectedOption && typeResponses[selectedOption]) || typeResponses.default;
  return response || FALLBACK_RESPONSES.general.default;
}

const SYSTEM_PROMPT = `You are a friendly, expert attic conversion advisor for Attic Conversions, a family-run business in Dublin with 30+ years of experience. Your role is to provide clear, helpful guidance to homeowners considering an attic conversion.

Guidelines:
- Be concise and helpful, not salesy
- Use plain language, avoid jargon
- Focus on practical, actionable information
- Be encouraging but honest about limitations
- Reference Irish building regulations when relevant
- Keep responses brief and scannable

Always respond with valid JSON in this exact format:
{
  "summary": "A brief 1-2 sentence overview",
  "details": ["Key point 1", "Key point 2", "Key point 3"],
  "nextQuestions": ["Suggested next step"]
}`;

function buildUserPrompt(request: JourneyAdviceRequest): string {
  const { stepTitle, question, keyFact, selectedOptionLabel, promptType } = request;
  
  let context = `The user is on step "${stepTitle}" of the attic conversion journey.\n`;
  context += `Current question: "${question}"\n`;
  
  if (keyFact) {
    context += `Key fact for this step: "${keyFact}"\n`;
  }
  
  if (selectedOptionLabel) {
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
  const { promptType, selectedOption } = request;
  
  if (!process.env.AI_INTEGRATIONS_OPENAI_API_KEY || !process.env.AI_INTEGRATIONS_OPENAI_BASE_URL) {
    console.log("[JourneyAdvisor] AI integration not configured, using fallback");
    return getFallbackResponse(promptType, selectedOption);
  }

  try {
    const userPrompt = buildUserPrompt(request);
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      max_completion_tokens: 512,
    });

    const content = response.choices[0]?.message?.content;
    
    if (!content) {
      console.log("[JourneyAdvisor] Empty response from AI, using fallback");
      return getFallbackResponse(promptType, selectedOption);
    }

    const parsed = JSON.parse(content);
    
    return {
      status: "ok",
      summary: parsed.summary || getFallbackResponse(promptType, selectedOption).summary,
      details: Array.isArray(parsed.details) ? parsed.details : 
               Array.isArray(parsed.keyPoints) ? parsed.keyPoints : [],
      nextQuestions: Array.isArray(parsed.nextQuestions) ? parsed.nextQuestions : [],
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`[JourneyAdvisor] AI call failed: ${errorMessage.substring(0, 100)}, using fallback`);
    return getFallbackResponse(promptType, selectedOption);
  }
}
