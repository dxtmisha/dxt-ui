import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignComponent - Design Component Generator`}),`
`,(0,c.jsx)(t.h1,{id:`designcomponent-class`,children:`DesignComponent Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignComponent`}),` class is a specialized implementation of `,(0,c.jsx)(t.code,{children:`DesignCommand`}),` dedicated to the automated creation and maintenance of design system components. It orchestrates the generation of diverse file types—from styles and component logic to documentation and integration metadata.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Full-Cycle Scaffolding`}),` — Automatically generates 10+ essential files for a new component (Vue, SCSS, TS, MDX).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Prop Resolution`}),` — Uses `,(0,c.jsx)(t.code,{children:`DesignTypescript`}),` to bake component properties directly into generated files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Storybook Automation`}),` — Generates `,(0,c.jsx)(t.code,{children:`.stories.ts`}),` and `,(0,c.jsx)(t.code,{children:`.mdx`}),` files with automated render and import resolution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI-Enhanced Wiki`}),` — Creates specialized companion components for AI-driven documentation search and display.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Workspace Integration`}),` — Seamlessly registers new components in the root `,(0,c.jsx)(t.code,{children:`package.json`}),` and the library's global export list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Style Token Mapping`}),` — Transform project structures into SCSS style tokens automatically.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`To initialize a generator instance, use the constructor. Note that it sets up the target directory based on the project configuration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`command: string`}),` — The identifier for the component (e.g., `,(0,c.jsx)(t.code,{children:`'button'`}),`, `,(0,c.jsx)(t.code,{children:`'input'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: Record<string, string>`}),` — Optional configuration flags.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignComponent } from '@dxtmisha/scripts'

const generator = new DesignComponent('button')
generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Starts the comprehensive generation process for all component-related files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`generated-files-structure`,children:`Generated Files Structure`}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`make()`}),` is executed, the following file hierarchy is created or updated within the component's directory:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties.json`}),` — Stores primary mapping data for the component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props.ts`}),` — The TypeScript definition for component props, resolved from constructor templates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleToken.scss`}),` — SCSS style tokens based on the component's design structure.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[Name].vue`}),` — The primary Vue component file with pre-configured classes and styles.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[Name]AiWiki.vue`}),` — A companion component for AI-enhanced wiki documentation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),` — The component's entry point for public exports.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki.ts`}),` & `,(0,c.jsx)(t.code,{children:`wikiData.ts`}),` — Metadata and structured property information for the documentation site.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[Name].stories.ts`}),` — Automated Storybook stories with dynamic component resolution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[Name].mdx`}),` — Markdown documentation for Storybook with pre-filled slots and props data.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`integration-process`,children:`Integration Process`}),`
`,(0,c.jsx)(t.p,{children:`The class ensures that the new component is fully integrated into the design system environment:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Update`}),`: Adds an entry to the root `,(0,c.jsx)(t.code,{children:`package.json`}),` under `,(0,c.jsx)(t.code,{children:`exports`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Library Export`}),`: Creates a proxy file in the library directory to enable global component imports.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Wiki Description Matching`}),`: Scans `,(0,c.jsx)(t.code,{children:`wikiDescriptions`}),` to automatically populate Storybook stories with relevant examples.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};