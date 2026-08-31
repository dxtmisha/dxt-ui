import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isSelectedByList - Check selection across a list`}),`
`,(0,c.jsx)(t.h1,{id:`isselectedbylist`,children:(0,c.jsx)(t.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(t.p,{children:[`An advanced utility explicitly extending the boundaries of the elementary `,(0,c.jsx)(t.code,{children:`isSelected`}),` functionality. It serves precisely to evaluate whether `,(0,c.jsx)(t.strong,{children:`all underlying elements`}),` within a submitted list array (`,(0,c.jsx)(t.code,{children:`values`}),`) effectively align with the outlined verification goal (`,(0,c.jsx)(t.code,{children:`selected`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`If presented with a solitary value instead of an array collection, the program seamlessly delegates the heavy routing straight back to `,(0,c.jsx)(t.code,{children:`isSelected`}),`. Yet, if a mapped array array enters the fray (`,(0,c.jsx)(t.code,{children:`values`}),`), the software executes a holistic `,(0,c.jsx)(t.code,{children:`.every()`}),` iterator technique to solidly assure that `,(0,c.jsx)(t.strong,{children:`each discrete component`}),` independently triumphs over the isolated `,(0,c.jsx)(t.code,{children:`isSelected(item, selected)`}),` test parameter.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`values: T | T[]`}),` — The single payload or a bundled array array collection mandating cross-checking.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[]`}),` — The target anchor point criteria (could be a string, numeral, or a mapped payload collection representing allowed terms).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Commits to returning `,(0,c.jsx)(t.code,{children:`true`}),` exclusively when completely all distributed variables simultaneously conquer the testing perimeter hurdle.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Blanket success spanning the full bulk mapped uniformly against one specific key
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Overwhelming validation granted since every item from values nests safely inside the selected pool bounds
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Failure detected. 'date' is absent from the permissions block (selected array). Outputs false through .every() mechanics. 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Upon dropping a single index, inherently collapses into acting purely like isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};