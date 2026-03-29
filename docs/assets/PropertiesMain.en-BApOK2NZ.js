import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesMain - Global Token Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesmain-class`,children:`PropertiesMain Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),` class is the high-level orchestrator responsible for synthesizing the global design token tree. It manages the entire lifecycle of "main" tokens—from filesystem discovery and raw reading to multi-stage semantic transformation and hierarchical merging. By abstracting the complexities of modular property loading, it provides a unified entry point for obtaining fully resolved and standardized design configurations.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Pipeline Orchestration`}),` — Integrates multiple utilities (`,(0,c.jsx)(n.code,{children:`Import`}),`, `,(0,c.jsx)(n.code,{children:`Standard`}),`, `,(0,c.jsx)(n.code,{children:`Convector`}),`) into a single cohesive loading sequence.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design-Centric Discovery`}),` — Leverages `,(0,c.jsx)(n.code,{children:`PropertiesPath`}),` to automatically locate and process tokens for all active design themes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Configuration Merging`}),` — Supports hot-swapping or layering settings onto the global tree through deep recursive synchronization.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structural Integrity Enforcement`}),` — Automatically applies structural wrapping and separators to ensure tokens are correctly categorized and accessible.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Internal State Synchronization`}),` — Preserves internal engine flags (properties starting with `,(0,c.jsx)(n.code,{children:`_`}),`) during configuration updates.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`PropertiesMain(path)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesPath`}),` — an instance of the class responsible for filesystem discovery and path resolution.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesMain, PropertiesPath } from '@dxtmisha/scripts'

// 1. Initialize the prerequisite path manager
const pathManager = new PropertiesPath(['packages', 'tokens'])

// 2. Create the main token orchestrator
const main = new PropertiesMain(pathManager)

// 3. Resolve the complete global property tree
const globalTokens = main.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertyList`}),` — performs the full transformation pipeline and returns all resolved main tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySettings(list): PropertyList`}),` — merges a custom settings cluster into the global token tree.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-global-transformation-pipeline`,children:`The Global Transformation Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`get()`}),` is invoked, `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),` executes the following sequence for every design discovered:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reading`}),`: Fetches raw data from the filesystem using `,(0,c.jsx)(n.code,{children:`PropertiesTool`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Semantic Conversion`}),`: Passes data through `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` to transform raw values into tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardization`}),`: Normalizes structures via `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),` to ensure consistent object shapes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Link Resolution`}),`: Utilizes `,(0,c.jsx)(n.code,{children:`PropertiesImport`}),` to recursively fetch and merge any external file references.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structural Finalization`}),`: If necessary, it splits keys via `,(0,c.jsx)(n.code,{children:`PropertiesSeparator`}),` and applies `,(0,c.jsx)(n.code,{children:`PropertiesWrap`}),` to organize tokens into their final hierarchical containers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Synthesis`}),`: Combines processed data from all designs into a single `,(0,c.jsx)(n.code,{children:`PropertyList`}),` where keys represent top-level design names.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};