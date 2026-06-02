import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/AiClaudeAgent - Claude Agent SDK Service Class`}),`
`,(0,c.jsx)(n.h1,{id:`aiclaudeagent-class`,children:`AiClaudeAgent Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiClaudeAgent`}),` class is a concrete implementation of `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` that integrates with the project's environment settings. It automatically loads configurations and API keys using `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),` to initialize Claude in agent mode.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Configuration`}),` — loads API keys and default models automatically using `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Inherited Agent Features`}),` — supports all features of `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),`, including query execution via the Agent SDK, text streams processing, and file editing permission modes.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiClaudeAgent`}),` class can be instantiated directly without constructor arguments since it automatically retrieves credentials from the environment.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeAgent } from '@dxtmisha/scripts'

const agent = new AiClaudeAgent()

// Accumulate instructions/contents
agent.addContent('Ensure all helper files are placed in the utils folder.')

// Run query in agent mode
const response = await agent.generate('Refactor the format functions inside helper.ts.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.p,{children:[`This class does not define additional public methods. It inherits all configuration and execution methods from `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` and `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};