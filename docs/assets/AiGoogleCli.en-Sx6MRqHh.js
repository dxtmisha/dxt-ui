import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/AiGoogleCli - Auto-configured Google Gemini AI via CLI`}),`
`,(0,c.jsx)(n.h1,{id:`aigooglecli-class`,children:`AiGoogleCli Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A high-level implementation for interacting with Google's Gemini AI via a system command-line interface. The `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` class extends `,(0,c.jsx)(n.code,{children:`AiGoogleCliLite`}),` and simplifies the process by automatically loading the required API key and model identifier from the project's configuration settings (`,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`This implementation requires the `,(0,c.jsx)(n.code,{children:`gemini`}),` CLI utility to be installed and accessible in the system path.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Configuration`}),` — no manual initialization of keys or models is needed; it pulls everything from the project environment.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CLI-based Execution`}),` — leverages shell commands to perform AI requests, making it suitable for specific build environments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Temporary File Management`}),` — handles the creation and cleanup of temporary prompt files (`,(0,c.jsx)(n.code,{children:`./ai-tmp`}),`) automatically.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Concise Outputs`}),` — uses optimized CLI flags to ensure the AI returns direct answers without conversational preamble.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` class is ready to use without any constructor arguments.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Generate a response using project-defined settings
const response = await ai.generate('Summarize the changes in the project.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — (Inherited) Analyzes input, manages temporary files, and executes the CLI command to get a response.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — (Inherited) Manually overrides the API key if necessary.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — (Inherited) Switches to a different model ID.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — (Inherited) Sets a persistent text prefix for system instructions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — (Inherited) Adds a text part to the cumulative request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — (Inherited) Clears the persistent prefix.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — (Inherited) Clears all accumulated text parts.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`limitations`,children:`Limitations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multimodal Support`}),` — like its base class, this implementation does not currently support image inputs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`System Dependencies`}),` — requires the `,(0,c.jsx)(n.code,{children:`gemini`}),` CLI tool and appropriate file system permissions for temporary data.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};