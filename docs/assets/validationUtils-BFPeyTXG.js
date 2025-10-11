import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/functional/en/Validation Utils"}),`
`,e.jsx(n.h1,{id:"validation-utilities",children:"Validation Utilities"}),`
`,e.jsx(n.p,{children:"A set of functions for data type checking and value validation."}),`
`,e.jsx(n.h2,{id:"inarray",children:e.jsx(n.code,{children:"inArray"})}),`
`,e.jsx(n.p,{children:"Checks if value is contained in array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"array: T[]"})," — array to check"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { inArray } from '@dxtmisha/functional'

inArray([1, 2, 3], 2) // true
inArray(['a', 'b'], 'c') // false
inArray([{id: 1}, {id: 2}], {id: 1}) // false (different references)
`})}),`
`,e.jsx(n.h2,{id:"intersectkey",children:e.jsx(n.code,{children:"intersectKey"})}),`
`,e.jsx(n.p,{children:"Checks key intersection between objects or arrays."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data1: Record<string, any> | any[]"})," — first object or array"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data2: Record<string, any> | any[]"})," — second object or array"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { intersectKey } from '@dxtmisha/functional'

intersectKey({a: 1, b: 2}, {b: 3, c: 4}) // true (common key 'b')
intersectKey([1, 2], [3, 4]) // false
intersectKey({}, {a: 1}) // false
`})}),`
`,e.jsx(n.h2,{id:"isarray",children:e.jsx(n.code,{children:"isArray"})}),`
`,e.jsx(n.p,{children:"Checks if value is an array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isArray } from '@dxtmisha/functional'

isArray([1, 2, 3]) // true
isArray('string') // false
isArray({}) // false
`})}),`
`,e.jsx(n.h2,{id:"isdifferent",children:e.jsx(n.code,{children:"isDifferent"})}),`
`,e.jsx(n.p,{children:"Checks if two values are different."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value1: any"})," — first value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value2: any"})," — second value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isDifferent } from '@dxtmisha/functional'

isDifferent(1, 2) // true
isDifferent('hello', 'hello') // false
isDifferent({a: 1}, {a: 1}) // true (different references)
`})}),`
`,e.jsx(n.h2,{id:"isdomruntime",children:e.jsx(n.code,{children:"isDomRuntime"})}),`
`,e.jsx(n.p,{children:"Checks if code is running in browser environment (DOM exists)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isDomRuntime } from '@dxtmisha/functional'

isDomRuntime() // true in browser, false in Node.js
`})}),`
`,e.jsx(n.h2,{id:"isfilled",children:e.jsx(n.code,{children:"isFilled"})}),`
`,e.jsx(n.p,{children:"Checks if value is filled (not empty and not undefined/null)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isFilled } from '@dxtmisha/functional'

isFilled('hello') // true
isFilled('') // false
isFilled(0) // true
isFilled(null) // false
`})}),`
`,e.jsx(n.h2,{id:"isfloat",children:e.jsx(n.code,{children:"isFloat"})}),`
`,e.jsx(n.p,{children:"Checks if value is a floating point number."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isFloat } from '@dxtmisha/functional'

isFloat(3.14) // true
isFloat(5) // false
isFloat('3.14') // false
`})}),`
`,e.jsx(n.h2,{id:"isfunction",children:e.jsx(n.code,{children:"isFunction"})}),`
`,e.jsx(n.p,{children:"Checks if value is a function."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isFunction } from '@dxtmisha/functional'

isFunction(() => {}) // true
isFunction(function() {}) // true
isFunction('string') // false
`})}),`
`,e.jsx(n.h2,{id:"isindom",children:e.jsx(n.code,{children:"isInDom"})}),`
`,e.jsx(n.p,{children:"Checks if element is in DOM tree."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: Element"})," — element to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isInDom } from '@dxtmisha/functional'

const element = document.createElement('div')
isInDom(element) // false (not added to DOM)
document.body.appendChild(element)
isInDom(element) // true
`})}),`
`,e.jsx(n.h2,{id:"isintegerbetween",children:e.jsx(n.code,{children:"isIntegerBetween"})}),`
`,e.jsx(n.p,{children:"Checks if value is an integer within specified range."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number"})," — minimum value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — maximum value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isIntegerBetween } from '@dxtmisha/functional'

isIntegerBetween(5, 1, 10) // true
isIntegerBetween(3.5, 1, 10) // false (not integer)
isIntegerBetween(15, 1, 10) // false (out of range)
`})}),`
`,e.jsx(n.h2,{id:"isnull",children:e.jsx(n.code,{children:"isNull"})}),`
`,e.jsx(n.p,{children:"Checks if value is null or undefined."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isNull } from '@dxtmisha/functional'

isNull(null) // true
isNull(undefined) // true
isNull(0) // false
isNull('') // false
`})}),`
`,e.jsx(n.h2,{id:"isnumber",children:e.jsx(n.code,{children:"isNumber"})}),`
`,e.jsx(n.p,{children:"Checks if value is a number."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isNumber } from '@dxtmisha/functional'

isNumber(42) // true
isNumber(3.14) // true
isNumber('42') // false
isNumber(NaN) // false
`})}),`
`,e.jsx(n.h2,{id:"isobject",children:e.jsx(n.code,{children:"isObject"})}),`
`,e.jsx(n.p,{children:"Checks if value is an object (including arrays)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isObject } from '@dxtmisha/functional'

isObject({}) // true
isObject([]) // true
isObject(null) // false
isObject('string') // false
`})}),`
`,e.jsx(n.h2,{id:"isobjectnotarray",children:e.jsx(n.code,{children:"isObjectNotArray"})}),`
`,e.jsx(n.p,{children:"Checks if value is an object but not an array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isObjectNotArray } from '@dxtmisha/functional'

isObjectNotArray({}) // true
isObjectNotArray([]) // false
isObjectNotArray(null) // false
`})}),`
`,e.jsx(n.h2,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsx(n.p,{children:"Checks if element matches selection conditions."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: any"})," — element to check"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: any"})," — selection condition"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isSelected } from '@dxtmisha/functional'

isSelected('apple', 'apple') // true
isSelected({id: 1}, {id: 1}) // false (different references)
isSelected('apple', ['apple', 'banana']) // true
`})}),`
`,e.jsx(n.h2,{id:"isselectedbylist",children:e.jsx(n.code,{children:"isSelectedByList"})}),`
`,e.jsx(n.p,{children:"Checks if element matches one of conditions in list."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: any"})," — element to check"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: any[]"})," — list of selection conditions"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isSelectedByList } from '@dxtmisha/functional'

isSelectedByList('apple', ['apple', 'banana']) // true
isSelectedByList('grape', ['apple', 'banana']) // false
isSelectedByList(1, [1, 2, 3]) // true
`})}),`
`,e.jsx(n.h2,{id:"isstring",children:e.jsx(n.code,{children:"isString"})}),`
`,e.jsx(n.p,{children:"Checks if value is a string."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isString } from '@dxtmisha/functional'

isString('hello') // true
isString(42) // false
isString('') // true
`})}),`
`,e.jsx(n.h2,{id:"iswindow",children:e.jsx(n.code,{children:"isWindow"})}),`
`,e.jsx(n.p,{children:"Checks if value is window object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { isWindow } from '@dxtmisha/functional'

isWindow(window) // true in browser
isWindow(document) // false
isWindow({}) // false
`})})]})}function j(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
