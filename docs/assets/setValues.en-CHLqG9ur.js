import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function l(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/setValues - Managing the list of selected values"}),`
`,e.jsx(n.h1,{id:"setvalues",children:e.jsx(n.code,{children:"setValues"})}),`
`,e.jsx(n.p,{children:"Handles updating selected values based on the selection mode (single or multiple). Allows adding, removing, or replacing values with support for maximum element constraints."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: T | T[] | undefined"})," — The current selected values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — The new value to process."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options"})," — An object with settings:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"multiple: boolean"})," — Multiple selection mode (defaults to ",e.jsx(n.code,{children:"false"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxlength: number"})," — Maximum number of elements for multiple selection (defaults to ",e.jsx(n.code,{children:"0"})," — unlimited)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alwaysChange: boolean"})," — Forced value replacement flag (defaults to ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"notEmpty: boolean"})," — Prevents the list from being completely cleared (defaults to ",e.jsx(n.code,{children:"false"}),")."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T | T[] | undefined"})," — The new state of selected values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { setValues } from '@dxtmisha/functional-basic'

// Single selection
console.log(setValues(1, 2, {})) // 2

// Multiple selection (toggle)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (removal of existing)
list = setValues(list, 3, { multiple: true }) // [1, 3] (addition of new)
`})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{h as default};
