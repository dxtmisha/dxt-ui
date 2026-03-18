import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PropertiesPath - Path & Environment Resolver"}),`
`,e.jsx(s.h1,{id:"propertiespath-class",children:"PropertiesPath Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"PropertiesPath"})," class is a core utility responsible for translating abstract design identities into concrete physical filesystem paths. It manages the directory mapping for both global design tokens and specific component overrides, ensuring that cross-platform path discovery remains consistent. By providing cached traversal methods like ",e.jsx(s.code,{children:"to"})," and ",e.jsx(s.code,{children:"toAll"}),", it coordinates the data loading sequence for multi-theme projects, acting as the primary source of environmental truth for the properties engine."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multi-Design Mapping"})," — Automatically maps an array of design names to their corresponding token and component directories."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cross-Platform Root Discovery"})," — Leverages ",e.jsx(s.code,{children:"PropertiesFile"})," to ensure paths are absolute and resolved correctly across different operating systems."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Internal Optimization (Caching)"})," — Integrated with ",e.jsx(s.code,{children:"PropertiesCache"})," to minimize redundant filesystem access during complex token transformation pipelines."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Constructor Mode Detection"})," — Identifies and handles the special ",e.jsx(s.code,{children:"_constructor"})," design, which serves as the common base for all themes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Flexible Data Traversal"})," — Provides high-level callbacks for processing design files without exposing raw filesystem details."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["To initialize the object, call the ",e.jsx(s.code,{children:"PropertiesPath(designs)"})," constructor."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"designs: string[]"})," — a list of design names corresponding to folder names in the project structure."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Define the designs to be managed
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Create the path resolver instance
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Resolve paths for a specific design
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isConstructor(): boolean"})," — checks if the current environment includes a base constructor design."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getDesigns(): string[]"})," — returns the list of design names registered in the instance."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getPath(name): PropertiesPathItem"})," — retrieves the specific paths (global and component) for a given design."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getPaths(): PropertiesPathList"})," — returns the full registry of design-to-path mappings."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"to(name, design, callback): T"})," — executes a cached transformation callback for a specific design."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toAll(name, callback): T"})," — orchestrates a global cached transformation across all registered designs."]}),`
`]}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-environmental-discovery--caching-flow",children:"The Environmental Discovery & Caching Flow"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"PropertiesPath"})," manages the mapping between high-level logic and physical storage:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Directory Aggregation"}),": Upon instantiation, the class normalizes design names to kebab-case and uses internal ",e.jsx(s.code,{children:"getDir"})," logic to synthesize absolute paths to ",e.jsx(s.code,{children:"UI_DIRS_TOKENS"})," and ",e.jsx(s.code,{children:"UI_DIRS_COMPONENTS"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Design Isolation"}),": The class distinguishes between standard themes and the ",e.jsx(s.code,{children:"_constructor"}),". If a design is marked as a constructor, standard directory discovery is bypassed to allow for specialized base-layer processing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cached Transformation"}),": When ",e.jsx(s.code,{children:"to()"})," or ",e.jsx(s.code,{children:"toAll()"})," are called, the class doesn't just return paths—it attempts to retrieve previously processed data from ",e.jsx(s.code,{children:"PropertiesCache"}),". If a cache miss occurs, the provided callback is executed with the resolved paths, and the new result is transparently stored."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Unified Hierarchy Synthesis"}),": Through ",e.jsx(s.code,{children:"toAll()"}),', the class enables the "merge-up" pattern, where tokens from multiple designs (e.g., ',e.jsx(s.code,{children:"constructor"})," + ",e.jsx(s.code,{children:"basic"})," + ",e.jsx(s.code,{children:"local-theme"}),") are fetched in sequence and combined into a single hierarchical structure using ",e.jsx(s.code,{children:"replaceRecursive"}),"."]}),`
`]})]})}function p(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default};
