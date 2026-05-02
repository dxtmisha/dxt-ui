import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/LibraryFlags - Flags Connector Generator`}),`
`,(0,c.jsx)(n.h1,{id:`libraryflags-class`,children:`LibraryFlags Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryFlags`}),` class is responsible for generating files to connect country flags to the design system. It produces a TypeScript entry point for registering flags as icons and a JSON file containing a list of all available flag identifiers.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flag Connection Generation`}),` — Creates a TypeScript initialization file that registers flags as global icons.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Identifier List Generation`}),` — Produces a JSON file for metadata and automated flag selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Naming Standardization`}),` — Automatically formats flag identifiers to follow the `,(0,c.jsx)(n.code,{children:`flag-[code]`}),` convention.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Processing`}),` — Scans and processes all available flags from the media library.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`LibraryFlags(items)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — an object for working with the list of components and managing file writes.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Triggers the generation of the flag connection files (TS and JSON).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`generated-files-structure`,children:`Generated Files Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`make`}),` method generates two main files to integrate flags into the library:`]}),`
`,(0,c.jsxs)(n.h3,{id:`1-flag-connection-flagsts`,children:[`1. Flag Connection (`,(0,c.jsx)(n.code,{children:`flags.ts`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Registers flags as global icons using the `,(0,c.jsx)(n.code,{children:`Icons`}),` manager.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-us', flags.us)
  Icons.add('flag-gb', flags.gb)
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-flag-identifiers-flagsjson`,children:[`2. Flag Identifiers (`,(0,c.jsx)(n.code,{children:`flags.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`A simple array of strings containing all generated flag keys.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`["flag-us", "flag-gb"]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};