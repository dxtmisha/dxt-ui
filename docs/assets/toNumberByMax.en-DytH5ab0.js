import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/toNumberByMax - Converting to a number with a maximum limit`}),`
`,(0,c.jsx)(t.h1,{id:`tonumberbymax`,children:(0,c.jsx)(t.code,{children:`toNumberByMax`})}),`
`,(0,c.jsxs)(t.p,{children:[`Converts the input value to a number and, if it exceeds the specified maximum, returns a string with a `,(0,c.jsx)(t.code,{children:`+`}),` symbol at the end. Optionally performs localized formatting of the result.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string | number`}),` — The input value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max?: string | number`}),` — The maximum allowed value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formatting?: boolean`}),` — Flag to enable formatting via `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language?: string`}),` — Language code for formatting (e.g., `,(0,c.jsx)(t.code,{children:`'en-US'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string | number`}),` — A formatted string (e.g., `,(0,c.jsx)(t.code,{children:`'99+'`}),`) or a number.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'en-US')) // '500+'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};