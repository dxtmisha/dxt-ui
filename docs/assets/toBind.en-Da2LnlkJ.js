import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Functions/toBind - Deep Property Merging"}),`
`,e.jsx(n.h1,{id:"tobind",children:e.jsx(n.code,{children:"toBind"})}),`
`,e.jsxs(n.p,{children:["Merges two property objects while intelligently handling ",e.jsx(n.code,{children:"class"})," and ",e.jsx(n.code,{children:"style"})," properties. If both objects contain classes or styles, they are combined into an array to prevent overwriting. Other properties from the second object (",e.jsx(n.code,{children:"value"}),") will overwrite those in the first object (",e.jsx(n.code,{children:"extra"}),")."]}),`
`,e.jsx(n.h3,{id:"how-it-works-merging-mechanism",children:"How it works (Merging Mechanism)"}),`
`,e.jsx(n.p,{children:"The function takes two objects and returns a new object by merging their properties according to the following rules:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standard Properties:"})," Properties from the second object (",e.jsx(n.code,{children:"value"}),") will overwrite properties with the same name from the first object (",e.jsx(n.code,{children:"extra"}),"). This is the standard behavior of the spread operator (",e.jsx(n.code,{children:"..."}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"class"})," Property:"]})," If the ",e.jsx(n.code,{children:"class"})," property is present in ",e.jsx(n.strong,{children:"only one"})," of the objects, it is kept as is. However, if a class is specified in ",e.jsx(n.strong,{children:"both"})," objects, the function does not overwrite them; instead, it combines them into an array ",e.jsx(n.code,{children:"[extra.class, value.class]"}),". This ensures all classes passed to the component are preserved."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"style"})," Property:"]})," Works similarly to classes. The presence of styles in both objects will result in them being combined into an array ",e.jsx(n.code,{children:"[extra.style, value.style]"}),", which is necessary for correct style application in Vue."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extra: ItemList"})," — The base property object (e.g., default or internal properties)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: ItemList"})," — The property object to be merged into the base (e.g., user-provided properties)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ConstrBind<R>"})," — The merged properties object."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toBind } from '@dxtmisha/functional'

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
`})})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{p as default};
