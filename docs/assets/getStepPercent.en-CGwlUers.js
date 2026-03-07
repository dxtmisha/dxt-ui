import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getStepPercent - Calculate percentage step"}),`
`,e.jsx(n.h1,{id:"getsteppercent",children:e.jsx(n.code,{children:"getStepPercent"})}),`
`,e.jsx(n.p,{children:"Calculates what percentage of the total range (between the minimum and maximum values) corresponds to a single unit (or one step = 1). This function is helpful when positioning segments of sliders or progress bars using percentages."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number | undefined"})," — The minimum value of the range. If ",e.jsx(n.code,{children:"undefined"})," is passed, ",e.jsx(n.code,{children:"0"})," is used."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — The maximum value of the range."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number"})," — The percentage (from 0 to 100) that one step occupies. If the maximum value is less than or equal to the minimum, it returns ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Range from 0 to 200, so a step of 1 corresponds to 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Range from 50 to 150 (difference 100), a step is 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
