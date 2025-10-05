import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DB_maGql.js";import{M as a}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/functional/en/Data Utils"}),`
`,e.jsx(n.h1,{id:"data-utilities",children:"Data Utilities"}),`
`,e.jsx(n.p,{children:"A set of functions for data processing, iteration and management."}),`
`,e.jsx(n.h2,{id:"arrfill",children:e.jsx(n.code,{children:"arrFill"})}),`
`,e.jsx(n.p,{children:"Creates an array of a specified number of elements filled with the same value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — value to fill the array with"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"count: number"})," — number of elements in the array"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { arrFill } from '@dxtmisha/functional'

arrFill('hello', 3) // ['hello', 'hello', 'hello']
arrFill(0, 5) // [0, 0, 0, 0, 0]
arrFill({ id: 1 }, 2) // [{ id: 1 }, { id: 1 }]
`})}),`
`,e.jsx(n.h2,{id:"copyobject",children:e.jsx(n.code,{children:"copyObject"})}),`
`,e.jsx(n.p,{children:"Creates a deep copy of an object via JSON serialization."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — object to copy"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { copyObject } from '@dxtmisha/functional'

const original = { name: 'John', data: { age: 30 } }
const copy = copyObject(original)
copy.data.age = 25 // original.data.age remains 30
`})}),`
`,e.jsx(n.h2,{id:"foreach",children:e.jsx(n.code,{children:"forEach"})}),`
`,e.jsx(n.p,{children:"Universal iteration function for arrays, objects and Map."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: D"})," — object to iterate (array, object or Map)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (item: T, key: K, dataMain: typeof data) => R"})," — function called for each element"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"import { forEach } from '@dxtmisha/functional'\n\nforEach([1, 2, 3], (item, index) => item * 2) // [2, 4, 6]\nforEach({ a: 1, b: 2 }, (value, key) => `${key}=${value}`) // ['a=1', 'b=2']\nforEach(new Map([['x', 10]]), (value, key) => `${key}:${value}`) // ['x:10']\n"})}),`
`,e.jsx(n.h2,{id:"getclipboarddata",children:e.jsx(n.code,{children:"getClipboardData"})}),`
`,e.jsx(n.p,{children:"Asynchronously gets text data from clipboard."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event?: ClipboardEvent"})," — clipboard event (optional)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getClipboardData } from '@dxtmisha/functional'

const text = await getClipboardData(event) // from paste event
const clipboardText = await getClipboardData() // direct read
`})}),`
`,e.jsx(n.h2,{id:"getcolumn",children:e.jsx(n.code,{children:"getColumn"})}),`
`,e.jsx(n.p,{children:"Extracts values of a specific column from array of objects."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"array: ObjectOrArray<T>"})," — array of objects to process"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"column: K"})," — column key to extract"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getColumn } from '@dxtmisha/functional'

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
const names = getColumn(users, 'name') // ['Alice', 'Bob']
`})}),`
`,e.jsx(n.h2,{id:"getexp",children:e.jsx(n.code,{children:"getExp"})}),`
`,e.jsx(n.p,{children:"Creates a regular expression for safe text search with escaping."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — text to search for"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flags: string"})," — regular expression flags (default ",e.jsx(n.code,{children:"'ig'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern: string"})," — pattern (default ",e.jsx(n.code,{children:":value"}),")"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getExp } from '@dxtmisha/functional'

const regex = getExp('hello') // /hello/ig
const regexSpecial = getExp('$100') // /\\$100/ig (escaped)
`})}),`
`,e.jsx(n.h2,{id:"getitembypath",children:e.jsx(n.code,{children:"getItemByPath"})}),`
`,e.jsx(n.p,{children:"Gets value from nested object by string path."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: T"})," — object to traverse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — path through dots (e.g., ",e.jsx(n.code,{children:"'user.profile.name'"}),")"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getItemByPath } from '@dxtmisha/functional'

const data = { user: { profile: { name: 'John' } } }
const name = getItemByPath(data, 'user.profile.name') // 'John'
`})}),`
`,e.jsx(n.h2,{id:"getlengthofallarray",children:e.jsx(n.code,{children:"getLengthOfAllArray"})}),`
`,e.jsx(n.p,{children:"Returns array with lengths of all strings."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: ObjectOrArray<string>"})," — array of strings or object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getLengthOfAllArray } from '@dxtmisha/functional'

getLengthOfAllArray(['hello', 'world']) // [5, 5]
`})}),`
`,e.jsx(n.h2,{id:"getmaxlengthallarray",children:e.jsx(n.code,{children:"getMaxLengthAllArray"})}),`
`,e.jsx(n.p,{children:"Finds maximum string length in array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: ObjectOrArray<string>"})," — array of strings or object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getMaxLengthAllArray } from '@dxtmisha/functional'

