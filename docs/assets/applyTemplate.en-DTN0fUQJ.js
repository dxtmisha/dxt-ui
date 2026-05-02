import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/applyTemplate - Applying a template to text`}),`
`,(0,l.jsx)(n.h1,{id:`applytemplate`,children:(0,l.jsx)(n.code,{children:`applyTemplate`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for replacing markers in text with values from an object or an array.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`text: string`}),` — The original text containing template markers.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`replacement: Record<string, string | number | boolean> | string[]`}),` — An object or array containing values.`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Replacement formats (replacement)`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Array`}),`: Used for positional markers like `,(0,l.jsx)(n.code,{children:`%d`}),`, `,(0,l.jsx)(n.code,{children:`%e`}),`, `,(0,l.jsx)(n.code,{children:`%f`}),`, and so on (alphabetically).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Object`}),`: Used for named markers in brackets `,(0,l.jsx)(n.code,{children:`[key]`}),` or `,(0,l.jsx)(n.code,{children:`{key}`}),`, as well as paired tags `,(0,l.jsx)(n.code,{children:`[tag]text[/tag]`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — The text with substituted values.`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { applyTemplate } from '@dxtmisha/functional-basic'

// 1. Positional markers (array)
applyTemplate('Hello, %d %e!', ['John', 'Doe']) // 'Hello, John Doe!'

// 2. Named markers (object)
applyTemplate('Price: [price] {currency}', { price: 100, currency: 'USD' }) // 'Price: 100 USD'

// 3. Handling 0 and false
applyTemplate('Value: [val]', { val: 0 })      // 'Value: 0'
applyTemplate('Status: [val]', { val: false })    // 'Status: false'

// 4. Skipping missing keys
applyTemplate('Missing: [none]', {})           // 'Missing: [none]'

// 5. Paired tags with content substitution
const tags = { link: '<a href="https://google.com">[content]</a>' }
applyTemplate('Click [link]here[/link]', tags)  // 'Click <a href="https://google.com">here</a>'

// 6. List macros (handling out-of-bounds)
applyTemplate('Macros: %d, %e, %f', ['A', 'B'])  // 'Macros: A, B, '
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};