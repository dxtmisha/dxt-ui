import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/toBind - Deep Property Merging`}),`
`,(0,c.jsx)(t.h1,{id:`tobind`,children:(0,c.jsx)(t.code,{children:`toBind`})}),`
`,(0,c.jsxs)(t.p,{children:[`Merges two property objects while intelligently handling `,(0,c.jsx)(t.code,{children:`class`}),` and `,(0,c.jsx)(t.code,{children:`style`}),` properties. If both objects contain classes or styles, they are combined into an array to prevent overwriting. Other properties from the second object (`,(0,c.jsx)(t.code,{children:`value`}),`) will overwrite those in the first object (`,(0,c.jsx)(t.code,{children:`extra`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`how-it-works-merging-mechanism`,children:`How it works (Merging Mechanism)`}),`
`,(0,c.jsx)(t.p,{children:`The function takes two objects and returns a new object by merging their properties according to the following rules:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standard Properties:`}),` Properties from the second object (`,(0,c.jsx)(t.code,{children:`value`}),`) will overwrite properties with the same name from the first object (`,(0,c.jsx)(t.code,{children:`extra`}),`). This is the standard behavior of the spread operator (`,(0,c.jsx)(t.code,{children:`...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`class`}),` Property:`]}),` If the `,(0,c.jsx)(t.code,{children:`class`}),` property is present in `,(0,c.jsx)(t.strong,{children:`only one`}),` of the objects, it is kept as is. However, if a class is specified in `,(0,c.jsx)(t.strong,{children:`both`}),` objects, the function does not overwrite them; instead, it combines them into an array `,(0,c.jsx)(t.code,{children:`[extra.class, value.class]`}),`. This ensures all classes passed to the component are preserved.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`style`}),` Property:`]}),` Works similarly to classes. The presence of styles in both objects will result in them being combined into an array `,(0,c.jsx)(t.code,{children:`[extra.style, value.style]`}),`, which is necessary for correct style application in Vue.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extra: ItemList`}),` — The base property object (e.g., default or internal properties).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ItemList`}),` — The property object to be merged into the base (e.g., user-provided properties).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — The merged properties object.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toBind } from '@dxtmisha/functional'

const base = { class: 'btn', style: { color: 'red' }, id: 'my-btn' }
const mod = { class: 'btn--large', style: { margin: '10px' }, id: 'primary-btn' }

const result = toBind(base, mod)
/* 
Result: { 
  id: 'primary-btn', 
  class: ['btn', 'btn--large'], 
  style: [{ color: 'red' }, { margin: '10px' }] 
}
*/
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};