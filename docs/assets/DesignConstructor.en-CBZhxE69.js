import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignConstructor - Design Constructor Generator"}),`
`,e.jsx(n.h1,{id:"designconstructor-class",children:"DesignConstructor Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignConstructor"})," class is a specialized implementation of ",e.jsx(n.code,{children:"DesignCommand"}),` focused on generating the internal logic and "constructors" for components. It automates the creation of property definitions, TypeScript types, and styling hooks that form the foundation of a component's behavioral layer.`]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Constructor Scaffolding"})," — Automatically generates the entire file set required for a component's behavioral logic."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Safety Automation"})," — Generates ",e.jsx(n.code,{children:"props.ts"}),", ",e.jsx(n.code,{children:"types.ts"}),", and ",e.jsx(n.code,{children:"basicTypes.ts"})," to ensure strict typing across the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Styling Foundation"})," — Creates the initial ",e.jsx(n.code,{children:"style.scss"})," file compatible with the constructor's class system."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Logic Generation"})," — Produces both ",e.jsx(n.code,{children:".ts"})," and ",e.jsx(n.code,{children:".tsx"})," files for flexible component logic implementation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"System Integration"})," — Automatically updates ",e.jsx(n.code,{children:"package.json"})," and creates library exports for the new constructor."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize a generator instance, use the constructor. It automatically resolves the target directory within the ",e.jsx(n.code,{children:"src/constructors"})," folder."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"command: string"})," — The unique identifier for the component (e.g., ",e.jsx(n.code,{children:"'button'"}),", ",e.jsx(n.code,{children:"'list'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: Record<string, string>"})," — Optional configuration key-value pairs."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Executes the full sequence of directory creation, file generation, and system registration."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"generated-files-structure",children:"Generated Files Structure"}),`
`,e.jsxs(n.p,{children:["When initialized, ",e.jsx(n.code,{children:"DesignConstructor"})," processes several template-driven files:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"properties.json"})," — Mapping configuration for the constructor's internal properties."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props.ts"})," — Property definitions including types and default values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"types.ts"})," & ",e.jsx(n.code,{children:"basicTypes.ts"})," — TypeScript interfaces and type definitions for component state and configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style.scss"})," — Initial style definitions linked to the constructor's class structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Constructors.ts"})," — The main logic implementation file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ConstructorsDesign.tsx"})," — The visual/render layer implementation using TSX."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," — The entry point for the constructor's exports."]}),`
`]}),`
`,e.jsx(n.h3,{id:"lifecycle-of-execution",children:"Lifecycle of Execution"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"make()"})," process executes in a precise order to maintain data integrity:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Directory Setup"}),": Resolves and confirms the target path in the ",e.jsx(n.code,{children:"src/constructors"})," directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Generation"}),": Sequentially calls specialized ",e.jsx(n.code,{children:"make[File]()"})," methods to transform templates into project code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Internal Integration"}),": Updates the project's root ",e.jsx(n.code,{children:"package.json"})," mapping to expose the new constructor."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library Publication"}),": Generates an export file in the library's root directory to enable global consumption."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
