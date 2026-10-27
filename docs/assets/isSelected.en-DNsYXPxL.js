import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isSelected - Check if a value is selected`}),`
`,(0,c.jsx)(t.h1,{id:`isselected`,children:(0,c.jsx)(t.code,{children:`isSelected`})}),`
`,(0,c.jsx)(t.p,{children:`Checks whether a given value is selected by comparing it against a single target value or an array of selected items. Supports intelligent numeric comparison for numbers and numeric strings:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Null / Undefined Guard:`}),` If `,(0,c.jsx)(t.code,{children:`value`}),` is `,(0,c.jsx)(t.code,{children:`null`}),` or `,(0,c.jsx)(t.code,{children:`undefined`}),` (checked via `,(0,c.jsx)(t.code,{children:`isNull(value)`}),`), the function immediately returns `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Array Comparison:`}),` If `,(0,c.jsx)(t.code,{children:`selected`}),` is an array `,(0,c.jsx)(t.code,{children:`[]`}),`, the function checks direct inclusion via `,(0,c.jsx)(t.code,{children:`.includes(value)`}),` and, for numeric values (`,(0,c.jsx)(t.code,{children:`isNumber(value)`}),`), checks numeric equivalence against numeric elements in the array via `,(0,c.jsx)(t.code,{children:`toNumber()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Numeric Comparison:`}),` If both `,(0,c.jsx)(t.code,{children:`value`}),` and `,(0,c.jsx)(t.code,{children:`selected`}),` are numeric (`,(0,c.jsx)(t.code,{children:`isNumber(value) && isNumber(selected)`}),`), they are converted via `,(0,c.jsx)(t.code,{children:`toNumber()`}),` and compared numerically (e.g., `,(0,c.jsx)(t.code,{children:`'5'`}),` matches `,(0,c.jsx)(t.code,{children:`5`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strict Equality:`}),` In all other cases, the function compares `,(0,c.jsx)(t.code,{children:`value === selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The input value to check.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: unknown`}),` — The target value or array of selected values.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if `,(0,c.jsx)(t.code,{children:`value`}),` matches `,(0,c.jsx)(t.code,{children:`selected`}),`, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelected } from '@dxtmisha/functional-basic'

// Single value comparisons
console.log(isSelected('apple', 'apple')) // true
console.log(isSelected('apple', 'banana')) // false

// Comparing against an array
console.log(isSelected(2, [1, 2, 3])) // true
console.log(isSelected('5', [1, 2, 5])) // true
console.log(isSelected('dog', ['cat', 'mouse'])) // false

// Intelligent numeric comparison (string vs number)
console.log(isSelected('5', 5)) // true

// Null / undefined check
console.log(isSelected(null, 1)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};