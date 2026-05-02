import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/DesignStructureRead - Property Dependency Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`designstructureread-class`,children:`DesignStructureRead Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignStructureRead`}),` class is the primary parser for resolving dependencies and states between component properties. It transforms raw design system tokens into a structured list of properties, identifying which items should be exposed as public props and which represent internal interactive states or linked CSS class dependencies.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`State Discovery`}),` — Identifies property tokens defined as interactive states (e.g., `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:active`}),`) and builds their dependency chains.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Link Class Resolution`}),` — Detects and resolves references to external component classes to maintain BEM hierarchy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Value Compilation`}),` — Aggregates all possible values for a property, including those derived from nested state structures, to generate accurate TypeScript unions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prop Validation`}),` — Filters and validates which property tokens are eligible for export as public component properties based on system rules.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Independant Value Synthesis`}),` — Automatically injects boolean flags for properties that lack explicit value tokens but require state tracking.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`To initialize the property reader, provide the base component name. The class will automatically resolve the component's metadata via its parent abstraction and trigger the multi-stage parsing pipeline.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — The identifier of the component to analyze (e.g., `,(0,c.jsx)(n.code,{children:`'input'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureRead } from '@dxtmisha/scripts'

const reader = new DesignStructureRead('button')
const structureList = reader.get()
const states = reader.getStates()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureList`}),` — Returns the fully resolved linear list of component properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStates(): DesignStructureStateList`}),` — Returns the hierarchical list of states and their associated property dependencies.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-parsing-pipeline`,children:`The Parsing Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[`Upon construction, `,(0,c.jsx)(n.code,{children:`DesignStructureRead`}),` executes a series of transformations to build the final data model:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`State Mapping (`,(0,c.jsx)(n.code,{children:`makeState`}),`)`]}),`: Recursively traverses the property tree to isolate tokens marked as `,(0,c.jsx)(n.code,{children:`state`}),` or `,(0,c.jsx)(n.code,{children:`linkClass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Main Structure Initialization (`,(0,c.jsx)(n.code,{children:`makeMain`}),`)`]}),`: Creates the base entry for each identified prop, normalizing names and metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Base Value Extraction (`,(0,c.jsx)(n.code,{children:`makeValue`}),`)`]}),`: Resolves the direct immediate values assigned to each property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Value Expansion (`,(0,c.jsx)(n.code,{children:`makeValueAll`}),`)`]}),`: Aggregates values from all possible interactive states to ensure the property API covers every logical case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Deduplication (`,(0,c.jsx)(n.code,{children:`makeValueUnique`}),`)`]}),`: Normalizes the value lists, removing duplicates and ensuring boolean fallbacks exist where necessary.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`handling-linked-classes`,children:`Handling Linked Classes`}),`
`,(0,c.jsxs)(n.p,{children:[`Special logic is applied when a property references another component class (`,(0,c.jsx)(n.code,{children:`linkClass`}),`). The resolver:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Identifies the reference`}),`: Locates the specific variable link in the global design metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Naming Transformation`}),`: Converts the reference into a standardized BEM class name (e.g., `,(0,c.jsx)(n.code,{children:`theme-button--primary`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Resolution`}),`: Triggers a sub-parsing cycle for the linked component to ensure its properties and states are accounted for in the primary component's dependency tree.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};