import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isNull - Check for null or undefined`}),`
`,(0,c.jsx)(t.h1,{id:`isnull`,children:(0,c.jsx)(t.code,{children:`isNull`})}),`
`,(0,c.jsxs)(t.p,{children:[`An explicit, stringent utility focused entirely on confirming if a presented variable strictly equals either `,(0,c.jsx)(t.code,{children:`null`}),` or `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Distinguished from a conventional negative falsy check like `,(0,c.jsx)(t.code,{children:`!value`}),` (which intercepts valid zeroes `,(0,c.jsx)(t.code,{children:`0`}),`, vacuous strings `,(0,c.jsx)(t.code,{children:`''`}),`, and `,(0,c.jsx)(t.code,{children:`false`}),` toggles), this function deliberately sidesteps those values, honing in flawlessly on absent definitions.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Any inclusive subject variable requested to be verified.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` uniformly whenever confronted with a raw `,(0,c.jsx)(t.code,{children:`null`}),` or an isolated `,(0,c.jsx)(t.code,{children:`undefined`}),` marker. It likewise fulfills the responsibility as a TypeScript type guard, securely minimizing the scope to `,(0,c.jsx)(t.code,{children:`Undefined`}),` (`,(0,c.jsx)(t.code,{children:`null | undefined`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Routine falsy traps revert as false logically
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};