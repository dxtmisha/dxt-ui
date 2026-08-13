import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/BuildFunctional - Library Builder for Functional`}),`
`,(0,c.jsx)(t.h1,{id:`buildfunctional-class`,children:`BuildFunctional Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`BuildFunctional`}),` class is a utility responsible for generating a central export file for the functional library. It scans the `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` package and creates a `,(0,c.jsx)(t.code,{children:`functional.ts`}),` file in the library directory, re-exporting all discovered members.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Re-exports`}),` — Automatically discovers and re-exports all members from the functional package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Support`}),` — Includes `,(0,c.jsx)(t.code,{children:`export type *`}),` to ensure full TypeScript type availability.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Library Integration`}),` — Integrates with the project's library structure by writing to the configured library directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`You can create an instance of `,(0,c.jsx)(t.code,{children:`BuildFunctional`}),` without any parameters.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:`make`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Triggers the build process. It retrieves the list of members, formats the export code, and writes it to `,(0,c.jsx)(t.code,{children:`src/library/functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`getlist`,children:`getList`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): string[]`}),` — Returns an array of keys (exported members) from the `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` package.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};