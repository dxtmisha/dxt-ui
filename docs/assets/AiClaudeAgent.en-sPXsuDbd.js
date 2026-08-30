import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiClaudeAgent - Claude Agent SDK Service Class`}),`
`,(0,c.jsx)(t.h1,{id:`aiclaudeagent-class`,children:`AiClaudeAgent Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` class is a concrete implementation of `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` that integrates with the project's environment settings. It automatically loads configurations and API keys using `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),` to initialize Claude in agent mode.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Configuration`}),` — loads API keys and default models automatically using `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inherited Agent Features`}),` — supports all features of `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),`, including query execution via the Agent SDK, text streams processing, and file editing permission modes.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` class can be instantiated directly without constructor arguments since it automatically retrieves credentials from the environment.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeAgent } from '@dxtmisha/scripts'

const agent = new AiClaudeAgent()

// Accumulate instructions/contents
agent.addContent('Ensure all helper files are placed in the utils folder.')

// Run query in agent mode
const response = await agent.generate('Refactor the format functions inside helper.ts.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.p,{children:[`This class does not define additional public methods. It inherits all configuration and execution methods from `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` and `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};