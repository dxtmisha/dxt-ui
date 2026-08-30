import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/replaceTemplate - Substituting values into a template string`}),`
`,(0,c.jsx)(t.h1,{id:`replacetemplate`,children:(0,c.jsx)(t.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Searches the original string for markers in the form `,(0,c.jsx)(t.code,{children:`[pattern]`}),` and replaces them with corresponding values from the provided object. If the marker's value is a function, it is automatically called, and its result is substituted into the string.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — The template string containing markers (e.g., `,(0,c.jsx)(t.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replaces: Record<string, string | FunctionReturn<string>>`}),` — An object containing replacement data, where the key is the marker name inside brackets, and the value is a string or a function returning a string.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A new string with the substituted values.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Hello, [name]! Your balance: [balance].'
const data = {
  name: 'John',
  balance: () => '$100' // The function is evaluated during substitution
}

console.log(replaceTemplate(template, data)) 
// 'Hello, John! Your balance: $100.'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};