import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getStepValue - Calculate absolute step value"}),`
`,e.jsx(n.h1,{id:"getstepvalue",children:e.jsx(n.code,{children:"getStepValue"})}),`
`,e.jsxs(n.p,{children:["Calculates the absolute value of one percent (",e.jsx(n.code,{children:"1%"}),") of the total range (the difference between the minimum and maximum values). This function is useful for determining by how much a slider's or a progress bar's coordinate should be updated when shifted by 1%."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number | undefined"})," — The minimum value of the range. If ",e.jsx(n.code,{children:"undefined"})," is passed, ",e.jsx(n.code,{children:"0"})," is used."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — The maximum value of the range."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number"})," — The value representing 1% of the range's length. If the maximum value is less than or equal to the minimum, it returns ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Range from 0 to 500, so 1% corresponds to 5 units
console.log(getStepValue(0, 500)) // 5

// Range from 50 to 150 (difference 100), 1% is 1 unit
console.log(getStepValue(50, 150)) // 1
`})})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
