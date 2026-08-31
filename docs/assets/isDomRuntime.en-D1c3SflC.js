import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isDomRuntime - Check for browser runtime`}),`
`,(0,c.jsx)(t.h1,{id:`isdomruntime`,children:(0,c.jsx)(t.code,{children:`isDomRuntime`})}),`
`,(0,c.jsx)(t.p,{children:`Determines whether the current code is being executed within a browser environment.`}),`
`,(0,c.jsxs)(t.p,{children:[`This check asserts the availability of the global `,(0,c.jsx)(t.code,{children:`window`}),` object alongside its `,(0,c.jsx)(t.code,{children:`window.document`}),` property. Utilizing this utility is a standard approach to guarantee that DOM-specific API invocations (like scroll adjustments, event listeners, or element querying) will not trigger crash errors during Server-Side Rendering (SSR) phases or within isolated Node.js environments.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Parameters:`}),`
This functionality operates without requiring any defined parameters.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if the code runs in the browser (where `,(0,c.jsx)(t.code,{children:`window`}),` and `,(0,c.jsx)(t.code,{children:`document`}),` are present). It produces `,(0,c.jsx)(t.code,{children:`false`}),` if executed on the server side (such as Node.js instances or static generation builds).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Safely interface with window.localStorage or the DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Manage server-side (SSR) routing and data logic
  console.log('Rendering on server...')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};