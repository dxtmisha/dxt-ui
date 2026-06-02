import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/AiClaudeCli - Claude CLI Service Class`}),`
`,(0,c.jsx)(n.h1,{id:`aiclaudecli-class`,children:`AiClaudeCli Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiClaudeCli`}),` class is a concrete implementation of `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` that integrates with the project's environment settings. It automatically loads credentials using `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),` to invoke Claude through the shell terminal.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Configuration`}),` — loads API keys and models automatically from the project environment using `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Shell-based Generation`}),` — inherits the CLI runner mechanics of `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` to execute terminal commands.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiClaudeCli`}),` class can be instantiated directly without constructor arguments since it automatically retrieves credentials from the environment.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeCli } from '@dxtmisha/scripts'

const ai = new AiClaudeCli()

// Generate text through system CLI
const response = await ai.generate('Write a quick sort algorithm in TypeScript.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.p,{children:[`This class does not define additional public methods. It inherits all configuration and execution methods from `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` and `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};