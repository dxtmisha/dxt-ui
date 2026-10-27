import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isSelectedByList - Check selection across a list`}),`
`,(0,c.jsx)(t.h1,{id:`isselectedbylist`,children:(0,c.jsx)(t.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Extends the `,(0,c.jsx)(t.code,{children:`isSelected`}),` check to an entire list of values. It verifies whether `,(0,c.jsx)(t.strong,{children:`all elements`}),` in `,(0,c.jsx)(t.code,{children:`values`}),` match the selection criteria `,(0,c.jsx)(t.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If `,(0,c.jsx)(t.code,{children:`values`}),` is a single item rather than an array, the function delegates directly to `,(0,c.jsx)(t.code,{children:`isSelected(values, selected)`}),`. If `,(0,c.jsx)(t.code,{children:`values`}),` is an array, it uses `,(0,c.jsx)(t.code,{children:`.every()`}),` to ensure that every element satisfies `,(0,c.jsx)(t.code,{children:`isSelected(item, selected)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`values: T | T[]`}),` — A single value or an array of values to check.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[]`}),` — The target value or array of selected values for comparison.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if all provided values in `,(0,c.jsx)(t.code,{children:`values`}),` are selected, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Validating a list against a single target value
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Validating that every item in values is present in the selected array
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Returns false because 'date' is not in the selected array
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Single value behaves identically to isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};