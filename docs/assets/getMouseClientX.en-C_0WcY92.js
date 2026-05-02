import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getMouseClientX - Get X coordinate of an event`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclientx`,children:(0,c.jsx)(n.code,{children:`getMouseClientX`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts the X coordinate (horizontal position) of the pointer (mouse or touch) relative to the visible area of the browser window (viewport) from the event object.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function processes both standard mouse events (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`) and touch events (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), giving priority to the `,(0,c.jsx)(n.code,{children:`clientX`}),` property. If `,(0,c.jsx)(n.code,{children:`clientX`}),` is not found directly on the event, it searches within the `,(0,c.jsx)(n.code,{children:`targetTouches`}),` and `,(0,c.jsx)(n.code,{children:`touches`}),` arrays.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — The event object (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),`, etc.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — The X coordinate of the cursor/touch. If not found, it returns `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClientX } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const x = getMouseClientX(event)
  console.log(\`The user clicked \${x}px away from the left edge of the window\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};