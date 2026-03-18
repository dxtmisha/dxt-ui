import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Classes/ComponentItem - Component File Generator"}),`
`,e.jsx(n.h1,{id:"componentitem-class",children:"ComponentItem Class"}),`
`,e.jsx(n.p,{children:"A specialized class for generating individual component files based on templates. It manages the entire creation process, from reading template samples to performing dynamic string replacements and setting correct file system permissions."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template-Driven"})," — uses a centralized repository of component templates for consistent file generation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Replacements"})," — automatically replaces markers like ",e.jsx(n.code,{children:"ComponentDoc"}),", ",e.jsx(n.code,{children:"[project]"}),", and ",e.jsx(n.code,{children:"[path]"})," with context-specific values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Placeholder Support"})," — handles both camelCase (class names) and kebab-case (filenames) transformations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Permission Management"})," — ensures generated files have the correct execution and read/write permissions."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"ComponentItem(path)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — the relative or absolute path to the directory where the component will be created."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Generating files
component.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — The main method that reads all template files and writes their processed versions to the component directory."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"manual-scaffolding",children:"Manual Scaffolding"}),`
`,e.jsxs(n.p,{children:["While ",e.jsx(n.code,{children:"ComponentCreator"})," handles batch creation, ",e.jsx(n.code,{children:"ComponentItem"})," can be used directly for fine-grained control over a specific component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
