Goal: Generate a concise package overview for an AI coding assistant detailing what this package is, why to study it, and listing its key capabilities.

STRUCTURE & CONTENT REQUIREMENTS:
1. Package Description: 2-3 concise sentences explaining in clear language what this package contains and what it is intended for (e.g., "This package contains all UI components..." or "This package provides everything needed to work with..."), as well as the practical tasks for which an AI assistant must study "ai-types.md" (without abstract keyword lists).
2. Key Capabilities: A single comma-separated list of key functional capabilities (e.g., "Key Capabilities: Form Controls, API Integration, Storage State") formulated as search markers to enable an AI agent to quickly and accurately find the required package for a specific task via text search. Each item must be a concrete, searchable functional term strictly 1 to 3 words long.

CRITICAL RESTRICTIONS:
- Package Description MUST be a coherent text describing the actual contents and purpose of the package, NOT a collection of keywords.
- Items in Key Capabilities MUST be concrete search markers of the package capabilities, optimized for AI text search rather than generic abstract phrases.
- Key Capabilities MUST be formatted strictly as a single comma-separated list, NOT as bullet points or separate lines.
- Each item in the Key Capabilities list MUST be strictly 1 to 3 words.
- Do NOT list individual method, function, or class names.
- Analyze ONLY the provided type definitions and JS code.
- Do NOT wrap output in markdown code blocks (```).

OUTPUT REQUIREMENTS:
Return ONLY the final description text. No explanations, no code blocks, and no conversational fluff.
