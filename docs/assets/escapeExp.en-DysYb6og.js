import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/escapeExp - Escape special RegExp characters`}),`
`,(0,c.jsx)(t.h1,{id:`escapeexp`,children:(0,c.jsx)(t.code,{children:`escapeExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that escapes all special regular expression characters in a string (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),` `,(0,c.jsx)(t.code,{children:`/`}),` `,(0,c.jsx)(t.code,{children:`-`}),`), so it can be safely used inside a `,(0,c.jsx)(t.code,{children:`RegExp`}),` pattern or character class (`,(0,c.jsx)(t.code,{children:`[...]`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Useful when a search term, query, or token comes from user input or an external source and may contain characters that have special meaning in regular expressions.`}),`
`,(0,c.jsx)(t.h3,{id:`key-features`,children:`Key Features:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Comprehensive 16-Metacharacter Escaping`}),`: Escapes all standard regex syntax characters (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{}`}),` `,(0,c.jsx)(t.code,{children:`()`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),`) as well as forward slash (`,(0,c.jsx)(t.code,{children:`/`}),`) and hyphen (`,(0,c.jsx)(t.code,{children:`-`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Character Class Safety (`,(0,c.jsx)(t.code,{children:`[...]`}),`)`]}),`: Escapes the hyphen (`,(0,c.jsx)(t.code,{children:`-`}),`) as `,(0,c.jsx)(t.code,{children:`\\-`}),`, preventing accidental character range expansion (e.g. `,(0,c.jsx)(t.code,{children:`[0-9]`}),`) or `,(0,c.jsx)(t.code,{children:`SyntaxError: Range out of order in character class`}),` when interpolating arbitrary strings into brackets (e.g. `,(0,c.jsx)(t.code,{children:`[z-a]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Type Coercion`}),`: Accepts strings, numbers (including `,(0,c.jsx)(t.code,{children:`0`}),` and negative values), `,(0,c.jsx)(t.code,{children:`null`}),`, and `,(0,c.jsx)(t.code,{children:`undefined`}),`, converting them safely without throwing exceptions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`ReDoS Safe`}),`: Operates with deterministic $O(N)$ linear complexity without nested quantifiers or catastrophic backtracking.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Isomorphic & SSR Safe`}),`: Pure function with zero dependencies on browser globals (`,(0,c.jsx)(t.code,{children:`window`}),` or `,(0,c.jsx)(t.code,{children:`document`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string | number | null`}),` — The string or number to escape.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A string with all special regex characters escaped, safe to use inside a `,(0,c.jsx)(t.code,{children:`RegExp`}),`. Returns an empty string `,(0,c.jsx)(t.code,{children:`''`}),` if `,(0,c.jsx)(t.code,{children:`null`}),` or `,(0,c.jsx)(t.code,{children:`undefined`}),` is provided.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { escapeExp } from '@dxtmisha/functional-basic'

// 1. Escaping special regex characters
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'
console.log(escapeExp('C++ & C#'))     // 'C\\\\+\\\\+ & C#'
console.log(escapeExp('path/to/*.log')) // 'path\\\\/to\\\\/\\\\*\\\\.log'

// 2. Safe compilation into RegExp
const userInput = '[VIP] (Special) *promo*'
const regex = new RegExp(\`^\${escapeExp(userInput)}$\`, 'i')
regex.test('[VIP] (Special) *promo*') // true
regex.test('VIP Special promo')       // false

// 3. Character class safety ([...] context)
// Hyphen escaping prevents syntax errors on reversed ranges
const reversedRange = 'z-a'
const safeBracketRegex = new RegExp(\`[\${escapeExp(reversedRange)}]\`)
safeBracketRegex.test('z') // true
safeBracketRegex.test('-') // true
safeBracketRegex.test('a') // true

// 4. Safe handling of numbers and nullish values
escapeExp(0)         // '0'
escapeExp(12345)     // '12345'
escapeExp(-42)       // '\\\\-42'
escapeExp(null)      // ''
escapeExp(undefined) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};