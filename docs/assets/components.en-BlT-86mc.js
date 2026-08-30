import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/4. Component Creation`}),`
`,(0,c.jsx)(t.h1,{id:`component-creation-and-development`,children:`Component Creation and Development`}),`
`,(0,c.jsxs)(t.p,{children:[`In the `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` design system, the process of creating new components is fully automated using the `,(0,c.jsx)(t.code,{children:`dxt-component`}),` CLI tool. Developers no longer need to manually construct folder trees, configure boilerplate files, manage barrel exports, or configure Storybook setups.`]}),`
`,(0,c.jsx)(t.p,{children:`The tool handles the routine and scaffolds a standard architecture for every new component in a fraction of a second.`}),`
`,(0,c.jsx)(t.h2,{id:`key-advantages`,children:`Key Advantages`}),`
`,(0,c.jsx)(t.h3,{id:`1-standard-architecture-with-zero-boilerplate`,children:`1. Standard Architecture with Zero Boilerplate`}),`
`,(0,c.jsxs)(t.p,{children:[`Instead of manually writing files with complex imports and bindings, the developer only needs to create a single empty directory. `,(0,c.jsx)(t.code,{children:`dxt-component`}),` automatically generates the entire standard file set, eliminating typos in BEM classes, paths, and interface names.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-strict-typing-via-definesetupfncomponent`,children:[`2. Strict Typing via `,(0,c.jsx)(t.code,{children:`DefineSetupFnComponent`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The generated `,(0,c.jsx)(t.code,{children:`index.ts`}),` entry point uses Vue 3 utility types to provide comprehensive IDE IntelliSense and strict validation of props, slots, and emits in project templates.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-native-integration-with-storybook-and-ai`,children:`3. Native Integration with Storybook and AI`}),`
`,(0,c.jsxs)(t.p,{children:[`Every newly generated component is immediately runnable in Storybook and includes dedicated `,(0,c.jsx)(t.code,{children:`prompt.md`}),` instructions for AI-assisted workflows.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-by-step-guide-what-to-do`,children:`Step-by-Step Guide (What to Do)`}),`
`,(0,c.jsx)(t.h3,{id:`step-1-create-an-empty-component-folder`,children:`Step 1. Create an Empty Component Folder`}),`
`,(0,c.jsxs)(t.p,{children:[`Inside `,(0,c.jsx)(t.code,{children:`src/components/`}),`, create a new empty directory named after your component in PascalCase (e.g., `,(0,c.jsx)(t.code,{children:`Badge`}),` or `,(0,c.jsx)(t.code,{children:`UserAvatar`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`mkdir src/components/Badge
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-2-run-the-scaffolding-command`,children:`Step 2. Run the Scaffolding Command`}),`
`,(0,c.jsxs)(t.p,{children:[`Execute `,(0,c.jsx)(t.code,{children:`dxt-component`}),` in your terminal:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(t.p,{children:`The generator automatically discovers the empty folder and generates all necessary files:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Component create: Badge
path: Badge
end
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-3-inspect-the-generated-structure`,children:`Step 3. Inspect the Generated Structure`}),`
`,(0,c.jsx)(t.p,{children:`Inside the component folder, 8 standard files are created:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`src/components/Badge/
├── Badge.vue                  # Vue 3 SFC component (<script setup>, types, styles)
├── index.ts                   # Entry point with DefineSetupFnComponent typing
├── types.ts                   # Interfaces for Props, Emits, Slots, and Defaults
├── materials/
│   └── prompt.md              # AI prompt for materials and implementation
├── subcomponents/
│   └── .gitignore             # Isolation for internal subcomponents
└── wiki/
    ├── Badge.mdx              # Storybook MDX documentation
    ├── Badge.stories.ts       # Interactive Storybook Vue 3 stories
    └── prompt.md              # AI prompt for Wiki documentation
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-4-define-component-props-and-types`,children:`Step 4. Define Component Props and Types`}),`
`,(0,c.jsxs)(t.p,{children:[`Open `,(0,c.jsx)(t.code,{children:`types.ts`}),` and define your component's input properties (`,(0,c.jsx)(t.code,{children:`Props`}),`), events (`,(0,c.jsx)(t.code,{children:`Emits`}),`), and slots (`,(0,c.jsx)(t.code,{children:`Slots`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`export type BadgeEmits = {
  click: [event: MouseEvent]
}

export interface BadgeSlots {
  default? (props: any): any
  icon? (props: any): any
}

export interface BadgeProps {
  label?: string
  color?: string
  outline?: boolean
}

export const BadgeDefaults: BadgeProps = {
  color: 'primary',
  outline: false
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-5-implement-template-and-styles`,children:`Step 5. Implement Template and Styles`}),`
`,(0,c.jsxs)(t.p,{children:[`Open `,(0,c.jsx)(t.code,{children:`Badge.vue`}),` and add your component logic and SCSS styles:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup lang="ts">
import {
  BadgeDefaults,
  type BadgeEmits,
  type BadgeProps,
  type BadgeSlots
} from './types'

defineOptions({
  name: 'Badge'
})

withDefaults(defineProps<BadgeProps>(), BadgeDefaults)
defineEmits<BadgeEmits>()
defineSlots<BadgeSlots>()
<\/script>

<template>
  <div class="badge">
    <slot name="icon" />
    <slot>{{ label }}</slot>
  </div>
</template>

<style lang="scss">
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-6-configure-storybook-documentation-and-previews`,children:`Step 6. Configure Storybook Documentation and Previews`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`To generate stories and documentation, drag and drop `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` into the AI chat and ask to execute the task (if the send button in the chat window is active right away, you do not need to write anything).`]}),`
`,(0,c.jsxs)(t.li,{children:[`In `,(0,c.jsx)(t.code,{children:`wiki/Badge.stories.ts`}),`, configure interactive usage scenarios for the component.`]}),`
`,(0,c.jsxs)(t.li,{children:[`In `,(0,c.jsx)(t.code,{children:`wiki/Badge.mdx`}),`, add textual descriptions, property tables, and interactive demos.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Run Storybook (`,(0,c.jsx)(t.code,{children:`npm run storybook`}),`) to review your component live.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`working-with-the-materials-directory-design-materials`,children:`Working with the materials Directory (Design Materials)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`materials/`}),` directory is an isolated component workspace for collecting raw design assets, specifications, and development context:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`prompt.md`}),` file`]}),`: System instruction file for AI agents, automatically linked to design system standards (`,(0,c.jsx)(t.code,{children:`componentMaterials.md`}),`). The developer specifies Figma links, state descriptions, prop specs, and behavior rules here — everything the AI needs to know.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design assets and screenshots`}),`: Place Figma screenshots, SVG vectors, layouts, and component state diagrams here.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI-assisted development`}),`: Drag and drop `,(0,c.jsx)(t.code,{children:`materials/prompt.md`}),` into the AI chat and ask to execute the task (if the send button in the chat window is active right away, you do not need to write anything). The AI will generate component code according to your specifications.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Preserve design context`}),`: The folder remains in the repository as a persistent single source of truth for design decisions, enabling any future developer to quickly understand the original component intent.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`working-with-the-wiki-directory-documentation-and-storybook`,children:`Working with the wiki Directory (Documentation and Storybook)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`wiki/`}),` directory is a dedicated component space for interactive Storybook stories and technical documentation:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].mdx`}),` file`]}),`: Main MDX documentation article utilizing `,(0,c.jsx)(t.code,{children:`<StorybookMain />`}),` from `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki/storybook`}),`, complete with property descriptions and interactive demos.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].stories.ts`}),` file`]}),`: Executable Storybook Vue 3 stories showcasing various states, props, and component use cases.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`prompt.md`}),` file`]}),`: System instruction file for AI assistants, automatically linked to documentation standards (`,(0,c.jsx)(t.code,{children:`componentWiki.md`}),`). The developer can add any specific usage notes, edge cases, or documentation requirements here.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI-assisted generation`}),`: Drag and drop `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` into the AI chat and ask to execute the task (if the send button in the chat window is active right away, you do not need to write anything). The AI will analyze the component code and types to generate ready-to-use stories and documentation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`advantages-over-manual-creation`,children:`Advantages Over Manual Creation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Instant Speed`}),`: Generates all 8 files in under 1 second compared to 5–10 minutes of manual setup.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Complete Architecture`}),`: Scaffolds all necessary files automatically, including Storybook stories, strict types, and AI instructions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100% Code Precision`}),`: Eliminates typos in BEM classes, relative import paths, and interface names.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ready Out of the Box`}),`: The component can be previewed in Storybook immediately after creation.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};