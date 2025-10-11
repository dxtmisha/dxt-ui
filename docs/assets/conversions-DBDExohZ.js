import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-C8vOrmRQ.js";import{M as t}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/en/Conversions"}),`
`,e.jsx(n.h1,{id:"conversion-functions",children:"Conversion Functions"}),`
`,e.jsx(n.p,{children:"A set of functions for converting values between different data types."}),`
`,e.jsx(n.h2,{id:"anytostring",children:e.jsx(n.code,{children:"anyToString"})}),`
`,e.jsx(n.p,{children:"Converts any value to a string with intelligent handling of various data types."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: V"})," — value to convert to string"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { anyToString } from '@dxtmisha/functional'

anyToString('  hello  ') // 'hello'
anyToString(true) // '1'
anyToString([1, 2, 3]) // '1,2,3'
anyToString({ name: 'John' }) // '{"name":"John"}'
`})}),`
`,e.jsx(n.h2,{id:"applytemplate",children:e.jsx(n.code,{children:"applyTemplate"})}),`
`,e.jsxs(n.p,{children:["Applies a template to text, replacing keys with values from the replacement object. Supports three formats: square brackets ",e.jsx(n.code,{children:"[key]"}),", positional parameters ",e.jsx(n.code,{children:"%d"}),", ",e.jsx(n.code,{children:"%e"}),", ",e.jsx(n.code,{children:"%f"})," and tags with content ",e.jsx(n.code,{children:"[tag]content[/tag]"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text: string"})," — template text containing keys in square brackets ",e.jsx(n.code,{children:"[key]"}),", positional parameters ",e.jsx(n.code,{children:"%d"}),", ",e.jsx(n.code,{children:"%e"})," etc., or tags with content ",e.jsx(n.code,{children:"[tag]content[/tag]"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacement: Record<string, string | number> | string[]"})," — object or array for key replacement"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { applyTemplate } from '@dxtmisha/functional'

// Square bracket key replacement
applyTemplate('Hello, [name]!', { name: 'Anna' }) // 'Hello, Anna!'
applyTemplate('[item] - [price]', { item: 'Phone', price: 15000 })

// Positional parameters
applyTemplate('Order %d for %e rubles', ['#123', '1500']) // 'Order #123 for 1500 rubles'

// Tags with content ([content] replaced with tag content)
applyTemplate('This is [bold]bold text[/bold]', { bold: '<b>[content]</b>' }) // 'This is <b>bold text</b>'
applyTemplate('Text with [red]colored[/red] word', { red: '<span style="color:red">[content]</span>' })
`})}),`
`,e.jsx(n.h2,{id:"replacerecursive",children:e.jsx(n.code,{children:"replaceRecursive"})}),`
`,e.jsx(n.p,{children:"Recursively replaces values in an object or array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: any"})," — object or array to process"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: any"})," — value to search for"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replace: any"})," — replacement value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { replaceRecursive } from '@dxtmisha/functional'

