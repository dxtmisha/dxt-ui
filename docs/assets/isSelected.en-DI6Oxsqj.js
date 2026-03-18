import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/isSelected - Check if a value is selected"}),`
`,e.jsx(n.h1,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsxs(n.p,{children:["A multi-purpose utility dedicated to verifying if a particular reference value matches the desired selection criteria. This function accommodates multiple dynamic comparison strategies based heavily on the architectural structure of the ",e.jsx(n.code,{children:"selected"})," argument:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prohibit Nuances:"})," If the incoming test variable (",e.jsx(n.code,{children:"value"}),") manifests as ",e.jsx(n.code,{children:"null"})," or ",e.jsx(n.code,{children:"undefined"}),", the function safely terminates with a flat ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Array Validations:"})," In instances where the ",e.jsx(n.code,{children:"selected"})," payload arrives configured as an array ",e.jsx(n.code,{children:"[]"}),", the algorithm utilizes ",e.jsx(n.code,{children:".includes(value)"})," to search the array for a direct hit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Numeric Casting:"})," If both target variables theoretically align as numbers (determined via the ",e.jsx(n.code,{children:"isNumber()"})," sub-function), the engine actively homogenizes them parsing them strictly to digit comparisons irrespective of their exact string origins (e.g., ",e.jsx(n.code,{children:"'5'"})," translates safely into matching pure integer ",e.jsx(n.code,{children:"5"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Failsafe Comparison:"})," Absent any of the conditions outlined above, it retreats to standard strict equality ",e.jsx(n.code,{children:"value === selected"})," matching."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — The active element or context payload waiting for confirmation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: T | T[] | S"})," — The benchmark reference acting as the target check marker; this could seamlessly be a sole primitive or a broader array array list."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Renders ",e.jsx(n.code,{children:"true"})," assuming the initial argument perfectly corresponds to the requested target data boundary, projecting ",e.jsx(n.code,{children:"false"})," otherwise."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isSelected } from '@dxtmisha/functional-basic'

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
`})})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
