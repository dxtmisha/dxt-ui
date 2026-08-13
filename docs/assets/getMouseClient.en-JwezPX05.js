import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getMouseClient - Get X and Y coordinates of an event`}),`
`,(0,c.jsx)(t.h1,{id:`getmouseclient`,children:(0,c.jsx)(t.code,{children:`getMouseClient`})}),`
`,(0,c.jsx)(t.p,{children:`Extracts the X and Y coordinates of the pointer (mouse or touch) relative to the visible area of the browser window (viewport) from the event object.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function handles both standard mouse events (`,(0,c.jsx)(t.code,{children:`MouseEvent`}),`) and touch events (`,(0,c.jsx)(t.code,{children:`TouchEvent`}),`), providing a unified interface (returning an `,(0,c.jsx)(t.code,{children:`ImageCoordinator`}),` object containing `,(0,c.jsx)(t.code,{children:`x`}),` and `,(0,c.jsx)(t.code,{children:`y`}),` properties). This is especially useful when creating drag-and-drop interfaces, sliders, and other interactive elements meant to work across different devices.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent & TouchEvent`}),` — The event object (`,(0,c.jsx)(t.code,{children:`mousemove`}),`, `,(0,c.jsx)(t.code,{children:`touchmove`}),`, `,(0,c.jsx)(t.code,{children:`click`}),`, etc.).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ImageCoordinator`}),` — An object containing `,(0,c.jsx)(t.code,{children:`x`}),` and `,(0,c.jsx)(t.code,{children:`y`}),` coordinate properties. If coordinates are not found in the event, it defaults to `,(0,c.jsx)(t.code,{children:`{ x: 0, y: 0 }`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Cursor is currently at X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Touch is currently at X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};