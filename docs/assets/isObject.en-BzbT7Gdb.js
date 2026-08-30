import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isObject - Check if value is an object`}),`
`,(0,c.jsx)(t.h1,{id:`isobject`,children:(0,c.jsx)(t.code,{children:`isObject`})}),`
`,(0,c.jsx)(t.p,{children:`A foundational utility explicitly formulated for performing safe, immediate checks regarding whether a given argument legitimately constitutes an object.`}),`
`,(0,c.jsxs)(t.p,{children:[`In pure JavaScript logic, `,(0,c.jsx)(t.code,{children:`typeof null`}),` fundamentally yields the notorious `,(0,c.jsx)(t.code,{children:`'object'`}),` string result, inadvertently instigating phantom bugs. `,(0,c.jsx)(t.code,{children:`isObject`}),` expertly navigates around this notorious quirk by initiating a truthy checkpoint (`,(0,c.jsx)(t.code,{children:`Boolean(value)`}),`) completely shielding execution paths from `,(0,c.jsx)(t.code,{children:`null`}),` or undefined pitfalls prior to affirming the exact object type condition. Take caution to realize that structural arrays (`,(0,c.jsx)(t.code,{children:`[]`}),`) count as standard objects under JS protocols, so they successfully yield `,(0,c.jsx)(t.code,{children:`true`}),` here.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Any inclusive subject evaluation target variable.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Yields `,(0,c.jsx)(t.code,{children:`true`}),` solely if the entity demonstrates fundamental object classification (including collections like arrays). Defaults to generating `,(0,c.jsx)(t.code,{children:`false`}),` outputs across null bindings, isolated variables, primitives, and actionable functions. Acts simultaneously as a strict TypeGuard reducing typings to `,(0,c.jsx)(t.code,{children:`Record<any, any>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Arrays are strictly typed as objects underlying JS!)

// Safeguarded boundaries rejecting familiar JS snags
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};