import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/replaceTemplate - Substituting values into a template string`}),`
`,(0,c.jsx)(t.h1,{id:`replacetemplate`,children:(0,c.jsx)(t.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(t.p,{children:[`A simplified templating utility designed for a single type of replacement — `,(0,c.jsx)(t.code,{children:`[pattern]`}),` markers. Unlike the comprehensive `,(0,c.jsx)(t.code,{children:`applyTemplate`}),` function, which handles block tags (`,(0,c.jsx)(t.code,{children:`[tag]content[/tag]`}),`) and positional list macros (`,(0,c.jsx)(t.code,{children:`%d`}),`..`,(0,c.jsx)(t.code,{children:`%v`}),`), `,(0,c.jsx)(t.code,{children:`replaceTemplate`}),` focuses on fast, direct substitution of values and function returns from a key dictionary.`]}),`
`,(0,c.jsx)(t.p,{children:`If the marker's value is a function, it is automatically called, and its result is safely substituted into the string without modifying special replacement tokens.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — The template string containing markers (e.g., `,(0,c.jsx)(t.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replaces: Record<string, FunctionOr<string | number | boolean>>`}),` — An object containing replacement data, where the key is the marker name inside brackets, and the value is a string, number, boolean, or a function returning a value.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A new string with the substituted values.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Hello, [name]! Page: [page]. Your balance: [balance].'
const data = {
  name: 'John',
  page: 1,
  balance: () => '$100' // The function is evaluated during substitution, literal $ is preserved
}

console.log(replaceTemplate(template, data)) 
// 'Hello, John! Page: 1. Your balance: $100.'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};