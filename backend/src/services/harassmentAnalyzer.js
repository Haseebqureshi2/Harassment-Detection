import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/* ------------------------------------------------------- */
/* UTIL: JSON EXTRACTION                                   */
/* ------------------------------------------------------- */

function extractJson(content) {
  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

/* ------------------------------------------------------- */
/* STEP 1 — DETECTION ENGINE                               */
/* Detect context + harassment signals                     */
/* ------------------------------------------------------- */

async function detectHarassmentSignals(segments) {

const prompt = `
You are a harassment signal detection system used in safety monitoring.

Your role is to detect ANY potential harassment signals in a conversation transcript.

This stage prioritizes HIGH RECALL.
If a segment may indicate harassment behavior,
it should be flagged.

Later systems will evaluate severity and risk.

---------------------------------------
YOUR TASK
---------------------------------------

1. Identify the likely interaction context.
2. Detect behavioral signals of harassment.

Do NOT calculate severity.
Do NOT summarize the conversation.
---------------------------------------
CONTEXT DETECTION
---------------------------------------

Infer the MOST LIKELY interaction environment from the transcript.

You must attempt context inference even if signals are weak.

Do NOT default to "Unknown" unless there is truly no evidence.

Possible contexts include:

VTC
CorporateOffice
Meeting
LiveStream
E-Learning
OnlineGaming
CallCenter
Telemedicine

These represent common environments but are not exhaustive.

---------------------------------------
CONTEXT INFERENCE STRATEGY
---------------------------------------

Use conversational clues such as:

• roles between speakers  
• references to location or service  
• professional language or hierarchy  
• audience interaction  
• gameplay or streaming terminology  
• customer service patterns  
• medical or educational dialogue  

Even small clues may indicate the likely environment.

---------------------------------------
CONTEXT CLUE EXAMPLES
---------------------------------------

VTC
transportation, pickup/dropoff discussion, directions,
driver-passenger interaction, references to rides.

CorporateOffice
coworker interaction, workplace tasks, professional language,
references to managers, HR, deadlines, projects.

Meeting
structured discussion, multiple speakers presenting ideas,
agenda or formal discussion tone.

LiveStream
references to audience, viewers, chat, donations,
or performing for an online audience.

E-Learning
teacher-student interaction, learning explanations,
homework, lessons, instruction.

OnlineGaming
game terminology, teammates, voice chat coordination,
player interaction during gameplay.

CallCenter
customer support interaction, problem resolution,
service requests, scripted assistance language.

Telemedicine
medical consultation, symptoms, diagnosis,
health advice, doctor-patient discussion.

---------------------------------------
INFERENCE RULE
---------------------------------------

Choose the MOST LIKELY context based on available evidence.

If multiple contexts could apply,
select the one that best fits the conversation structure.

---------------------------------------
UNKNOWN CONDITION
---------------------------------------

Return "Unknown" ONLY if the conversation contains
no contextual clues at all about the interaction setting.

Examples of when Unknown is acceptable:

• very short conversations
• purely casual chat without environmental signals
• incomplete transcripts

---------------------------------------
RETURN FORMAT
---------------------------------------

"detected_context": "string"

---------------------------------------
HARASSMENT SIGNAL CATEGORIES
---------------------------------------

Allowed categories:

compliment  
solicitation  
objectification  
sexual_explicit  
coercion  
intimidation  
boundary_violation  
victim_distress  
refusal_ignored  
threat  

---------------------------------------
BEHAVIORAL INTERPRETATION RULES
---------------------------------------

You must detect harassment based on BEHAVIORAL PATTERNS,
not only explicit sexual language.

Consider the following patterns.

---------------------------------------

SOLICITATION

Attempts to initiate romantic, sexual, or private interaction.

This includes:

• requesting personal contact information  
• requesting to meet privately  
• asking someone to come to a private place  
• expressing romantic or sexual interest toward the other person  
• suggesting spending time alone  

The wording may be indirect or casual.

---------------------------------------

OBJECTIFICATION

Sexualized focus on someone's body or appearance.

---------------------------------------

SEXUAL_EXPLICIT

Direct sexual language or propositions.

---------------------------------------

COERCION

Pressure applied after hesitation or refusal.

---------------------------------------

INTIMIDATION

Insults, degrading language, humiliation, or aggressive tone.

---------------------------------------

BOUNDARY VIOLATION

Familiar or personal remarks after discomfort is expressed.

---------------------------------------

VICTIM DISTRESS

Statements indicating discomfort, confusion, refusal, or resistance.

Examples of signals:

• asking someone to repeat themselves
• questioning inappropriate behavior
• expressing refusal
• expressing confusion or discomfort

---------------------------------------

REFUSAL IGNORED

The same request or inappropriate behavior continues after
the other person shows discomfort or refusal.

---------------------------------------

THREAT

Statements implying harm, retaliation, or unsafe consequences.

---------------------------------------
PERSISTENCE DETECTION
---------------------------------------

If a person repeats requests for:

• personal contact
• meeting privately
• romantic or sexual interaction

across multiple segments,
each instance should be flagged as solicitation.

---------------------------------------
LOW CONFIDENCE RULE
---------------------------------------

If a segment might indicate harassment but certainty is low,
still include it with lower confidence (0.4–0.6).

Do not ignore possible signals.

---------------------------------------
ROLE IDENTIFICATION
---------------------------------------

speaker must be one of:

victim
harasser
bystander
unknown

The speaker initiating inappropriate behavior
is usually the harasser.

---------------------------------------
FOR EACH SIGNAL RETURN
---------------------------------------

- timestamp
- speaker
- text
- category
- confidence (0.0–1.0)

---------------------------------------
OUTPUT FORMAT
---------------------------------------

Return STRICT JSON:

{
  "detected_context": "string",
  "analysis": [
    {
      "timestamp": "",
      "speaker": "",
      "text": "",
      "category": "",
      "confidence": 0.0
    }
  ]
}

---------------------------------------
TRANSCRIPT
---------------------------------------

${segments.map(s => `[${s.timestamp}] ${s.text}`).join("\n")}

`;


  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }]
  });

  const content = response.choices[0].message.content;

  return extractJson(content);
}

