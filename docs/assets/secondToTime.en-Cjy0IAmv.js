import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/secondToTime - Convert seconds to a time string`}),`
`,(0,c.jsx)(t.h1,{id:`secondtotime`,children:(0,c.jsx)(t.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(t.p,{children:[`Converts a given number of seconds into a time format string `,(0,c.jsx)(t.code,{children:`MM:SS`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If the value of seconds is less than or equal to zero, or is not provided, the default value `,(0,c.jsx)(t.code,{children:`00:00`}),` is returned.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second: number | string | undefined`}),` — The total number of seconds (both numbers and string representations of numbers are supported).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A formatted string with minutes and seconds (e.g., `,(0,c.jsx)(t.code,{children:`12:34`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};