Goal: Generate a document metadata object in valid JSON format for an AI coding assistant.

CRITICAL RESTRICTIONS:
- Language: All fields ("name" and "description") MUST be strictly in English.
- The output MUST be a valid JSON object with keys: "name" and "description".
- Field "name": Short and concise document title strictly in English (maximum 4-5 words).
- Field "description": Short and concise description strictly in English for an AI agent explaining what exact standards, rules, or tools this file contains and what commercial or technical task it solves (must be short, maximum 15-20 words).
- Do NOT include markdown code block wrappers (```json). Return ONLY the raw JSON string.

EXAMPLES OF GOOD OUTPUT:
{
  "name": "Coding Standards",
  "description": "Strict architectural conventions and code authoring standards for the product"
}

OUTPUT REQUIREMENTS:
Return ONLY the JSON object. No explanations, no markdown formatting, no conversational text.
