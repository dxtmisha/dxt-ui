import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiClaudeLite - Claude AI Service Lite Class`}),`
`,(0,c.jsx)(t.h1,{id:`aiclaudelite-class`,children:`AiClaudeLite Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` class is a lightweight implementation of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` that wraps the Anthropic SDK. It provides support for prompt context accumulation, multimodal inputs (images), and robust text generation using Claude models.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multimodal Support`}),` — converts accumulated images into Anthropic's expected base64 format for image content blocks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Structured Content Processing`}),` — formats both plain text and base64 images into structured message content before making request calls.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Text Extraction`}),` — parses Anthropic's message content block array and joins text blocks to return a clean string result.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` requires manual credentials injection through the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The API key for the Anthropic service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — The initial model identifier (e.g., 'claude-3-5-sonnet-20241022').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeLite } from '@dxtmisha/scripts'

const ai = new AiClaudeLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`internal-implementation-hooks`,children:`Internal Implementation Hooks`}),`
`,(0,c.jsxs)(t.p,{children:[`These protected methods implement the required extension interface of `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Initializes the `,(0,c.jsx)(t.code,{children:`Anthropic`}),` client instance using the provided key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Translates accumulated `,(0,c.jsx)(t.code,{children:`images`}),` into the structured `,(0,c.jsx)(t.code,{children:`{ type: 'image', source: { ... } }`}),` array for Claude.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Translates accumulated additional `,(0,c.jsx)(t.code,{children:`contents`}),` into the structured `,(0,c.jsx)(t.code,{children:`{ type: 'text', text: content }`}),` array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Performs the `,(0,c.jsx)(t.code,{children:`messages.create`}),` API call, passing all formatted blocks, and parses the text response.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};