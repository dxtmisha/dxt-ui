import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/BuildFunctional - Library Builder for Functional"}),`
`,e.jsx(n.h1,{id:"buildfunctional-class",children:"BuildFunctional Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"BuildFunctional"})," class is a utility responsible for generating a central export file for the functional library. It scans the ",e.jsx(n.code,{children:"@dxtmisha/functional"})," package and creates a ",e.jsx(n.code,{children:"functional.ts"})," file in the library directory, re-exporting all discovered members."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Re-exports"})," — Automatically discovers and re-exports all members from the functional package."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Support"})," — Includes ",e.jsx(n.code,{children:"export type *"})," to ensure full TypeScript type availability."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library Integration"})," — Integrates with the project's library structure by writing to the configured library directory."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["You can create an instance of ",e.jsx(n.code,{children:"BuildFunctional"})," without any parameters."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"make",children:"make"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Triggers the build process. It retrieves the list of members, formats the export code, and writes it to ",e.jsx(n.code,{children:"src/library/functional.ts"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"getlist",children:"getList"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): string[]"})," — Returns an array of keys (exported members) from the ",e.jsx(n.code,{children:"@dxtmisha/functional"})," package."]}),`
`]})]})}function u(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{u as default};
