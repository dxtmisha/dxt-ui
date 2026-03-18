import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiDocItemAbstract - Documentation Automation Base Class"}),`
`,e.jsx(t.h1,{id:"aidocitemabstract-class",children:"AiDocItemAbstract Class"}),`
`,e.jsx(t.p,{children:"An abstract base class for automating documentation generation using AI. It manages the lifecycle of reading source files, gathering context (code, demos, prompts), and coordinating with an AI service to produce or update MDX and source files."}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Automated Lifecycle"})," — orchestrates reading source code, running builds, and generating documentation updates."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Context Management"})," — built-in logic to collect component code, original source, and fake demo data for AI context."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Smart Updates"})," — automatically compares modification dates to determine if re-generation is needed."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Template System"})," — supports prompt templates and dynamic title replacement (e.g., ",e.jsx(t.code,{children:"[title]"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Build Integration"})," — integrates with ",e.jsx(t.code,{children:"BuildItem"})," to ensure code is buildable before documenting."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Selective Generation"})," — supports bypassing generation using the ",e.jsx(t.code,{children:"// wiki:build-none"})," marker."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["Since ",e.jsx(t.code,{children:"AiDocItemAbstract"})," is an abstract class, it must be extended. Concrete classes must provide paths for demo files and prompt templates."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Constructor Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"path: string"})," — The base directory path for the source files."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item: GitFileItem"})," — Information about the specific file being documented."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`// Example of extending and using AiDocItemAbstract
class MyComponentDoc extends AiDocItemAbstract {
  protected pathDemo = ['path', 'to', 'demo.ts']
  protected pathPrompt = ['path', 'to', 'prompt.txt']
}

const doc = new MyComponentDoc('/source/dir', gitFileItem)
await doc.make() // Triggers the documentation cycle
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"lifecycle",children:"Lifecycle"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"make(): Promise<void>"})," — The main entry point. Checks if updates are needed, prepares context, calls AI, and writes the results."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"isBuildDisabled(): boolean"})," — Checks if the source file contains the ",e.jsx(t.code,{children:"// wiki:build-none"})," marker."]}),`
`]}),`
`,e.jsx(t.h2,{id:"abstract-methods-implementation",children:"Abstract Methods (Implementation)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getPathWiki(): string[]"})," — Logic to determine the target Wiki file path based on the source file location."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getItemDate(): Date"})," — Retrieves the file modification date from the ",e.jsx(t.code,{children:"GitFileItem"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getTitle(): string"})," — Composes a standardized title for the documentation."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"readDemo(): string"})," — Reads the content of the configured demo file."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"readPrompt(): string"})," — Reads and prepares the prompt template, replacing placeholders like ",e.jsx(t.code,{children:"[wikiLanguage]"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"makeAi(): void"})," — Populates the AI instance with relevant context (code, demos, etc.)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"initName(content: string): string"})," — Replaces the ",e.jsx(t.code,{children:"[title]"})," placeholder in the generated content."]}),`
`]}),`
`,e.jsx(t.h2,{id:"types",children:"Types"}),`
`,e.jsx(t.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,e.jsx(t.p,{children:"Represents file information managed by Git."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"path: string"})," — Relative path to the file."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"pathByOS: string"})," — Absolute OS-specific path."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"date: string"})," — Last modification date."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item: any"})," — Reserved for additional metadata."]}),`
`]})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
