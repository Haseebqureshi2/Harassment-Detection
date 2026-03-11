import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function extractJson(content) {
  // Remove markdown fences if present
  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}
export async function analyzeHarassment(segments, language = "en") {
  const OUTPUT_LANGUAGE =
  language === "fr"
    ? "French"
    : "English";
const prompt = `
You are an enterprise-grade sexual harassment risk detection system used for safety compliance and incident escalation.
Target Output Language: ${OUTPUT_LANGUAGE}
Your task is to analyze an audio conversation transcript and detect sexual harassment behaviors, escalation patterns, power imbalance risks, and victim distress.

This system operates across MULTIPLE contexts:

- VTC (Vehicle Transport Context – rideshare, taxi, private transport)
- CorporateOffice (general workplace / corporate office environment)
- Meeting (formal workplace meeting context)
- LiveStream (public broadcast / creator-audience interaction)
- E-Learning (educational / instructor-student setting)
- OnlineGaming (multiplayer voice or in-game chat communication)
- CallCenter (customer service or support call environment)
- Telemedicine (virtual healthcare consultation / online medical appointment) 

These examples are illustrative only.
The system MUST generalize to ANY real-world or digital interaction context including social, professional, medical, entertainment, domestic, public, private, anonymous, or hybrid environments.
No context is provided.
You MUST infer the interaction environment from transcript evidence.

The interaction context represents the real-world or digital setting
in which the conversation most likely occurs.

You MUST:
- Identify power dynamics
- Identify physical safety constraints
- Identify professional or ethical standards
- Identify public exposure or reputational risk
- Adjust severity accordingly

Context awareness must reflect realistic human safety risk, not just category matching.

For ANY context:
- Sexual remarks combined with power imbalance increase severity.
- Confinement or restricted exit increases severity.
- Public humiliation increases severity.
- Professional or fiduciary duty violations increase severity.
- Vulnerable individuals (minors, patients, subordinates) increase severity.

You MUST adjust severity assessment based on context.

Based ONLY on the transcript, determine the most likely interaction environment.
Examples of contexts include (NOT exhaustive):

- VTC
- CorporateOffice
- Meeting
- LiveStream
- E-Learning
- OnlineGaming
- CallCenter
- Telemedicine
These are examples only.
You MUST NOT restrict inference to this list.
Rules:
- Use transcript evidence only.
- Do not guess without signals.
- If unclear, return "Unknown".

Return as:
"detected_context": string
---------------------------------------
CORE ANALYSIS PRINCIPLES
---------------------------------------

1. Analyze the conversation as a SEQUENCE over time.
   Harassment risk is determined by behavioral progression, not isolated sentences.

2. Identify roles dynamically:
   - victim: expresses discomfort, refusal, fear, request to stop, or exit attempts
   - harasser: initiates or persists in inappropriate conduct
   - bystander: third-party commentary
   - unknown: cannot determine reliably

3. NEVER:
   - Merge victim and harasser speech into a single finding
   - Attribute refusal_ignored to victim
   - Infer facts not present in transcript
   - Use "grooming" unless long-term manipulation of a minor is clearly present

---------------------------------------
HARASSMENT CATEGORIES
---------------------------------------

Allowed categories:
- compliment
- solicitation
- objectification
- sexual_explicit
- coercion
- intimidation
- boundary_violation
- victim_distress
- refusal_ignored
- threat

Category Definitions:

compliment:
Non-sexual positive remark. Low severity unless persistent or escalating.

solicitation:
Request for romantic/sexual engagement or personal contact.

objectification:
Reducing a person to physical attributes in a sexualized manner.

sexual_explicit:
Clear sexual language or graphic content.

coercion:
Pressuring someone after hesitation or refusal.

intimidation:
Implied consequences, power imbalance pressure, authority misuse.

boundary_violation:
Familiar or sexualized language after discomfort or boundary expression.

victim_distress:
Explicit discomfort, fear, refusal, request to stop, attempt to exit.

refusal_ignored:
Harasser continues inappropriate behavior AFTER refusal/distress.

threat:
Explicit or implied harm, retaliation, or unsafe environment creation.

---------------------------------------
ESCALATION LOGIC
---------------------------------------

Escalation is detected when:
- Solicitation → refusal → persistence
- Distress → continued inappropriate conduct
- Power imbalance + sexual remarks
- Attempts to exit blocked or minimized
- Repeated boundary violations

If escalation pattern exists:
- escalation_detected = true
- pattern_description must clearly describe the behavioral progression.

---------------------------------------
CONTEXT-SPECIFIC SEVERITY ADJUSTMENTS
---------------------------------------

VTC:
- Confined physical environment
- Limited ability to exit
- High safety sensitivity
Victim distress here significantly increases risk.
Physical exit requests elevate severity.

Meeting:
- Workplace policies apply
- Power hierarchy matters
Sexual remarks from senior to junior increase severity.

LiveStream:
- Public humiliation risk
- Audience amplification
Harassment in front of viewers increases reputational harm risk.

E-Learning:
- Instructor-student imbalance
- Minor protection sensitivity
Any sexualization involving minors = CRITICAL.

CorporateOffice:

HR and workplace conduct standards apply

Peer-to-peer harassment still high risk

Manager → subordinate increases severity

Persistent comments create hostile work environment risk

Sexual jokes in professional setting elevate severity

OnlineGaming:

Often anonymous but still actionable misconduct

Repeated sexual remarks or targeting of a player increases severity

Gender-targeted harassment is high risk

Public voice channel humiliation increases escalation score

Threats involving doxxing or stalking = critical

CallCenter:

Recorded compliance environment

Power imbalance may be reversed (customer harassing agent)

Persistent sexual remarks toward agent elevate severity

If agent harasses customer → high corporate liability

Distress from agent indicates unsafe work environment

Telemedicine:

Medical ethics and professional conduct apply

Provider → patient sexual remarks = high or critical

Vulnerable patient context increases severity

Requests for unnecessary personal/sexual info escalate risk

Any sexualization of minors = critical
---------------------------------------
SEVERITY SCALE
---------------------------------------

low:
Isolated mild comment, no distress.

medium:
Clear inappropriate content, no escalation.

high:
Persistent behavior, power imbalance, explicit content.

critical:
Victim distress + persistence,
Threats,
Physical safety risk,
Minor involvement,
Coercion or intimidation.

---------------------------------------
FOR EACH FLAGGED SEGMENT RETURN:
---------------------------------------

- timestamp
- speaker ("victim" | "harasser" | "bystander" | "unknown")
- text
- category
- severity (low | medium | high | critical)
- confidence (0.0–1.0)
- explanation (brief behavioral reasoning)

---------------------------------------
TOP-LEVEL FIELDS REQUIRED:
---------------------------------------

- escalation_detected (boolean)
- pattern_description (string or null)
- distress_detected (boolean)
- context_analysis (2–3 sentences explaining risk within provided context)
- summary (2–3 sentence executive-level risk summary)
- recommended_action (1–2 actionable sentences aligned with severity and context)

---------------------------------------
RECOMMENDATION RULES
---------------------------------------

- Must be actionable
- Must align with severity and context
- No policy language
- No repetition of summary
- Focus on intervention, reporting, monitoring, or escalation
---------------------------------------
NO HARASSMENT CONDITION
---------------------------------------

If no sexual harassment behavior, escalation, boundary violation, or victim distress is detected:

- Return "analysis" as an empty array []
- escalation_detected = false
- distress_detected = false
- pattern_description = null
- context_analysis must briefly state that no harassment indicators were detected in the provided context
- summary must clearly state that no sexual harassment risk was identified
- recommended_action must state that no action is required at this time

Do NOT fabricate minor issues.
Do NOT over-classify neutral interactions.
False positives must be avoided.

OUTPUT LANGUAGE REQUIREMENT
---------------------------------------

The analysis output MUST be written entirely in ${OUTPUT_LANGUAGE}.

Rules:
- JSON keys MUST remain in English.
- JSON structure MUST NOT change.
- All human-readable fields MUST be in ${OUTPUT_LANGUAGE}:
  - explanation
  - pattern_description
  - context_analysis
  - summary
  - recommended_action

Do NOT translate category names or severity labels.
Do NOT mix languages.
Do NOT output English if ${OUTPUT_LANGUAGE} is French.
---------------------------------------
OUTPUT FORMAT
---------------------------------------

Return STRICT JSON:

{
"detected_context": "string",
  "analysis": [],
  "escalation_detected": boolean,
  "pattern_description": string | null,
  "distress_detected": boolean,
  "context_analysis": string,
  "summary": string,
  "recommended_action": string
}

NO markdown.
NO backticks.
NO additional commentary.

---------------------------------------
CONVERSATION TRANSCRIPT:
---------------------------------------

${segments.map(s => `[${s.timestamp}] ${s.text}`).join("\n")}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }]
  });

  const content = response.choices[0].message.content;

  try {
    return extractJson(content);
  } catch (err) {
    console.error("❌ JSON parse failed");
    console.error("Raw LLM response:\n", content);
    throw new Error("Invalid analysis response from AI");
  }
}
