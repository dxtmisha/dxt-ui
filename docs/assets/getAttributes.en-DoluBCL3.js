import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getAttributes - Get element attributes`}),`
`,(0,c.jsx)(n.h1,{id:`getattributes`,children:(0,c.jsx)(n.code,{children:`getAttributes`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts all HTML attributes of a specified DOM element (or an element found by a CSS selector) and returns them as a simple key-value object.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function uses `,(0,c.jsx)(n.code,{children:`getElement`}),` to find the target node. If the element is not found or an empty argument is passed, it returns an empty object `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — A DOM element, Window object, or a CSS selector string to find it.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, string | undefined>`}),` — An object where the keys are attribute names (e.g., `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`class`}),`, `,(0,c.jsx)(n.code,{children:`data-value`}),`), and the values are their contents.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getAttributes } from '@dxtmisha/functional-basic'

// We have an element: <div id="app" class="container" data-theme="dark"></div>

const attrs = getAttributes('#app')
console.log(attrs)
/*
{
  id: 'app',
  class: 'container',
  'data-theme': 'dark'
}
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};