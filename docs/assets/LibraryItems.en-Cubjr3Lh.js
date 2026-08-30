import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryItems - Component List Manager`}),`
`,(0,c.jsx)(t.h1,{id:`libraryitems-class`,children:`LibraryItems Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryItems`}),` class is responsible for managing the list of components within the design system. It provides utilities to retrieve component data, count components, determine component paths, and write data to the library directory.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component Management`}),` — Retrieves and organizes components by design groups.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Resolution`}),` — Determines the correct absolute paths for design system components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`File Writing Utility`}),` — Provides a standardized way to write TypeScript and JSON files to the library, including auto-generated headers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design Configuration Integration`}),` — Seamlessly integrates with `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` and `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` for project-specific settings.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize the `,(0,c.jsx)(t.code,{children:`LibraryItems`}),` class without arguments.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): LibraryAll`}),` — returns the full list of components organized by design groups.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentList(): LibraryData[]`}),` — returns a flat array of all components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCount(): number`}),` — returns the total number of components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentsPath(): string[]`}),` — returns the path elements for the components directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`write`,children:(0,c.jsx)(t.code,{children:`write`})}),`
`,(0,c.jsx)(t.p,{children:`Writes the provided data to a file within the library directory. Automatically adds a generation header for TypeScript files.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the file name (without extension).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string[]`}),` — an array of strings to write. Each string will be separated by a newline character.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string = 'ts'`}),` — the file extension. Defaults to `,(0,c.jsx)(t.code,{children:`ts`}),`. `,(0,c.jsx)(t.code,{children:`json`}),` is also supported.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};