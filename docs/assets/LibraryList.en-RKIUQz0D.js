import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/LibraryList - Component List Generator"}),`
`,e.jsx(n.h1,{id:"librarylist-class",children:"LibraryList Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LibraryList"})," class is responsible for generating the core configuration file for the design system. This file consolidates library metadata, identification patterns (regex), and the full list of component imports required for the design system architecture."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Metadata Consolidation"})," — Aggregates package names and design identifiers into a single configuration point."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern Generation"})," — Automatically builds complex regular expressions for component and style variable identification."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Import Mapping"})," — Generates a structured list of component imports used by the designer and build tools."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming Standard Enforcement"})," — Handles design prefixes and kebab-case naming conventions automatically."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"LibraryList(items)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: LibraryItems"})," — an object for working with the list of components and managing file writes."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LibraryList, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryList
const listGenerator = new LibraryList(items)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): this"})," — Triggers the generation of the design system overview file (",e.jsx(n.code,{children:"design.ts"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"generated-file-structure",children:"Generated File Structure"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"make"})," method generates a ",e.jsx(n.code,{children:"design.ts"})," file that provides essential metadata for the design system's integration."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Exports:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"designName: string"})," — The primary design identifier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"packageName: string"})," — The target NPM package name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"componentsReg: RegExp"})," — Global pattern for identifying design components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleVarsReg: RegExp"})," — Pattern for identifying design-specific CSS variables."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"componentsList: PluginComponentImports"})," — Registry of individual component import definitions."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { PluginComponentImports } from '@dxtmisha/constructor/plugin'

// count: 2
export const designName: string = 'dxt'
export const packageName: string = '@dxtmisha/ui'
export const componentsReg: RegExp = /((dxt)-?(button|input))/ig
export const styleVarsReg: RegExp = /(?<=var\\(--)(primary-color|font-size)/ig

export const componentsList: PluginComponentImports = [
  {
    name: 'DxtButton',
    reg: /^((dxt)-?(button))$/ig
  },
  {
    name: 'DxtInput',
    reg: /^((dxt)-?(input))$/ig
  }
]
`})})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{m as default};
