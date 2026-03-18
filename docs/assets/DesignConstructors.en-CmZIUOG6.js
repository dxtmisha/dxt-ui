import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/DesignConstructors - Design Constructors Manager"}),`
`,e.jsx(n.h1,{id:"designconstructors-class",children:"DesignConstructors Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignConstructors"})," class serves as a high-level orchestrator for managing all component constructors within the design system. It handles bulk operations, such as updating all existing constructors at once, and manages the consolidation of component styles into the global library exports."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bulk Lifecycle Management"})," — Can trigger updates for all components in the ",e.jsx(n.code,{children:"constructors"})," directory or target a specific one."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cache Management"})," — Automatically clears property caches before starting the generation process to ensure data freshity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Style Consolidation"})," — Scans all components and generates a centralized SCSS entry point for the global library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Directory Discovery"})," — Automatically identifies all component constructors located in the system's source path."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"To initialize the manager, use the constructor. If a name is provided, operations will be restricted to that specific component."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name?: string"})," — Optional unique identifier of a component to process."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Manager for all constructors
const manager = new DesignConstructors()
manager.make()

// Manager for a specific component
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Starts the generation or update process for one or all identified constructors and refreshes global styles."]}),`
`]}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getComponents(): string[]"})," — Returns a list of all component identifiers found in the constructors directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getComponentsStyle(): string[]"})," — Returns an array of SCSS ",e.jsx(n.code,{children:"@forward"})," statements for all registered components."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"global-style-generation",children:"Global Style Generation"}),`
`,e.jsxs(n.p,{children:["One of the primary responsibilities of this class is maintaining the ",e.jsx(n.code,{children:"style.scss"})," file in the library root. The ",e.jsx(n.code,{children:"makeStyle()"})," method performs the following:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scanning"}),": It retrieves a list of all components via ",e.jsx(n.code,{children:"getComponents()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Mapping"}),": It constructs ",e.jsx(n.code,{children:"@forward"})," rules pointing to each component's individual style file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Writing"}),": It writes these rules into the centralized ",e.jsx(n.code,{children:"packages/library/style.scss"})," file, ensuring that the entire design system's styles are accessible through a single import."]}),`
`]}),`
`,e.jsx(n.h3,{id:"execution-workflow",children:"Execution Workflow"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"make()"})," is called, the class follows this sequence:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cleanup"}),": It clears the ",e.jsx(n.code,{children:"PropertiesCache"})," to prevent stale data from affecting the output."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Delegation"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If a ",e.jsx(n.code,{children:"name"})," was provided during initialization, it creates a new ",e.jsx(n.code,{children:"DesignConstructor"})," for that component and calls its ",e.jsx(n.code,{children:"make()"})," method."]}),`
`,e.jsxs(n.li,{children:["If no ",e.jsx(n.code,{children:"name"})," was provided, it iterates through all discovered components, creating a ",e.jsx(n.code,{children:"DesignConstructor"})," for each and triggering their updates."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consolidation"}),": Finally, it calls ",e.jsx(n.code,{children:"makeStyle()"})," to synchronize the global style exports with the current component list."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
