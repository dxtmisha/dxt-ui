import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isSelectedByList - Check selection across a list`}),`
`,(0,c.jsx)(n.h1,{id:`isselectedbylist`,children:(0,c.jsx)(n.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(n.p,{children:[`An advanced utility explicitly extending the boundaries of the elementary `,(0,c.jsx)(n.code,{children:`isSelected`}),` functionality. It serves precisely to evaluate whether `,(0,c.jsx)(n.strong,{children:`all underlying elements`}),` within a submitted list array (`,(0,c.jsx)(n.code,{children:`values`}),`) effectively align with the outlined verification goal (`,(0,c.jsx)(n.code,{children:`selected`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`If presented with a solitary value instead of an array collection, the program seamlessly delegates the heavy routing straight back to `,(0,c.jsx)(n.code,{children:`isSelected`}),`. Yet, if a mapped array array enters the fray (`,(0,c.jsx)(n.code,{children:`values`}),`), the software executes a holistic `,(0,c.jsx)(n.code,{children:`.every()`}),` iterator technique to solidly assure that `,(0,c.jsx)(n.strong,{children:`each discrete component`}),` independently triumphs over the isolated `,(0,c.jsx)(n.code,{children:`isSelected(item, selected)`}),` test parameter.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`values: T | T[]`}),` — The single payload or a bundled array array collection mandating cross-checking.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[]`}),` — The target anchor point criteria (could be a string, numeral, or a mapped payload collection representing allowed terms).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Commits to returning `,(0,c.jsx)(n.code,{children:`true`}),` exclusively when completely all distributed variables simultaneously conquer the testing perimeter hurdle.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Blanket success spanning the full bulk mapped uniformly against one specific key
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Overwhelming validation granted since every item from values nests safely inside the selected pool bounds
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Failure detected. 'date' is absent from the permissions block (selected array). Outputs false through .every() mechanics. 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Upon dropping a single index, inherently collapses into acting purely like isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};