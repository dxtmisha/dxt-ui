import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isWindow - Check if object is Window`}),`
`,(0,c.jsx)(t.h1,{id:`iswindow`,children:(0,c.jsx)(t.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks whether the provided value is the global browser `,(0,c.jsx)(t.code,{children:`window`}),` object.`]}),`
`,(0,c.jsxs)(t.p,{children:[`First verifies via `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` that the code is running in a DOM environment (preventing errors during Server-Side Rendering), and then compares `,(0,c.jsx)(t.code,{children:`element === window`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — The element or value to check.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`element is Extract<E, Window>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if running in a browser environment and `,(0,c.jsx)(t.code,{children:`element`}),` is strictly equal to `,(0,c.jsx)(t.code,{children:`window`}),`, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`. Acts as a TypeScript type guard narrowing `,(0,c.jsx)(t.code,{children:`E`}),` to `,(0,c.jsx)(t.code,{children:`Extract<E, Window>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Valid window object
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Other DOM nodes and values
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};