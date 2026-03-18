import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiGoogleCli - Auto-configured Google Gemini AI via CLI"}),`
`,e.jsx(i.h1,{id:"aigooglecli-class",children:"AiGoogleCli Class"}),`
`,e.jsxs(i.p,{children:["A high-level implementation for interacting with Google's Gemini AI via a system command-line interface. The ",e.jsx(i.code,{children:"AiGoogleCli"})," class extends ",e.jsx(i.code,{children:"AiGoogleCliLite"})," and simplifies the process by automatically loading the required API key and model identifier from the project's configuration settings (",e.jsx(i.code,{children:"getConfigAi()"}),")."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["This implementation requires the ",e.jsx(i.code,{children:"gemini"})," CLI utility to be installed and accessible in the system path."]}),`
`]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automated Configuration"})," — no manual initialization of keys or models is needed; it pulls everything from the project environment."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CLI-based Execution"})," — leverages shell commands to perform AI requests, making it suitable for specific build environments."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Temporary File Management"})," — handles the creation and cleanup of temporary prompt files (",e.jsx(i.code,{children:"./ai-tmp"}),") automatically."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Concise Outputs"})," — uses optimized CLI flags to ensure the AI returns direct answers without conversational preamble."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"AiGoogleCli"})," class is ready to use without any constructor arguments."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Generate a response using project-defined settings
const response = await ai.generate('Summarize the changes in the project.')
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"generation",children:"Generation"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"generate(contents: string): Promise<string>"})," — (Inherited) Analyzes input, manages temporary files, and executes the CLI command to get a response."]}),`
`]}),`
`,e.jsx(i.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"setKey(key: string): this"})," — (Inherited) Manually overrides the API key if necessary."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"setModel(model: string): this"})," — (Inherited) Switches to a different model ID."]}),`
`]}),`
`,e.jsx(i.h3,{id:"context-building",children:"Context Building"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addPrompt(prompt: string): void"})," — (Inherited) Sets a persistent text prefix for system instructions."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addContent(content: string): this"})," — (Inherited) Adds a text part to the cumulative request."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"resetPrompt(): void"})," — (Inherited) Clears the persistent prefix."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"resetContents(): this"})," — (Inherited) Clears all accumulated text parts."]}),`
`]}),`
`,e.jsx(i.h2,{id:"limitations",children:"Limitations"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multimodal Support"})," — like its base class, this implementation does not currently support image inputs."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"System Dependencies"})," — requires the ",e.jsx(i.code,{children:"gemini"})," CLI tool and appropriate file system permissions for temporary data."]}),`
`]})]})}function m(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
