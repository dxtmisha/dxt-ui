import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/isIntegerBetween - Check value within integer bounds"}),`
`,e.jsx(n.h1,{id:"isintegerbetween",children:e.jsx(n.code,{children:"isIntegerBetween"})}),`
`,e.jsx(n.p,{children:"Inspects whether a targeted float or integer actively rests within a specifically demarcated integer interval bounds."}),`
`,e.jsxs(n.p,{children:["The threshold is established by flooring the foundational ",e.jsx(n.code,{children:"between"})," input parameter. The function secures a true match exactly when the checking measurement is comprehensively greater than or equal to the grounded lower boundary, whilst being strictly inferior to the successive integer step."]}),`
`,e.jsxs(n.p,{children:["Formula representation: ",e.jsx(n.code,{children:"floor(between) <= value < floor(between) + 1"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — The comparative number undergoing the test."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"between: number"})," — The base origin dictating the interval bounds via mathematical floor rounding."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Evaluates to ",e.jsx(n.code,{children:"true"})," whenever the measurement comfortably exists within the outlined mathematical floor span."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Formed Interval: [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
