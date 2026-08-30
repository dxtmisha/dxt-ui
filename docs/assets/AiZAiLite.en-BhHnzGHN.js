import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiZAiLite - Z.ai (Zhipu AI) Service Lite Class`}),`
`,(0,c.jsx)(t.h1,{id:`aizailite-class`,children:`AiZAiLite Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` class is a lightweight implementation of `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` configured for Zhipu AI (Z.ai). It overrides the client initialization to redirect all requests to Z.ai's OpenAI-compatible endpoint.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`OpenAI Compatibility`}),` — inherits all capabilities of `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` including text generation, prompt buffers, and multimodal structures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dedicated Endpoint`}),` — automatically configures the OpenAI client with the Z.ai base URL (`,(0,c.jsx)(t.code,{children:`https://api.z.ai/api/paas/v4`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiZAiLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The API key for the Z.ai service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — The initial model identifier (e.g., 'glm-4').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiZAiLite } from '@dxtmisha/scripts'

const ai = new AiZAiLite(process.env.ZAI_API_KEY, 'glm-4')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(t.p,{children:[`This class overrides the initialization hook of `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Instantiates the `,(0,c.jsx)(t.code,{children:`OpenAI`}),` client with Z.ai's base URL and the provided key.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};