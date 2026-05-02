import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/Properties - Design Token Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`properties-class`,children:`Properties Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Properties`}),` class is the core processing engine of the design system's token infrastructure. It acts as a central orchestrator that coordinates the loading, structural merging, and recursive transformation of raw property definitions into a final, resolved state. By abstracting the complexity of dozens of specialized transformation rules, it provides a stable "source of truth" for all components and build tools.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multi-Stage Processing Pipeline`}),` — Executes specialized transformers for replacing, cloning, dragging, and linking design tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structural Merging`}),` — Intelligently resolves and merges settings, global defaults, and component-specific overrides.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Incremental Cache Management`}),` — Uses `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` to persist processed results, significantly improving build performance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SCSS Synthesis`}),` — Compiles resolved tokens into a structured SCSS format for direct use in styling layers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI-Optimized Metadata`}),` — Prepares property structures that are easily consumable by documentation engines and AI-driven generators.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Initialize the orchestrator to immediately begin processing the tokens defined in the project's configuration.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Properties } from '@dxtmisha/scripts'

const engine = new Properties()
const tokens = engine.get() // Returns the fully processed PropertiesItems
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-access`,children:`Data Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertiesItems`}),` — Returns the core container of all processed design tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScss(): string`}),` — Returns the compiled SCSS representation of the current token set.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-token-processing-pipeline`,children:`The Token Processing Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[`When instantiated, `,(0,c.jsx)(n.code,{children:`Properties`}),` coordinates a comprehensive multi-layered transformation flow:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Source Acquisition`}),`: It reads and merges raw data from `,(0,c.jsx)(n.code,{children:`PropertiesSettings`}),`, `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),`, and external JSON files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Basic Normalization`}),`: Triggers foundational transformations:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Replacement`}),`: Resolves alias patterns.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Palette Resolution`}),`: Injects color palette values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cloning & Sub-Property Synthesis`}),`: Handles complex property replications.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Advanced Transformation`}),`: Executes high-level logic for:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Component Resolution`}),`: Maps properties to specific component structures.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`State & Class Mapping`}),`: Generates metadata for UI states (hover, active) and BEM classes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Media & Animation Synthesis`}),`: Resolves responsive breakpoints and motion tokens.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Optimization & Cleanup`}),`: Sorts properties, handles duplicates, and purges empty nodes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persistence`}),`: The final result is stored in the `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` using a unique hash based on the current design configuration.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};