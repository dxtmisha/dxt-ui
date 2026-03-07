import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as l}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/en/functional-basic/Functions/isSelectedByList - Check selection across a list"}),`
`,e.jsx(t.h1,{id:"isselectedbylist",children:e.jsx(t.code,{children:"isSelectedByList"})}),`
`,e.jsxs(t.p,{children:["An advanced utility explicitly extending the boundaries of the elementary ",e.jsx(t.code,{children:"isSelected"})," functionality. It serves precisely to evaluate whether ",e.jsx(t.strong,{children:"all underlying elements"})," within a submitted list array (",e.jsx(t.code,{children:"values"}),") effectively align with the outlined verification goal (",e.jsx(t.code,{children:"selected"}),")."]}),`
`,e.jsxs(t.p,{children:["If presented with a solitary value instead of an array collection, the program seamlessly delegates the heavy routing straight back to ",e.jsx(t.code,{children:"isSelected"}),". Yet, if a mapped array array enters the fray (",e.jsx(t.code,{children:"values"}),"), the software executes a holistic ",e.jsx(t.code,{children:".every()"})," iterator technique to solidly assure that ",e.jsx(t.strong,{children:"each discrete component"})," independently triumphs over the isolated ",e.jsx(t.code,{children:"isSelected(item, selected)"})," test parameter."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"values: T | T[]"})," — The single payload or a bundled array array collection mandating cross-checking."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"selected: T | T[]"})," — The target anchor point criteria (could be a string, numeral, or a mapped payload collection representing allowed terms)."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"boolean"})," — Commits to returning ",e.jsx(t.code,{children:"true"})," exclusively when completely all distributed variables simultaneously conquer the testing perimeter hurdle."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Blanket success spanning the full bulk mapped uniformly against one specific key
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Overwhelming validation granted since every item from values nests safely inside the selected pool bounds
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Failure detected. 'date' is absent from the permissions block (selected array). Outputs false through .every() mechanics. 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Upon dropping a single index, inherently collapses into acting purely like isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function p(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
