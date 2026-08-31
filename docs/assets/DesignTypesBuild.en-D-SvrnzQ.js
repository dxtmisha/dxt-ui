import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesBuild - TypeScript and Vue Declaration Compiler Engine`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesbuild`,children:`Class DesignTypesBuild`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),` class compiles TypeScript source files and Vue Single File Components (`,(0,c.jsx)(t.code,{children:`.vue`}),`) into declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) inside a temporary directory prior to generating AI type references and documentation.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`TypeScript and Vue Support`}),`: Automatically detects `,(0,c.jsx)(t.code,{children:`.vue`}),` components and runs `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` to extract component typings, or uses the TypeScript Compiler API for standard TypeScript packages.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Filtering`}),`: Respects scan directory paths (`,(0,c.jsx)(t.code,{children:`typesPaths`}),`), inclusion patterns (`,(0,c.jsx)(t.code,{children:`typesMatch`}),`), and exclusion rules (`,(0,c.jsx)(t.code,{children:`typesExclude`}),`) defined in `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Cleanup`}),`: Cleans the temporary directory prior to compilation and purges non-essential declaration files (tests, stories, internal entry points).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`temporaryDirectory: string`}),` — temporary compilation directory path. Defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesBuild } from '@dxtmisha/scripts'

const builder = new DesignTypesBuild()
builder.build()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`is-boolean`,children:(0,c.jsx)(t.code,{children:`is(): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the temporary compilation directory currently exists on disk.`}),`
`,(0,c.jsx)(t.h3,{id:`isvue-boolean`,children:(0,c.jsx)(t.code,{children:`isVue(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Determines whether the project contains Vue components (`,(0,c.jsx)(t.code,{children:`.vue`}),`) requiring `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` compilation.`]}),`
`,(0,c.jsx)(t.h3,{id:`build-this`,children:(0,c.jsx)(t.code,{children:`build(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Executes the declaration compilation process, automatically selecting `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` when Vue files are present or the standard TypeScript compiler otherwise.`]}),`
`,(0,c.jsx)(t.h3,{id:`clean-this`,children:(0,c.jsx)(t.code,{children:`clean(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Deletes the temporary compilation directory and all files within it.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};