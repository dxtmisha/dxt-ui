import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiClaudeCliLite - Claude CLI Service Lite Class`}),`
`,(0,c.jsx)(t.h1,{id:`aiclaudeclilite-class`,children:`AiClaudeCliLite Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` class is a lightweight implementation of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` that interacts with the official Claude CLI tool by executing it directly without a system shell. It manages temporary prompt files using `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` to bypass terminal argument length limits.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CLI Direct Execution`}),` — leverages `,(0,c.jsx)(t.code,{children:`execFile`}),` (`,(0,c.jsx)(t.code,{children:`node:child_process`}),`) to invoke the `,(0,c.jsx)(t.code,{children:`claude`}),` CLI directly, without a system shell.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Temporary File Routing`}),` — utilizes `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` to dump long prompts/contents into local `,(0,c.jsx)(t.code,{children:`.txt`}),` files, formatting references to them with `,(0,c.jsx)(t.code,{children:`@`}),` annotations to ensure reliable execution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Prompt Safety`}),` — passes the prompt as an argument array without shell interpolation, eliminating command injection risks, and enforces strict answering format (e.g., `,(0,c.jsx)(t.code,{children:`Output strictly the code/answer. No preamble, no chatter, no reasoning`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Resource Cleanup`}),` — automatically purges all temporary folders and files upon final response resolution or error.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The API key for the Anthropic service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — The initial model identifier.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeCliLite } from '@dxtmisha/scripts'

const ai = new AiClaudeCliLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(t.p,{children:[`These protected methods implement the required extension interface of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Sets `,(0,c.jsx)(t.code,{children:`this.ai`}),` to an empty object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Returns an empty array `,(0,c.jsx)(t.code,{children:`[]`}),` (image handling is ignored for CLI execution).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Converts accumulated `,(0,c.jsx)(t.code,{children:`contents`}),` into temporary files using `,(0,c.jsx)(t.code,{children:`ApiTmp.createFile`}),` and returns their formatted paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Bundles all temporary files, builds the argument list, executes the CLI directly without a shell, and cleans up resources.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};