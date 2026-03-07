import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function l(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/isNull - Check for null or undefined"}),`
`,e.jsx(n.h1,{id:"isnull",children:e.jsx(n.code,{children:"isNull"})}),`
`,e.jsxs(n.p,{children:["An explicit, stringent utility focused entirely on confirming if a presented variable strictly equals either ",e.jsx(n.code,{children:"null"})," or ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsxs(n.p,{children:["Distinguished from a conventional negative falsy check like ",e.jsx(n.code,{children:"!value"})," (which intercepts valid zeroes ",e.jsx(n.code,{children:"0"}),", vacuous strings ",e.jsx(n.code,{children:"''"}),", and ",e.jsx(n.code,{children:"false"})," toggles), this function deliberately sidesteps those values, honing in flawlessly on absent definitions."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — Any inclusive subject variable requested to be verified."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Returns ",e.jsx(n.code,{children:"true"})," uniformly whenever confronted with a raw ",e.jsx(n.code,{children:"null"})," or an isolated ",e.jsx(n.code,{children:"undefined"})," marker. It likewise fulfills the responsibility as a TypeScript type guard, securely minimizing the scope to ",e.jsx(n.code,{children:"Undefined"})," (",e.jsx(n.code,{children:"null | undefined"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Routine falsy traps revert as false logically
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{h as default};
