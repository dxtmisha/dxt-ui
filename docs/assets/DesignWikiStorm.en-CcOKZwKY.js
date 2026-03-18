import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignWikiStorm - IDE Metadata Generator"}),`
`,e.jsx(n.h1,{id:"designwikistorm-class",children:"DesignWikiStorm Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignWikiStorm"})," class is a specialized utility designed to bridge the gap between the design system's code and developer productivity tools. It automates the generation of ",e.jsx(n.code,{children:"web-types.json"}),", a standardized metadata format used by JetBrains IDEs (WebStorm, IntelliJ IDEA) to provide advanced IntelliSense, auto-completion, and documentation tooltips for Vue components."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Web-Types Standard Compliance"})," — Generates metadata strictly adhering to the official Web-Types JSON schema."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"IntelliSense Optimization"})," — Transforms component properties, events, and slots into IDE-friendly definitions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Directory Discovery"})," — Recursively scans the library to identify all components and their respective metadata."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Versioning"})," — Automatically synchronizes the generated metadata version with the current ",e.jsx(n.code,{children:"package.json"})," version."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework Integration"})," — Specifically configured for Vue.js, ensuring that component tags and attributes are correctly recognized in ",e.jsx(n.code,{children:".vue"})," files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the generator by specifying the target directory where the ",e.jsx(n.code,{children:"web-types.json"})," file should be stored."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dir: string"})," — The path to the output directory (default is ",e.jsx(n.code,{children:"'dist'"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignWikiStorm } from '@dxtmisha/scripts'

const generator = new DesignWikiStorm('dist')
await generator.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): Promise<void>"})," — Triggers the main generation process."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-web-types-generation-workflow",children:"The Web-Types Generation Workflow"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"make()"})," is called, the class coordinates a multi-stage data synthesis:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context Acquisition"}),": It loads the ",e.jsx(n.code,{children:"package.json"})," to retrieve the library name and current version."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Schema Bootstrapping"}),": It initializes an object based on the Web-Types schema, setting the framework to Vue and defining the documentation markup as Markdown."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Iteration"}),": It iterates through every component registered in ",e.jsx(n.code,{children:"LibraryItems"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Member Analysis"}),": For each component, it instantiates ",e.jsx(n.code,{children:"DesignWikiStormItem"}),", which performs deep analysis of the component's source files to extract:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tags"}),": Component names (e.g., ",e.jsx(n.code,{children:"d1-button"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attributes"}),": Property names, types, and default values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Events"}),": Emitted event names and their payloads."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Slots"}),": Available customization points and their scoped variables."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistence"}),": The final consolidated metadata object is written to ",e.jsx(n.code,{children:"web-types.json"})," in the specified directory."]}),`
`]}),`
`,e.jsx(n.h3,{id:"impact-on-developer-experience",children:"Impact on Developer Experience"}),`
`,e.jsxs(n.p,{children:["By generating ",e.jsx(n.code,{children:"web-types.json"}),", the design system ensures that developers using JetBrains tools receive the same level of support as they would with native HTML elements. Property types are validated in real-time within the IDE, and documentation comments are displayed directly in the code editor, significantly reducing the need to consult external wiki pages."]})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
