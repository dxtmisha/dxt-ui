import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PropertiesKeys - Key Semantic Transformer"}),`
`,e.jsx(n.h1,{id:"propertieskeys-class",children:"PropertiesKeys Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesKeys"}),' class is a specialized static utility designed to parse and transform the semantic meaning of design token keys. It acts as the "grammatical engine" for property names, distinguishing between functional data keys and architectural metadata keys. By providing mechanisms for normalization, type-aware prefixing, and special symbol detection, it ensures that token keys remain consistent and predictable regardless of their source format (JSON, SCSS, or internal state).']}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Metadata Identification"})," — Detects protected system keys like ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"type"}),", and underscored internal properties."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefix Normalization"})," — Automatically strips architectural symbols (like ",e.jsx(n.code,{children:"="})," or ",e.jsx(n.code,{children:"|"}),") to extract the pure semantic name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Casing Orchestration"})," — Integrates with ",e.jsx(n.code,{children:"toCamelCase"})," to maintain consistent naming conventions across the token tree."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-Aware Re-keying"})," — Dynamically transforms keys based on their category (e.g., prepending ",e.jsx(n.code,{children:"media-"})," to media tokens or ",e.jsx(n.code,{children:"container-"})," to container queries)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SCSS Compatibility"})," — Handles special formatting for SCSS-compatible keys, including leading ampersands."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["As a static utility class, ",e.jsx(n.code,{children:"PropertiesKeys"})," does not require instantiation and is ready to use upon import."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesKeys } from '@dxtmisha/scripts'

// Check if a key is a metadata field
const isReserved = PropertiesKeys.isSpecialKey('type')

// Resolve a clean semantic name
const cleanName = PropertiesKeys.getName('=primary-color')
// Returns: "primaryColor"
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSpecialKey(key): boolean"})," — checks if the key is a reserved system metadata field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isFull(name): boolean"})," — determines if the name is an absolute/complete definition."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getName(name, camelCase?): string"})," — normalizes a key by stripping prefixes and optionally applying camelCase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reKey(key, type?): string"})," — transforms a key based on its architectural type (media, container, scss, etc.)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-key-transformation-pipeline",children:"The Key Transformation Pipeline"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesKeys"})," manages the translation logic between raw input formats and standardized internal tokens:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic Extraction"}),": When ",e.jsx(n.code,{children:"getName()"})," is called, the class uses ",e.jsx(n.code,{children:"PropertiesTypes"})," regex triggers to identify and remove control symbols (like ",e.jsx(n.code,{children:"="})," which signifies an immutable value)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contextual Prefixing"}),": In the ",e.jsx(n.code,{children:"reKey()"})," flow, the class checks the ",e.jsx(n.code,{children:"_type"})," of the token. If it identifies a ",e.jsx(n.code,{children:"media"})," type, it intelligently ensures the key reflects this role (e.g., ",e.jsx(n.code,{children:"desktop"})," becomes ",e.jsx(n.code,{children:"mediaDesktop"}),"), avoiding redundant prefixes if they already exist."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Internal State Protection"}),": The ",e.jsx(n.code,{children:"isSpecialKey()"})," check is crucial for traversal engines; it prevents the processing of internal machinery (keys starting with ",e.jsx(n.code,{children:"_"}),") as if they were actual user-defined design tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Platform Adaptation"}),": For SCSS generation, the class specifically handles prefixing with ",e.jsx(n.code,{children:"&"}),", allowing design tokens to be directly usable in nested style declarations."]}),`
`]})]})}function m(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
