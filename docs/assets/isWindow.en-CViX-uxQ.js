import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isWindow - Check if object is Window`}),`
`,(0,c.jsx)(n.h1,{id:`iswindow`,children:(0,c.jsx)(n.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`A precise utility built specifically to authorize whether an inserted payload organically represents the global browser `,(0,c.jsx)(n.code,{children:`window`}),` object.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The blueprint relies initially on routing logic through `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),` ensuring smooth validation devoid of crashes if mistakenly fired in disconnected Server-Side Render (SSR) arenas. Once confirmed safe inside a browser space, it triggers a stringent equality checkpoint comparing the payload straightforwardly directly against the overarching global `,(0,c.jsx)(n.code,{children:`window`}),` instance.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E`}),` — An active hook, DOM Node, or variable queued up for matching against.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Translates strictly into `,(0,c.jsx)(n.code,{children:`true`}),` only when actively engaged under a browser umbrella and the selected element identically matches the base `,(0,c.jsx)(n.code,{children:`window`}),` object. Operates effectively as a Type Guard filtering down boundaries narrowing accurately toward `,(0,c.jsx)(n.code,{children:`Window`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Spot on validation
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Conflicting DOM elements returning negated
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};