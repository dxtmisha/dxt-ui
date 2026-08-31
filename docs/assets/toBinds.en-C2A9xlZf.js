import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/toBinds - Multi-Object Property Merging`}),`
`,(0,c.jsx)(t.h1,{id:`tobinds`,children:(0,c.jsx)(t.code,{children:`toBinds`})}),`
`,(0,c.jsxs)(t.p,{children:[`Merges multiple property objects sequentially using `,(0,c.jsx)(t.code,{children:`toBind`}),`. This function is useful for combining multiple layers of properties (e.g., defaults, component props, and state-driven modifiers) while ensuring `,(0,c.jsx)(t.code,{children:`class`}),` and `,(0,c.jsx)(t.code,{children:`style`}),` properties are correctly combined rather than overwritten.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...values: (ItemList | undefined)[]`}),` — A list of property objects to merge.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — The final merged properties object.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toBinds } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};