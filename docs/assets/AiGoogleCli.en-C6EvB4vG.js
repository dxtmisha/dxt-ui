import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiGoogleCli - Auto-configured Google Gemini AI via CLI`}),`
`,(0,c.jsx)(t.h1,{id:`aigooglecli-class`,children:`AiGoogleCli Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A high-level implementation for interacting with Google's Gemini AI via a system command-line interface. The `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` class extends `,(0,c.jsx)(t.code,{children:`AiGoogleCliLite`}),` and simplifies the process by automatically loading the required API key and model identifier from the project's configuration settings (`,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`This implementation requires the `,(0,c.jsx)(t.code,{children:`gemini`}),` CLI utility to be installed and accessible in the system path.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Configuration`}),` — no manual initialization of keys or models is needed; it pulls everything from the project environment.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CLI-based Execution`}),` — leverages shell commands to perform AI requests, making it suitable for specific build environments.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Temporary File Management`}),` — handles the creation and cleanup of temporary prompt files (`,(0,c.jsx)(t.code,{children:`./ai-tmp`}),`) automatically.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Concise Outputs`}),` — uses optimized CLI flags to ensure the AI returns direct answers without conversational preamble.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` class is ready to use without any constructor arguments.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Generate a response using project-defined settings
const response = await ai.generate('Summarize the changes in the project.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Inherited) Analyzes input, manages temporary files, and executes the CLI command to get a response.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Inherited) Manually overrides the API key if necessary.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Inherited) Switches to a different model ID.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Inherited) Sets a persistent text prefix for system instructions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Inherited) Adds a text part to the cumulative request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Inherited) Clears the persistent prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Inherited) Clears all accumulated text parts.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`limitations`,children:`Limitations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multimodal Support`}),` — like its base class, this implementation does not currently support image inputs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`System Dependencies`}),` — requires the `,(0,c.jsx)(t.code,{children:`gemini`}),` CLI tool and appropriate file system permissions for temporary data.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};