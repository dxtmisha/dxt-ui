# Class Documentation Guidelines (.mdx)

When writing documentation for classes (e.g., `Api`, `ApiCache`, `ApiStatus`), strictly adhere to the separation of short and long versions:

**1. Short Version (Methods Reference)**
Must be placed in a single `## Methods` section.
- Methods are logically grouped under third-level headings (e.g., `### Action`, `### Configuration`, `### Accessors`).
- Each method is described using a bulleted list in the format:
  `- method<T>(arg: Type): ReturnType — Brief description.` (the signature must be highlighted with inline code).

**2. Long Version (Detailed Guide)**
- Placed as independent second-level sections (e.g., `## Initialization and external storage`, `## Architecture`).
- Contains a detailed text explanation of the logic.
- Important concepts and warnings are highlighted with a blockquote: `> Important: ...`
- Must be accompanied by code example blocks: ` ```javascript ... ``` `.

## Rules for Events (Events)
- Component-specific events (e.g., `close`) must be described in the local component folder (e.g., `packages/wiki/src/media/mdx/Alert`) and registered in the corresponding MDX mapping (e.g., `wikiMdxAlert.ts`) under the `'event.<eventName>'` key (e.g., `'event.close'`).
- MDX filenames for local events must be in the singular form `event.<eventName>.<locale>.mdx` (e.g., `event.close.en.mdx` / `event.close.ru.mdx`).
- In descriptions files (e.g., `wikiDescriptionsAlert.ts`), such events are linked via `<StorybookDescriptions componentName={'ComponentName'} type={'event.eventName'}/>`.
