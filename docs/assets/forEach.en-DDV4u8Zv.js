import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/forEach - Iterate over a collection (Array, Object, Map, Set)`}),`
`,(0,c.jsx)(t.h1,{id:`foreach`,children:(0,c.jsx)(t.code,{children:`forEach`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function performs the specified function once for each element in the collection (`,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Object`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),`) and returns an array with the results of executing the function (omitting `,(0,c.jsx)(t.code,{children:`undefined`}),` values unless `,(0,c.jsx)(t.code,{children:`saveUndefined`}),` is `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: D`}),` — Object or collection for iteration (`,(0,c.jsx)(t.code,{children:`D extends ForEachData<T> = readonly T[] | Record<string, T> | Map<unknown, T> | Set<T>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (item: T, key: K, collection: D) => R`}),` — A callback function executed for each element (`,(0,c.jsx)(t.code,{children:`key`}),` is of type `,(0,c.jsx)(t.code,{children:`number`}),` for arrays, `,(0,c.jsx)(t.code,{children:`string`}),` for objects, `,(0,c.jsx)(t.code,{children:`K`}),` for `,(0,c.jsx)(t.code,{children:`Map`}),`, and `,(0,c.jsx)(t.code,{children:`S`}),` for `,(0,c.jsx)(t.code,{children:`Set`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveUndefined?: S`}),` — If `,(0,c.jsx)(t.code,{children:`true`}),`, preserves `,(0,c.jsx)(t.code,{children:`undefined`}),` return values in the resulting array (filtered out by default).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ForEachReturn<R, S>`}),` (`,(0,c.jsx)(t.code,{children:`(S extends true ? R : Exclude<R, undefined>)[]`}),`) — an array with the results of executing the function. When `,(0,c.jsx)(t.code,{children:`saveUndefined: false`}),` (or omitted), the type automatically excludes `,(0,c.jsx)(t.code,{children:`undefined`}),` (`,(0,c.jsx)(t.code,{children:`Exclude<R, undefined>[]`}),`). When `,(0,c.jsx)(t.code,{children:`saveUndefined: true`}),`, the return type preserves `,(0,c.jsx)(t.code,{children:`undefined`}),` (`,(0,c.jsx)(t.code,{children:`(R | undefined)[]`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsx)(t.p,{children:`The function is a universal utility for iterating, transforming, and filtering diverse data structures simultaneously in a single O(N) pass.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Collection Support`}),` — natively works with `,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),`, and dictionary objects (`,(0,c.jsx)(t.code,{children:`Record<string, T>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Result Collection (filterMap / compactMap)`}),` — unlike standard `,(0,c.jsx)(t.code,{children:`Array.prototype.forEach`}),`, this function collects returned values into a new array similarly to `,(0,c.jsx)(t.code,{children:`map`}),`, but without allocating intermediate arrays.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Undefined Filtering`}),` — by default, all `,(0,c.jsx)(t.code,{children:`undefined`}),` values (e.g., when the callback returns nothing or explicit `,(0,c.jsx)(t.code,{children:`undefined`}),`) are filtered out of the resulting array, and the return type narrows to `,(0,c.jsx)(t.code,{children:`Exclude<R, undefined>[]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`saveUndefined Parameter`}),` — passing `,(0,c.jsx)(t.code,{children:`true`}),` as the third argument retains all values, including `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Argument Contract`}),` — all callbacks receive `,(0,c.jsx)(t.code,{children:`(item, key, collection)`}),`. For `,(0,c.jsx)(t.code,{children:`Set`}),`, the item itself is supplied as the key (`,(0,c.jsx)(t.code,{children:`item`}),`), matching ECMAScript standard behavior.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Length Mutation Guard`}),` — array length is cached prior to the loop, preventing infinite cycles if elements are pushed during iteration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Object Integrity`}),` — object property traversal utilizes `,(0,c.jsx)(t.code,{children:`for...in`}),` with native `,(0,c.jsx)(t.code,{children:`Object.hasOwn`}),` guards, skipping prototype properties and avoiding temporary key array allocations.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

// 1. Array
const numbers = [1, 2, 3, 4]
const evens = forEach(numbers, item => (item % 2 === 0 ? item * 10 : undefined))
// [20, 40]

// 2. Object / Record
const user = { name: 'Alice', role: 'admin', age: 25 }
const pairs = forEach(user, (value, key) => \`\${key}=\${value}\`)
// ['name=Alice', 'role=admin', 'age=25']

// 3. Map
const map = new Map([['first', 10], ['second', 20]])
const mapResults = forEach(map, (value, key) => \`\${key}:\${value}\`)
// ['first:10', 'second:20']

// 4. Set
const set = new Set(['apple', 'banana'])
const setUpper = forEach(set, item => item.toUpperCase())
// ['APPLE', 'BANANA']

// 5. Preserving undefined (saveUndefined: true)
const withUndefined = forEach([1, 2, 3], item => (item % 2 === 0 ? item : undefined), true)
// [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};