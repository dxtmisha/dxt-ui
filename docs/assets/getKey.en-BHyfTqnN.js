import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getKey - Get pressed key code`}),`
`,(0,c.jsx)(t.h1,{id:`getkey`,children:(0,c.jsx)(t.code,{children:`getKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the code or name of the key that was pressed, based on the `,(0,c.jsx)(t.code,{children:`KeyboardEvent`}),` object. This utility normalizes retrieving the key identifier by safely attempting properties in the following priority order: `,(0,c.jsx)(t.code,{children:`event.key`}),` → `,(0,c.jsx)(t.code,{children:`event.code`}),` → stringified `,(0,c.jsx)(t.code,{children:`event.keyCode`}),`. If all fail, it returns `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — The keyboard event object (triggered by `,(0,c.jsx)(t.code,{children:`keydown`}),`, `,(0,c.jsx)(t.code,{children:`keyup`}),`, or `,(0,c.jsx)(t.code,{children:`keypress`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — The name or code of the pressed key (e.g., `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'Escape'`}),`, `,(0,c.jsx)(t.code,{children:`'A'`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('User pressed Escape! Closing menu.')
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};