import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/en/functional/Functions/toBinds - Multi-Object Property Merging"}),`
`,n.jsx(e.h1,{id:"tobinds",children:n.jsx(e.code,{children:"toBinds"})}),`
`,n.jsxs(e.p,{children:["Merges multiple property objects sequentially using ",n.jsx(e.code,{children:"toBind"}),". This function is useful for combining multiple layers of properties (e.g., defaults, component props, and state-driven modifiers) while ensuring ",n.jsx(e.code,{children:"class"})," and ",n.jsx(e.code,{children:"style"})," properties are correctly combined rather than overwritten."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"...values: (ItemList | undefined)[]"})," — A list of property objects to merge."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"ConstrBind<R>"})," — The final merged properties object."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toBinds } from '@dxtmisha/functional'

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
`})})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
