import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesPath - Path & Environment Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`propertiespath-class`,children:`PropertiesPath Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesPath`}),` class is a core utility responsible for translating abstract design identities into concrete physical filesystem paths. It manages the directory mapping for both global design tokens and specific component overrides, ensuring that cross-platform path discovery remains consistent. By providing cached traversal methods like `,(0,c.jsx)(n.code,{children:`to`}),` and `,(0,c.jsx)(n.code,{children:`toAll`}),`, it coordinates the data loading sequence for multi-theme projects, acting as the primary source of environmental truth for the properties engine.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multi-Design Mapping`}),` — Automatically maps an array of design names to their corresponding token and component directories.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cross-Platform Root Discovery`}),` — Leverages `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` to ensure paths are absolute and resolved correctly across different operating systems.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Internal Optimization (Caching)`}),` — Integrated with `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` to minimize redundant filesystem access during complex token transformation pipelines.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Constructor Mode Detection`}),` — Identifies and handles the special `,(0,c.jsx)(n.code,{children:`_constructor`}),` design, which serves as the common base for all themes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Data Traversal`}),` — Provides high-level callbacks for processing design files without exposing raw filesystem details.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`PropertiesPath(designs)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`designs: string[]`}),` — a list of design names corresponding to folder names in the project structure.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Define the designs to be managed
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Create the path resolver instance
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Resolve paths for a specific design
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isConstructor(): boolean`}),` — checks if the current environment includes a base constructor design.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesigns(): string[]`}),` — returns the list of design names registered in the instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(name): PropertiesPathItem`}),` — retrieves the specific paths (global and component) for a given design.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPaths(): PropertiesPathList`}),` — returns the full registry of design-to-path mappings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(name, design, callback): T`}),` — executes a cached transformation callback for a specific design.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toAll(name, callback): T`}),` — orchestrates a global cached transformation across all registered designs.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-environmental-discovery--caching-flow`,children:`The Environmental Discovery & Caching Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesPath`}),` manages the mapping between high-level logic and physical storage:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Directory Aggregation`}),`: Upon instantiation, the class normalizes design names to kebab-case and uses internal `,(0,c.jsx)(n.code,{children:`getDir`}),` logic to synthesize absolute paths to `,(0,c.jsx)(n.code,{children:`UI_DIRS_TOKENS`}),` and `,(0,c.jsx)(n.code,{children:`UI_DIRS_COMPONENTS`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design Isolation`}),`: The class distinguishes between standard themes and the `,(0,c.jsx)(n.code,{children:`_constructor`}),`. If a design is marked as a constructor, standard directory discovery is bypassed to allow for specialized base-layer processing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cached Transformation`}),`: When `,(0,c.jsx)(n.code,{children:`to()`}),` or `,(0,c.jsx)(n.code,{children:`toAll()`}),` are called, the class doesn't just return paths—it attempts to retrieve previously processed data from `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),`. If a cache miss occurs, the provided callback is executed with the resolved paths, and the new result is transparently stored.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Hierarchy Synthesis`}),`: Through `,(0,c.jsx)(n.code,{children:`toAll()`}),`, the class enables the "merge-up" pattern, where tokens from multiple designs (e.g., `,(0,c.jsx)(n.code,{children:`constructor`}),` + `,(0,c.jsx)(n.code,{children:`basic`}),` + `,(0,c.jsx)(n.code,{children:`local-theme`}),`) are fetched in sequence and combined into a single hierarchical structure using `,(0,c.jsx)(n.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};