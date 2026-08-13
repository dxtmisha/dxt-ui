import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiGoogle - Auto-configured Google Gemini AI`}),`
`,(0,c.jsx)(t.h1,{id:`aigoogle-class`,children:`AiGoogle Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A high-level implementation of the Google Gemini AI integration. The `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` class extends `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),` and automatically initializes itself with the API key and model ID specified in the project's configuration files.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero-config Initialization`}),` — automatically loads API credentials and model settings from the project environment.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Gemini Powered`}),` — provides access to Google's state-of-the-art generative models.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inherited Robustness`}),` — includes all features from `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, such as multimodal support (text + images) and complex prompt accumulation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Simplified Workflow`}),` — ideal for use within the project's documentation engine where manual configuration is not needed.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, the `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` class does not require constructor parameters as it pulls settings from `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// Optionally override the model if needed
ai.setModel('gemini-1.5-pro')

// Generate a response
const response = await ai.generate('Generate a brief description of the project.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Inherited) Combines accumulated context and performs the AI generation request.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Inherited) Updates the API key and re-initializes the internal client.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Inherited) Switches the active model.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Inherited) Appends a persistent text prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Inherited) Adds a text part to the prompt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addImage(image: AiImageItem): this`}),` — (Inherited) Appends an image (base64) to the request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Inherited) Clears the persistent prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Inherited) Clears accumulated text parts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetImages(): this`}),` — (Inherited) Clears accumulated images.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(t.p,{children:`Represents an image for multimodal requests.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string`}),` — the MIME type of the image.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base64: string`}),` — the image data in base64 format.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(t.p,{children:[`An array of `,(0,c.jsx)(t.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};