import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/domQuerySelectorAll - Select DOM elements`}),`
`,(0,c.jsx)(t.h1,{id:`domqueryselectorall`,children:(0,c.jsx)(t.code,{children:`domQuerySelectorAll`})}),`
`,(0,c.jsxs)(t.p,{children:[`Finds and returns a list of all HTML elements that match the specified CSS selectors. The returned result is a static (non-live) `,(0,c.jsx)(t.code,{children:`NodeList`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The function checks for the presence of a browser (DOM) environment via `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`. If executed on the server or in an environment without a DOM, it returns `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectors: string`}),` — A string containing one or more selectors to search for.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`NodeListOf<E> | undefined`}),` — A collection of matching elements (which could be an empty list if no matches are found), or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the DOM is unavailable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Find all elements with a specific class
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};