import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/setValues - Managing the list of selected values`}),`
`,(0,c.jsx)(n.h1,{id:`setvalues`,children:(0,c.jsx)(n.code,{children:`setValues`})}),`
`,(0,c.jsx)(n.p,{children:`Handles updating selected values based on the selection mode (single or multiple). Allows adding, removing, or replacing values with support for maximum element constraints.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[] | undefined`}),` — The current selected values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — The new value to process.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options`}),` — An object with settings:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`multiple: boolean`}),` — Multiple selection mode (defaults to `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxlength: number`}),` — Maximum number of elements for multiple selection (defaults to `,(0,c.jsx)(n.code,{children:`0`}),` — unlimited).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`alwaysChange: boolean`}),` — Forced value replacement flag (defaults to `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`notEmpty: boolean`}),` — Prevents the list from being completely cleared (defaults to `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T | T[] | undefined`}),` — The new state of selected values.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setValues } from '@dxtmisha/functional-basic'

// Single selection
console.log(setValues(1, 2, {})) // 2

// Multiple selection (toggle)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (removal of existing)
list = setValues(list, 3, { multiple: true }) // [1, 3] (addition of new)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};