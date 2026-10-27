import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isRegExp - Check if value is a regular expression`}),`
`,(0,c.jsx)(t.h1,{id:`isregexp`,children:(0,c.jsx)(t.code,{children:`isRegExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks whether the provided value is a regular expression object (`,(0,c.jsx)(t.code,{children:`RegExp`}),`), including cross-realm instances (from `,(0,c.jsx)(t.code,{children:`iframe`}),`, Web Workers, or separate `,(0,c.jsx)(t.code,{children:`node:vm`}),` contexts).`]}),`
`,(0,c.jsxs)(t.p,{children:[`The function combines `,(0,c.jsx)(t.code,{children:`value instanceof RegExp`}),` with prototype tag verification `,(0,c.jsx)(t.code,{children:`Object.prototype.toString.call(value) === '[object RegExp]'`}),`. This guarantees accurate type narrowing across isolated execution environments (such as Figma plugin UIs or modular micro-frontends), where `,(0,c.jsx)(t.code,{children:`instanceof`}),` evaluates to `,(0,c.jsx)(t.code,{children:`false`}),` due to different global prototypes.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: unknown`}),` — The input value of any type to check.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`value is RegExp`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if `,(0,c.jsx)(t.code,{children:`value`}),` is a regular expression, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`. Acts as a TypeScript type guard narrowing `,(0,c.jsx)(t.code,{children:`value`}),` to `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isRegExp } from '@dxtmisha/functional-basic'

// Regular expression instances
console.log(isRegExp(/^[a-z]+$/i)) // true
console.log(isRegExp(new RegExp('test'))) // true

// Cross-realm instances (e.g. from an iframe)
console.log(isRegExp(iframeWindow.RegExp('foo'))) // true

// Non-RegExp types
console.log(isRegExp('/^[a-z]+$/')) // false (string literal, not RegExp)
console.log(isRegExp({ source: 'test', flags: 'i' })) // false
console.log(isRegExp(null)) // false
console.log(isRegExp(undefined)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};