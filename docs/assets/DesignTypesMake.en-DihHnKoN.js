import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesMake - Type Generation and Caching Engine for AI`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesmake`,children:`Class DesignTypesMake`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesMake`}),` class is a high-performance engine for scanning compiled TypeScript declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), tracking modifications via MD5 hashes, stripping boilerplate metadata, and generating the consolidated `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` artifact.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`MD5-Based File Caching`}),` — Calculates checksums for declaration files and caches AI optimizations in `,(0,c.jsx)(t.code,{children:`ai-types-list/`}),`, preventing redundant, costly API calls.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Declaration Cleansing`}),` — Strips internal imports, circular type references, and redundant annotations, normalizing types into clean contracts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`JavaScript Code Context`}),` — Scans and aggregates accompanying JavaScript source code to provide deep execution context for LLMs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Single-File Consolidation`}),` — Merges dozens of fragmented `,(0,c.jsx)(t.code,{children:`.d.ts`}),` files into a compact, navigable `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` document.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — AI client instance for optimizing declarations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — input declaration directory path (defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirDist: string`}),` — compiled JavaScript directory path (defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getDistDir()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMake } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`getfullcontent-string`,children:(0,c.jsx)(t.code,{children:`getFullContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the combined and optimized type definition content across all declaration files.`}),`
`,(0,c.jsx)(t.h3,{id:`getfulljscontent-string`,children:(0,c.jsx)(t.code,{children:`getFullJsContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the combined JavaScript content across all filtered package source files.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Executes the full generation pipeline including cache validation, AI processing, and file persistence.`}),`
`,(0,c.jsx)(t.h3,{id:`makesave-this`,children:(0,c.jsx)(t.code,{children:`makeSave(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Generates full type definitions content and writes it directly to `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMake } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)

await makeTypes.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};