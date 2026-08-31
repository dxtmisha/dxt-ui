import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isObjectNotArray - Strict object verification`}),`
`,(0,c.jsx)(t.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(t.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Executes an advanced screening operation directly ensuring the tested item constitutes a textbook plain object structure `,(0,c.jsx)(t.code,{children:`{}`}),` (Record) while being `,(0,c.jsx)(t.strong,{children:`assuredly devoid of any array traits`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Following the intrinsic principle that the elementary `,(0,c.jsx)(t.code,{children:`isObject`}),` utility registers `,(0,c.jsx)(t.code,{children:`true`}),` inherently when probing arrays (due to JavaScript's rudimentary heritage), this precise function rectifies that quirk. By fusing foundational `,(0,c.jsx)(t.code,{children:`isObject(value)`}),` authentication mechanics with a robust `,(0,c.jsx)(t.code,{children:`!Array.isArray(value)`}),` safeguard mechanism, arrays are systematically disqualified.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Any element waiting for inspection.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Generates `,(0,c.jsx)(t.code,{children:`true`}),` solely corresponding to authentic objects structured as `,(0,c.jsx)(t.code,{children:`{ key: 'value' }`}),`. Yields `,(0,c.jsx)(t.code,{children:`false`}),` automatically when combating arrays `,(0,c.jsx)(t.code,{children:`[]`}),`, elusive nulls, functional instances, or standard primitive values. Employs reliable type guarding capabilities that carefully extract the pure Object Record architecture while discarding intersecting null, undefined or array overlaps.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Successful validation boundaries
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Scenarios safely bypassed without tripping false positives
console.log(isObjectNotArray([1, 2, 3])) // false (Array defense shield actively rejects arrays!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};