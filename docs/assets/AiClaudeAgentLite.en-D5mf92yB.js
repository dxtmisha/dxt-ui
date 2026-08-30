import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiClaudeAgentLite - Claude Agent SDK Lite Class`}),`
`,(0,c.jsx)(t.h1,{id:`aiclaudeagentlite-class`,children:`AiClaudeAgentLite Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` class is a lightweight implementation of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` that uses the `,(0,c.jsx)(t.code,{children:`@anthropic-ai/claude-agent-sdk`}),` to interact with Claude in `,(0,c.jsx)(t.strong,{children:`Agent Mode`}),`. In agent mode, Claude can run tasks using an interactive tool-calling loop, handle local environments, and perform complex edits.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Agent Loops`}),` — utilizes the interactive `,(0,c.jsx)(t.code,{children:`query`}),` generator loop from the Agent SDK.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Auto-Accepting Edits`}),` — configured by default with `,(0,c.jsx)(t.code,{children:`permissionMode: 'acceptEdits'`}),` and `,(0,c.jsx)(t.code,{children:`allowDangerouslySkipPermissions: true`}),` to enable direct, automated local file manipulations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Graceful Error Handling`}),` — wraps execution loops in try-catch blocks and reports errors to `,(0,c.jsx)(t.code,{children:`console.error`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The API key for the Anthropic service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — The initial model identifier.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeAgentLite } from '@dxtmisha/scripts'

const agent = new AiClaudeAgentLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(t.p,{children:[`These protected methods implement the required extension interface of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Sets `,(0,c.jsx)(t.code,{children:`this.ai`}),` to an empty object to satisfy the baseline initialization contract.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Returns an empty array `,(0,c.jsx)(t.code,{children:`[]`}),` (image handling is currently ignored or delegated in agent mode).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Formats and joins accumulated text instructions `,(0,c.jsx)(t.code,{children:`contents`}),` using double newlines `,(0,c.jsx)(t.code,{children:`\\n\\n`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Orchestrates the Agent SDK `,(0,c.jsx)(t.code,{children:`query`}),` generator, listening to the stream messages, capturing the successful `,(0,c.jsx)(t.code,{children:`result`}),`, and returning it as a string.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};