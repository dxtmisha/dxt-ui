import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryAiMcp - TypeScript MCP Resource Module Generator`}),`
`,(0,c.jsx)(t.h1,{id:`class-libraryaimcp`,children:`Class LibraryAiMcp`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryAiMcp`}),` class generates the TypeScript module (`,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.ts`}),`) from the aggregated `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` manifest, enabling typed dynamic imports for MCP resources.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`TypeScript Module Compilation`}),` — Converts JSON resource lists into a strongly-typed TypeScript file with lazy dynamic import handlers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package-Level Grouping`}),` — Groups resources by npm package, generating clean variables like `,(0,c.jsx)(t.code,{children:`mcp<PackageName>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Content Loaders`}),` — Registers asynchronous `,(0,c.jsx)(t.code,{children:`read: () => import(...)`}),` loaders for both text markdown and image assets.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Root ai-prompt.md Integration`}),` — Automatically incorporates the root `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` into the global MCP resource registry if present.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`source: PropertiesFilePath | Record<string, unknown>[]`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_MCP_ALL`}),`)`]}),` Path to JSON file or resource records array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileTs: PropertiesFilePath`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_MCP_ALL_TS`}),`)`]}),` Path to target TypeScript output file.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcp } from '@dxtmisha/scripts'

const mcp = new LibraryAiMcp()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`getresources-recordstring-unknown`,children:(0,c.jsx)(t.code,{children:`getResources(): Record<string, unknown>[]`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the array of parsed MCP resources.`}),`
`,(0,c.jsx)(t.h3,{id:`isprompt-boolean`,children:(0,c.jsx)(t.code,{children:`isPrompt(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks if the root `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` exists.`]}),`
`,(0,c.jsx)(t.h3,{id:`make-void`,children:(0,c.jsx)(t.code,{children:`make(): void`})}),`
`,(0,c.jsxs)(t.p,{children:[`Parses `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` and writes `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.ts`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcp } from '@dxtmisha/scripts'

const mcp = new LibraryAiMcp()
mcp.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};