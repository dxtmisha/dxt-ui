import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getExactSearchExp - Build a RegExp for exact match`}),`
`,(0,c.jsx)(t.h1,{id:`getexactsearchexp`,children:(0,c.jsx)(t.code,{children:`getExactSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that builds a case-insensitive `,(0,c.jsx)(t.code,{children:`RegExp`}),` for an exact phrase match (without `,(0,c.jsx)(t.code,{children:`^`}),` and `,(0,c.jsx)(t.code,{children:`$`}),` anchors).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike `,(0,c.jsx)(t.code,{children:`getSearchExp`}),`, this function matches the entire phrase as a single contiguous substring (with special characters escaped) without splitting it into separate words.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string`}),` — The search string for exact phrase matching.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — A regular expression with the `,(0,c.jsx)(t.code,{children:`i`}),` flag (case-insensitive) and pattern `,(0,c.jsx)(t.code,{children:`(:value)`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello world')

regex.test('say hello world!')      // true — contains the exact phrase
regex.test('HELLO WORLD')           // true — case-insensitive
regex.test('hello beautiful world') // false — words are separated
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};