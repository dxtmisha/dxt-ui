import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/toNumberByMax - Converting to a number with a maximum limit`}),`
`,(0,c.jsx)(n.h1,{id:`tonumberbymax`,children:(0,c.jsx)(n.code,{children:`toNumberByMax`})}),`
`,(0,c.jsxs)(n.p,{children:[`Converts the input value to a number and, if it exceeds the specified maximum, returns a string with a `,(0,c.jsx)(n.code,{children:`+`}),` symbol at the end. Optionally performs localized formatting of the result.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | number`}),` — The input value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max?: string | number`}),` — The maximum allowed value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`formatting?: boolean`}),` — Flag to enable formatting via `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language?: string`}),` — Language code for formatting (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string | number`}),` — A formatted string (e.g., `,(0,c.jsx)(n.code,{children:`'99+'`}),`) or a number.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'en-US')) // '500+'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};