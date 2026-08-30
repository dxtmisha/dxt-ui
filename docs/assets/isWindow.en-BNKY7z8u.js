import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isWindow - Check if object is Window`}),`
`,(0,c.jsx)(t.h1,{id:`iswindow`,children:(0,c.jsx)(t.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`A precise utility built specifically to authorize whether an inserted payload organically represents the global browser `,(0,c.jsx)(t.code,{children:`window`}),` object.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The blueprint relies initially on routing logic through `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` ensuring smooth validation devoid of crashes if mistakenly fired in disconnected Server-Side Render (SSR) arenas. Once confirmed safe inside a browser space, it triggers a stringent equality checkpoint comparing the payload straightforwardly directly against the overarching global `,(0,c.jsx)(t.code,{children:`window`}),` instance.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — An active hook, DOM Node, or variable queued up for matching against.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Translates strictly into `,(0,c.jsx)(t.code,{children:`true`}),` only when actively engaged under a browser umbrella and the selected element identically matches the base `,(0,c.jsx)(t.code,{children:`window`}),` object. Operates effectively as a Type Guard filtering down boundaries narrowing accurately toward `,(0,c.jsx)(t.code,{children:`Window`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Spot on validation
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Conflicting DOM elements returning negated
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};