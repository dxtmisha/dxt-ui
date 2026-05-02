import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/AiGoogleCliLite - Google Gemini AI via CLI`}),`
`,(0,c.jsx)(n.h1,{id:`aigoogleclilite-class`,children:`AiGoogleCliLite Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A specialized implementation of the `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` class that interacts with Google's Gemini AI using a system command-line interface (CLI). This approach is useful in environments where a direct SDK integration is not preferred or where existing CLI tools are leveraged.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`This implementation requires the `,(0,c.jsx)(n.code,{children:`gemini`}),` CLI utility to be installed and accessible in the system path.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CLI-driven Workflow`}),` — executes requests by constructing and running shell commands.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Large Prompt Handling`}),` — automatically creates temporary files to pass large prompt contents to the CLI, avoiding command-line length limitations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clean Execution`}),` — manages its own temporary storage (`,(0,c.jsx)(n.code,{children:`./ai-tmp`}),`) and performs cleanup after each request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`YOLO Mode`}),` — executes commands with strict output flags to ensure results are concise and free of conversational filler.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize `,(0,c.jsx)(n.code,{children:`AiGoogleCliLite`}),` with your API key and intended model.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — your Google AI API key (passed to the CLI via environment variables).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — the model identifier for the Gemini CLI.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogleCliLite } from '@dxtmisha/scripts'

const ai = new AiGoogleCliLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Generate a response
const response = await ai.generate('Review this code snippet.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — the primary method for interaction. It compiles the context into temporary files, executes the CLI command, and returns the trimmed output.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — updates the API key for subsequent CLI calls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — switches the active model ID.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — sets a persistent text prefix.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — adds a text part to the cumulative prompt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — clears the persistent prefix.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — clears all accumulated text parts.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`limitations`,children:`Limitations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Images`}),` — currently, the CLI implementation does not support image passing (`,(0,c.jsx)(n.code,{children:`addImage`}),` will have no effect on the generation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Environment`}),` — relies on the availability of the `,(0,c.jsx)(n.code,{children:`exec`}),` function and the filesystem for temporary storage.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};