import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isIntegerBetween - Check value within integer bounds`}),`
`,(0,c.jsx)(n.h1,{id:`isintegerbetween`,children:(0,c.jsx)(n.code,{children:`isIntegerBetween`})}),`
`,(0,c.jsx)(n.p,{children:`Inspects whether a targeted float or integer actively rests within a specifically demarcated integer interval bounds.`}),`
`,(0,c.jsxs)(n.p,{children:[`The threshold is established by flooring the foundational `,(0,c.jsx)(n.code,{children:`between`}),` input parameter. The function secures a true match exactly when the checking measurement is comprehensively greater than or equal to the grounded lower boundary, whilst being strictly inferior to the successive integer step.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Formula representation: `,(0,c.jsx)(n.code,{children:`floor(between) <= value < floor(between) + 1`})]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: number`}),` — The comparative number undergoing the test.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`between: number`}),` — The base origin dictating the interval bounds via mathematical floor rounding.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Evaluates to `,(0,c.jsx)(n.code,{children:`true`}),` whenever the measurement comfortably exists within the outlined mathematical floor span.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Formed Interval: [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};