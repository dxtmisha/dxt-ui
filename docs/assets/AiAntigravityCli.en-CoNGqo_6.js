import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiAntigravityCli - Auto-configured Google Antigravity AI via CLI`}),`
`,(0,c.jsx)(t.h1,{id:`aiantigravitycli-class`,children:`AiAntigravityCli Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A high-level implementation for interacting with Google Antigravity AI via the `,(0,c.jsx)(t.code,{children:`agy`}),` command-line interface. The `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`}),` class extends `,(0,c.jsx)(t.code,{children:`AiAntigravityCliLite`}),` and simplifies workflow by automatically loading the required API key and model identifier from the project's configuration settings (`,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`This implementation requires the `,(0,c.jsx)(t.code,{children:`agy`}),` CLI utility to be installed and accessible in the system path.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Configuration`}),` — no manual initialization needed; reads credentials and model settings directly from project configuration (`,(0,c.jsx)(t.code,{children:`design.config.json`}),` / `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Direct CLI Execution`}),` — invokes `,(0,c.jsx)(t.code,{children:`agy`}),` directly without a system shell for reliable execution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Temporary File Pipeline`}),` — manages the creation and cleanup of temporary prompt files (`,(0,c.jsx)(t.code,{children:`ApiTmp`}),`) automatically.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Concise Outputs`}),` — applies the `,(0,c.jsx)(t.code,{children:`--yolo`}),` flag and instructions to ensure direct answers without chat preamble.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`}),` class is ready to use without constructor arguments.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiAntigravityCli } from '@dxtmisha/scripts'

const ai = new AiAntigravityCli()

// Generate a response using project-defined settings
const response = await ai.generate('Generate a TypeScript interface for this component.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Inherited) Analyzes input, manages temporary prompt files, and executes the `,(0,c.jsx)(t.code,{children:`agy`}),` CLI command to retrieve output.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Inherited) Manually overrides the API key if necessary.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Inherited) Switches the active model identifier.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Inherited) Sets a persistent text prefix for system instructions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Inherited) Appends a text segment to the cumulative request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Inherited) Clears the persistent prompt prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Inherited) Clears all accumulated text segments.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`limitations`,children:`Limitations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multimodal Support`}),` — this CLI-based implementation currently does not support image inputs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`System Dependencies`}),` — requires the `,(0,c.jsx)(t.code,{children:`agy`}),` CLI tool installed and accessible in the system PATH.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};