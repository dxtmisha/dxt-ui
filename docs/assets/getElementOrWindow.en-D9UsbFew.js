import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getElementOrWindow - Retrieve Element or Window`}),`
`,(0,c.jsx)(n.h1,{id:`getelementorwindow`,children:(0,c.jsx)(n.code,{children:`getElementOrWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`This utility is similar to `,(0,c.jsx)(n.code,{children:`getElement`}),`, but with one significant difference: if the global `,(0,c.jsx)(n.code,{children:`window`}),` object is passed as an argument, the function returns it exactly. `,(0,c.jsx)(n.code,{children:`getElement`}),` in the same scenario would return `,(0,c.jsx)(n.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`If a string or another element is passed, the function behaves exactly like the standard `,(0,c.jsx)(n.code,{children:`getElement`}),` utility.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — A selector to search for, an `,(0,c.jsx)(n.code,{children:`Element`}),` node, or the `,(0,c.jsx)(n.code,{children:`Window`}),` object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — The located element, the originally passed element, the `,(0,c.jsx)(n.code,{children:`window`}),` object (if it was passed), or `,(0,c.jsx)(n.code,{children:`undefined`}),` if nothing matched.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Passing Window returns Window (by contrast, getElement would return document.body)
const win = getElementOrWindow(window)

// Normal search by selector
const btn = getElementOrWindow('.submit-btn')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};