Task Goal:
The primary goal is to write comprehensive, high-quality documentation for the Vue 3 component.

Component Resolution & Analysis:
If the component source files are not directly attached, they are located in the parent directory (one folder above this "wiki" folder). Locate and study the main Vue file, types/props, styles, and dependencies until you fully understand how the component works. Once you have a complete understanding of its behavior and interface, further deep-dive study of outer dependencies is not required.

Mandatory Instruction:
You must read and deeply study the detailed descriptions, rules, coding standards, and templates specified in:
node_modules/@dxtmisha/scripts/src/media/templates/prompts/componentPrompt.en.txt

You must strictly follow those instructions. However, make sure you save your outputs in the correct target locations:
- Documentation & playground changes (including MDX files and `stories.ts` playground configurations) must be saved inside this current directory (the "wiki" folder).
- Component source changes (including Vue SFC and typings/properties files) must be saved inside the parent directory (one level up from this current directory).
- Note: You must completely ignore any instructions or constraints in `componentPrompt.en.txt` regarding how the final result/output should be returned or structured (specifically ignore rules 5-8, the requirement to split the response into 5 parts separated by "#########", and the prohibition on writing or modifying files). Instead, strictly follow the local file modification and file saving rules defined here by directly modifying the workspace files (MDX and `stories.ts` in the current folder, and Vue SFC and `types.ts` in the parent folder).

All constraints, formatting standards, and styling helper classes described in that file must be adhered to without exception.
(Warning: If this file is not accessible, missing, or cannot be read, you do not need to study or follow the instructions from it; instead, proceed with standard high-quality documentation practices.)

---
CRITICAL PRIORITY RULE:
Everything below this line has a higher priority than the text above it.