replaceRecursive({a: 'old', b: {c: 'old'}}, 'old', 'new') // {a: 'new', b: {c: 'new'}}
replaceRecursive(['old', {x: 'old'}], 'old', 'new') // ['new', {x: 'new'}]
`})}),`
`,e.jsx(n.h2,{id:"replacetemplate",children:e.jsx(n.code,{children:"replaceTemplate"})}),`
`,e.jsxs(n.p,{children:["Replaces template values in a string based on replacement object. Uses ",e.jsx(n.code,{children:"[key]"})," format for search and replace. Supports both string values and functions."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — template string with keys in ",e.jsx(n.code,{children:"[key]"})," format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaces: Record<string, string | FunctionReturn<string>>"})," — object with replacement data (values can be strings or functions)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { replaceTemplate } from '@dxtmisha/functional'

replaceTemplate('Hello [name]!', {name: 'World'}) // 'Hello World!'
replaceTemplate('[x] + [y] = [sum]', {x: '2', y: '3', sum: '5'}) // '2 + 3 = 5'
replaceTemplate('User [id]: [name]', {id: '123', name: 'John'}) // 'User 123: John'
replaceTemplate('Time: [time]', {time: () => new Date().toLocaleString()}) // with function
`})}),`
`,e.jsx(n.h2,{id:"secondtotime",children:e.jsx(n.code,{children:"secondToTime"})}),`
`,e.jsx(n.p,{children:"Converts seconds to time format (hours:minutes:seconds)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"seconds: number"})," — number of seconds"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { secondToTime } from '@dxtmisha/functional'

secondToTime(3661) // '01:01:01'
secondToTime(125) // '00:02:05'
secondToTime(45) // '00:00:45'
`})}),`
`,e.jsx(n.h2,{id:"strfill",children:e.jsx(n.code,{children:"strFill"})}),`
`,e.jsx(n.p,{children:"Fills a string with specified character to desired length."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string | number"})," — source value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"length: number"})," — target length"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill: string"})," — fill character (default '0')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"start: boolean"})," — fill at start (default true)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { strFill } from '@dxtmisha/functional'

strFill('5', 3) // '005'
strFill('hello', 8, '*', false) // 'hello***'
strFill(42, 4) // '0042'
`})}),`
`,e.jsx(n.h2,{id:"toarray",children:e.jsx(n.code,{children:"toArray"})}),`
`,e.jsx(n.p,{children:"Converts a value to an array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to convert"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toArray } from '@dxtmisha/functional'

toArray('hello') // ['hello']
toArray([1, 2]) // [1, 2]
toArray(null) // [null]
`})}),`
`,e.jsx(n.h2,{id:"tobind",children:e.jsx(n.code,{children:"toBind"})}),`
`,e.jsx(n.p,{children:"Merges two property objects with smart handling of classes and styles. When merging objects, classes and styles are combined into arrays rather than overwritten."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extra: ItemList"})," — additional properties (base object)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: ItemList"})," — input properties to merge"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
Merged property object with properly handled classes and styles.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Regular properties are overwritten (priority to ",e.jsx(n.code,{children:"value"}),")"]}),`
`,e.jsxs(n.li,{children:["Classes (",e.jsx(n.code,{children:"class"}),") are combined into array ",e.jsx(n.code,{children:"[extraClass, valueClass]"})]}),`
`,e.jsxs(n.li,{children:["Styles (",e.jsx(n.code,{children:"style"}),") are combined into array ",e.jsx(n.code,{children:"[extraStyle, valueStyle]"})]}),`
`,e.jsx(n.li,{children:"Allows creating composite property objects for components"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toBind } from '@dxtmisha/functional'

// Regular property merging
toBind({id: 'base', disabled: false}, {id: 'new', type: 'button'})
// Result: {id: 'new', disabled: false, type: 'button'}

// Smart class merging
toBind({class: 'btn'}, {class: 'primary'})
// Result: {class: ['btn', 'primary']}

// Smart style merging
toBind(
  {style: {color: 'red', fontSize: '14px'}},
  {style: {color: 'blue', margin: '10px'}}
)
// Result: {style: [{color: 'red', fontSize: '14px'}, {color: 'blue', margin: '10px'}]}

// Complex merging
toBind(
  {class: 'btn', style: {padding: '10px'}, disabled: false},
  {class: 'primary', style: {color: 'white'}, type: 'button'}
)
// Result: {
//   class: ['btn', 'primary'],
//   style: [{padding: '10px'}, {color: 'white'}],
//   disabled: false,
//   type: 'button'
// }
`})}),`
`,e.jsx(n.h2,{id:"tobinds",children:e.jsx(n.code,{children:"toBinds"})}),`
`,e.jsxs(n.p,{children:["Merges multiple property objects by sequentially applying ",e.jsx(n.code,{children:"toBind"})," to each. Smartly handles classes and styles, creating composite property objects."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"...values: (ItemList | undefined)[]"})," — list of property objects to merge"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
Final merged object with all properties, classes and styles.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toBinds } from '@dxtmisha/functional'

// Merging multiple objects
toBinds(
  {class: 'btn', disabled: false},
  {class: 'primary', type: 'button'},
  {class: 'large', id: 'submit-btn'}
)
// Result: {
//   class: ['btn', 'primary', 'large'],
//   disabled: false,
//   type: 'button',
//   id: 'submit-btn'
// }