/* ------------------------------------------------------- */
/* STEP 2 — RISK SCORING ENGINE                            */
/* Calculate escalation + severity + summary               */
/* ------------------------------------------------------- */

async function scoreHarassmentRisk(detectionResult, language = "en") {

  const OUTPUT_LANGUAGE = language === "fr" ? "French" : "English";

  const prompt = `
You are an enterprise harassment risk scoring engine.

Your task is to analyze previously detected harassment signals.

Input includes:
- detected_context
- detected signals

You must evaluate:

• escalation patterns
• victim distress
• severity reasoning
• context safety risks

---------------------------------------
SEVERITY SCALE
---------------------------------------

low
medium
high
critical

---------------------------------------
ESCALATION RULES
---------------------------------------

Escalation exists when:

- solicitation → refusal → persistence
- distress → continued conduct
- power imbalance + sexual remarks
- repeated boundary violations
- threats

---------------------------------------
OUTPUT LANGUAGE
---------------------------------------

Write all explanations in ${OUTPUT_LANGUAGE}.

JSON keys remain English.

---------------------------------------
OUTPUT FORMAT
---------------------------------------

Return STRICT JSON:

{
"detected_context": "string",
"analysis": [
  {
    "timestamp": "",
    "speaker": "",
    "text": "",
    "category": "",
    "severity": "",
    "confidence": 0.0,
    "explanation": ""
  }
],
"escalation_detected": boolean,
"pattern_description": string | null,
"distress_detected": boolean,
"context_analysis": "",
"summary": ""
}

---------------------------------------
INPUT DETECTION DATA
---------------------------------------

${JSON.stringify(detectionResult, null, 2)}

Rules:

If analysis is empty:

- escalation_detected = false
- distress_detected = false
- pattern_description = null

context_analysis should state no harassment signals detected.

summary should state conversation appears respectful.

Return valid JSON only.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }]
  });

  const content = response.choices[0].message.content;

  return extractJson(content);
}

/* ------------------------------------------------------- */
/* MAIN PIPELINE                                           */
/* ------------------------------------------------------- */

export async function analyzeHarassment(segments, language = "en") {

  /* STEP 1: detection */

  const detection = await detectHarassmentSignals(segments);

  /* STEP 2: risk scoring */

  const finalAnalysis = await scoreHarassmentRisk(detection, language);

  return finalAnalysis;
}