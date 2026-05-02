import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getKey - Get pressed key code`}),`
`,(0,c.jsx)(n.h1,{id:`getkey`,children:(0,c.jsx)(n.code,{children:`getKey`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the code or name of the key that was pressed, based on the `,(0,c.jsx)(n.code,{children:`KeyboardEvent`}),` object. This utility normalizes retrieving the key identifier by safely attempting properties in the following priority order: `,(0,c.jsx)(n.code,{children:`event.key`}),` → `,(0,c.jsx)(n.code,{children:`event.code`}),` → stringified `,(0,c.jsx)(n.code,{children:`event.keyCode`}),`. If all fail, it returns `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — The keyboard event object (triggered by `,(0,c.jsx)(n.code,{children:`keydown`}),`, `,(0,c.jsx)(n.code,{children:`keyup`}),`, or `,(0,c.jsx)(n.code,{children:`keypress`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — The name or code of the pressed key (e.g., `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`'Escape'`}),`, `,(0,c.jsx)(n.code,{children:`'A'`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('User pressed Escape! Closing menu.')
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};