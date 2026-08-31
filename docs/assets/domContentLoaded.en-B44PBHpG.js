import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/domContentLoaded - Execute callback on DOMContentLoaded`}),`
`,(0,c.jsx)(t.h1,{id:`domcontentloaded`,children:(0,c.jsx)(t.code,{children:`domContentLoaded`})}),`
`,(0,c.jsxs)(t.p,{children:[`Executes a callback function when the `,(0,c.jsx)(t.code,{children:`DOMContentLoaded`}),` event is fired.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If the DOM is already loaded (`,(0,c.jsx)(t.code,{children:`document.readyState`}),` is `,(0,c.jsx)(t.code,{children:`'interactive'`}),` or `,(0,c.jsx)(t.code,{children:`'complete'`}),`) or if executing in a non-DOM environment (such as SSR), the callback function is executed immediately.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T | Promise<T>`}),` — The callback function to execute when the DOM is loaded.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — A promise that resolves with the return value of the callback function.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domContentLoaded } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};