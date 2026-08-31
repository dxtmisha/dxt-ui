import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isSelected - Check if a value is selected`}),`
`,(0,c.jsx)(t.h1,{id:`isselected`,children:(0,c.jsx)(t.code,{children:`isSelected`})}),`
`,(0,c.jsxs)(t.p,{children:[`A multi-purpose utility dedicated to verifying if a particular reference value matches the desired selection criteria. This function accommodates multiple dynamic comparison strategies based heavily on the architectural structure of the `,(0,c.jsx)(t.code,{children:`selected`}),` argument:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Prohibit Nuances:`}),` If the incoming test variable (`,(0,c.jsx)(t.code,{children:`value`}),`) manifests as `,(0,c.jsx)(t.code,{children:`null`}),` or `,(0,c.jsx)(t.code,{children:`undefined`}),`, the function safely terminates with a flat `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Array Validations:`}),` In instances where the `,(0,c.jsx)(t.code,{children:`selected`}),` payload arrives configured as an array `,(0,c.jsx)(t.code,{children:`[]`}),`, the algorithm utilizes `,(0,c.jsx)(t.code,{children:`.includes(value)`}),` to search the array for a direct hit.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Numeric Casting:`}),` If both target variables theoretically align as numbers (determined via the `,(0,c.jsx)(t.code,{children:`isNumber()`}),` sub-function), the engine actively homogenizes them parsing them strictly to digit comparisons irrespective of their exact string origins (e.g., `,(0,c.jsx)(t.code,{children:`'5'`}),` translates safely into matching pure integer `,(0,c.jsx)(t.code,{children:`5`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Failsafe Comparison:`}),` Absent any of the conditions outlined above, it retreats to standard strict equality `,(0,c.jsx)(t.code,{children:`value === selected`}),` matching.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The active element or context payload waiting for confirmation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[] | S`}),` — The benchmark reference acting as the target check marker; this could seamlessly be a sole primitive or a broader array array list.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Renders `,(0,c.jsx)(t.code,{children:`true`}),` assuming the initial argument perfectly corresponds to the requested target data boundary, projecting `,(0,c.jsx)(t.code,{children:`false`}),` otherwise.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelected } from '@dxtmisha/functional-basic'

// Standard discrete checks
console.log(isSelected('apple', 'apple')) // true
console.log(isSelected('apple', 'banana')) // false

// Validating inclusion against a data array collection
console.log(isSelected(2, [1, 2, 3])) // true
console.log(isSelected('dog', ['cat', 'mouse'])) // false

// Intelligent Cross-type Casted Number matching (string against raw ints)
console.log(isSelected('5', 5)) // true

// Safety checks
console.log(isSelected(null, 1)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};