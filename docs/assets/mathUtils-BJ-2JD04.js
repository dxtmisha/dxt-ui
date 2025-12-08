import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/en/Math Utils"}),`
`,e.jsx(n.h1,{id:"mathematical-utilities",children:"Mathematical Utilities"}),`
`,e.jsx(n.p,{children:"A set of functions for mathematical calculations and working with numeric values."}),`
`,e.jsx(n.h2,{id:"getrandomtext",children:e.jsx(n.code,{children:"getRandomText"})}),`
`,e.jsx(n.p,{children:"Generates random text from specified number of words."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number"})," — minimum number of words"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — maximum number of words"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"symbol: string"})," — symbol to replace letters (default 'x')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lengthMin: number"})," — minimum word length (default 3)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lengthMax: number"})," — maximum word length (default 8)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getRandomText } from '@dxtmisha/functional'

getRandomText(1, 3) // 'xxx xxxx xx'
getRandomText(2, 2, 'o', 4, 6) // 'oooo oooooo'
getRandomText(1, 1, '*', 5, 5) // '*****'
`})}),`
`,e.jsx(n.h2,{id:"getrequeststring",children:e.jsx(n.code,{children:"getRequestString"})}),`
`,e.jsx(n.p,{children:"Converts parameter object to URL query string."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: Record<string, any>"})," — object with parameters"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getRequestString } from '@dxtmisha/functional'

getRequestString({ name: 'John', age: 30 }) // 'name=John&age=30'
getRequestString({ q: 'search term', page: 1 }) // 'q=search%20term&page=1'
getRequestString({}) // ''
`})}),`
`,e.jsx(n.h2,{id:"getsteppercent",children:e.jsx(n.code,{children:"getStepPercent"})}),`
`,e.jsx(n.p,{children:"Calculates percentage value of step between minimum and maximum values."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — current value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number"})," — minimum value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — maximum value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getStepPercent } from '@dxtmisha/functional'

getStepPercent(25, 0, 100) // 25
getStepPercent(50, 20, 80) // 50
getStepPercent(15, 10, 20) // 50
`})}),`
`,e.jsx(n.h2,{id:"getstepvalue",children:e.jsx(n.code,{children:"getStepValue"})}),`
`,e.jsx(n.p,{children:"Calculates value by percentage between minimum and maximum values."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"percent: number"})," — percentage value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number"})," — minimum value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — maximum value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getStepValue } from '@dxtmisha/functional'

getStepValue(50, 0, 100) // 50
getStepValue(25, 10, 20) // 12.5
getStepValue(75, 0, 200) // 150
`})}),`
`,e.jsx(n.h2,{id:"random",children:e.jsx(n.code,{children:"random"})}),`
`,e.jsx(n.p,{children:"Generates random integer within specified range."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number"})," — minimum value (inclusive)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — maximum value (inclusive)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { random } from '@dxtmisha/functional'

random(1, 10) // e.g., 7
random(0, 100) // e.g., 42
random(5, 5) // 5
`})})]})}function x(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};
