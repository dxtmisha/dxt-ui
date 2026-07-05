import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/AiOpenAiLite - OpenAI Service Lite Class`}),`
`,(0,c.jsx)(n.h1,{id:`aiopenailite-class`,children:`AiOpenAiLite Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` class is a lightweight implementation of `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` that wraps the OpenAI SDK. It provides comprehensive support for prompt context accumulation, multimodal base64 image conversion, and robust chat completion.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multimodal Support`}),` — parses accumulated images into the data URL structure (`,(0,c.jsx)(n.code,{children:`data:mime;base64,data`}),`) required by OpenAI's `,(0,c.jsx)(n.code,{children:`image_url`}),` block interface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structured Content Processing`}),` — formats both plain text statements and image blocks into a unified user payload list before requesting completions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standard SDK Integration`}),` — directly invokes the native `,(0,c.jsx)(n.code,{children:`chat.completions.create`}),` endpoint and handles choices safely.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — The API key for the OpenAI service.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — The initial model identifier (e.g., 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiOpenAiLite } from '@dxtmisha/scripts'

const ai = new AiOpenAiLite(process.env.OPENAI_API_KEY, 'gpt-4o')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(n.p,{children:[`These protected methods implement the required extension interface of `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Initializes the `,(0,c.jsx)(n.code,{children:`OpenAI`}),` client instance using the provided key.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Translates accumulated `,(0,c.jsx)(n.code,{children:`images`}),` into structured `,(0,c.jsx)(n.code,{children:`{ type: 'image_url', image_url: { url: ... } }`}),` arrays.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Translates accumulated additional `,(0,c.jsx)(n.code,{children:`contents`}),` into structured `,(0,c.jsx)(n.code,{children:`{ type: 'text', text: content }`}),` arrays.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Performs the chat completions API call and extracts the text content from the first response choice safely.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};