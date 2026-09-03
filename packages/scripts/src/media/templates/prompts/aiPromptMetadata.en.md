Goal: Generate a document metadata object in valid JSON format for an AI coding assistant.

CRITICAL RESTRICTIONS:
- The output MUST be a valid JSON object with keys: "name" and "description".
- Field "name": Short and concise document title (maximum 4-5 words).
- Field "description": Short and concise description for an AI agent explaining what exact standards, rules, or tools this file contains and what commercial or technical task it solves (must be short, maximum 15-20 words).
- Do NOT include markdown code block wrappers (```json). Return ONLY the raw JSON string.

EXAMPLES OF GOOD OUTPUT:
{
  "name": "Coding Standards",
  "description": "Строгие архитектурные конвенции и стандарты написания кода для продукта"
}

OUTPUT REQUIREMENTS:
Return ONLY the JSON object. No explanations, no markdown formatting, no conversational text.
