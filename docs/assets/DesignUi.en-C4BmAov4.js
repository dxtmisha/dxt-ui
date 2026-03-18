import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignUi - UI Infrastructure Orchestrator"}),`
`,e.jsx(n.h1,{id:"designui-class",children:"DesignUi Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignUi"})," class is the central orchestrator responsible for initializing and synchronizing the entire infrastructure of the UI library. It coordinates high-level tasks such as rebuilding styles, generating documentation, updating component architectures, and configuring package distribution metadata."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Centralized Orchestration"})," — Manages the execution flow of multiple specialized generators (Styles, Wiki, Components)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Incremental Initialization"})," — Supports initializing either a single specific component or the entire library suite."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cache Management"})," — Automatically purges property caches to ensure all generated assets use the latest design system tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Package Auto-Configuration"})," — Dynamically updates ",e.jsx(n.code,{children:"package.json"})," export maps to reflect the current build state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library-Level Synthesis"})," — Triggers global updates for plugins, media assets, and type definitions across the entire workspace."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"Initialize the orchestrator by optionally providing a component name. If no name is provided, the class operates on all components found in the library."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — The identifier of a specific component to process (optional, default is ",e.jsx(n.code,{children:"''"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignUi } from '@dxtmisha/scripts'

// To update everything:
const ui = new DesignUi()
ui.make()

// To update a specific component:
const buttonUi = new DesignUi('button')
buttonUi.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Executes the full initialization pipeline, sequentially triggering all infrastructure updates."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-ui-initialization-pipeline",children:"The UI Initialization Pipeline"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"make()"})," is called, ",e.jsx(n.code,{children:"DesignUi"})," coordinates a comprehensive multi-stage update:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Environment Reset"}),": Clears the ",e.jsx(n.code,{children:"PropertiesCache"})," to prevent stale tokens from affecting the new build."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Infrastructure Generation"}),": Triggers global ",e.jsx(n.code,{children:"Styles"})," and ",e.jsx(n.code,{children:"DesignWiki"})," generation to prepare the visual and documentation foundations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Syncing"}),": Executes ",e.jsx(n.code,{children:"DesignComponent"})," for the target component(s), resolving their structural metadata and generating source files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Distribution Preparation"}),": Updates ",e.jsx(n.code,{children:"package.json"})," with the latest export mappings for CSS, SCSS, and script modules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library Synthesis"}),": Sequentially triggers dedicated library-level generators:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LibraryMedia"}),": Synchronizes icon and flag assets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LibraryList"}),": Compiles the component registry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LibraryPlugin"}),": Rebuilds the Vue/framework integration plugins."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LibraryAiWiki"}),": Generates AI-optimized documentation artifacts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LibraryTypes"}),": Compiles global type definitions."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"role-in-the-ecosystem",children:"Role in the Ecosystem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DesignUi"}),` acts as the primary entry point for developers and automated build tools. By abstracting the complexity of dozen of specialized classes, it provides a stable "one-click" interface for keeping the UI library synchronized with the design system's evolving specifications.`]})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