getMaxLengthAllArray(['hello', 'world']) // 5
`})}),`
`,e.jsx(n.h2,{id:"getminlengthallarray",children:e.jsx(n.code,{children:"getMinLengthAllArray"})}),`
`,e.jsx(n.p,{children:"Finds minimum string length in array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: ObjectOrArray<string>"})," — array of strings or object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getMinLengthAllArray } from '@dxtmisha/functional'

getMinLengthAllArray(['hello', 'hi']) // 2
`})}),`
`,e.jsx(n.h2,{id:"getobjectbykeys",children:e.jsx(n.code,{children:"getObjectByKeys"})}),`
`,e.jsx(n.p,{children:"Returns new object with specified keys from source object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: Record<string, any>"})," — source object"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keys: string[]"})," — list of keys to extract"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getObjectByKeys } from '@dxtmisha/functional'

const obj = { a: 1, b: 2, c: 3 }
const filtered = getObjectByKeys(obj, ['a', 'c']) // { a: 1, c: 3 }
`})}),`
`,e.jsx(n.h2,{id:"getobjectnoundefined",children:e.jsx(n.code,{children:"getObjectNoUndefined"})}),`
`,e.jsx(n.p,{children:"Removes all properties with specified value (default undefined) from object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T"})," — object to process"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"exception: any"})," — value to exclude (default undefined)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getObjectNoUndefined } from '@dxtmisha/functional'

const obj = { a: 1, b: undefined, c: 3 }
const cleaned = getObjectNoUndefined(obj) // { a: 1, c: 3 }
`})}),`
`,e.jsx(n.h2,{id:"getobjectornone",children:e.jsx(n.code,{children:"getObjectOrNone"})}),`
`,e.jsx(n.p,{children:"Returns object if it's not empty, otherwise returns undefined."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T"})," — object to check"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getObjectOrNone } from '@dxtmisha/functional'

getObjectOrNone({ a: 1 }) // { a: 1 }
getObjectOrNone({}) // undefined
`})}),`
`,e.jsx(n.h2,{id:"setvalues",children:e.jsx(n.code,{children:"setValues"})}),`
`,e.jsx(n.p,{children:"Sets values in object by specified paths."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"target: Record<string, any>"})," — target object"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"values: Record<string, any>"})," — object with values to set"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { setValues } from '@dxtmisha/functional'

const obj = {}
setValues(obj, { 'user.name': 'John', 'user.age': 30 })
// obj is now { user: { name: 'John', age: 30 } }
`})}),`
`,e.jsx(n.h2,{id:"splice",children:e.jsx(n.code,{children:"splice"})}),`
`,e.jsx(n.p,{children:"Removes elements from array and returns new array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"array: T[]"})," — source array"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: number"})," — start index for removal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteCount?: number"})," — number of elements to remove"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { splice } from '@dxtmisha/functional'

splice([1, 2, 3, 4], 1, 2) // [1, 4]
splice(['a', 'b', 'c'], 0, 1) // ['b', 'c']
`})}),`
`,e.jsx(n.h2,{id:"uniquearray",children:e.jsx(n.code,{children:"uniqueArray"})}),`
`,e.jsx(n.p,{children:"Removes duplicates from array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"array: T[]"})," — array to process"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { uniqueArray } from '@dxtmisha/functional'

uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]
uniqueArray(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
`})}),`
`,e.jsx(n.h2,{id:"writeclipboarddata",children:e.jsx(n.code,{children:"writeClipboardData"})}),`
`,e.jsx(n.p,{children:"Writes data to clipboard."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: string"})," — data to write to clipboard"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { writeClipboardData } from '@dxtmisha/functional'

await writeClipboardData('Hello, World!') // writes text to clipboard
await writeClipboardData(JSON.stringify({key: 'value'})) // writes JSON
`})})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
