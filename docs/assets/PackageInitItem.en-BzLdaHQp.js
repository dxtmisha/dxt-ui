import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PackageInitItem - Package Item Initializer"}),`
`,e.jsx(n.h1,{id:"packageinititem-class",children:"PackageInitItem Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PackageInitItem"})," class handles the detailed initialization of an individual component or sub-package. It manages the file lifecycle—from template application to integration with the main library, ",e.jsx(n.code,{children:"package.json"}),", and Storybook."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Generation"})," — Automatically creates files based on samples and specialized templates."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Content Replacement"})," — Automatically resolves placeholders like ",e.jsx(n.code,{children:"[name]"})," and ",e.jsx(n.code,{children:"@packages/library"})," within generated files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library Integration"})," — Automatically generates entry points and registers the component in the global library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dependency Management"})," — Updates the root ",e.jsx(n.code,{children:"package.json"})," to include the new package in dependencies, exports, and files list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook Automation"})," — Automatically injects new stories into the Storybook configuration."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"PackageInitItem(name, dir, type, templates)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — The unique name/path identifier of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dir: string[]"})," — The absolute path array to the component's target directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string"})," — The package type identifier (e.g., ",e.jsx(n.code,{children:"'functional'"}),", ",e.jsx(n.code,{children:"'ui'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"templates?: string"})," — Optional comma-separated list of templates to be applied."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PackageInitItem } from '@dxtmisha/scripts'

const item = new PackageInitItem(
  'button',
  ['path', 'to', 'button'],
  'ui'
)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Executes the full initialization sequence: creating files, updating the library, ",e.jsx(n.code,{children:"package.json"}),", and Storybook."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"initialization-workflow",children:"Initialization Workflow"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"make()"})," is called, the class performs the following steps in order:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Scaffolding"}),": It retrieves sample files from the media/templates directory based on the package ",e.jsx(n.code,{children:"type"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template Application"}),": If specific ",e.jsx(n.code,{children:"templates"})," are provided, it fetches and applies them."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Writing"}),": It writes the processed files to the target directory, performing necessary content replacements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration (Library)"}),": If a ",e.jsx(n.code,{children:"library.ts"})," file is created, it triggers the automatic generation of export files in the library root."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration (Package)"}),": It updates the root ",e.jsx(n.code,{children:"package.json"})," to register the new package's workspace dependency and exports."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration (Storybook)"}),": It scans for the Storybook configuration and adds patterns to include the new component's stories."]}),`
`]}),`
`,e.jsx(n.h3,{id:"internal-resolution-logic",children:"Internal Resolution Logic"}),`
`,e.jsx(n.p,{children:"The class uses several internal helpers to resolve naming conventions:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"getName()"})}),": Normalizes the component name for use in file content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"getCode()"})}),": Converts the name to a hyphenated code for package identifiers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"getProjectName()"})}),": Resolves the full NPM package name including the design prefix."]}),`
`]})]})}function p(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default};
