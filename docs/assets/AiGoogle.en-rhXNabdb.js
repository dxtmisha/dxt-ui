import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiGoogle - Auto-configured Google Gemini AI"}),`
`,e.jsx(i.h1,{id:"aigoogle-class",children:"AiGoogle Class"}),`
`,e.jsxs(i.p,{children:["A high-level implementation of the Google Gemini AI integration. The ",e.jsx(i.code,{children:"AiGoogle"})," class extends ",e.jsx(i.code,{children:"AiGoogleLite"})," and automatically initializes itself with the API key and model ID specified in the project's configuration files."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Zero-config Initialization"})," — automatically loads API credentials and model settings from the project environment."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Gemini Powered"})," — provides access to Google's state-of-the-art generative models."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Inherited Robustness"})," — includes all features from ",e.jsx(i.code,{children:"AiGoogleLite"}),", such as multimodal support (text + images) and complex prompt accumulation."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Simplified Workflow"})," — ideal for use within the project's documentation engine where manual configuration is not needed."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["Unlike ",e.jsx(i.code,{children:"AiGoogleLite"}),", the ",e.jsx(i.code,{children:"AiGoogle"})," class does not require constructor parameters as it pulls settings from ",e.jsx(i.code,{children:"getConfigAi()"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// Optionally override the model if needed
ai.setModel('gemini-1.5-pro')

// Generate a response
const response = await ai.generate('Generate a brief description of the project.')
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"generation",children:"Generation"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"generate(contents: string): Promise<string>"})," — (Inherited) Combines accumulated context and performs the AI generation request."]}),`
`]}),`
`,e.jsx(i.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"setKey(key: string): this"})," — (Inherited) Updates the API key and re-initializes the internal client."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"setModel(model: string): this"})," — (Inherited) Switches the active model."]}),`
`]}),`
`,e.jsx(i.h3,{id:"context-building",children:"Context Building"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addPrompt(prompt: string): void"})," — (Inherited) Appends a persistent text prefix."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addContent(content: string): this"})," — (Inherited) Adds a text part to the prompt."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addImage(image: AiImageItem): this"})," — (Inherited) Appends an image (base64) to the request."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"resetPrompt(): void"})," — (Inherited) Clears the persistent prefix."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"resetContents(): this"})," — (Inherited) Clears accumulated text parts."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"resetImages(): this"})," — (Inherited) Clears accumulated images."]}),`
`]}),`
`,e.jsx(i.h2,{id:"types",children:"Types"}),`
`,e.jsx(i.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,e.jsx(i.p,{children:"Represents an image for multimodal requests."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mime: string"})," — the MIME type of the image."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"base64: string"})," — the image data in base64 format."]}),`
`]}),`
`,e.jsx(i.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,e.jsxs(i.p,{children:["An array of ",e.jsx(i.code,{children:"AiImageItem"}),"."]})]})}function m(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{m as default};
