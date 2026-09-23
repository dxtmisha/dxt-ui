---
name: doc-component
description: Generate bilingual component descriptions and MDX documentation in packages/wiki (descriptions, MDX mappings, events, slots, stories, and Storybook integration).
---

# Task: Component Documentation & Descriptions Generation (Wiki)

Act as a documentation specialist for the `dxt-ui` design system and component constructor.
Your goal is to generate complete, industrial-grade bilingual documentation (English and Russian) in `packages/wiki` for UI components based on `@dxtmisha/constructor`.

---

## Architecture & Directory Structure

All documentation resides in `packages/wiki/src/media/`:

```text
packages/wiki/src/media/
├── mdx/
│   ├── [Component]/
│   │   ├── [component].en.mdx               # Main English description
│   │   ├── [component].ru.mdx               # Main Russian description
│   │   ├── event.<eventName>.en.mdx         # (Optional) Local event in English
│   │   ├── event.<eventName>.ru.mdx         # (Optional) Local event in Russian
│   │   └── wikiMdx[Component].ts            # MDX mapping export
│   └── wikiMdx.ts                           # Global MDX aggregator
└── descriptions/
    ├── wikiDescriptions[Component].ts       # Metadata, stories, documentation links
    └── wikiDescriptions.ts                  # Global descriptions aggregator
```

---

## Step-by-Step Implementation Workflow

### Step 1: Component Analysis
Examine the constructor files in `packages/constructor/src/constructors/[Component]/`:
1. `props.ts`: base properties, tokens, and included features (`EnabledProps`, `FieldLabelPropsInclude`, `FieldMessagePropsInclude`, `SkeletonPropsInclude`, etc.).
2. `types.ts`:
   - Component emits (`[Component]Emits`): identify unique/component-specific events.
   - Exposed methods (`[Component]Expose`): identify programmatic methods (e.g., `open`, `clear`).
   - Component slots (`[Component]Slots`): identify supported slots (e.g., `default`, `label`, `prefix`).
3. Core orchestrator `[Component].ts` and `[Component]Design.tsx`.

---

### Step 2: Main Component MDX Documentation

Create `packages/wiki/src/media/mdx/[Component]/[component].en.mdx` and `[component].ru.mdx`:

#### Critical Rules for Main MDX Files:
- **NO Headers at the top**: The file must start directly with the descriptive paragraph. **STRICTLY FORBIDDEN** to include `## Description`, `## Описание`, or `# [Component]`.
- Always import Storybook Source block: `import { Source } from '@storybook/addon-docs/blocks';`.
- Follow the standard sections:
  1. Concise introductory paragraph followed by a detailed architecture overview.
  2. `**Key features:**` (EN) / `**Основные возможности:**` (RU) bullet points with bold key concepts.
  3. `**Common use cases:**` (EN) / `**Типовые сценарии использования:**` (RU) bullet points.
  4. `<Source code={`...`} language="html"/>` block with clean, realistic usage markup.
  5. Concluding blockquote summary: `> [Component] ...`.

**Example (`[component].en.mdx`):**
```mdx
import { Source } from '@storybook/addon-docs/blocks';

The `InputFileDropzone` component is a form control that pairs a drag-and-drop file upload zone with integrated field label and message containers.

It encapsulates the complete file dropping and selection pipeline into a ready-to-use input field...

**Key features:**

- **Interactive File Upload:** Drag-and-drop file upload zone with click-to-browse file dialog
- **Single & Multiple Selection:** Configurable single or multi-file selection via `multiple` prop
- **Field Anatomy Integration:** Cohesive integration with field label, counter, and validation messages

**Common use cases:**

- Document and attachment upload inputs in forms
- Image collection and resume upload fields

<Source
    code={`
<template>
  <InputFileDropzone
    label="Upload documents"
    accept=".pdf,.docx"
    @add="onAdd"
  />
