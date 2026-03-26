import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getStepValue - Calculate absolute step value`}),`
`,(0,c.jsx)(n.h1,{id:`getstepvalue`,children:(0,c.jsx)(n.code,{children:`getStepValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Calculates the absolute value of one percent (`,(0,c.jsx)(n.code,{children:`1%`}),`) of the total range (the difference between the minimum and maximum values). This function is useful for determining by how much a slider's or a progress bar's coordinate should be updated when shifted by 1%.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number | undefined`}),` — The minimum value of the range. If `,(0,c.jsx)(n.code,{children:`undefined`}),` is passed, `,(0,c.jsx)(n.code,{children:`0`}),` is used.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — The maximum value of the range.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — The value representing 1% of the range's length. If the maximum value is less than or equal to the minimum, it returns `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Range from 0 to 500, so 1% corresponds to 5 units
console.log(getStepValue(0, 500)) // 5

// Range from 50 to 150 (difference 100), 1% is 1 unit
console.log(getStepValue(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};