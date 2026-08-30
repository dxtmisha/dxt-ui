import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/1. Design System`}),`
`,(0,c.jsx)(t.h1,{id:`design-system-architecture-and-implementation-advantages`,children:`Design System Architecture and Implementation Advantages`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` package is the automation core and code generator of the `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` design system. It implements a cutting-edge architectural paradigm that strictly decouples abstract behavioral logic from visual presentation, automating the creation, binding, typing, and documentation of all components across the library.`]}),`
`,(0,c.jsx)(t.p,{children:`The primary goal of the system is to provide developers with a fully automated pipeline that eliminates boilerplate, prevents human error, and ensures end-to-end consistency between design, styling, component logic, and TypeScript types.`}),`
`,(0,c.jsx)(t.h2,{id:`architectural-diagram`,children:`Architectural Diagram`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`​
 ┌──────────────────────────────────────────────┐
 │ @dxtmisha/constructor (Headless Core)        │
 │ • Logic, WAI-ARIA A11y, state, focus         │
 └──────────────────────┬───────────────────────┘
                        │
                        │ + properties.json (Design tokens)
                        ▼
 ┌──────────────────────────────────────────────┐
 │ @dxtmisha/scripts (CLI: dxt-ui)              │
 │ • Token parsing & automated compilation      │
 └──────────────────────┬───────────────────────┘
                        │
      ┌─────────────────┼─────────────────┐
      ▼                 ▼                 ▼
 ┌──────────┐     ┌───────────┐     ┌───────────┐
 │ props.ts │     │styleToken │     │  D1*.vue  │
 │ TS Types │     │CSS Tokens │     │ BEM Maps  │
 └────┬─────┘     └─────┬─────┘     └─────┬─────┘
      │                 │                 │
      └─────────────────┼─────────────────┘
                        ▼
 ┌──────────────────────────────────────────────┐
 │ Production UI Component                      │
 │ • 100% Type-Safe & Autocomplete              │
 │ • Flawless WAI-ARIA A11y & Zero-Boilerplate  │
 └──────────────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(t.h2,{id:`key-implementation-advantages`,children:`Key Implementation Advantages`}),`
`,(0,c.jsx)(t.h3,{id:`1-strict-decoupling-of-logic-and-visual-presentation-headless--design-system`,children:`1. Strict Decoupling of Logic and Visual Presentation (Headless + Design System)`}),`
`,(0,c.jsxs)(t.p,{children:[`Behavioral logic (keyboard handling, focus trapping, positioning math, ARIA accessibility, state synchronization) is fully encapsulated in `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Effortless UI-Kit creation:`}),` Building an alternate theme (e.g., `,(0,c.jsx)(t.code,{children:`d2`}),` or a custom corporate brand system) requires zero rewrites of complex component logic — developers simply define new `,(0,c.jsx)(t.code,{children:`properties.json`}),` configurations and style files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Guaranteed reliability:`}),` Fixing a bug in the constructor logic instantly resolves the issue across all design systems utilizing that constructor.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-zero-boilerplate-and-10x-development-speed`,children:`2. Zero Boilerplate and 10x Development Speed`}),`
`,(0,c.jsx)(t.p,{children:`In traditional component design, adding a single new prop requires manual updates across 5–7 separate locations (types, Vue props, validators, template classes, SCSS selectors, documentation).`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`In DXT UI, developers add `,(0,c.jsx)(t.strong,{children:`one line`}),` to `,(0,c.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` command in seconds automatically updates `,(0,c.jsx)(t.code,{children:`props.ts`}),`, BEM class mappings in `,(0,c.jsx)(t.code,{children:`.vue`}),`, SCSS variables in `,(0,c.jsx)(t.code,{children:`styleToken.scss`}),`, and IDE autocomplete metadata.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-single-source-of-truth--100-type-safety`,children:`3. Single Source of Truth & 100% Type Safety`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`properties.json`}),` file serves as the definitive source of truth across the entire workspace:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`TypeScript`}),`: Strictly types all allowed prop values (`,(0,c.jsx)(t.code,{children:`size: 'sm' | 'md' | 'lg'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Runtime checks`}),`: Automatically generates runtime allowed-value arrays (`,(0,c.jsx)(t.code,{children:`propsValues`}),`) for instant validation using `,(0,c.jsx)(t.code,{children:`inArray`}),` helpers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`IDE Autocomplete`}),`: Automatically updates `,(0,c.jsx)(t.code,{children:`web-types.json`}),`, delivering rich IntelliSense in WebStorm and VS Code.`]}),`
`,(0,c.jsx)(t.li,{children:`Human error is physically eliminated: no typos in BEM modifier names, no type-to-CSS mismatches, no forgotten exports.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`4-instant-global-refactoring-across-the-entire-design-system`,children:`4. Instant Global Refactoring across the Entire Design System`}),`
`,(0,c.jsx)(t.p,{children:`Need to alter a BEM class prefix, adjust CSS variable resolution, or adapt to new browser standards across all 100+ components?`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Modify the generator logic once in `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Running the build command re-scaffolds every component across the monorepo in mere seconds.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-declarative-palettes-and-theme-management-without-css-bloat`,children:`5. Declarative Palettes and Theme Management without CSS Bloat`}),`
`,(0,c.jsx)(t.p,{children:`The token parser handles complex styling patterns seamlessly:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`flag-theme`}),` & Palettes`]}),`: Dynamic dark/light theme switching and color palette shifts without CSS code duplication using palette-level CSS variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Decoupled Color & Opacity`}),`: Native support for tokens with independent opacity (`,(0,c.jsx)(t.code,{children:`backgroundOpacity`}),`, `,(0,c.jsx)(t.code,{children:`colorOpacity`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Smart BEM Modifiers (`,(0,c.jsx)(t.code,{children:`flag-subclass`}),`, `,(0,c.jsx)(t.code,{children:`flag-replace`}),`)`]}),`: Modifier classes are injected into the DOM only when corresponding flags are active.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`6-automated-subcomponent-injection-via-dependency-injection`,children:`6. Automated Subcomponent Injection via Dependency Injection`}),`
`,(0,c.jsxs)(t.p,{children:[`The generated `,(0,c.jsx)(t.code,{children:`.vue`}),` component automatically wires up and passes subcomponents (such as `,(0,c.jsx)(t.code,{children:`D1Icon`}),`, loaders `,(0,c.jsx)(t.code,{children:`D1Progress`}),`, press ripple effects `,(0,c.jsx)(t.code,{children:`D1Ripple`}),`) directly into the `,(0,c.jsx)(t.code,{children:`Design`}),` class. The component template remains clean and minimal:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup lang="ts">
// Automatically generated binding
const design = new ButtonDesign('d1.button', props, {
  emits,
  classes: classesToken,
  styles: stylesToken,
  components: { icon: D1Icon, progress: D1Progress, ripple: D1Ripple }
})
const render = design.render()
<\/script>

