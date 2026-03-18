import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/PropertiesItems - Property Tree Coordinator"}),`
`,e.jsx(n.h1,{id:"propertiesitems-class",children:"PropertiesItems Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesItems"})," class acts as the central coordinator for navigating and searching through complex design property trees. It provides a high-level abstraction layer that hides the intricacies of tree traversal, index decoding, and design-specific filtering. Whether you need to find a specific token by its dotted path, perform a global search across categories, or execute deep recursive operations, ",e.jsx(n.code,{children:"PropertiesItems"})," serves as the primary engine for property discovery."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design Focusing"})," — Allows filtering the entire property interaction scope to a single design theme or component cluster."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deep Metadata Resolution"})," — Translates simple index strings (e.g., ",e.jsx(n.code,{children:"theme.colors.primary"}),") into comprehensive info objects with full parental context."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Traversal Engine"})," — Provides consistent ",e.jsx(n.code,{children:"each"})," and ",e.jsx(n.code,{children:"find"})," mechanisms for both shallow and deep recursive exploration of the token hierarchy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Semantic Translation"})," — Automatically handles path normalization, kebab-to-camelCase conversion, and support for special link symbols like ",e.jsx(n.code,{children:"?"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Category & Variable Filtering"})," — Includes optimized search methods to extract subsets of tokens based on their functional category or variable type."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"PropertiesItems(properties)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"properties: PropertyList"})," — full property list (token tree) to be managed."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize the manager with the token tree
const manager = new PropertiesItems(allTokenData)

// 2. (Optional) Focus the environment on a specific design
manager.setFocusDesign('my-theme')

// 3. Retrieve the filtered structure
const currentTokens = manager.get()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): PropertyList"})," — returns the current property structure (supports focus filtering)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDesigns(): string[]"})," — returns a list of available design names."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(index): PropertyItem"})," — retrieves a specific property record by its index."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getInfo(index): PropertyItemsItem"})," — resolves full metadata and parental hierarchy for a given index."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getKeys(index): string[]"})," — decodes a path string into normalized key segments."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getName(name, item): string"})," — returns the display name of a property, accounting for renames."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"each(callback, property?): T[]"})," — performs a deep recursive traversal of the tree."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"find(callback): PropertyItemsItem[]"})," — searches for records matching custom conditions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findCategory(category): PropertyItemsItem[]"})," — extracts tokens belonging to specific functional categories."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setFocusDesign(design): this"})," — restricts the operational scope to a specific design."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-metadata-discovery--traversal-flow",children:"The Metadata Discovery & Traversal Flow"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesItems"})," orchestrates several complex logic flows:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Index Decoding"}),": When an index like ",e.jsx(n.code,{children:"theme.button-main.color"})," is requested, it normalizes segments to camelCase and resolves them against the nested ",e.jsx(n.code,{children:"value"})," objects of the tree."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Context Management"}),": During traversal (",e.jsx(n.code,{children:"each"}),"), the class maintains a ",e.jsx(n.code,{children:"parents"})," stack, allowing every discovered node to know exactly where it sits in the hierarchy (crucial for generating CSS variables or documentation paths)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design Isolation"}),": By calling ",e.jsx(n.code,{children:"setFocusDesign()"}),', users can toggle the "view" of the entire tree. Subsequent calls to ',e.jsx(n.code,{children:"get()"})," or ",e.jsx(n.code,{children:"each()"})," will automatically ignore designs that are NOT the focused one or the common ",e.jsx(n.code,{children:"_constructor"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link Normalization"}),": Methods like ",e.jsx(n.code,{children:"getLink()"})," handle the transformation of legacy path symbols (like ",e.jsx(n.code,{children:"??"})," and ",e.jsx(n.code,{children:"?"}),") into absolute, fully-qualified property indices by prepending current design and component contexts."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{p as default};
