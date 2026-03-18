import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Classes/DesignComponent - Design Component Generator"}),`
`,e.jsx(n.h1,{id:"designcomponent-class",children:"DesignComponent Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignComponent"})," class is a specialized implementation of ",e.jsx(n.code,{children:"DesignCommand"})," dedicated to the automated creation and maintenance of design system components. It orchestrates the generation of diverse file types—from styles and component logic to documentation and integration metadata."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full-Cycle Scaffolding"})," — Automatically generates 10+ essential files for a new component (Vue, SCSS, TS, MDX)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Intelligent Prop Resolution"})," — Uses ",e.jsx(n.code,{children:"DesignTypescript"})," to bake component properties directly into generated files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook Automation"})," — Generates ",e.jsx(n.code,{children:".stories.ts"})," and ",e.jsx(n.code,{children:".mdx"})," files with automated render and import resolution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI-Enhanced Wiki"})," — Creates specialized companion components for AI-driven documentation search and display."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Workspace Integration"})," — Seamlessly registers new components in the root ",e.jsx(n.code,{children:"package.json"})," and the library's global export list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Style Token Mapping"})," — Transform project structures into SCSS style tokens automatically."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"To initialize a generator instance, use the constructor. Note that it sets up the target directory based on the project configuration."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"command: string"})," — The identifier for the component (e.g., ",e.jsx(n.code,{children:"'button'"}),", ",e.jsx(n.code,{children:"'input'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: Record<string, string>"})," — Optional configuration flags."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignComponent } from '@dxtmisha/scripts'

const generator = new DesignComponent('button')
generator.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Starts the comprehensive generation process for all component-related files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"generated-files-structure",children:"Generated Files Structure"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"make()"})," is executed, the following file hierarchy is created or updated within the component's directory:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"properties.json"})," — Stores primary mapping data for the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props.ts"})," — The TypeScript definition for component props, resolved from constructor templates."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleToken.scss"})," — SCSS style tokens based on the component's design structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[Name].vue"})," — The primary Vue component file with pre-configured classes and styles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[Name]AiWiki.vue"})," — A companion component for AI-enhanced wiki documentation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," — The component's entry point for public exports."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"wiki.ts"})," & ",e.jsx(n.code,{children:"wikiData.ts"})," — Metadata and structured property information for the documentation site."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[Name].stories.ts"})," — Automated Storybook stories with dynamic component resolution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[Name].mdx"})," — Markdown documentation for Storybook with pre-filled slots and props data."]}),`
`]}),`
`,e.jsx(n.h3,{id:"integration-process",children:"Integration Process"}),`
`,e.jsx(n.p,{children:"The class ensures that the new component is fully integrated into the design system environment:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Package Update"}),": Adds an entry to the root ",e.jsx(n.code,{children:"package.json"})," under ",e.jsx(n.code,{children:"exports"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library Export"}),": Creates a proxy file in the library directory to enable global component imports."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Wiki Description Matching"}),": Scans ",e.jsx(n.code,{children:"wikiDescriptions"})," to automatically populate Storybook stories with relevant examples."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
