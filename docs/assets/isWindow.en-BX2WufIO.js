import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/isWindow - Check if object is Window"}),`
`,e.jsx(n.h1,{id:"iswindow",children:e.jsx(n.code,{children:"isWindow"})}),`
`,e.jsxs(n.p,{children:["A precise utility built specifically to authorize whether an inserted payload organically represents the global browser ",e.jsx(n.code,{children:"window"})," object."]}),`
`,e.jsxs(n.p,{children:["The blueprint relies initially on routing logic through ",e.jsx(n.code,{children:"isDomRuntime()"})," ensuring smooth validation devoid of crashes if mistakenly fired in disconnected Server-Side Render (SSR) arenas. Once confirmed safe inside a browser space, it triggers a stringent equality checkpoint comparing the payload straightforwardly directly against the overarching global ",e.jsx(n.code,{children:"window"})," instance."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: E"})," — An active hook, DOM Node, or variable queued up for matching against."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Translates strictly into ",e.jsx(n.code,{children:"true"})," only when actively engaged under a browser umbrella and the selected element identically matches the base ",e.jsx(n.code,{children:"window"})," object. Operates effectively as a Type Guard filtering down boundaries narrowing accurately toward ",e.jsx(n.code,{children:"Window"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isWindow } from '@dxtmisha/functional-basic'

// Spot on validation
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Conflicting DOM elements returning negated
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function u(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{u as default};
