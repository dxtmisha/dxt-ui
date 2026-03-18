import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/PropertiesMain - Global Token Orchestrator"}),`
`,e.jsx(n.h1,{id:"propertiesmain-class",children:"PropertiesMain Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesMain"}),' class is the high-level orchestrator responsible for synthesizing the global design token tree. It manages the entire lifecycle of "main" tokens—from filesystem discovery and raw reading to multi-stage semantic transformation and hierarchical merging. By abstracting the complexities of modular property loading, it provides a unified entry point for obtaining fully resolved and standardized design configurations.']}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Pipeline Orchestration"})," — Integrates multiple utilities (",e.jsx(n.code,{children:"Import"}),", ",e.jsx(n.code,{children:"Standard"}),", ",e.jsx(n.code,{children:"Convector"}),") into a single cohesive loading sequence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design-Centric Discovery"})," — Leverages ",e.jsx(n.code,{children:"PropertiesPath"})," to automatically locate and process tokens for all active design themes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Configuration Merging"})," — Supports hot-swapping or layering settings onto the global tree through deep recursive synchronization."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structural Integrity Enforcement"})," — Automatically applies structural wrapping and separators to ensure tokens are correctly categorized and accessible."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Internal State Synchronization"})," — Preserves internal engine flags (properties starting with ",e.jsx(n.code,{children:"_"}),") during configuration updates."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"PropertiesMain(path)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesPath"})," — an instance of the class responsible for filesystem discovery and path resolution."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesMain, PropertiesPath } from '@dxtmisha/scripts'

// 1. Initialize the prerequisite path manager
const pathManager = new PropertiesPath(['packages', 'tokens'])

// 2. Create the main token orchestrator
const main = new PropertiesMain(pathManager)

// 3. Resolve the complete global property tree
const globalTokens = main.get()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): PropertyList"})," — performs the full transformation pipeline and returns all resolved main tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBySettings(list): PropertyList"})," — merges a custom settings cluster into the global token tree."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-global-transformation-pipeline",children:"The Global Transformation Pipeline"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"get()"})," is invoked, ",e.jsx(n.code,{children:"PropertiesMain"})," executes the following sequence for every design discovered:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reading"}),": Fetches raw data from the filesystem using ",e.jsx(n.code,{children:"PropertiesTool"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic Conversion"}),": Passes data through ",e.jsx(n.code,{children:"PropertiesConvector"})," to transform raw values into tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standardization"}),": Normalizes structures via ",e.jsx(n.code,{children:"PropertiesStandard"})," to ensure consistent object shapes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link Resolution"}),": Utilizes ",e.jsx(n.code,{children:"PropertiesImport"})," to recursively fetch and merge any external file references."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structural Finalization"}),": If necessary, it splits keys via ",e.jsx(n.code,{children:"PropertiesSeparator"})," and applies ",e.jsx(n.code,{children:"PropertiesWrap"})," to organize tokens into their final hierarchical containers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Synthesis"}),": Combines processed data from all designs into a single ",e.jsx(n.code,{children:"PropertyList"})," where keys represent top-level design names."]}),`
`]})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
