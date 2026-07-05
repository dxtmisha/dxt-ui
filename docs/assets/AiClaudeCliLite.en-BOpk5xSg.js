import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/AiClaudeCliLite - Claude CLI Service Lite Class`}),`
`,(0,c.jsx)(n.h1,{id:`aiclaudeclilite-class`,children:`AiClaudeCliLite Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` class is a lightweight implementation of `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` that interacts with the official Claude CLI tool via system shell commands. It manages temporary prompt files using `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` to bypass terminal argument length limits.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CLI Shell Execution`}),` — leverages the system shell (`,(0,c.jsx)(n.code,{children:`node:child_process`}),`) to invoke `,(0,c.jsx)(n.code,{children:`claude`}),` CLI commands.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Temporary File Routing`}),` — utilizes `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` to dump long prompts/contents into local `,(0,c.jsx)(n.code,{children:`.txt`}),` files, formatting references to them with `,(0,c.jsx)(n.code,{children:`@`}),` annotations to ensure reliable execution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prompt Safety`}),` — automatically escapes double quotes and enforces strict answering format (e.g., `,(0,c.jsx)(n.code,{children:`Output strictly the code/answer. No preamble, no chatter, no reasoning`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Resource Cleanup`}),` — automatically purges all temporary folders and files upon final response resolution or error.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — The API key for the Anthropic service.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — The initial model identifier.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeCliLite } from '@dxtmisha/scripts'

const ai = new AiClaudeCliLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(n.p,{children:[`These protected methods implement the required extension interface of `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Sets `,(0,c.jsx)(n.code,{children:`this.ai`}),` to an empty object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Returns an empty array `,(0,c.jsx)(n.code,{children:`[]`}),` (image handling is ignored for CLI execution).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Converts accumulated `,(0,c.jsx)(n.code,{children:`contents`}),` into temporary files using `,(0,c.jsx)(n.code,{children:`ApiTmp.createFile`}),` and returns their formatted paths.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Bundles all temporary files, escapes quote blocks, constructs the shell execution statement, runs it, and cleans up resources.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};