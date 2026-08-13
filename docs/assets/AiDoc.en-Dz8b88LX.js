import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiDoc - AI Documentation Engine`}),`
`,(0,c.jsx)(t.h1,{id:`aidoc-class`,children:`AiDoc Class`}),`
`,(0,c.jsx)(t.p,{children:`The central engine for orchestrating AI-driven documentation generation across the project. It coordinates reading configuration, scanning directories, and delegating documentation tasks to specialized AI handlers.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Batch Processing`}),` — automatically iterates through configured directories to generate documentation for multiple files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Project-wide Integration`}),` — reads project settings via `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` to determine target paths and scopes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Git Intelligence`}),` — uses `,(0,c.jsx)(t.code,{children:`GitRead`}),` to identify relevant files and filter them based on repository status.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Error Resilience`}),` — robust error handling during the documentation process to ensure the engine fails gracefully or reports issues clearly.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiDoc`}),` class is typically instantiated as a singleton or a main coordinator to start the documentation build.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Start processing all configured directories
await engine.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — the main entry point. Reads configuration and starts processing all defined documentation directories.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeDirectory(dir: string): Promise<void>`}),` — processes all relevant files within a specific directory by delegating to specialized AI handlers.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`A high-level coordinator that doesn't expose public configuration properties or complex state.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};