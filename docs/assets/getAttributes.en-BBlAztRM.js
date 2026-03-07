import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/getAttributes - Get element attributes"}),`
`,e.jsx(t.h1,{id:"getattributes",children:e.jsx(t.code,{children:"getAttributes"})}),`
`,e.jsx(t.p,{children:"Extracts all HTML attributes of a specified DOM element (or an element found by a CSS selector) and returns them as a simple key-value object."}),`
`,e.jsxs(t.p,{children:["The function uses ",e.jsx(t.code,{children:"getElement"})," to find the target node. If the element is not found or an empty argument is passed, it returns an empty object ",e.jsx(t.code,{children:"{}"}),"."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"element?: ElementOrString<E>"})," — A DOM element, Window object, or a CSS selector string to find it."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"Record<string, string | undefined>"})," — An object where the keys are attribute names (e.g., ",e.jsx(t.code,{children:"id"}),", ",e.jsx(t.code,{children:"class"}),", ",e.jsx(t.code,{children:"data-value"}),"), and the values are their contents."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getAttributes } from '@dxtmisha/functional-basic'

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
`})})]})}function h(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
