import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiOpenAiLite - OpenAI Service Lite Class`}),`
`,(0,c.jsx)(t.h1,{id:`aiopenailite-class`,children:`AiOpenAiLite Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` class is a lightweight implementation of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` that wraps the OpenAI SDK. It provides comprehensive support for prompt context accumulation, multimodal base64 image conversion, and robust chat completion.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multimodal Support`}),` — parses accumulated images into the data URL structure (`,(0,c.jsx)(t.code,{children:`data:mime;base64,data`}),`) required by OpenAI's `,(0,c.jsx)(t.code,{children:`image_url`}),` block interface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Structured Content Processing`}),` — formats both plain text statements and image blocks into a unified user payload list before requesting completions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standard SDK Integration`}),` — directly invokes the native `,(0,c.jsx)(t.code,{children:`chat.completions.create`}),` endpoint and handles choices safely.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The API key for the OpenAI service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — The initial model identifier (e.g., 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiOpenAiLite } from '@dxtmisha/scripts'

const ai = new AiOpenAiLite(process.env.OPENAI_API_KEY, 'gpt-4o')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(t.p,{children:[`These protected methods implement the required extension interface of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Initializes the `,(0,c.jsx)(t.code,{children:`OpenAI`}),` client instance using the provided key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Translates accumulated `,(0,c.jsx)(t.code,{children:`images`}),` into structured `,(0,c.jsx)(t.code,{children:`{ type: 'image_url', image_url: { url: ... } }`}),` arrays.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Translates accumulated additional `,(0,c.jsx)(t.code,{children:`contents`}),` into structured `,(0,c.jsx)(t.code,{children:`{ type: 'text', text: content }`}),` arrays.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Performs the chat completions API call and extracts the text content from the first response choice safely.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};