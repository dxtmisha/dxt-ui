import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiZAi - Z.ai (Zhipu AI) Service Class`}),`
`,(0,c.jsx)(t.h1,{id:`aizai-class`,children:`AiZAi Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiZAi`}),` class is a concrete implementation of `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` that integrates with the project's environment settings. It automatically loads credentials using `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),` to initialize the Zhipu AI client (Z.ai).`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Configuration`}),` — loads API keys and default models automatically using `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inherited Z.ai Features`}),` — supports all features of `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` and `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` using OpenAI-compatible endpoints configured with the Z.ai base URL.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiZAi`}),` class can be instantiated directly without constructor arguments since it automatically retrieves credentials from the environment.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiZAi } from '@dxtmisha/scripts'

const ai = new AiZAi()

// Set model (optional, if default is not set or needs to be overridden)
ai.setModel('glm-4')

// Accumulate context
ai.addPrompt('You are a helpful assistant.')

// Generate text
const response = await ai.generate('Explain the concept of monads.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.p,{children:[`This class does not define additional public methods. It inherits all configuration and execution methods from `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),`, `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),`, and `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};