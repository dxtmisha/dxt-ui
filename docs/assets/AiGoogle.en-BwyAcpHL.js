import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/AiGoogle - Auto-configured Google Gemini AI`}),`
`,(0,c.jsx)(n.h1,{id:`aigoogle-class`,children:`AiGoogle Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A high-level implementation of the Google Gemini AI integration. The `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` class extends `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),` and automatically initializes itself with the API key and model ID specified in the project's configuration files.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Zero-config Initialization`}),` — automatically loads API credentials and model settings from the project environment.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gemini Powered`}),` — provides access to Google's state-of-the-art generative models.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Inherited Robustness`}),` — includes all features from `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),`, such as multimodal support (text + images) and complex prompt accumulation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Simplified Workflow`}),` — ideal for use within the project's documentation engine where manual configuration is not needed.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),`, the `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` class does not require constructor parameters as it pulls settings from `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// Optionally override the model if needed
ai.setModel('gemini-1.5-pro')

// Generate a response
const response = await ai.generate('Generate a brief description of the project.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — (Inherited) Combines accumulated context and performs the AI generation request.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — (Inherited) Updates the API key and re-initializes the internal client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — (Inherited) Switches the active model.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`context-building`,children:`Context Building`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — (Inherited) Appends a persistent text prefix.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — (Inherited) Adds a text part to the prompt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addImage(image: AiImageItem): this`}),` — (Inherited) Appends an image (base64) to the request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — (Inherited) Clears the persistent prefix.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — (Inherited) Clears accumulated text parts.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetImages(): this`}),` — (Inherited) Clears accumulated images.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(n.p,{children:`Represents an image for multimodal requests.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mime: string`}),` — the MIME type of the image.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`base64: string`}),` — the image data in base64 format.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(n.p,{children:[`An array of `,(0,c.jsx)(n.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};