</template>
  `}
    language="html"
/>

> InputFileDropzone combines intuitive drag-and-drop file selection with form field ergonomics and accessibility standards.
```

---

### Step 3: Event MDX Documentation (Component-Specific Events)

- **Standard Global Events**: Events such as `click`, `input`, `change`, `focus` are already defined globally in `packages/wiki/src/media/mdx/event/` under `'Event'`. Do **NOT** create local MDX files for them.
- **Component-Specific Events**: For events unique to the component (e.g., `add`, `close`, `sticky`):
  - File naming: **strictly singular** `event.<eventName>.en.mdx` and `event.<eventName>.ru.mdx` (e.g., `event.add.en.mdx` / `event.add.ru.mdx`).
  - Structure:
    1. Import `Source`.
    2. Header with the event name: `### \`<eventName>\``.
    3. Brief explanation of when the event triggers.
    4. `**Parameters:**` / `**Параметры:**` list with type signatures.
    5. `<Source>` code example.

---

### Step 4: MDX Mapping (`wikiMdx[Component].ts`) & Aggregator Registration

Create `packages/wiki/src/media/mdx/[Component]/wikiMdx[Component].ts`:
```typescript
import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputFileDropzoneEn from './inputFileDropzone.en.mdx'
import inputFileDropzoneRu from './inputFileDropzone.ru.mdx'
import inputFileDropzoneAddEn from './event.add.en.mdx'
import inputFileDropzoneAddRu from './event.add.ru.mdx'

/**
 * MDX files for InputFileDropzone component
 *
 * MDX файлы для компонента InputFileDropzone
 */
export const wikiMdxInputFileDropzone: StorybookComponentsMdxItem = {
  name: 'InputFileDropzone',
  descriptions: {
    'inputFileDropzone': {
      en: inputFileDropzoneEn,
      ru: inputFileDropzoneRu
    },
    'event.add': {
      en: inputFileDropzoneAddEn,
      ru: inputFileDropzoneAddRu
    }
  }
}
```

**Register in `packages/wiki/src/media/mdx/wikiMdx.ts`:**
- Import `wikiMdx[Component]` and insert it into the `wikiMdx` array in **strict alphabetical order**.

---

### Step 5: Component Descriptions (`wikiDescriptions[Component].ts`)

Create `packages/wiki/src/media/descriptions/wikiDescriptions[Component].ts`:

#### Key Guidelines for Descriptions:
1. **No Unnecessary Wrappers**: Keep story templates minimal and clean. Do not wrap `<DesignComponent>` in unnecessary nested `wiki-storybook-item` container divs unless an absolute layout constraint requires it.
2. **Standard Slots**: Never create local MDX files for standard slots (`default`, `label`, `body`, `caption`, `description`, etc.). Link them using the global `'Slot'` component:
   `<StorybookDescriptions componentName={'Slot'} type={'default'}/>`
   `<StorybookDescriptions componentName={'Slot'} type={'label'}/>`
3. **Exposed Methods**: Link standard exposed methods using the global `'Expose'` component:
   `<StorybookDescriptions componentName={'Expose'} type={'open'}/>`
4. **Events Linking**:
   - Local events: `<StorybookDescriptions componentName={'[Component]'} type={'event.<eventName>'}/>`
   - Global events: `<StorybookDescriptions componentName={'Event'} type={'input'}/>`
5. **No D1 References**: Document strictly constructor-level baseline capabilities. Never mention `D1` component prefixes, D1 package classes, or D1-specific size modifiers (`sm`, `md`, `lg`).
6. **AI Section**: Provide a concise summary description; set `hide: true` for auxiliary/composite controls or when an isolated preview demo is not required.

