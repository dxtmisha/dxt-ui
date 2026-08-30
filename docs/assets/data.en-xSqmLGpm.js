import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/10. Data & Types`}),`
`,(0,c.jsx)(t.h1,{id:`data--types`,children:`Data & Types`}),`
`,(0,c.jsxs)(t.p,{children:[`A set of utilities for reliable type checking, safe data conversion, and efficient manipulation of objects and arrays. These functions help avoid `,(0,c.jsx)(t.code,{children:`undefined`}),` errors and simplify the processing of complex structures.`]}),`
`,(0,c.jsx)(t.h2,{id:`type-checking-is`,children:`Type Checking (is...)`}),`
`,(0,c.jsx)(t.p,{children:`Functions for determining the type and content of variables.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { isFilled, isObject, isFunction } from '@dxtmisha/functional-basic'

// 1. Check for content (non-empty string/array/object)
isFilled('hello') // true
isFilled([])      // false

// 2. Object check (includes arrays, excludes null)
isObject({ a: 1 }) // true
isObject([1, 2])   // true

// 3. Object check excluding arrays
isObjectNotArray({ a: 1 }) // true
isObjectNotArray([1, 2])   // false

// 4. Check if value is a function
isFunction(() => {}) // true
`})}),`
`,(0,c.jsx)(t.h2,{id:`conversion-to`,children:`Conversion (to...)`}),`
`,(0,c.jsx)(t.p,{children:`Utilities for casting data to the desired type or format.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { toNumber, toArray, toCamelCase, transformation } from '@dxtmisha/functional-basic'

// 1. Cast to number (with string cleaning support)
toNumber('100.50 px') // 100.5

// 2. Guaranteed array
toArray('single') // ['single']
toArray([1, 2])   // [1, 2]

// 3. Automatic type detection from string
transformation('true')  // true (boolean)
transformation('12.5')  // 12.5 (number)
transformation('{"a":1}') // { a: 1 } (object)

// 4. String formatting
toCamelCase('background-color') // 'backgroundColor'
`})}),`
`,(0,c.jsx)(t.h2,{id:`data-manipulation`,children:`Data Manipulation`}),`
`,(0,c.jsx)(t.p,{children:`Methods for deep copying and safe property access.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { copyObject, getItemByPath, getObjectNoUndefined } from '@dxtmisha/functional-basic'

// 1. Deep object cloning
const clone = copyObject(original)

// 2. Safe value retrieval by path
const value = getItemByPath(myData, 'user.profile.name')

// 3. Cleaning an object of empty values
const cleaned = getObjectNoUndefined({ a: 1, b: undefined, c: null }, null) 
// { a: 1, b: undefined } (removes only c: null)
`})}),`
`,(0,c.jsx)(t.h2,{id:`array-operations`,children:`Array Operations`}),`
`,(0,c.jsx)(t.p,{children:`Utilities for filtering and iteration.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { uniqueArray, forEach } from '@dxtmisha/functional-basic'

// 1. Removing duplicates
uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]

// 2. Universal iterator (for arrays and objects)
forEach([10, 20], (value, index) => {
  console.log(\`\${index}: \${value}\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};