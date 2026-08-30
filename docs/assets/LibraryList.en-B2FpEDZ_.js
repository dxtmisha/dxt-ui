import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryList - Component List Generator`}),`
`,(0,c.jsx)(t.h1,{id:`librarylist-class`,children:`LibraryList Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryList`}),` class is responsible for generating the core configuration file for the design system. This file consolidates library metadata, identification patterns (regex), and the full list of component imports required for the design system architecture.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Metadata Consolidation`}),` — Aggregates package names and design identifiers into a single configuration point.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pattern Generation`}),` — Automatically builds complex regular expressions for component and style variable identification.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Import Mapping`}),` — Generates a structured list of component imports used by the designer and build tools.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Naming Standard Enforcement`}),` — Handles design prefixes and kebab-case naming conventions automatically.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`LibraryList(items)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — an object for working with the list of components and managing file writes.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryList, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryList
const listGenerator = new LibraryList(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — Triggers the generation of the design system overview file (`,(0,c.jsx)(t.code,{children:`design.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`make`}),` method generates a `,(0,c.jsx)(t.code,{children:`design.ts`}),` file that provides essential metadata for the design system's integration.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Exports:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`designName: string`}),` — The primary design identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`packageName: string`}),` — The target NPM package name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentsReg: RegExp`}),` — Global pattern for identifying design components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleVarsReg: RegExp`}),` — Pattern for identifying design-specific CSS variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentsList: PluginComponentImports`}),` — Registry of individual component import definitions.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import type { PluginComponentImports } from '@dxtmisha/constructor/plugin'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};