**Example Structure:**
```typescript
import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputFileDropzone component properties
 *
 * Описания свойств компонента InputFileDropzone
 */
export const wikiDescriptionsInputFileDropzone: StorybookComponentsDescriptionItem = {
  name: 'InputFileDropzone',
  description: {
    en: 'Composite file dropzone input with integrated label, message containers, and drag-and-drop upload',
    ru: 'Составной компонент поля сброса файлов со встроенной меткой, блоком сообщений и загрузкой через Drag and Drop'
  },
  possibilities: {
    en: [
      'integrated drag-and-drop file upload via embedded Dropzone',
      'supports single and multiple file selection',
      'file type filtering via accept prop',
      'file size threshold filtering via maxFileSize prop',
      'integrated field label (FieldLabel) and validation/helper messages (FieldMessage)',
      'emits add event with filtered valid File array',
      'programmatic control with open() method',
      'accessible ARIA attribute bindings (aria-labelledby, aria-describedby)',
      'support for disabled, readonly, and skeleton states'
    ],
    ru: [
      'интегрированная загрузка файлов через Drag and Drop во встроенном Dropzone',
      'поддержка одиночного и множественного выбора файлов',
      'фильтрация типов файлов с помощью свойства accept',
      'ограничение размера файла с помощью свойства maxFileSize',
      'встроенная метка поля (FieldLabel) и блок сообщений/валидации (FieldMessage)',
      'вызов события add с отфильтрованным массивом валидных файлов File',
      'программное управление через метод open()',
      'поддержка атрибутов доступности ARIA (aria-labelledby, aria-describedby)',
      'поддержка состояний disabled, readonly и skeleton'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'InputFileDropzoneBasic',
      name: {
        en: 'Basic usage & Add event',
        ru: 'Базовое использование и событие Add'
      },
      setup: `
      const files = ref([])
      const onAdd = (newFiles) => {
        files.value = [...files.value, ...newFiles]
      }
      return { files, onAdd }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
          </div>
          <DesignComponent
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            :maxFileSize="5242880"
            @add="onAdd"
          />
        </div>
      `
    },
    {
      id: 'InputFileDropzoneSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton label="Drop files here" />
        </DesignSkeleton>
      `
    },
    {
      id: 'InputFileDropzoneSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #label>
            <strong>Custom Document Label</strong>
          </template>
          <template #default>
            <em>Custom dropzone content slot</em>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputFileDropzone'} type={'inputFileDropzone'}/>
<Canvas of={Component.InputFileDropzoneBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputFileDropzoneSkeleton}/>
    `,
    slots: `
<Canvas of={Component.InputFileDropzoneSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputFileDropzone'} type={'event.add'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
    `
  },
  ai: {
    description: `
Form control component combining a file dropzone with field label and message containers.
Integrates Dropzone for drag-and-drop and file dialog selection, FieldLabel for input headings, and FieldMessage for validation errors and helper texts.
Controlled via accept, multiple, maxFileSize, label, helperMessage, and validationMessage props. Emits add event with filtered valid File array when files are dropped or selected. Exposes open() method to programmatically trigger file dialog.
    `,
    hide: true
  }
}
```

**Register in `packages/wiki/src/media/descriptions/wikiDescriptions.ts`:**
- Import `wikiDescriptions[Component]` and insert it into the `wikiDescriptions` array in **strict alphabetical order**.

---

### Step 6: Build & D1 Synchronization

1. **Build `packages/wiki`**:
   ```bash
   cd packages/wiki && npm run prepublishOnly
   # or from root:
   npm run build-packages
   ```
   Ensure `vue-tsc` and `vite build` complete without errors.

2. **Generate D1 Component** (if integrating into `@dxtmisha/d1`):
   ```bash
   cd packages/d1 && dxt-ui --name [Component]
   # or configure "ui": "dxt-ui --name [Component]" in packages/d1/package.json and run:
   npm run ui
   ```
   This automatically scaffolds and regenerates D1 component files (`properties.json`, `props.ts`, `D1[Component].vue`, `D1[Component].stories.ts`, `D1[Component].mdx`, etc.).
