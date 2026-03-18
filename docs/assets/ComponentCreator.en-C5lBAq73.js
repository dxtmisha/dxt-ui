import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/ComponentCreator - Automatic Component Scaffolding"}),`
`,e.jsx(n.h1,{id:"componentcreator-class",children:"ComponentCreator Class"}),`
`,e.jsx(n.p,{children:"A utility class for automating the creation of component skeletons in empty directories. It proactively identifies folders within the component directory that lack files and initializes them using the project's standard templates."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Discovery"})," — scans the component directory recursively to find empty folders."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Scaffolding"})," — automatically triggers the creation process for each identified directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Project Consistency"})," — ensures all new components start with the same baseline structure and files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize a new instance of ",e.jsx(n.code,{children:"ComponentCreator"}),". It automatically targets the standard components directory defined in the project configuration."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"make",children:e.jsx(n.code,{children:"make"})}),`
`,e.jsxs(n.p,{children:["The primary orchestration method that performs a recursive scan of the components directory, identifies folders without files, and triggers the ",e.jsx(n.code,{children:"ComponentItem"})," scaffolding process for each one."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"complete-scaffolding-flow",children:"Complete Scaffolding Flow"}),`
`,e.jsxs(n.p,{children:["Running the creator as part of a build or preparation script ensures that even manually created empty folders are properly initialized with necessary files (",e.jsx(n.code,{children:"index.ts"}),", ",e.jsx(n.code,{children:"types.ts"}),", etc.)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
