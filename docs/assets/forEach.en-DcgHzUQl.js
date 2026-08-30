import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/forEach - Iterate over an object or array`}),`
`,(0,c.jsx)(t.h1,{id:`foreach`,children:(0,c.jsx)(t.code,{children:`forEach`})}),`
`,(0,c.jsx)(t.p,{children:`The function performs the specified function once for each element in the object. And returns an array with the results of executing the function.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: D`}),` — object for iteration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (item: T, key: K, dataMain: typeof data) => R`}),` — a function to execute for each element in the array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveUndefined?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, the function returns an array including `,(0,c.jsx)(t.code,{children:`undefined`}),` values (filtered by default).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`R[]`}),` — an array with the results of executing the function.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsx)(t.p,{children:`The function is a universal tool for iterating over various data structures and collecting results into an array.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Support`}),` — works with `,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),`, and standard `,(0,c.jsx)(t.code,{children:`Object`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Result Collection`}),` — unlike the standard `,(0,c.jsx)(t.code,{children:`forEach`}),`, this function collects the values returned from the `,(0,c.jsx)(t.code,{children:`callback`}),` into a new array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Undefined Filtering`}),` — by default, all `,(0,c.jsx)(t.code,{children:`undefined`}),` values (e.g., if the callback returned nothing for an element) are filtered out of the resulting array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`saveUndefined Parameter`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),` is passed as the third argument, the array will preserve all results, including `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Undefined values are filtered by default
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// With saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};