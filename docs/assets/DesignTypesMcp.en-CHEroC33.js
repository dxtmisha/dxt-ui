import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesMcp - MCP Server Resource Generator for AI`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesmcp`,children:`Class DesignTypesMcp`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` class generates, formats, and persists the Model Context Protocol (MCP) resource manifest (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`), enabling tool and context integration for AI agents.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Resource Registration`}),` — Formats `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, screenshots, and prompt files into standard MCP resources.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic URI Resolution`}),` — Generates unique resource identifiers matching the `,(0,c.jsx)(t.code,{children:`<projectName>/<filePath>`}),` scheme.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Screenshot Integration`}),` — Scans the `,(0,c.jsx)(t.code,{children:`ai-screenshot`}),` directory and registers visual reference images with appropriate `,(0,c.jsx)(t.code,{children:`image/png`}),` MIME types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Config Persistence`}),` — Writes the complete resource array to `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — AI client instance providing project name resolution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompts: DesignTypesPrompts`}),` — Prompts manager providing prompt file metadata.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  DesignTypesAi,
  DesignTypesPrompts,
  DesignTypesMcp
} from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)
const mcp = new DesignTypesMcp(ai, prompts)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Compiles all project MCP resources (types, description, screenshots, prompts) and writes `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const mcp = new DesignTypesMcp(ai, prompts)
await mcp.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};