import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesItems - Property Tree Coordinator`}),`
`,(0,c.jsx)(t.h1,{id:`propertiesitems-class`,children:`PropertiesItems Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesItems`}),` class acts as the central coordinator for navigating and searching through complex design property trees. It provides a high-level abstraction layer that hides the intricacies of tree traversal, index decoding, and design-specific filtering. Whether you need to find a specific token by its dotted path, perform a global search across categories, or execute deep recursive operations, `,(0,c.jsx)(t.code,{children:`PropertiesItems`}),` serves as the primary engine for property discovery.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design Focusing`}),` — Allows filtering the entire property interaction scope to a single design theme or component cluster.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Deep Metadata Resolution`}),` — Translates simple index strings (e.g., `,(0,c.jsx)(t.code,{children:`theme.colors.primary`}),`) into comprehensive info objects with full parental context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Traversal Engine`}),` — Provides consistent `,(0,c.jsx)(t.code,{children:`each`}),` and `,(0,c.jsx)(t.code,{children:`find`}),` mechanisms for both shallow and deep recursive exploration of the token hierarchy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Semantic Translation`}),` — Automatically handles path normalization, kebab-to-camelCase conversion, and support for special link symbols like `,(0,c.jsx)(t.code,{children:`?`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Category & Variable Filtering`}),` — Includes optimized search methods to extract subsets of tokens based on their functional category or variable type.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`PropertiesItems(properties)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — full property list (token tree) to be managed.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize the manager with the token tree
const manager = new PropertiesItems(allTokenData)

// 2. (Optional) Focus the environment on a specific design
manager.setFocusDesign('my-theme')

// 3. Retrieve the filtered structure
const currentTokens = manager.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): PropertyList`}),` — returns the current property tree (supports focus filtering).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesigns(): string[]`}),` — returns the list of available design names.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(index): PropertyItem`}),` — retrieves a specific property record by index.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInfo(index): PropertyItemsItem`}),` — resolves full metadata and parent hierarchy for an index.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getKeys(index): string[]`}),` — decodes path string into normalized key segments.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name, item): string`}),` — returns the display property name respecting renames.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getReName(name, item): string`}),` — returns renamed property identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getParentsName(parents, variable?): string[]`}),` — returns parent category names.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMedia(): PropertyItemsMedia`}),` — returns media queries and breakpoints map.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLink(design, component, value): string`}),` — resolves design token link.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLinkToName(design, component, value): void`}),` — binds token to property name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLinkToValue(design, component, value): void`}),` — binds token to property value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLinkForName(design, component, value): void`}),` — resolves link for property name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLinkByDesign(design, value): string`}),` — resolves link respecting design context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`each(callback, property?): T[]`}),` — performs deep recursive traversal of the property tree.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`eachMainOnly(callback, property?): T[]`}),` — iterates over primary token properties only.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`find(callback): PropertyItemsItem[]`}),` — searches records matching custom predicates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findCategory(category): PropertyItemsItem[]`}),` — retrieves tokens belonging to specific functional categories.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findVariable(variable): PropertyItemsItem[]`}),` — searches properties by CSS variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFocusDesign(name, design?): boolean`}),` — checks if property belongs to active design.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setFocusDesign(design): this`}),` — scopes operations to a specific design.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`write(name): void`}),` — saves properties to file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-metadata-discovery--traversal-flow`,children:`The Metadata Discovery & Traversal Flow`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesItems`}),` orchestrates several complex logic flows:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Index Decoding`}),`: When an index like `,(0,c.jsx)(t.code,{children:`theme.button-main.color`}),` is requested, it normalizes segments to camelCase and resolves them against the nested `,(0,c.jsx)(t.code,{children:`value`}),` objects of the tree.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Context Management`}),`: During traversal (`,(0,c.jsx)(t.code,{children:`each`}),`), the class maintains a `,(0,c.jsx)(t.code,{children:`parents`}),` stack, allowing every discovered node to know exactly where it sits in the hierarchy (crucial for generating CSS variables or documentation paths).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design Isolation`}),`: By calling `,(0,c.jsx)(t.code,{children:`setFocusDesign()`}),`, users can toggle the "view" of the entire tree. Subsequent calls to `,(0,c.jsx)(t.code,{children:`get()`}),` or `,(0,c.jsx)(t.code,{children:`each()`}),` will automatically ignore designs that are NOT the focused one or the common `,(0,c.jsx)(t.code,{children:`_constructor`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Link Normalization`}),`: Methods like `,(0,c.jsx)(t.code,{children:`getLink()`}),` handle the transformation of legacy path symbols (like `,(0,c.jsx)(t.code,{children:`??`}),` and `,(0,c.jsx)(t.code,{children:`?`}),`) into absolute, fully-qualified property indices by prepending current design and component contexts.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};