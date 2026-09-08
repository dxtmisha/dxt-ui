import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiAntigravityCliLite - Lightweight Google Antigravity AI CLI Class`}),`
`,(0,c.jsx)(t.h1,{id:`aiantigravityclilite-class`,children:`AiAntigravityCliLite Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A dedicated lightweight implementation of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` that interfaces with Google Antigravity AI via the `,(0,c.jsx)(t.code,{children:`agy`}),` command-line utility.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`This implementation requires the `,(0,c.jsx)(t.code,{children:`agy`}),` CLI utility to be installed and accessible in your system PATH.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Direct CLI Execution`}),` — executes requests via `,(0,c.jsx)(t.code,{children:`execFile`}),` (`,(0,c.jsx)(t.code,{children:`node:child_process`}),`) without an intermediate shell.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Large Context Streaming`}),` — writes large prompt payloads to temporary files using `,(0,c.jsx)(t.code,{children:`ApiTmp`}),`, bypassing terminal argument size limits.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Resource Cleanup`}),` — ensures prompt files are removed immediately upon receiving output or on failure.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`YOLO Mode`}),` — enforces `,(0,c.jsx)(t.code,{children:`--yolo`}),` execution and direct, non-conversational code output.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Instantiate `,(0,c.jsx)(t.code,{children:`AiAntigravityCliLite`}),` by passing the API key, model ID, and optional configuration to the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API key (passed to the CLI process via environment variables).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Model identifier for Antigravity CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config?: Record<string, any>`}),` — Optional configuration record.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiAntigravityCliLite } from '@dxtmisha/scripts'

const ai = new AiAntigravityCliLite('YOUR_API_KEY', 'gemini-3.7-flash')

// Generate output
const response = await ai.generate('Analyze the package architecture.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — Primary execution method. Compiles accumulated context to temporary files, executes the `,(0,c.jsx)(t.code,{children:`agy`}),` command, and returns the response.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — Updates the API key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — Switches the active model identifier.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — Sets a persistent system prompt prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — Appends a text part to the cumulative context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — Clears the persistent prompt prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — Clears all accumulated text segments.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`limitations`,children:`Limitations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Images`}),` — image attachments are currently ignored in CLI execution mode.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Environment`}),` — requires the `,(0,c.jsx)(t.code,{children:`agy`}),` binary in system PATH.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};