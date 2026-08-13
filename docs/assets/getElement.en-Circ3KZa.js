import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElement - Retrieve an HTML Element`}),`
`,(0,c.jsx)(t.h1,{id:`getelement`,children:(0,c.jsx)(t.code,{children:`getElement`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns an `,(0,c.jsx)(t.code,{children:`Element`}),` (HTML node) from the document. The utility accepts a CSS selector string, a `,(0,c.jsx)(t.code,{children:`Window`}),` object, or an existing `,(0,c.jsx)(t.code,{children:`Element`}),`, and returns the corresponding DOM node if executed in a browser environment. In non-DOM environments (e.g., SSR), it returns `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — A CSS selector (e.g., `,(0,c.jsx)(t.code,{children:`'.btn'`}),`), the `,(0,c.jsx)(t.code,{children:`Window`}),` object, or an existing `,(0,c.jsx)(t.code,{children:`Element`}),` node.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`R | undefined`}),` — The found or provided DOM node, or `,(0,c.jsx)(t.code,{children:`document.body`}),` if `,(0,c.jsx)(t.code,{children:`Window`}),` was passed. Returns `,(0,c.jsx)(t.code,{children:`undefined`}),` if the element is not found or the DOM is unavailable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElement } from '@dxtmisha/functional-basic'

// Search by selector
const btn = getElement('.submit-btn')

// Passing an existing element
const sameBtn = getElement(btn)

// Passing Window will return document.body
const body = getElement(window)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};