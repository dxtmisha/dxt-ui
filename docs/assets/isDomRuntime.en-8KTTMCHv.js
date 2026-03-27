import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/isDomRuntime - Check for browser runtime`}),`
`,(0,c.jsx)(n.h1,{id:`isdomruntime`,children:(0,c.jsx)(n.code,{children:`isDomRuntime`})}),`
`,(0,c.jsx)(n.p,{children:`Determines whether the current code is being executed within a browser environment.`}),`
`,(0,c.jsxs)(n.p,{children:[`This check asserts the availability of the global `,(0,c.jsx)(n.code,{children:`window`}),` object alongside its `,(0,c.jsx)(n.code,{children:`window.document`}),` property. Utilizing this utility is a standard approach to guarantee that DOM-specific API invocations (like scroll adjustments, event listeners, or element querying) will not trigger crash errors during Server-Side Rendering (SSR) phases or within isolated Node.js environments.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),`
This functionality operates without requiring any defined parameters.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if the code runs in the browser (where `,(0,c.jsx)(n.code,{children:`window`}),` and `,(0,c.jsx)(n.code,{children:`document`}),` are present). It produces `,(0,c.jsx)(n.code,{children:`false`}),` if executed on the server side (such as Node.js instances or static generation builds).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Safely interface with window.localStorage or the DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Manage server-side (SSR) routing and data logic
  console.log('Rendering on server...')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};