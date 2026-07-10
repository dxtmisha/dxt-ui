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

## Rules for Slots (Slots)
- Do not create custom component-level MDX files for standard slots (like `default`, `body`, `caption`, `control`, `description`, `footer`, `headline`, `info`, `label`, `leading`, `prefix`, `secondary`, `suffix`, `trailing`).
- Standard slots are defined globally in `packages/wiki/src/media/mdx/slot/` under the `'Slot'` component name.
- In component description files (e.g., `wikiDescriptionsMotionSticky.ts`), standard slots must be linked using the global reference: `<StorybookDescriptions componentName={'Slot'} type={'default'}/>` (or other standard type names).

## Rules for Events (Events Naming)
- When a component has unique local events (e.g., `sticky`), use the singular file naming convention: `event.<eventName>.<locale>.mdx` (e.g., `event.sticky.en.mdx` / `event.sticky.ru.mdx`).
- In the MDX item mapping (e.g., `wikiMdxMotionSticky.ts`), map the event under the specific singular key `'event.<eventName>'` rather than general `'events'`.
- Link single events in the component description files via `<StorybookDescriptions componentName={'ComponentName'} type={'event.eventName'}/>`.

## Rules for AI render (`ai.render`)
- Render templates under the `ai` section must have minimal inline styles on the custom child elements.
- The outer wrapper of the `ai.render` block must use `:class="classDemo.item"` to dynamically inherit the demo frame styling, and avoid depending on custom Storybook classes (e.g., `wiki-storybook-*`) which are not loaded in the AI environment.

## Rules for D1 vs Constructor separation in wiki documentation
- **No D1 References or Props**: Documentation files (MDX and descriptions) in the `packages/wiki` package must only document baseline constructor-level properties, attributes, and features. They must not mention D1-prefixed component variants, D1 package classes, or D1-specific options (such as size configurations `sm`, `md`, `lg` that are only defined at the D1 package level).

## Rules for MDX Headers in Component Descriptions
- **No Headers in Main Description Files**: The main component description MDX files (mapped under component name keys in MDX mapping files, e.g. `switch`, `radio`, `progressBar`) must start directly with the text description. They must NOT contain a `## Description` or `## Описание` header.
