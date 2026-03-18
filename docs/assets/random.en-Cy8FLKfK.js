import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/random - Generate a random number"}),`
`,n.jsx(e.h1,{id:"random",children:n.jsx(e.code,{children:"random"})}),`
`,n.jsxs(e.p,{children:["Generates and returns a random integer within a specified range from ",n.jsx(e.code,{children:"min"})," to ",n.jsx(e.code,{children:"max"})," inclusive."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — The lowest possible value."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — The highest possible value."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"number"})," — A random integer."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { random } from '@dxtmisha/functional-basic'

console.log(random(1, 10)) // e.g., 7
console.log(random(50, 100)) // e.g., 84
`})})]})}function h(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{h as default};
