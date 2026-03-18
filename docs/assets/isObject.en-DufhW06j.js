import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/isObject - Check if value is an object"}),`
`,e.jsx(n.h1,{id:"isobject",children:e.jsx(n.code,{children:"isObject"})}),`
`,e.jsx(n.p,{children:"A foundational utility explicitly formulated for performing safe, immediate checks regarding whether a given argument legitimately constitutes an object."}),`
`,e.jsxs(n.p,{children:["In pure JavaScript logic, ",e.jsx(n.code,{children:"typeof null"})," fundamentally yields the notorious ",e.jsx(n.code,{children:"'object'"})," string result, inadvertently instigating phantom bugs. ",e.jsx(n.code,{children:"isObject"})," expertly navigates around this notorious quirk by initiating a truthy checkpoint (",e.jsx(n.code,{children:"Boolean(value)"}),") completely shielding execution paths from ",e.jsx(n.code,{children:"null"})," or undefined pitfalls prior to affirming the exact object type condition. Take caution to realize that structural arrays (",e.jsx(n.code,{children:"[]"}),") count as standard objects under JS protocols, so they successfully yield ",e.jsx(n.code,{children:"true"})," here."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — Any inclusive subject evaluation target variable."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Yields ",e.jsx(n.code,{children:"true"})," solely if the entity demonstrates fundamental object classification (including collections like arrays). Defaults to generating ",e.jsx(n.code,{children:"false"})," outputs across null bindings, isolated variables, primitives, and actionable functions. Acts simultaneously as a strict TypeGuard reducing typings to ",e.jsx(n.code,{children:"Record<any, any>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Arrays are strictly typed as objects underlying JS!)

// Safeguarded boundaries rejecting familiar JS snags
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{j as default};
