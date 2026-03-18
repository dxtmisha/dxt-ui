import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Functions/getConstructorProperties - Get constructor properties"}),`
`,e.jsx(t.h1,{id:"getconstructorproperties",children:e.jsx(t.code,{children:"getConstructorProperties"})}),`
`,e.jsxs(t.p,{children:["The function returns the properties of the specified constructors by reading their ",e.jsx(t.code,{children:"properties.json"})," files."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"names: string[]"})," — list of constructor names."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"PropertyList"})," — an object where keys are constructor names and values are their properties."]}),`
`,e.jsx(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(t.p,{children:["The function iterates through the provided names and constructs the path to the ",e.jsx(t.code,{children:"properties.json"})," file for each constructor. It uses the ",e.jsx(t.code,{children:"PropertiesFile.readFile"})," method to load the data."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function a(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{a as default};
