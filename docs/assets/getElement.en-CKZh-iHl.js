import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getElement - Retrieve an HTML Element`}),`
`,(0,c.jsx)(n.h1,{id:`getelement`,children:(0,c.jsx)(n.code,{children:`getElement`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns an `,(0,c.jsx)(n.code,{children:`Element`}),` (HTML node) from the document. The utility accepts a CSS selector string, a `,(0,c.jsx)(n.code,{children:`Window`}),` object, or an existing `,(0,c.jsx)(n.code,{children:`Element`}),`, and returns the corresponding DOM node if executed in a browser environment. In non-DOM environments (e.g., SSR), it returns `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — A CSS selector (e.g., `,(0,c.jsx)(n.code,{children:`'.btn'`}),`), the `,(0,c.jsx)(n.code,{children:`Window`}),` object, or an existing `,(0,c.jsx)(n.code,{children:`Element`}),` node.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`R | undefined`}),` — The found or provided DOM node, or `,(0,c.jsx)(n.code,{children:`document.body`}),` if `,(0,c.jsx)(n.code,{children:`Window`}),` was passed. Returns `,(0,c.jsx)(n.code,{children:`undefined`}),` if the element is not found or the DOM is unavailable.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElement } from '@dxtmisha/functional-basic'

// Search by selector
const btn = getElement('.submit-btn')

// Passing an existing element
const sameBtn = getElement(btn)

// Passing Window will return document.body
const body = getElement(window)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};