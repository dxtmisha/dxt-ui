import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/replaceTemplate - Substituting values into a template string`}),`
`,(0,c.jsx)(n.h1,{id:`replacetemplate`,children:(0,c.jsx)(n.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Searches the original string for markers in the form `,(0,c.jsx)(n.code,{children:`[pattern]`}),` and replaces them with corresponding values from the provided object. If the marker's value is a function, it is automatically called, and its result is substituted into the string.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — The template string containing markers (e.g., `,(0,c.jsx)(n.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaces: Record<string, string | FunctionReturn<string>>`}),` — An object containing replacement data, where the key is the marker name inside brackets, and the value is a string or a function returning a string.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A new string with the substituted values.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Hello, [name]! Your balance: [balance].'
const data = {
  name: 'John',
  balance: () => '$100' // The function is evaluated during substitution
}

console.log(replaceTemplate(template, data)) 
// 'Hello, John! Your balance: $100.'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};