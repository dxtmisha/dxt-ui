import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/intersectKey - Intersect objects by keys"}),`
`,e.jsx(n.h1,{id:"intersectkey",children:e.jsx(n.code,{children:"intersectKey"})}),`
`,e.jsxs(n.p,{children:["Analyzes two objects (or arrays) and returns a new object containing only the properties from the first object whose keys also exist in the second object. The values for the resulting object are extracted from the primary object (",e.jsx(n.code,{children:"data"}),")."]}),`
`,e.jsx(n.p,{children:"This function is highly useful for filtering payload data against an allowed schema footprint or synchronizing partial models."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T"})," — The primary source object that supplies the final values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison: C"})," — The reference object whose keys are used strictly for existence checks."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"Record<KT & KC, T[KT]>"})," — A newly constructed object containing only intersecting properties. If arguments are missing or not objects, it returns an empty object ",e.jsx(n.code,{children:"{}"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Returns only the keys from inputData that are present in allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
