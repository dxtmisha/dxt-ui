import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/BuildFunctional - Library Builder for Functional`}),`
`,(0,c.jsx)(n.h1,{id:`buildfunctional-class`,children:`BuildFunctional Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`BuildFunctional`}),` class is a utility responsible for generating a central export file for the functional library. It scans the `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` package and creates a `,(0,c.jsx)(n.code,{children:`functional.ts`}),` file in the library directory, re-exporting all discovered members.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Re-exports`}),` — Automatically discovers and re-exports all members from the functional package.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Support`}),` — Includes `,(0,c.jsx)(n.code,{children:`export type *`}),` to ensure full TypeScript type availability.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Library Integration`}),` — Integrates with the project's library structure by writing to the configured library directory.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`You can create an instance of `,(0,c.jsx)(n.code,{children:`BuildFunctional`}),` without any parameters.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:`make`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Triggers the build process. It retrieves the list of members, formats the export code, and writes it to `,(0,c.jsx)(n.code,{children:`src/library/functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`getlist`,children:`getList`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): string[]`}),` — Returns an array of keys (exported members) from the `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` package.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};