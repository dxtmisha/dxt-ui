import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/domQuerySelector - Select a DOM element`}),`
`,(0,c.jsx)(n.h1,{id:`domqueryselector`,children:(0,c.jsx)(n.code,{children:`domQuerySelector`})}),`
`,(0,c.jsx)(n.p,{children:`Finds and returns the first HTML element that matches the specified CSS selector.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks for the presence of a browser (DOM) environment using `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. If the code is executing on the server (SSR) or the DOM is not available, the function safely returns `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectors: string`}),` — A string containing one or more CSS selectors to match against.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — The first matched element, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if no matches are found or the DOM is unavailable.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Find by class
const btn = domQuerySelector('.submit-button')

// Find by ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Submit'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};