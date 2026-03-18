import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/scripts/Classes/ComponentWiki - AI-Powered Wiki Generator"}),`
`,n.jsx(e.h1,{id:"componentwiki-class",children:"ComponentWiki Class"}),`
`,n.jsx(e.p,{children:"An advanced orchestration class that automates the generation of documentation, stories, and type definitions for components using AI. It coordinates temporary builds, code extraction, and AI processing to create comprehensive wiki artifacts."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AI-Driven Documentation"})," — leverages AI to analyze component code and generate meaningful MDX descriptions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Story Generation"})," — creates initial Storybook stories based on the component's implementation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type Extraction"})," — identifies and extracts type definitions for inclusion in documentation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Process Orchestration"})," — handles the technical lifecycle including building items, extracting code snapshots, and cleanup."]}),`
`]}),`
`,n.jsx(e.h2,{id:"initialization",children:"Initialization"}),`
`,n.jsx(e.p,{children:"Initialize the class with the target component path and optional custom prompt instructions."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — the relative path to the component directory."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"prompt: string = ''"})," — optional additional text to append to the AI prompt for specific documentation requirements."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Focus on accessibility details.')

// Start generation process
wiki.make()
`})}),`
`,n.jsx(e.h2,{id:"methods",children:"Methods"}),`
`,n.jsx(e.h3,{id:"control",children:"Control"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — The primary method that initiates building the code, preparing the AI context, and generating the wiki artifacts."]}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"batch-generation",children:"Batch Generation"}),`
`,n.jsx(e.p,{children:"Commonly used in scripts to regenerate documentation for multiple components after API changes."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function p(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{p as default};
