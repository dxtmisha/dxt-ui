import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isIntegerBetween - Check value within integer bounds`}),`
`,(0,c.jsx)(t.h1,{id:`isintegerbetween`,children:(0,c.jsx)(t.code,{children:`isIntegerBetween`})}),`
`,(0,c.jsx)(t.p,{children:`Inspects whether a targeted float or integer actively rests within a specifically demarcated integer interval bounds.`}),`
`,(0,c.jsxs)(t.p,{children:[`The threshold is established by flooring the foundational `,(0,c.jsx)(t.code,{children:`between`}),` input parameter. The function secures a true match exactly when the checking measurement is comprehensively greater than or equal to the grounded lower boundary, whilst being strictly inferior to the successive integer step.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Formula representation: `,(0,c.jsx)(t.code,{children:`floor(between) <= value < floor(between) + 1`})]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — The comparative number undergoing the test.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`between: number`}),` — The base origin dictating the interval bounds via mathematical floor rounding.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Evaluates to `,(0,c.jsx)(t.code,{children:`true`}),` whenever the measurement comfortably exists within the outlined mathematical floor span.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Formed Interval: [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};