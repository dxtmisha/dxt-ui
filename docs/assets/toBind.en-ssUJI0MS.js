import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Functions/toBind - Deep Property Merging`}),`
`,(0,c.jsx)(n.h1,{id:`tobind`,children:(0,c.jsx)(n.code,{children:`toBind`})}),`
`,(0,c.jsxs)(n.p,{children:[`Merges two property objects while intelligently handling `,(0,c.jsx)(n.code,{children:`class`}),` and `,(0,c.jsx)(n.code,{children:`style`}),` properties. If both objects contain classes or styles, they are combined into an array to prevent overwriting. Other properties from the second object (`,(0,c.jsx)(n.code,{children:`value`}),`) will overwrite those in the first object (`,(0,c.jsx)(n.code,{children:`extra`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`how-it-works-merging-mechanism`,children:`How it works (Merging Mechanism)`}),`
`,(0,c.jsx)(n.p,{children:`The function takes two objects and returns a new object by merging their properties according to the following rules:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standard Properties:`}),` Properties from the second object (`,(0,c.jsx)(n.code,{children:`value`}),`) will overwrite properties with the same name from the first object (`,(0,c.jsx)(n.code,{children:`extra`}),`). This is the standard behavior of the spread operator (`,(0,c.jsx)(n.code,{children:`...`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`class`}),` Property:`]}),` If the `,(0,c.jsx)(n.code,{children:`class`}),` property is present in `,(0,c.jsx)(n.strong,{children:`only one`}),` of the objects, it is kept as is. However, if a class is specified in `,(0,c.jsx)(n.strong,{children:`both`}),` objects, the function does not overwrite them; instead, it combines them into an array `,(0,c.jsx)(n.code,{children:`[extra.class, value.class]`}),`. This ensures all classes passed to the component are preserved.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`style`}),` Property:`]}),` Works similarly to classes. The presence of styles in both objects will result in them being combined into an array `,(0,c.jsx)(n.code,{children:`[extra.style, value.style]`}),`, which is necessary for correct style application in Vue.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extra: ItemList`}),` — The base property object (e.g., default or internal properties).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ItemList`}),` — The property object to be merged into the base (e.g., user-provided properties).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — The merged properties object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toBind } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};