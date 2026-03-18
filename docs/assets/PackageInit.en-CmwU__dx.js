import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PackageInit - Package Initializer"}),`
`,e.jsx(i.h1,{id:"packageinit-class",children:"PackageInit Class"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"PackageInit"})," class is responsible for bootstrapping new package structures within the design system. It handles directory scanning and delegates individual file initialization to the ",e.jsx(i.code,{children:"PackageInitItem"})," class, ensuring consistent environment setup based on provided templates and types."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automated Structure Bootstrapping"})," — Automatically creates the necessary folder hierarchy for new packages."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Template-Based Initialization"})," — Supports different package types and template sets for flexible environment setup."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Recursive Directory Handling"})," — Identifies and processes empty or new directories within the package root."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Lifecycle Management"})," — Provides a single entry point for triggering the entire initialization sequence."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["To initialize the object, call the ",e.jsx(i.code,{children:"PackageInit(type, templates, dir)"})," constructor."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"type: string"})," — The package type identifier (e.g., ",e.jsx(i.code,{children:"'functional'"}),", ",e.jsx(i.code,{children:"'ui'"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"templates?: string"})," — Optional comma-separated list of templates to be applied."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"dir: string"})," — The base directory where packages are located (defaults to ",e.jsx(i.code,{children:"UI_DIR_PACKAGES"}),")."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { PackageInit } from '@dxtmisha/scripts'

// Initialize for a 'functional' package with default templates
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"control",children:"Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"make(): void"})," — Starts the initialization process for all identified directories within the target path."]}),`
`]}),`
`,e.jsx(i.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(i.h3,{id:"detailed-initialization-flow",children:"Detailed Initialization Flow"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"make()"})," method follows a specific sequence to ensure a clean package setup:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Scanning"}),": It scans the target ",e.jsx(i.code,{children:"dir"})," to identify subdirectories that require initialization (typically empty ones)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Delegation"}),": For each identified directory, it creates an instance of ",e.jsx(i.code,{children:"PackageInitItem"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Execution"}),": It triggers the ",e.jsx(i.code,{children:"make()"})," method on each ",e.jsx(i.code,{children:"PackageInitItem"}),", which handles the actual file creation and template application."]}),`
`]}),`
`,e.jsx(i.h3,{id:"identifying-target-directories",children:"Identifying Target Directories"}),`
`,e.jsxs(i.p,{children:["The class uses the ",e.jsx(i.code,{children:"getDirs()"}),' internal method to find directories that are "empty" (contain no subdirectories), which are then treated as the roots for new package components.']}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function p(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
