import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiAbstract - Abstract AI Base Class"}),`
`,e.jsx(n.h1,{id:"aiabstract-class",children:"AiAbstract Class"}),`
`,e.jsx(n.p,{children:"An abstract base class designed to provide common mechanics for various AI integrations. It handles prompt accumulation, model selection, and provides a unified workflow for receiving responses from different AI providers."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prompt Accumulation"})," — mechanisms to collect and compose prompt context before sending it to the model."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Model Management"})," — easy switching between different AI models within the same instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Workflow"})," — a standardized ",e.jsx(n.code,{children:"generate"})," method that normalizes the process of getting a response."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Image & Content Support"})," — built-in methods to accumulate images and additional text contents for multimodal models."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chainable API"})," — most configuration methods support chaining for a more fluent developer experience."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Implementation Hooks"})," — clear extension points (",e.jsx(n.code,{children:"init"}),", ",e.jsx(n.code,{children:"response"}),", ",e.jsx(n.code,{children:"toImages"}),", ",e.jsx(n.code,{children:"toContents"}),") for concrete AI service implementations (e.g., OpenAI, Anthropic)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"AiAbstract"})," is an abstract class, it cannot be instantiated directly. You should use a concrete implementation (e.g., ",e.jsx(n.code,{children:"AiOpenAI"})," or ",e.jsx(n.code,{children:"AiAnthropic"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Constructor Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key: string"})," — The API key for the AI service."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"model: string"})," — The initial model identifier (e.g., 'gpt-4o')."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Example of a concrete implementation usage
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Adding context
ai.addPrompt('You are a helpful assistant.')
  .addContent('Explain quantum physics in simple terms.')

// Generating response
const response = await ai.generate('Focus on wave-particle duality.')
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImages(): AiImageList"})," — Returns the list of accumulated images."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getContents(): string[]"})," — Returns the list of accumulated additional contents."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsx(n.p,{children:"Methods in this group support chaining."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKey(key: string): this"})," — Sets or switches the API key. Re-initializes the client if it's already active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setModel(model: string): this"})," — Switches the current model for generation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addPrompt(prompt: string): void"})," — Appends a new line to the persistent prompt buffer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addImage(image: AiImageItem): this"})," — Adds an image to the accumulation list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addContent(content: string): this"})," — Adds text content to the accumulation list."]}),`
`]}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"generate(contents: string): Promise<string>"})," — The main method to trigger AI generation. It combines the accumulated prompt and the provided string, then calls the concrete implementation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetImages(): this"})," — Clears the accumulated image list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetContents(): this"})," — Clears the accumulated contents."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetPrompt(): void"})," — Clears the persistent prompt prefix."]}),`
`]}),`
`,e.jsx(n.h2,{id:"abstract-methods-implementation",children:"Abstract Methods (Implementation)"}),`
`,e.jsxs(n.p,{children:["When extending ",e.jsx(n.code,{children:"AiAbstract"}),", you must implement the following protected methods:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init(): void"})," — Handle client initialization, authentication, and transport setup."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toImages(): void"})," — Logic to convert accumulated images to a provider-specific format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toContents(): void"})," — Logic to convert accumulated contents to a provider-specific format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"response(model: string, contents: string): Promise<string>"})," — The core logic to invoke the specific AI model and return the result as a string."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,e.jsxs(n.p,{children:["An array of ",e.jsx(n.code,{children:"AiImageItem"})," objects."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type AiImageList = AiImageItem[]
`})}),`
`,e.jsx(n.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,e.jsx(n.p,{children:"Represents an image in base64 format."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mime: string"})," — The MIME type of the image (e.g., 'image/png')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"base64: string"})," — The base64 encoded image data."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{m as default};
