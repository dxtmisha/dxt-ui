import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryTypes - Vue Type Definitions Generator`}),`
`,(0,c.jsx)(t.h1,{id:`librarytypes-class`,children:`LibraryTypes Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryTypes`}),` class is responsible for generating global Type Definition files for Vue components. This enables full IDE support and type checking for the design system components used globally within a Vue application.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Component Support`}),` — Generates `,(0,c.jsx)(t.code,{children:`declare module`}),` blocks for `,(0,c.jsx)(t.code,{children:`@vue/runtime-core`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Type Mapping`}),` — Automatically links component code names to their respective `,(0,c.jsx)(t.code,{children:`.vue`}),` file types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Improved DX`}),` — Enables IntelliSense and prop validation for design system components in Vue templates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Path Resolution`}),` — Correctly resolves component source paths based on the design system configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`LibraryTypes(items)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — an object for working with the list of components and managing file writes.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Triggers the generation of the global type definition file (`,(0,c.jsx)(t.code,{children:`types.d.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`make`}),` method generates a `,(0,c.jsx)(t.code,{children:`types`}),` file (typically `,(0,c.jsx)(t.code,{children:`types.d.ts`}),`) that extends Vue's global component registry.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Generated Code Profile:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Module:`}),` `,(0,c.jsx)(t.code,{children:`@vue/runtime-core`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Interface:`}),` `,(0,c.jsx)(t.code,{children:`GlobalComponents`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Output:`}),` A mapping of all library components.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};