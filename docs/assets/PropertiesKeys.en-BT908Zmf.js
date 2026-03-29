import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesKeys - Key Semantic Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertieskeys-class`,children:`PropertiesKeys Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesKeys`}),` class is a specialized static utility designed to parse and transform the semantic meaning of design token keys. It acts as the "grammatical engine" for property names, distinguishing between functional data keys and architectural metadata keys. By providing mechanisms for normalization, type-aware prefixing, and special symbol detection, it ensures that token keys remain consistent and predictable regardless of their source format (JSON, SCSS, or internal state).`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Metadata Identification`}),` — Detects protected system keys like `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),`, and underscored internal properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefix Normalization`}),` — Automatically strips architectural symbols (like `,(0,c.jsx)(n.code,{children:`=`}),` or `,(0,c.jsx)(n.code,{children:`|`}),`) to extract the pure semantic name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Casing Orchestration`}),` — Integrates with `,(0,c.jsx)(n.code,{children:`toCamelCase`}),` to maintain consistent naming conventions across the token tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type-Aware Re-keying`}),` — Dynamically transforms keys based on their category (e.g., prepending `,(0,c.jsx)(n.code,{children:`media-`}),` to media tokens or `,(0,c.jsx)(n.code,{children:`container-`}),` to container queries).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SCSS Compatibility`}),` — Handles special formatting for SCSS-compatible keys, including leading ampersands.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As a static utility class, `,(0,c.jsx)(n.code,{children:`PropertiesKeys`}),` does not require instantiation and is ready to use upon import.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesKeys } from '@dxtmisha/scripts'

// Check if a key is a metadata field
const isReserved = PropertiesKeys.isSpecialKey('type')

// Resolve a clean semantic name
const cleanName = PropertiesKeys.getName('=primary-color')
// Returns: "primaryColor"
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSpecialKey(key): boolean`}),` — checks if the key is a reserved system metadata field.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFull(name): boolean`}),` — determines if the name is an absolute/complete definition.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name, camelCase?): string`}),` — normalizes a key by stripping prefixes and optionally applying camelCase.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reKey(key, type?): string`}),` — transforms a key based on its architectural type (media, container, scss, etc.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-key-transformation-pipeline`,children:`The Key Transformation Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesKeys`}),` manages the translation logic between raw input formats and standardized internal tokens:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Semantic Extraction`}),`: When `,(0,c.jsx)(n.code,{children:`getName()`}),` is called, the class uses `,(0,c.jsx)(n.code,{children:`PropertiesTypes`}),` regex triggers to identify and remove control symbols (like `,(0,c.jsx)(n.code,{children:`=`}),` which signifies an immutable value).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Contextual Prefixing`}),`: In the `,(0,c.jsx)(n.code,{children:`reKey()`}),` flow, the class checks the `,(0,c.jsx)(n.code,{children:`_type`}),` of the token. If it identifies a `,(0,c.jsx)(n.code,{children:`media`}),` type, it intelligently ensures the key reflects this role (e.g., `,(0,c.jsx)(n.code,{children:`desktop`}),` becomes `,(0,c.jsx)(n.code,{children:`mediaDesktop`}),`), avoiding redundant prefixes if they already exist.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Internal State Protection`}),`: The `,(0,c.jsx)(n.code,{children:`isSpecialKey()`}),` check is crucial for traversal engines; it prevents the processing of internal machinery (keys starting with `,(0,c.jsx)(n.code,{children:`_`}),`) as if they were actual user-defined design tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Platform Adaptation`}),`: For SCSS generation, the class specifically handles prefixing with `,(0,c.jsx)(n.code,{children:`&`}),`, allowing design tokens to be directly usable in nested style declarations.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};