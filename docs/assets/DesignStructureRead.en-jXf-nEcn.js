import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignStructureRead - Property Dependency Resolver"}),`
`,e.jsx(s.h1,{id:"designstructureread-class",children:"DesignStructureRead Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"DesignStructureRead"})," class is the primary parser for resolving dependencies and states between component properties. It transforms raw design system tokens into a structured list of properties, identifying which items should be exposed as public props and which represent internal interactive states or linked CSS class dependencies."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"State Discovery"})," — Identifies property tokens defined as interactive states (e.g., ",e.jsx(s.code,{children:":hover"}),", ",e.jsx(s.code,{children:":active"}),") and builds their dependency chains."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link Class Resolution"})," — Detects and resolves references to external component classes to maintain BEM hierarchy."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Value Compilation"})," — Aggregates all possible values for a property, including those derived from nested state structures, to generate accurate TypeScript unions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Prop Validation"})," — Filters and validates which property tokens are eligible for export as public component properties based on system rules."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Independant Value Synthesis"})," — Automatically injects boolean flags for properties that lack explicit value tokens but require state tracking."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(s.p,{children:"To initialize the property reader, provide the base component name. The class will automatically resolve the component's metadata via its parent abstraction and trigger the multi-stage parsing pipeline."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"component: string"})," — The identifier of the component to analyze (e.g., ",e.jsx(s.code,{children:"'input'"}),")."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { DesignStructureRead } from '@dxtmisha/scripts'

const reader = new DesignStructureRead('button')
const structureList = reader.get()
const states = reader.getStates()
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"information",children:"Information"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get(): DesignStructureList"})," — Returns the fully resolved linear list of component properties."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getStates(): DesignStructureStateList"})," — Returns the hierarchical list of states and their associated property dependencies."]}),`
`]}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-parsing-pipeline",children:"The Parsing Pipeline"}),`
`,e.jsxs(s.p,{children:["Upon construction, ",e.jsx(s.code,{children:"DesignStructureRead"})," executes a series of transformations to build the final data model:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["State Mapping (",e.jsx(s.code,{children:"makeState"}),")"]}),": Recursively traverses the property tree to isolate tokens marked as ",e.jsx(s.code,{children:"state"})," or ",e.jsx(s.code,{children:"linkClass"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Main Structure Initialization (",e.jsx(s.code,{children:"makeMain"}),")"]}),": Creates the base entry for each identified prop, normalizing names and metadata."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Base Value Extraction (",e.jsx(s.code,{children:"makeValue"}),")"]}),": Resolves the direct immediate values assigned to each property."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Value Expansion (",e.jsx(s.code,{children:"makeValueAll"}),")"]}),": Aggregates values from all possible interactive states to ensure the property API covers every logical case."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Deduplication (",e.jsx(s.code,{children:"makeValueUnique"}),")"]}),": Normalizes the value lists, removing duplicates and ensuring boolean fallbacks exist where necessary."]}),`
`]}),`
`,e.jsx(s.h3,{id:"handling-linked-classes",children:"Handling Linked Classes"}),`
`,e.jsxs(s.p,{children:["Special logic is applied when a property references another component class (",e.jsx(s.code,{children:"linkClass"}),"). The resolver:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Identifies the reference"}),": Locates the specific variable link in the global design metadata."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Naming Transformation"}),": Converts the reference into a standardized BEM class name (e.g., ",e.jsx(s.code,{children:"theme-button--primary"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Recursive Resolution"}),": Triggers a sub-parsing cycle for the linked component to ensure its properties and states are accounted for in the primary component's dependency tree."]}),`
`]})]})}function p(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
