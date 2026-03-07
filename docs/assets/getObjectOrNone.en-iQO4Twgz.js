import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/getObjectOrNone - Safe object return"}),`
`,e.jsx(n.h1,{id:"getobjectornone",children:e.jsx(n.code,{children:"getObjectOrNone"})}),`
`,e.jsxs(n.p,{children:["A simple utility that checks whether the passed value is an actual object (not ",e.jsx(n.code,{children:"null"}),", not an array, not a primitive) and returns it. If the passed argument is not a plain object, a new empty object ",e.jsx(n.code,{children:"{}"})," is returned. This function is useful for safe variable initialization or parameter assignments."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — Any value, usually expected to be an object."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T & Record<string, any>"})," — The original object if the check passes; otherwise, an empty object ",e.jsx(n.code,{children:"{}"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Successful object return
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Arrays are not considered plain objects, returns {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Primitives and null return {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('a string')) // {}
`})})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
