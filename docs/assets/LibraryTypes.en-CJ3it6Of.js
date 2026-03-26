import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/LibraryTypes - Vue Type Definitions Generator`}),`
`,(0,c.jsx)(n.h1,{id:`librarytypes-class`,children:`LibraryTypes Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryTypes`}),` class is responsible for generating global Type Definition files for Vue components. This enables full IDE support and type checking for the design system components used globally within a Vue application.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Component Support`}),` — Generates `,(0,c.jsx)(n.code,{children:`declare module`}),` blocks for `,(0,c.jsx)(n.code,{children:`@vue/runtime-core`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Type Mapping`}),` — Automatically links component code names to their respective `,(0,c.jsx)(n.code,{children:`.vue`}),` file types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Improved DX`}),` — Enables IntelliSense and prop validation for design system components in Vue templates.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Path Resolution`}),` — Correctly resolves component source paths based on the design system configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`LibraryTypes(items)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — an object for working with the list of components and managing file writes.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Triggers the generation of the global type definition file (`,(0,c.jsx)(n.code,{children:`types.d.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`make`}),` method generates a `,(0,c.jsx)(n.code,{children:`types`}),` file (typically `,(0,c.jsx)(n.code,{children:`types.d.ts`}),`) that extends Vue's global component registry.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Generated Code Profile:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Module:`}),` `,(0,c.jsx)(n.code,{children:`@vue/runtime-core`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Interface:`}),` `,(0,c.jsx)(n.code,{children:`GlobalComponents`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Output:`}),` A mapping of all library components.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};