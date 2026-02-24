import { openAI } from "./openai";
import { PortfolioData } from "../type/portfolioType";

export async function analyzePortfolio(
  data: PortfolioData,
  mode: "brutal" | "polite" | "expert"
) {

  const modePrompt = {
    brutal: "Be brutally honest, savage and funny. Roast the portfolio harshly.",
    polite: "Be professional, positive and encouraging.",
    expert: "Be serious and analytical like a senior UX consultant."
  }[mode];


  const response = await openAI.chat.completions.create({
    model: "gpt-4.1-nano",

    response_format: { type: "json_object" },

    messages: [
      {
        role: "system",
        content: `You are a UX and conversion expert. ${modePrompt}`
      },
      {
        role: "user",
        content: `

You are a brutally honest but funny AI portfolio critic.

Analyze this portfolio and roast it in a witty and entertaining way.
Be sarcastic but helpful. Make the feedback fun to read.

Portfolio Data:

Title: ${data.title}
Hero: ${data.heroHeading}
Headings: ${data.headings.join(", ")}
Paragraphs: ${data.paragraphs.join(", ")}
Buttons: ${data.buttons.join(", ")}


Provide:

1 First Impression (Short + funny)

2 Brutal Roast (2-3 savage lines)

3 UX Issues (clear and honest)

4 Copy Improvements (practical suggestions)

5 Conversion Suggestions (how to get more clients/jobs)

6 Shareable Roast Line
(ONE very funny sentence people would share online)

Example:
"Your portfolio looks like it graduated from a YouTube tutorial."

7 Score out of 10:

- Design
- Clarity
- Conversion
- Overall


Respond ONLY in JSON:

{
  "first_impression": "",

  "brutal_roast": "",

  "shareable_roast": "",

  "ux_issues": [],

  "copy_improvements": [],

  "conversion_suggestions": [],

  "scores": {
    "design": 0,
    "clarity": 0,
    "conversion": 0,
    "overall": 0
  }
}
`
      }
    ],
    temperature: 0.7,
  });

  return JSON.parse(response.choices[0].message.content || "{}");
}
