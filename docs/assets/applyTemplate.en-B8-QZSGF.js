import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/applyTemplate - Applying a template to text`}),`
`,(0,l.jsx)(t.h1,{id:`applytemplate`,children:(0,l.jsx)(t.code,{children:`applyTemplate`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for replacing markers in text with values from an object or an array.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`text: string`}),` — The original text containing template markers.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`replacement: Record<string, string | number | boolean> | string[]`}),` — An object or array containing values.`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Replacement formats (replacement)`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Array`}),`: Used for positional markers like `,(0,l.jsx)(t.code,{children:`%d`}),`, `,(0,l.jsx)(t.code,{children:`%e`}),`, `,(0,l.jsx)(t.code,{children:`%f`}),`, and so on (alphabetically).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Object`}),`: Used for named markers in brackets `,(0,l.jsx)(t.code,{children:`[key]`}),` or `,(0,l.jsx)(t.code,{children:`{key}`}),`, as well as paired tags `,(0,l.jsx)(t.code,{children:`[tag]text[/tag]`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — The text with substituted values.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};