import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isNull - Check for null or undefined`}),`
`,(0,c.jsx)(n.h1,{id:`isnull`,children:(0,c.jsx)(n.code,{children:`isNull`})}),`
`,(0,c.jsxs)(n.p,{children:[`An explicit, stringent utility focused entirely on confirming if a presented variable strictly equals either `,(0,c.jsx)(n.code,{children:`null`}),` or `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Distinguished from a conventional negative falsy check like `,(0,c.jsx)(n.code,{children:`!value`}),` (which intercepts valid zeroes `,(0,c.jsx)(n.code,{children:`0`}),`, vacuous strings `,(0,c.jsx)(n.code,{children:`''`}),`, and `,(0,c.jsx)(n.code,{children:`false`}),` toggles), this function deliberately sidesteps those values, honing in flawlessly on absent definitions.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Any inclusive subject variable requested to be verified.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` uniformly whenever confronted with a raw `,(0,c.jsx)(n.code,{children:`null`}),` or an isolated `,(0,c.jsx)(n.code,{children:`undefined`}),` marker. It likewise fulfills the responsibility as a TypeScript type guard, securely minimizing the scope to `,(0,c.jsx)(n.code,{children:`Undefined`}),` (`,(0,c.jsx)(n.code,{children:`null | undefined`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Routine falsy traps revert as false logically
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};