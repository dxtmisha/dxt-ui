import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/toNumberPositive - Converting to a positive finite number`}),`
`,(0,c.jsx)(t.h1,{id:`tonumberpositive`,children:(0,c.jsx)(t.code,{children:`toNumberPositive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Converts the input value to a positive finite number (`,(0,c.jsx)(t.code,{children:`> 0`}),`). If the value is not a valid positive number, it returns the specified default value (defaults to `,(0,c.jsx)(t.code,{children:`0`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: number | string | null`}),` — The input value to convert.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue: number = 0`}),` — Default fallback value if conversion fails or the number is not positive.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — A positive number (`,(0,c.jsx)(t.code,{children:`> 0`}),`) or the default value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toNumberPositive } from '@dxtmisha/functional-basic'

console.log(toNumberPositive(15)) // 15
console.log(toNumberPositive('10')) // 10
console.log(toNumberPositive(-5)) // 0
console.log(toNumberPositive('invalid', 1)) // 1
console.log(toNumberPositive(undefined, 1)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};