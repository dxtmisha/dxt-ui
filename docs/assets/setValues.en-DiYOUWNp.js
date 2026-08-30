import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/setValues - Managing the list of selected values`}),`
`,(0,c.jsx)(t.h1,{id:`setvalues`,children:(0,c.jsx)(t.code,{children:`setValues`})}),`
`,(0,c.jsx)(t.p,{children:`Handles updating selected values based on the selection mode (single or multiple). Allows adding, removing, or replacing values with support for maximum element constraints.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[] | undefined`}),` — The current selected values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — The new value to process.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options`}),` — An object with settings:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`multiple: boolean`}),` — Multiple selection mode (defaults to `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxlength: number`}),` — Maximum number of elements for multiple selection (defaults to `,(0,c.jsx)(t.code,{children:`0`}),` — unlimited).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alwaysChange: boolean`}),` — Forced value replacement flag (defaults to `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`notEmpty: boolean`}),` — Prevents the list from being completely cleared (defaults to `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T | T[] | undefined`}),` — The new state of selected values.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setValues } from '@dxtmisha/functional-basic'

// Single selection
console.log(setValues(1, 2, {})) // 2

// Multiple selection (toggle)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (removal of existing)
list = setValues(list, 3, { multiple: true }) // [1, 3] (addition of new)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};