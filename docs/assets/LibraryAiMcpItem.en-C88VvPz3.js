import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryAiMcpItem - Single Package MCP Resource Handler`}),`
`,(0,c.jsx)(t.h1,{id:`class-libraryaimcpitem`,children:`Class LibraryAiMcpItem`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryAiMcpItem`}),` class represents an individual package directory during global MCP manifest aggregation and handles discovering and parsing `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` files.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Manifest Existence Checking`}),` — Verifies presence of `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` inside the package directory.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Parsing`}),` — Reads and validates arrays of MCP resource definitions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Segment Resolution`}),` — Operates on segment arrays for cross-platform file path resolution.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string[]`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`[]`}),`)`]}),` Path segments to package directory.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcpItem } from '@dxtmisha/scripts'

const item = new LibraryAiMcpItem(['packages', 'core'])
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`ismcp-boolean`,children:(0,c.jsx)(t.code,{children:`isMcp(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns `,(0,c.jsx)(t.code,{children:`true`}),` if `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` exists in the target directory.`]}),`
`,(0,c.jsx)(t.h3,{id:`make-recordstring-any--undefined`,children:(0,c.jsx)(t.code,{children:`make(): Record<string, any>[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Reads and returns the array of MCP resource definitions or `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcpItem } from '@dxtmisha/scripts'

const item = new LibraryAiMcpItem(['packages', 'core'])

if (item.isMcp()) {
  const resources = item.make()
  console.log(resources)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};