// With undefined values (ignored)
toBinds(
  {class: 'base'},
  undefined,
  {style: {color: 'red'}},
  null,
  {class: 'modifier'}
)
// Result: {class: ['base', 'modifier'], style: {color: 'red'}}

// Style merging
toBinds(
  {style: {padding: '10px'}},
  {style: {margin: '5px'}},
  {style: {color: 'blue'}}
)
// Result: {style: [{padding: '10px'}, {margin: '5px'}, {color: 'blue'}]}
`})}),`
`,e.jsx(n.h2,{id:"tocamelcase",children:e.jsx(n.code,{children:"toCamelCase"})}),`
`,e.jsx(n.p,{children:"Converts string to camelCase."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — string to convert"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toCamelCase } from '@dxtmisha/functional'

toCamelCase('hello-world') // 'helloWorld'
toCamelCase('hello_world') // 'helloWorld'
toCamelCase('hello world') // 'helloWorld'
`})}),`
`,e.jsx(n.h2,{id:"tocamelcasefirst",children:e.jsx(n.code,{children:"toCamelCaseFirst"})}),`
`,e.jsx(n.p,{children:"Converts string to PascalCase (first letter uppercase)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — string to convert"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toCamelCaseFirst } from '@dxtmisha/functional'

toCamelCaseFirst('hello-world') // 'HelloWorld'
toCamelCaseFirst('component_name') // 'ComponentName'
`})}),`
`,e.jsx(n.h2,{id:"todate",children:e.jsx(n.code,{children:"toDate"})}),`
`,e.jsx(n.p,{children:"Converts value to Date object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to convert"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toDate } from '@dxtmisha/functional'

toDate('2023-01-01') // Date object
toDate(1672531200000) // Date object
toDate(new Date()) // Date object
`})}),`
`,e.jsx(n.h2,{id:"tokebabcase",children:e.jsx(n.code,{children:"toKebabCase"})}),`
`,e.jsx(n.p,{children:"Converts string to kebab-case."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — string to convert"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toKebabCase } from '@dxtmisha/functional'

toKebabCase('HelloWorld') // 'hello-world'
toKebabCase('helloWorld') // 'hello-world'
toKebabCase('hello_world') // 'hello-world'
`})}),`
`,e.jsx(n.h2,{id:"tonumber",children:e.jsx(n.code,{children:"toNumber"})}),`
`,e.jsx(n.p,{children:"Converts value to number."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to convert"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toNumber } from '@dxtmisha/functional'

toNumber('42') // 42
toNumber('3.14') // 3.14
toNumber('abc') // 0
`})}),`
`,e.jsx(n.h2,{id:"tonumberbymax",children:e.jsx(n.code,{children:"toNumberByMax"})}),`
`,e.jsx(n.p,{children:"Converts value to number with maximum value limit."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — value to convert"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — maximum value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toNumberByMax } from '@dxtmisha/functional'

toNumberByMax('100', 50) // 50
toNumberByMax('25', 50) // 25
`})}),`
`,e.jsx(n.h2,{id:"topercent",children:e.jsx(n.code,{children:"toPercent"})}),`
`,e.jsx(n.p,{children:"Converts number to percentage value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — number from 0 to 1"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toPercent } from '@dxtmisha/functional'

toPercent(0.5) // 50
toPercent(0.25) // 25
toPercent(1) // 100
`})}),`
`,e.jsx(n.h2,{id:"topercentby100",children:e.jsx(n.code,{children:"toPercentBy100"})}),`
`,e.jsx(n.p,{children:"Converts number to percentage value (for numbers from 0 to 100)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — number from 0 to 100"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { toPercentBy100 } from '@dxtmisha/functional'

toPercentBy100(50) // '50%'
toPercentBy100(25.5) // '25.5%'
`})}),`
`,e.jsx(n.h2,{id:"transformation",children:e.jsx(n.code,{children:"transformation"})}),`
`,e.jsx(n.p,{children:"Applies transformation function to a value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — source value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: Function"})," — transformation function"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { transformation } from '@dxtmisha/functional'

transformation('hello', s => s.toUpperCase()) // 'HELLO'
transformation(5, n => n * 2) // 10
`})})]})}function x(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
