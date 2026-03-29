import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/toBinds - Multi-Object Property Merging`}),`
`,(0,c.jsx)(n.h1,{id:`tobinds`,children:(0,c.jsx)(n.code,{children:`toBinds`})}),`
`,(0,c.jsxs)(n.p,{children:[`Merges multiple property objects sequentially using `,(0,c.jsx)(n.code,{children:`toBind`}),`. This function is useful for combining multiple layers of properties (e.g., defaults, component props, and state-driven modifiers) while ensuring `,(0,c.jsx)(n.code,{children:`class`}),` and `,(0,c.jsx)(n.code,{children:`style`}),` properties are correctly combined rather than overwritten.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...values: (ItemList | undefined)[]`}),` — A list of property objects to merge.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — The final merged properties object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toBinds } from '@dxtmisha/functional'

const defaults = { class: 'btn', id: 'gen-id' }
const props = { class: 'btn--primary', title: 'Click me' }
const state = { class: 'is-loading', style: { opacity: 0.5 } }

const finalBind = toBinds(defaults, props, state)
/* 
Result: { 
  id: 'gen-id', 
  title: 'Click me',
  class: [['btn', 'btn--primary'], 'is-loading'], 
  style: { opacity: 0.5 } 
}
Note: nesting depth of classes depends on implementation of toBind.
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};