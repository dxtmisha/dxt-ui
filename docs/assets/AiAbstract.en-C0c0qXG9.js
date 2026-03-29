import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/AiAbstract - Abstract AI Base Class`}),`
`,(0,c.jsx)(n.h1,{id:`aiabstract-class`,children:`AiAbstract Class`}),`
`,(0,c.jsx)(n.p,{children:`An abstract base class designed to provide common mechanics for various AI integrations. It handles prompt accumulation, model selection, and provides a unified workflow for receiving responses from different AI providers.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prompt Accumulation`}),` — mechanisms to collect and compose prompt context before sending it to the model.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Model Management`}),` — easy switching between different AI models within the same instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Workflow`}),` — a standardized `,(0,c.jsx)(n.code,{children:`generate`}),` method that normalizes the process of getting a response.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Image & Content Support`}),` — built-in methods to accumulate images and additional text contents for multimodal models.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — most configuration methods support chaining for a more fluent developer experience.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Implementation Hooks`}),` — clear extension points (`,(0,c.jsx)(n.code,{children:`init`}),`, `,(0,c.jsx)(n.code,{children:`response`}),`, `,(0,c.jsx)(n.code,{children:`toImages`}),`, `,(0,c.jsx)(n.code,{children:`toContents`}),`) for concrete AI service implementations (e.g., OpenAI, Anthropic).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Since `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` is an abstract class, it cannot be instantiated directly. You should use a concrete implementation (e.g., `,(0,c.jsx)(n.code,{children:`AiOpenAI`}),` or `,(0,c.jsx)(n.code,{children:`AiAnthropic`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — The API key for the AI service.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — The initial model identifier (e.g., 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Example of a concrete implementation usage
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Adding context
ai.addPrompt('You are a helpful assistant.')
  .addContent('Explain quantum physics in simple terms.')

// Generating response
const response = await ai.generate('Focus on wave-particle duality.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImages(): AiImageList`}),` — Returns the list of accumulated images.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getContents(): string[]`}),` — Returns the list of accumulated additional contents.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsx)(n.p,{children:`Methods in this group support chaining.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — Sets or switches the API key. Re-initializes the client if it's already active.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — Switches the current model for generation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — Appends a new line to the persistent prompt buffer.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addImage(image: AiImageItem): this`}),` — Adds an image to the accumulation list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — Adds text content to the accumulation list.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — The main method to trigger AI generation. It combines the accumulated prompt and the provided string, then calls the concrete implementation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetImages(): this`}),` — Clears the accumulated image list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — Clears the accumulated contents.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — Clears the persistent prompt prefix.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`abstract-methods-implementation`,children:`Abstract Methods (Implementation)`}),`
`,(0,c.jsxs)(n.p,{children:[`When extending `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`, you must implement the following protected methods:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Handle client initialization, authentication, and transport setup.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): void`}),` — Logic to convert accumulated images to a provider-specific format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): void`}),` — Logic to convert accumulated contents to a provider-specific format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — The core logic to invoke the specific AI model and return the result as a string.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(n.p,{children:[`An array of `,(0,c.jsx)(n.code,{children:`AiImageItem`}),` objects.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type AiImageList = AiImageItem[]
`})}),`
`,(0,c.jsx)(n.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(n.p,{children:`Represents an image in base64 format.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mime: string`}),` — The MIME type of the image (e.g., 'image/png').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`base64: string`}),` — The base64 encoded image data.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};