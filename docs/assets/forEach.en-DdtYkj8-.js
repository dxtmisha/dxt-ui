import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/forEach - Iterate over an object or array`}),`
`,(0,c.jsx)(n.h1,{id:`foreach`,children:(0,c.jsx)(n.code,{children:`forEach`})}),`
`,(0,c.jsx)(n.p,{children:`The function performs the specified function once for each element in the object. And returns an array with the results of executing the function.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: D`}),` — object for iteration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (item: T, key: K, dataMain: typeof data) => R`}),` — a function to execute for each element in the array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`saveUndefined?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, the function returns an array including `,(0,c.jsx)(n.code,{children:`undefined`}),` values (filtered by default).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`R[]`}),` — an array with the results of executing the function.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsx)(n.p,{children:`The function is a universal tool for iterating over various data structures and collecting results into an array.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Support`}),` — works with `,(0,c.jsx)(n.code,{children:`Array`}),`, `,(0,c.jsx)(n.code,{children:`Map`}),`, `,(0,c.jsx)(n.code,{children:`Set`}),`, and standard `,(0,c.jsx)(n.code,{children:`Object`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Result Collection`}),` — unlike the standard `,(0,c.jsx)(n.code,{children:`forEach`}),`, this function collects the values returned from the `,(0,c.jsx)(n.code,{children:`callback`}),` into a new array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Undefined Filtering`}),` — by default, all `,(0,c.jsx)(n.code,{children:`undefined`}),` values (e.g., if the callback returned nothing for an element) are filtered out of the resulting array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`saveUndefined Parameter`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),` is passed as the third argument, the array will preserve all results, including `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Undefined values are filtered by default
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// With saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};