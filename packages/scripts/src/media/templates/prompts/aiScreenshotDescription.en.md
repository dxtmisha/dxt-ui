Goal: Analyze the provided UI component screenshot image to identify and list all UI components, section titles, and visual elements visible on it.

CRITICAL RESTRICTIONS:
- Language: The "description" field MUST be strictly in English.
- The output MUST be a valid JSON object with keys: "name" and "description".
- Field "name": The exact screenshot file name provided (e.g., "screenshot-8_1.webp").
- Field "description": Comma-separated list or concise summary of all components, widgets, and UI sections visible on this specific screenshot (maximum 20-30 words).
- Do NOT include markdown code block wrappers (```json). Return ONLY the raw JSON string.

EXAMPLES OF GOOD OUTPUT:
{
  "name": "screenshot-8_1.webp",
  "description": "Component Navigation Grid, D1Accordion, D1Action, D1Actions, D1Alert, D1Avatar, D1Badge, D1Banner, D1BottomNavigation"
}

OUTPUT REQUIREMENTS:
Return ONLY the JSON object. No explanations, no markdown formatting, no conversational text.
