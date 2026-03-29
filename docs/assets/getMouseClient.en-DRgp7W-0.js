import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getMouseClient - Get X and Y coordinates of an event`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclient`,children:(0,c.jsx)(n.code,{children:`getMouseClient`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts the X and Y coordinates of the pointer (mouse or touch) relative to the visible area of the browser window (viewport) from the event object.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function handles both standard mouse events (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`) and touch events (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), providing a unified interface (returning an `,(0,c.jsx)(n.code,{children:`ImageCoordinator`}),` object containing `,(0,c.jsx)(n.code,{children:`x`}),` and `,(0,c.jsx)(n.code,{children:`y`}),` properties). This is especially useful when creating drag-and-drop interfaces, sliders, and other interactive elements meant to work across different devices.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — The event object (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),`, etc.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ImageCoordinator`}),` — An object containing `,(0,c.jsx)(n.code,{children:`x`}),` and `,(0,c.jsx)(n.code,{children:`y`}),` coordinate properties. If coordinates are not found in the event, it defaults to `,(0,c.jsx)(n.code,{children:`{ x: 0, y: 0 }`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Cursor is currently at X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Touch is currently at X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};