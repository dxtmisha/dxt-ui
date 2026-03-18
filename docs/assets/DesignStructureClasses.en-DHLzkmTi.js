import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignStructureClasses - CSS Class Resolver"}),`
`,e.jsx(s.h1,{id:"designstructureclasses-class",children:"DesignStructureClasses Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"DesignStructureClasses"})," class is responsible for transforming a component's structural metadata into a flattened list of CSS class definitions. It identifies specific tokens marked as subclasses and recursively builds class names following BEM (Block Element Modifier) naming conventions, ensuring consistency across the design system's style architecture."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Recursive Class Discovery"})," — Deeply traverses property trees to find nested elements and modifiers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"BEM Name Construction"})," — Automatically joins parent and child identifiers using double underscores (",e.jsx(s.code,{children:"__"}),") for elements."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CamelCase Indexing"})," — Generates clean, variable-friendly names for use in TypeScript/Vue logic."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Full-Name Support"})," — Allows specific tokens to ignore parent hierarchies and use global class names when required."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automated Property Mapping"})," — Directly integrates with standard property metadata to determine which items contribute to the styling API."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(s.p,{children:"To initialize the class resolver, provide the base component name. The class will automatically load the associated structural metadata via its parent abstraction."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"component: string"})," — The identifier of the component to process (e.g., ",e.jsx(s.code,{children:"'button'"}),")."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { DesignStructureClasses } from '@dxtmisha/scripts'

const resolver = new DesignStructureClasses('button')
const classes = resolver.get()
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"information",children:"Information"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get(): DesignStructureClassesList"})," — Returns the fully processed list of class mapping objects."]}),`
`]}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-class-resolution-workflow",children:"The Class Resolution Workflow"}),`
`,e.jsx(s.p,{children:"When initialized, the class automatically executes its resolution logic:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Property Analysis"}),": The engine scans the component's ",e.jsx(s.code,{children:"PropertyItem"})," list for tags indicating a ",e.jsx(s.code,{children:"subclass"})," type."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Namespace Building"}),": It tracks the hierarchy of names. For example, a ",e.jsx(s.code,{children:"label"})," inside a ",e.jsx(s.code,{children:"button"})," becomes ",e.jsx(s.code,{children:"button__label"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Data Structuring"}),": For each identified class, it creates an object containing:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"index"}),": A CamelCase version of the name (e.g., ",e.jsx(s.code,{children:"buttonLabel"}),") for code references."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"className"}),": The actual CSS class string (e.g., ",e.jsx(s.code,{children:"button__label"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"full"}),": A flag indicating if the name is an absolute global class."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Flattening"}),": The recursive tree is flattened into a single array, providing a fast lookup for template engines."]}),`
`]}),`
`,e.jsx(s.h3,{id:"integration-with-code-generators",children:"Integration with Code Generators"}),`
`,e.jsxs(s.p,{children:["This class provides the essential mapping used by ",e.jsx(s.code,{children:"DesignReplace"})," to inject class definitions into component implementations. By centralizing the naming logic, it ensures that changes to naming conventions can be applied globally across all components without manual file edits."]})]})}function u(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
