import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isObjectNotArray - Strict object verification`}),`
`,(0,c.jsx)(n.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(n.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(n.p,{children:[`Executes an advanced screening operation directly ensuring the tested item constitutes a textbook plain object structure `,(0,c.jsx)(n.code,{children:`{}`}),` (Record) while being `,(0,c.jsx)(n.strong,{children:`assuredly devoid of any array traits`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Following the intrinsic principle that the elementary `,(0,c.jsx)(n.code,{children:`isObject`}),` utility registers `,(0,c.jsx)(n.code,{children:`true`}),` inherently when probing arrays (due to JavaScript's rudimentary heritage), this precise function rectifies that quirk. By fusing foundational `,(0,c.jsx)(n.code,{children:`isObject(value)`}),` authentication mechanics with a robust `,(0,c.jsx)(n.code,{children:`!Array.isArray(value)`}),` safeguard mechanism, arrays are systematically disqualified.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Any element waiting for inspection.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Generates `,(0,c.jsx)(n.code,{children:`true`}),` solely corresponding to authentic objects structured as `,(0,c.jsx)(n.code,{children:`{ key: 'value' }`}),`. Yields `,(0,c.jsx)(n.code,{children:`false`}),` automatically when combating arrays `,(0,c.jsx)(n.code,{children:`[]`}),`, elusive nulls, functional instances, or standard primitive values. Employs reliable type guarding capabilities that carefully extract the pure Object Record architecture while discarding intersecting null, undefined or array overlaps.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Successful validation boundaries
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Scenarios safely bypassed without tripping false positives
console.log(isObjectNotArray([1, 2, 3])) // false (Array defense shield actively rejects arrays!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};