import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiGoogleLite - Google Gemini AI Integration"}),`
`,e.jsx(n.h1,{id:"aigooglelite-class",children:"AiGoogleLite Class"}),`
`,e.jsxs(n.p,{children:["A concrete implementation of the ",e.jsx(n.code,{children:"AiAbstract"})," class for Google's Gemini AI (via the ",e.jsx(n.code,{children:"GoogleGenAI"})," client). This class provides a streamlined way to interact with Gemini models, handling authentication, context accumulation, and content generation."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Google Gemini Integration"})," — seamlessly connects to Google's generative AI models."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multimodal Support"})," — supports both text and image inputs for generation requests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context Accumulation"})," — inherits a robust mechanics for building complex prompts, including images and multi-part text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Workflow"})," — provides a consistent interface for model selection and generation, abstracting away low-level client details."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"AiGoogleLite"})," by providing your API key and a target model ID."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key: string"})," — your Google AI API key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"model: string"})," — the ID of the Gemini model to use (e.g., ",e.jsx(n.code,{children:"'gemini-1.5-flash'"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AiGoogleLite } from '@dxtmisha/scripts'

const ai = new AiGoogleLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Set an optional system prompt prefix
ai.addPrompt('You are a technical writer.')

// Generate a response
const response = await ai.generate('Explain the AiGoogleLite class.')
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"generation",children:"Generation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"generate(contents: string): Promise<string>"})," — the main entry point for AI interaction. It combines all accumulated context (prefix, images, parts) and performs the request."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKey(key: string): this"})," — updates the API key and re-initializes the internal client."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setModel(model: string): this"})," — switches the active model for subsequent requests."]}),`
`]}),`
`,e.jsx(n.h3,{id:"context-building",children:"Context Building"}),`
`,e.jsxs(n.p,{children:["These methods allow you to accumulate data before calling ",e.jsx(n.code,{children:"generate()"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addPrompt(prompt: string): void"})," — appends a persistent text prefix (useful for system instructions)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addContent(content: string): this"})," — adds a text part to the prompt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addImage(image: AiImageItem): this"})," — appends an image (base64) to the request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetPrompt(): void"})," — clears the persistent prefix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetContents(): this"})," — clears all accumulated text parts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetImages(): this"})," — clears all accumulated images."]}),`
`]}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getContents(): string[]"})," — returns the list of accumulated text parts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImages(): AiImageList"})," — returns the list of accumulated images."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,e.jsx(n.p,{children:"Represents an image for multimodal requests."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mime: string"})," — the MIME type of the image (e.g., ",e.jsx(n.code,{children:"'image/png'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"base64: string"})," — the image data in base64 format."]}),`
`]}),`
`,e.jsx(n.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,e.jsxs(n.p,{children:["An array of ",e.jsx(n.code,{children:"AiImageItem"}),"."]})]})}function m(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
