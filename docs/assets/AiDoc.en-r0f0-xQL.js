import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/AiDoc - AI Documentation Engine`}),`
`,(0,c.jsx)(n.h1,{id:`aidoc-class`,children:`AiDoc Class`}),`
`,(0,c.jsx)(n.p,{children:`The central engine for orchestrating AI-driven documentation generation across the project. It coordinates reading configuration, scanning directories, and delegating documentation tasks to specialized AI handlers.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Batch Processing`}),` — automatically iterates through configured directories to generate documentation for multiple files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Project-wide Integration`}),` — reads project settings via `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` to determine target paths and scopes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Git Intelligence`}),` — uses `,(0,c.jsx)(n.code,{children:`GitRead`}),` to identify relevant files and filter them based on repository status.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Error Resilience`}),` — robust error handling during the documentation process to ensure the engine fails gracefully or reports issues clearly.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiDoc`}),` class is typically instantiated as a singleton or a main coordinator to start the documentation build.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Start processing all configured directories
await engine.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — the main entry point. Reads configuration and starts processing all defined documentation directories.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeDirectory(dir: string): Promise<void>`}),` — processes all relevant files within a specific directory by delegating to specialized AI handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`A high-level coordinator that doesn't expose public configuration properties or complex state.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};