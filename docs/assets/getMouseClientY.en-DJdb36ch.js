import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getMouseClientY - Get Y coordinate of an event`}),`
`,(0,c.jsx)(t.h1,{id:`getmouseclienty`,children:(0,c.jsx)(t.code,{children:`getMouseClientY`})}),`
`,(0,c.jsx)(t.p,{children:`Extracts the Y coordinate (vertical position) of the pointer (mouse or touch) relative to the visible area of the browser window (viewport) from the event object.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function processes both standard mouse events (`,(0,c.jsx)(t.code,{children:`MouseEvent`}),`) and touch events (`,(0,c.jsx)(t.code,{children:`TouchEvent`}),`), giving priority to the `,(0,c.jsx)(t.code,{children:`clientY`}),` property. If `,(0,c.jsx)(t.code,{children:`clientY`}),` is not found directly on the event, it searches within the `,(0,c.jsx)(t.code,{children:`targetTouches`}),` and `,(0,c.jsx)(t.code,{children:`touches`}),` arrays.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent & TouchEvent`}),` — The event object (`,(0,c.jsx)(t.code,{children:`mousemove`}),`, `,(0,c.jsx)(t.code,{children:`touchmove`}),`, `,(0,c.jsx)(t.code,{children:`click`}),`, etc.).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — The Y coordinate of the cursor/touch. If not found, it returns `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMouseClientY } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const y = getMouseClientY(event)
  console.log(\`The user clicked \${y}px away from the top edge of the window\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};