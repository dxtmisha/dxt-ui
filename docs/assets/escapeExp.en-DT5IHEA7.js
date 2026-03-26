import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/escapeExp - Escape special RegExp characters`}),`
`,(0,c.jsx)(n.h1,{id:`escapeexp`,children:(0,c.jsx)(n.code,{children:`escapeExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that escapes all special regular expression characters in a string (`,(0,c.jsx)(n.code,{children:`.`}),` `,(0,c.jsx)(n.code,{children:`*`}),` `,(0,c.jsx)(n.code,{children:`+`}),` `,(0,c.jsx)(n.code,{children:`?`}),` `,(0,c.jsx)(n.code,{children:`^`}),` `,(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsx)(n.code,{children:`{`}),` `,(0,c.jsx)(n.code,{children:`}`}),` `,(0,c.jsx)(n.code,{children:`(`}),` `,(0,c.jsx)(n.code,{children:`)`}),` `,(0,c.jsx)(n.code,{children:`|`}),` `,(0,c.jsx)(n.code,{children:`[`}),` `,(0,c.jsx)(n.code,{children:`]`}),` `,(0,c.jsx)(n.code,{children:`\\`}),` `,(0,c.jsx)(n.code,{children:`/`}),`), so it can be safely used inside a `,(0,c.jsx)(n.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Useful when a string comes from user input or an external source and may contain characters that have special meaning in regular expressions.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — The string to escape.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A string with all special regex characters escaped, safe to use inside a `,(0,c.jsx)(n.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { escapeExp } from '@dxtmisha/functional-basic'

// Escaping characters
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'

// Safe usage inside RegExp
const regex = new RegExp(escapeExp('user.name[0]'))
regex.test('user.name[0]') // true
regex.test('userXname0')   // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};