import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isObject - Check if value is an object`}),`
`,(0,c.jsx)(n.h1,{id:`isobject`,children:(0,c.jsx)(n.code,{children:`isObject`})}),`
`,(0,c.jsx)(n.p,{children:`A foundational utility explicitly formulated for performing safe, immediate checks regarding whether a given argument legitimately constitutes an object.`}),`
`,(0,c.jsxs)(n.p,{children:[`In pure JavaScript logic, `,(0,c.jsx)(n.code,{children:`typeof null`}),` fundamentally yields the notorious `,(0,c.jsx)(n.code,{children:`'object'`}),` string result, inadvertently instigating phantom bugs. `,(0,c.jsx)(n.code,{children:`isObject`}),` expertly navigates around this notorious quirk by initiating a truthy checkpoint (`,(0,c.jsx)(n.code,{children:`Boolean(value)`}),`) completely shielding execution paths from `,(0,c.jsx)(n.code,{children:`null`}),` or undefined pitfalls prior to affirming the exact object type condition. Take caution to realize that structural arrays (`,(0,c.jsx)(n.code,{children:`[]`}),`) count as standard objects under JS protocols, so they successfully yield `,(0,c.jsx)(n.code,{children:`true`}),` here.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Any inclusive subject evaluation target variable.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Yields `,(0,c.jsx)(n.code,{children:`true`}),` solely if the entity demonstrates fundamental object classification (including collections like arrays). Defaults to generating `,(0,c.jsx)(n.code,{children:`false`}),` outputs across null bindings, isolated variables, primitives, and actionable functions. Acts simultaneously as a strict TypeGuard reducing typings to `,(0,c.jsx)(n.code,{children:`Record<any, any>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Arrays are strictly typed as objects underlying JS!)

// Safeguarded boundaries rejecting familiar JS snags
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};