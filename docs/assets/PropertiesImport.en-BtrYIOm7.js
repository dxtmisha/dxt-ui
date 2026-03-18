import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/PropertiesImport - External Token Resolver"}),`
`,e.jsx(r.h1,{id:"propertiesimport-class",children:"PropertiesImport Class"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"PropertiesImport"})," class is a specialized manager for resolving and integrating external file references within design token clusters. It allows developers to modularize property definitions across multiple files or directories, providing powerful mechanisms for deep-linking into specific data structures and recursive merging of independent token sets into a single unified configuration."]}),`
`,e.jsx(r.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Modular Resolution"})," — Transparently includes external ",e.jsx(r.code,{children:".json"})," files or entire directories into the property tree."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Deep Deep-Linking"})," — Supports fragment identifiers (e.g., ",e.jsx(r.code,{children:"#path.to.node"}),") to import only specific subsets of an external file."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Recursive Directory Import"})," — Automatically maps folder structures to property namespaces when a directory is referenced."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Context-Aware Resolution"})," — Tracks the current directory level to resolve relative file paths correctly during deep traversal."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Normalized Merging"})," — Ensures that imported data is passed through ",e.jsx(r.code,{children:"PropertiesStandard"})," before being merged into the parent tree."]}),`
`]}),`
`,e.jsx(r.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(r.p,{children:["To initialize the object, call the ",e.jsx(r.code,{children:"PropertiesImport(properties, root)"})," constructor."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"properties: PropertyList"})," — initial property list (token tree) to be processed."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"root: string[]"})," — base path segments for resolving relative file references."]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesImport } from '@dxtmisha/scripts'

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
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"to(properties, root): PropertyList"})," — resolves and merges all external file references within the property cluster."]}),`
`]}),`
`,e.jsx(r.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(r.h3,{id:"the-external-resolution-flow",children:"The External Resolution Flow"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"PropertiesImport"})," manages a multi-stage resolution pipeline:"]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Detection"}),": As it traverses the tree, it specifically targets items where the ",e.jsx(r.code,{children:"value"})," is a string and the type metadata matches ",e.jsx(r.code,{children:"PropertyType.file"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Link Parsing"}),": It splits the reference string (e.g., ",e.jsx(r.code,{children:"theme/colors.json#primary"}),") into a physical file ",e.jsx(r.code,{children:"path"})," and an optional internal ",e.jsx(r.code,{children:"link"})," fragment."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"IO Execution"}),":",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Single File"}),": Reads the target file via ",e.jsx(r.code,{children:"PropertiesCache"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Directory"}),": Maps all ",e.jsx(r.code,{children:".json"})," files in the folder to child properties named after the filenames."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Deep Extraction"}),": If a fragment identifier (",e.jsx(r.code,{children:"#"}),") was present, it navigates through the read object to return only the requested sub-path."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Standardization & Recusion"}),": The extracted data is passed to ",e.jsx(r.code,{children:"PropertiesStandard"})," for normalization and then recursively passed back to ",e.jsx(r.code,{children:"to()"})," to resolve any ",e.jsx(r.em,{children:"nested"})," imports within the newly included file."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Merging"}),": The finalized data is recursively merged into the parent structure using ",e.jsx(r.code,{children:"replaceRecursive"}),"."]}),`
`]})]})}function p(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
