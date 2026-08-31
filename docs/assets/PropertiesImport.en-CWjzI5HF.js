import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesImport - External Token Resolver`}),`
`,(0,c.jsx)(t.h1,{id:`propertiesimport-class`,children:`PropertiesImport Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesImport`}),` class is a specialized manager for resolving and integrating external file references within design token clusters. It allows developers to modularize property definitions across multiple files or directories, providing powerful mechanisms for deep-linking into specific data structures and recursive merging of independent token sets into a single unified configuration.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Modular Resolution`}),` — Transparently includes external `,(0,c.jsx)(t.code,{children:`.json`}),` files or entire directories into the property tree.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Deep Deep-Linking`}),` — Supports fragment identifiers (e.g., `,(0,c.jsx)(t.code,{children:`#path.to.node`}),`) to import only specific subsets of an external file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Directory Import`}),` — Automatically maps folder structures to property namespaces when a directory is referenced.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Context-Aware Resolution`}),` — Tracks the current directory level to resolve relative file paths correctly during deep traversal.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Normalized Merging`}),` — Ensures that imported data is passed through `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` before being merged into the parent tree.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`PropertiesImport(properties, root)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — initial property list (token tree) to be processed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`root: string[]`}),` — base path segments for resolving relative file references.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesImport } from '@dxtmisha/scripts'

// 1. Prepare raw data and path context
const initialProperties = { 
  button: { type: 'file', value: 'components/button.json' } 
}
const rootPath = ['src', 'tokens']

// 2. Create the importer instance
const importer = new PropertiesImport(initialProperties, rootPath)

// 3. Trigger the resolution of external references
const resolvedData = importer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(properties, root): PropertyList`}),` — resolves and merges all external file references within the property cluster.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-external-resolution-flow`,children:`The External Resolution Flow`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesImport`}),` manages a multi-stage resolution pipeline:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Detection`}),`: As it traverses the tree, it specifically targets items where the `,(0,c.jsx)(t.code,{children:`value`}),` is a string and the type metadata matches `,(0,c.jsx)(t.code,{children:`PropertyType.file`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Link Parsing`}),`: It splits the reference string (e.g., `,(0,c.jsx)(t.code,{children:`theme/colors.json#primary`}),`) into a physical file `,(0,c.jsx)(t.code,{children:`path`}),` and an optional internal `,(0,c.jsx)(t.code,{children:`link`}),` fragment.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`IO Execution`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Single File`}),`: Reads the target file via `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Directory`}),`: Maps all `,(0,c.jsx)(t.code,{children:`.json`}),` files in the folder to child properties named after the filenames.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Deep Extraction`}),`: If a fragment identifier (`,(0,c.jsx)(t.code,{children:`#`}),`) was present, it navigates through the read object to return only the requested sub-path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standardization & Recusion`}),`: The extracted data is passed to `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` for normalization and then recursively passed back to `,(0,c.jsx)(t.code,{children:`to()`}),` to resolve any `,(0,c.jsx)(t.em,{children:`nested`}),` imports within the newly included file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Merging`}),`: The finalized data is recursively merged into the parent structure using `,(0,c.jsx)(t.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};