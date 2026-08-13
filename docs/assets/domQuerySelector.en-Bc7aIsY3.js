import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/domQuerySelector - Select a DOM element`}),`
`,(0,c.jsx)(t.h1,{id:`domqueryselector`,children:(0,c.jsx)(t.code,{children:`domQuerySelector`})}),`
`,(0,c.jsx)(t.p,{children:`Finds and returns the first HTML element that matches the specified CSS selector.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function checks for the presence of a browser (DOM) environment using `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`. If the code is executing on the server (SSR) or the DOM is not available, the function safely returns `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectors: string`}),` — A string containing one or more CSS selectors to match against.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — The first matched element, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if no matches are found or the DOM is unavailable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Find by class
const btn = domQuerySelector('.submit-button')

// Find by ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Submit'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};