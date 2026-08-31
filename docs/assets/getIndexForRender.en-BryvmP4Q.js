import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/getIndexForRender - Key Generation for Rendering`}),`
`,(0,c.jsx)(t.h1,{id:`getindexforrender`,children:(0,c.jsx)(t.code,{children:`getIndexForRender`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility function used to generate a unique component `,(0,c.jsx)(t.code,{children:`key`}),`. The key is formed `,(0,c.jsx)(t.strong,{children:`additively`}),`: all identified parts (including the component name) are joined with dots.`]}),`
`,(0,c.jsx)(t.h3,{id:`parameters`,children:`Parameters:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | any`}),` — Component name or tag (the key base).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Component properties (used to extract `,(0,c.jsx)(t.code,{children:`index`}),`, `,(0,c.jsx)(t.code,{children:`class`}),`, and `,(0,c.jsx)(t.code,{children:`id`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: string`}),` — An optional external index.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`returns`,children:`Returns:`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`string | undefined`}),` — The generated composite key, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if no key could be generated.`]}),`
`,(0,c.jsx)(t.h3,{id:`generation-examples`,children:`Generation Examples:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getIndexForRender } from '@dxtmisha/functional'

// 1. Name only
getIndexForRender('li') 
// => '.li'

// 2. Name + external index
getIndexForRender('div', {}, 'row-1') 
// => '.div.row-1'

// 3. Name + index from props + class + id
getIndexForRender('button', { 
  index: 'primary', 
  class: 'btn-large', 
  id: 'submit-01' 
}) 
// => '.button.primary.btn-large.submit-01'

// 4. Full set (external argument + everything from props)
getIndexForRender('span', { 
  index: 'p-idx', 
  class: 'text-red', 
  id: 'id-99' 
}, 'arg-idx') 
// => '.span.arg-idx.p-idx.text-red.id-99'

// 5. Empty case
getIndexForRender(undefined)
// => undefined
`})}),`
`,(0,c.jsx)(t.h3,{id:`key-assembly-logic`,children:`Key Assembly Logic`}),`
`,(0,c.jsx)(t.p,{children:`The key is assembled in a chain:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.name`})}),` (if `,(0,c.jsx)(t.code,{children:`name`}),` is a string)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .index`}),` (if the `,(0,c.jsx)(t.code,{children:`index`}),` argument is passed)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .props.index`}),` (if present in properties and is a string)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .className`}),` (if present in properties)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .props.id`}),` (if present in properties)`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};