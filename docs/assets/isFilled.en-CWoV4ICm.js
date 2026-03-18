import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const l={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/isFilled - Check if a value is filled"}),`
`,e.jsx(l.h1,{id:"isfilled",children:e.jsx(l.code,{children:"isFilled"})}),`
`,e.jsx(l.p,{children:'A versatile utility for confirming whether a given variable is meaningfully "filled" with data. This function intelligently inspects an array of types including numbers, strings, booleans, arrays, and standard objects to evaluate emptiness beyond basic JavaScript falsiness.'}),`
`,e.jsxs(l.p,{children:["Unlike the generic truthy check (",e.jsx(l.code,{children:"if (value)"}),"), ",e.jsx(l.code,{children:"isFilled"}),":"]}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:["Resolves arrays as empty (",e.jsx(l.code,{children:"false"}),") if their ",e.jsx(l.code,{children:".length"})," equals 0."]}),`
`,e.jsxs(l.li,{children:["Assesses objects as empty (",e.jsx(l.code,{children:"false"}),") when all of their mapped values strictly result to ",e.jsx(l.code,{children:"null"}),"."]}),`
`,e.jsxs(l.li,{children:["Flags definitive string placeholders like ",e.jsx(l.code,{children:"'undefined'"}),", ",e.jsx(l.code,{children:"'null'"}),", ",e.jsx(l.code,{children:"'false'"}),", ",e.jsx(l.code,{children:"'[]'"})," as entirely empty."]}),`
`,e.jsxs(l.li,{children:["Out of the box, treats the string ",e.jsx(l.code,{children:"'0'"})," as empty, although this is modularly configurable via the secondary ",e.jsx(l.code,{children:"zeroTrue"})," prop."]}),`
`]}),`
`,e.jsx(l.p,{children:e.jsx(l.strong,{children:"Parameters:"})}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"value: T"})," — The targeted input value of any type anticipating validation."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"zeroTrue: boolean"})," — (Optional) When flagged as ",e.jsx(l.code,{children:"true"}),", interprets the explicit string ",e.jsx(l.code,{children:"'0'"})," as meaningfully filled (returns ",e.jsx(l.code,{children:"true"}),"), avoiding its traditional falsy deduction."]}),`
`]}),`
`,e.jsxs(l.p,{children:[e.jsx(l.strong,{children:"Returns:"}),`
`,e.jsx(l.code,{children:"boolean"})," (",e.jsx(l.code,{children:"value is Exclude<T, EmptyValue>"}),") — Emits ",e.jsx(l.code,{children:"true"})," if the variable is populated, or ",e.jsx(l.code,{children:"false"})," when empty. This acts as a TypeScript type guard narrowing out ",e.jsx(l.code,{children:"EmptyValue"})," definitions."]}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`import { isFilled } from '@dxtmisha/functional-basic'

console.log(isFilled('Some text')) // true
console.log(isFilled(100)) // true
console.log(isFilled([1, 2, 3])) // true
console.log(isFilled({ data: 'ok' })) // true

// Scenarios evaluated as empty
console.log(isFilled('')) // false
console.log(isFilled([])) // false
console.log(isFilled({ a: null })) // false
console.log(isFilled('null')) // false
console.log(isFilled('0')) // false

// Applying zeroTrue override
console.log(isFilled('0', true)) // true
`})})]})}function u(n={}){const{wrapper:l}={...s(),...n.components};return l?e.jsx(l,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
