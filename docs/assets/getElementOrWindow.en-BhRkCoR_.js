import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElementOrWindow - Retrieve Element or Window`}),`
`,(0,c.jsx)(t.h1,{id:`getelementorwindow`,children:(0,c.jsx)(t.code,{children:`getElementOrWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`This utility is similar to `,(0,c.jsx)(t.code,{children:`getElement`}),`, but with one significant difference: if the global `,(0,c.jsx)(t.code,{children:`window`}),` object is passed as an argument, the function returns it exactly. `,(0,c.jsx)(t.code,{children:`getElement`}),` in the same scenario would return `,(0,c.jsx)(t.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If a string or another element is passed, the function behaves exactly like the standard `,(0,c.jsx)(t.code,{children:`getElement`}),` utility.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — A selector to search for, an `,(0,c.jsx)(t.code,{children:`Element`}),` node, or the `,(0,c.jsx)(t.code,{children:`Window`}),` object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — The located element, the originally passed element, the `,(0,c.jsx)(t.code,{children:`window`}),` object (if it was passed), or `,(0,c.jsx)(t.code,{children:`undefined`}),` if nothing matched.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Passing Window returns Window (by contrast, getElement would return document.body)
const win = getElementOrWindow(window)

// Normal search by selector
const btn = getElementOrWindow('.submit-btn')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};