<template>
  <render/>
</template>
`})}),`
`,(0,c.jsx)(t.h3,{id:`7-ai-native-ecosystem-and-automated-documentation`,children:`7. AI-Native Ecosystem and Automated Documentation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-types.md`}),` Generation`]}),`: Compiles tokenized, lightweight type references allowing LLMs to quickly grasp library APIs without scanning thousands of lines of raw source code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Docs & Storybook MDX`}),`: Automatically enriches component documentation with prop definitions and interactive usage examples.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Figma API Synchronization`}),`: Directly pulls frames, design tokens, and styles from Figma files into the codebase.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works-under-the-hood`,children:`How It Works Under the Hood`}),`
`,(0,c.jsxs)(t.h3,{id:`1-visual-contract-declaration-propertiesjson`,children:[`1. Visual Contract Declaration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`The visual capabilities of a component are declared in a clean JSON format:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "size": {
    "type": "type-var",
    "value": ["sm", "md", "lg"],
    "default": "md"
  },
  "palette": {
    "type": "flag-theme",
    "value": ["primary", "secondary", "tertiary", "error"]
  },
  "outline": {
    "type": "flag-subclass"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`2-automated-file-generation`,children:`2. Automated File Generation`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` utility compiles the JSON configuration into synchronized assets:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`props.ts`})}),`: Merges base constructor props and visual tokens with default values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`styleToken.scss`})}),`: Emits SCSS mixins and CSS variables for each token state.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1[Component].vue`})}),`: Configures reactive BEM class mappings (`,(0,c.jsx)(t.code,{children:`classesToken`}),`) and initiates the `,(0,c.jsx)(t.code,{children:`Design`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`index.ts`})}),`: Packages and exports the component alongside all associated types.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`main-ecosystem-cli-commands`,children:`Main Ecosystem CLI Commands`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-ui [--name NAME]`})}),` — Primary UI builder orchestrator. Scans `,(0,c.jsx)(t.code,{children:`properties.json`}),`, builds templates, BEM maps, typed props, and binds them to Constructor classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-constructor`})}),` — Rebuilds global classes and interfaces for the logic constructor, keeping component types in sync.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-library`})}),` — Scans workspace directory structures and automatically generates entry export files across all monorepo packages.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-screenshot`})}),` — Automated visual regression testing suite powered by Puppeteer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-types-save`})}),` — Generates AI-optimized `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` references for LLM toolchains and coding assistants.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};