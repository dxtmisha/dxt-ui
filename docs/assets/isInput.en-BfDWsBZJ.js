import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isInput - Check for input element`}),`
`,(0,c.jsx)(t.h1,{id:`isinput`,children:(0,c.jsx)(t.code,{children:`isInput`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks if the element is an input field (`,(0,c.jsx)(t.code,{children:`input`}),`, `,(0,c.jsx)(t.code,{children:`textarea`}),`, `,(0,c.jsx)(t.code,{children:`select`}),`) or an element with the `,(0,c.jsx)(t.code,{children:`contenteditable`}),` attribute.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: HTMLElement | EventTarget | null`}),` — the element to check.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the element is an input field or editable, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isInput } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
isInput(input) // true

const div = document.createElement('div')
isInput(div) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};