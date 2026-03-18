import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiGoogleCliLite - Google Gemini AI via CLI"}),`
`,e.jsx(n.h1,{id:"aigoogleclilite-class",children:"AiGoogleCliLite Class"}),`
`,e.jsxs(n.p,{children:["A specialized implementation of the ",e.jsx(n.code,{children:"AiAbstract"})," class that interacts with Google's Gemini AI using a system command-line interface (CLI). This approach is useful in environments where a direct SDK integration is not preferred or where existing CLI tools are leveraged."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This implementation requires the ",e.jsx(n.code,{children:"gemini"})," CLI utility to be installed and accessible in the system path."]}),`
`]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CLI-driven Workflow"})," — executes requests by constructing and running shell commands."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large Prompt Handling"})," — automatically creates temporary files to pass large prompt contents to the CLI, avoiding command-line length limitations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clean Execution"})," — manages its own temporary storage (",e.jsx(n.code,{children:"./ai-tmp"}),") and performs cleanup after each request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"YOLO Mode"})," — executes commands with strict output flags to ensure results are concise and free of conversational filler."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize ",e.jsx(n.code,{children:"AiGoogleCliLite"})," with your API key and intended model."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key: string"})," — your Google AI API key (passed to the CLI via environment variables)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"model: string"})," — the model identifier for the Gemini CLI."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AiGoogleCliLite } from '@dxtmisha/scripts'

const ai = new AiGoogleCliLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Generate a response
const response = await ai.generate('Review this code snippet.')
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"generation",children:"Generation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"generate(contents: string): Promise<string>"})," — the primary method for interaction. It compiles the context into temporary files, executes the CLI command, and returns the trimmed output."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKey(key: string): this"})," — updates the API key for subsequent CLI calls."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setModel(model: string): this"})," — switches the active model ID."]}),`
`]}),`
`,e.jsx(n.h3,{id:"context-building",children:"Context Building"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addPrompt(prompt: string): void"})," — sets a persistent text prefix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addContent(content: string): this"})," — adds a text part to the cumulative prompt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetPrompt(): void"})," — clears the persistent prefix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetContents(): this"})," — clears all accumulated text parts."]}),`
`]}),`
`,e.jsx(n.h2,{id:"limitations",children:"Limitations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Images"})," — currently, the CLI implementation does not support image passing (",e.jsx(n.code,{children:"addImage"})," will have no effect on the generation)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Environment"})," — relies on the availability of the ",e.jsx(n.code,{children:"exec"})," function and the filesystem for temporary storage."]}),`
`]})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{m as default};
