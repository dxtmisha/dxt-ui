import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/domQuerySelectorAll - Select DOM elements`}),`
`,(0,c.jsx)(n.h1,{id:`domqueryselectorall`,children:(0,c.jsx)(n.code,{children:`domQuerySelectorAll`})}),`
`,(0,c.jsxs)(n.p,{children:[`Finds and returns a list of all HTML elements that match the specified CSS selectors. The returned result is a static (non-live) `,(0,c.jsx)(n.code,{children:`NodeList`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks for the presence of a browser (DOM) environment via `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. If executed on the server or in an environment without a DOM, it returns `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectors: string`}),` — A string containing one or more selectors to search for.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`NodeListOf<E> | undefined`}),` — A collection of matching elements (which could be an empty list if no matches are found), or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the DOM is unavailable.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Find all elements with a specific class
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};