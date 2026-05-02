import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesItems - Property Tree Coordinator`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesitems-class`,children:`PropertiesItems Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` class acts as the central coordinator for navigating and searching through complex design property trees. It provides a high-level abstraction layer that hides the intricacies of tree traversal, index decoding, and design-specific filtering. Whether you need to find a specific token by its dotted path, perform a global search across categories, or execute deep recursive operations, `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` serves as the primary engine for property discovery.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design Focusing`}),` — Allows filtering the entire property interaction scope to a single design theme or component cluster.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Deep Metadata Resolution`}),` — Translates simple index strings (e.g., `,(0,c.jsx)(n.code,{children:`theme.colors.primary`}),`) into comprehensive info objects with full parental context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Traversal Engine`}),` — Provides consistent `,(0,c.jsx)(n.code,{children:`each`}),` and `,(0,c.jsx)(n.code,{children:`find`}),` mechanisms for both shallow and deep recursive exploration of the token hierarchy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Semantic Translation`}),` — Automatically handles path normalization, kebab-to-camelCase conversion, and support for special link symbols like `,(0,c.jsx)(n.code,{children:`?`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Category & Variable Filtering`}),` — Includes optimized search methods to extract subsets of tokens based on their functional category or variable type.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`PropertiesItems(properties)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — full property list (token tree) to be managed.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize the manager with the token tree
const manager = new PropertiesItems(allTokenData)

// 2. (Optional) Focus the environment on a specific design
manager.setFocusDesign('my-theme')

// 3. Retrieve the filtered structure
const currentTokens = manager.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertyList`}),` — returns the current property structure (supports focus filtering).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesigns(): string[]`}),` — returns a list of available design names.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(index): PropertyItem`}),` — retrieves a specific property record by its index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(index): PropertyItemsItem`}),` — resolves full metadata and parental hierarchy for a given index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeys(index): string[]`}),` — decodes a path string into normalized key segments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name, item): string`}),` — returns the display name of a property, accounting for renames.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`each(callback, property?): T[]`}),` — performs a deep recursive traversal of the tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(callback): PropertyItemsItem[]`}),` — searches for records matching custom conditions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findCategory(category): PropertyItemsItem[]`}),` — extracts tokens belonging to specific functional categories.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setFocusDesign(design): this`}),` — restricts the operational scope to a specific design.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-metadata-discovery--traversal-flow`,children:`The Metadata Discovery & Traversal Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesItems`}),` orchestrates several complex logic flows:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Index Decoding`}),`: When an index like `,(0,c.jsx)(n.code,{children:`theme.button-main.color`}),` is requested, it normalizes segments to camelCase and resolves them against the nested `,(0,c.jsx)(n.code,{children:`value`}),` objects of the tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Context Management`}),`: During traversal (`,(0,c.jsx)(n.code,{children:`each`}),`), the class maintains a `,(0,c.jsx)(n.code,{children:`parents`}),` stack, allowing every discovered node to know exactly where it sits in the hierarchy (crucial for generating CSS variables or documentation paths).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design Isolation`}),`: By calling `,(0,c.jsx)(n.code,{children:`setFocusDesign()`}),`, users can toggle the "view" of the entire tree. Subsequent calls to `,(0,c.jsx)(n.code,{children:`get()`}),` or `,(0,c.jsx)(n.code,{children:`each()`}),` will automatically ignore designs that are NOT the focused one or the common `,(0,c.jsx)(n.code,{children:`_constructor`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Link Normalization`}),`: Methods like `,(0,c.jsx)(n.code,{children:`getLink()`}),` handle the transformation of legacy path symbols (like `,(0,c.jsx)(n.code,{children:`??`}),` and `,(0,c.jsx)(n.code,{children:`?`}),`) into absolute, fully-qualified property indices by prepending current design and component contexts.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};