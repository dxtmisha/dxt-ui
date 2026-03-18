import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(i){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Functions/getIndexForRender - Key Generation for Rendering"}),`
`,e.jsx(n.h1,{id:"getindexforrender",children:e.jsx(n.code,{children:"getIndexForRender"})}),`
`,e.jsxs(n.p,{children:["A utility function used to generate a unique component ",e.jsx(n.code,{children:"key"}),". The key is formed ",e.jsx(n.strong,{children:"additively"}),": all identified parts (including the component name) are joined with dots."]}),`
`,e.jsx(n.h3,{id:"parameters",children:"Parameters:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string | any"})," — Component name or tag (the key base)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props?: T"})," — Component properties (used to extract ",e.jsx(n.code,{children:"index"}),", ",e.jsx(n.code,{children:"class"}),", and ",e.jsx(n.code,{children:"id"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index?: string"})," — An optional external index."]}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"string | undefined"})," — The generated composite key, or ",e.jsx(n.code,{children:"undefined"})," if no key could be generated."]}),`
`,e.jsx(n.h3,{id:"generation-examples",children:"Generation Examples:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getIndexForRender } from '@dxtmisha/functional'

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
`,e.jsx(n.h3,{id:"key-assembly-logic",children:"Key Assembly Logic"}),`
`,e.jsx(n.p,{children:"The key is assembled in a chain:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:".name"})})," (if ",e.jsx(n.code,{children:"name"})," is a string)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"+ .index"})," (if the ",e.jsx(n.code,{children:"index"})," argument is passed)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"+ .props.index"})," (if present in properties and is a string)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"+ .className"})," (if present in properties)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"+ .props.id"})," (if present in properties)"]}),`
`]})]})}function h(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as default};
