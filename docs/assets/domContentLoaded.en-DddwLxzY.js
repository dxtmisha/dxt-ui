import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-CKlddtvc.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/domContentLoaded - Execute callback on DOMContentLoaded`}),`
`,(0,c.jsx)(n.h1,{id:`domcontentloaded`,children:(0,c.jsx)(n.code,{children:`domContentLoaded`})}),`
`,(0,c.jsxs)(n.p,{children:[`Executes a callback function when the `,(0,c.jsx)(n.code,{children:`DOMContentLoaded`}),` event is fired.`]}),`
`,(0,c.jsxs)(n.p,{children:[`If the DOM is already loaded (`,(0,c.jsx)(n.code,{children:`document.readyState`}),` is `,(0,c.jsx)(n.code,{children:`'interactive'`}),` or `,(0,c.jsx)(n.code,{children:`'complete'`}),`) or if executing in a non-DOM environment (such as SSR), the callback function is executed immediately.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T | Promise<T>`}),` — The callback function to execute when the DOM is loaded.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — A promise that resolves with the return value of the callback function.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domContentLoaded } from '@dxtmisha/functional-basic'

// 1. Basic usage with a synchronous callback
domContentLoaded(() => {
  console.log('DOM is ready!')
  document.getElementById('app')?.classList.add('ready')
})

// 2. Awaiting the result of an async callback
const data = await domContentLoaded(async () => {
  const element = document.querySelector('#content')
  return element?.textContent
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};