import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/Properties - Design Token Orchestrator"}),`
`,e.jsx(s.h1,{id:"properties-class",children:"Properties Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Properties"}),` class is the core processing engine of the design system's token infrastructure. It acts as a central orchestrator that coordinates the loading, structural merging, and recursive transformation of raw property definitions into a final, resolved state. By abstracting the complexity of dozens of specialized transformation rules, it provides a stable "source of truth" for all components and build tools.`]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multi-Stage Processing Pipeline"})," — Executes specialized transformers for replacing, cloning, dragging, and linking design tokens."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Structural Merging"})," — Intelligently resolves and merges settings, global defaults, and component-specific overrides."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Incremental Cache Management"})," — Uses ",e.jsx(s.code,{children:"PropertiesCache"})," to persist processed results, significantly improving build performance."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SCSS Synthesis"})," — Compiles resolved tokens into a structured SCSS format for direct use in styling layers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"AI-Optimized Metadata"})," — Prepares property structures that are easily consumable by documentation engines and AI-driven generators."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(s.p,{children:"Initialize the orchestrator to immediately begin processing the tokens defined in the project's configuration."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Properties } from '@dxtmisha/scripts'

const engine = new Properties()
const tokens = engine.get() // Returns the fully processed PropertiesItems
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"data-access",children:"Data Access"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get(): PropertiesItems"})," — Returns the core container of all processed design tokens."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getScss(): string"})," — Returns the compiled SCSS representation of the current token set."]}),`
`]}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-token-processing-pipeline",children:"The Token Processing Pipeline"}),`
`,e.jsxs(s.p,{children:["When instantiated, ",e.jsx(s.code,{children:"Properties"})," coordinates a comprehensive multi-layered transformation flow:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Source Acquisition"}),": It reads and merges raw data from ",e.jsx(s.code,{children:"PropertiesSettings"}),", ",e.jsx(s.code,{children:"PropertiesMain"}),", and external JSON files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Basic Normalization"}),": Triggers foundational transformations:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Replacement"}),": Resolves alias patterns."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Palette Resolution"}),": Injects color palette values."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cloning & Sub-Property Synthesis"}),": Handles complex property replications."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Advanced Transformation"}),": Executes high-level logic for:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Component Resolution"}),": Maps properties to specific component structures."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"State & Class Mapping"}),": Generates metadata for UI states (hover, active) and BEM classes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Media & Animation Synthesis"}),": Resolves responsive breakpoints and motion tokens."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Optimization & Cleanup"}),": Sorts properties, handles duplicates, and purges empty nodes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Persistence"}),": The final result is stored in the ",e.jsx(s.code,{children:"PropertiesCache"})," using a unique hash based on the current design configuration."]}),`
`]})]})}function p(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{p as default};
