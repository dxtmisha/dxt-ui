import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/getMouseClient - Get X and Y coordinates of an event"}),`
`,e.jsx(n.h1,{id:"getmouseclient",children:e.jsx(n.code,{children:"getMouseClient"})}),`
`,e.jsx(n.p,{children:"Extracts the X and Y coordinates of the pointer (mouse or touch) relative to the visible area of the browser window (viewport) from the event object."}),`
`,e.jsxs(n.p,{children:["The function handles both standard mouse events (",e.jsx(n.code,{children:"MouseEvent"}),") and touch events (",e.jsx(n.code,{children:"TouchEvent"}),"), providing a unified interface (returning an ",e.jsx(n.code,{children:"ImageCoordinator"})," object containing ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"})," properties). This is especially useful when creating drag-and-drop interfaces, sliders, and other interactive elements meant to work across different devices."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — The event object (",e.jsx(n.code,{children:"mousemove"}),", ",e.jsx(n.code,{children:"touchmove"}),", ",e.jsx(n.code,{children:"click"}),", etc.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ImageCoordinator"})," — An object containing ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"})," coordinate properties. If coordinates are not found in the event, it defaults to ",e.jsx(n.code,{children:"{ x: 0, y: 0 }"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Cursor is currently at X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Touch is currently at X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function u(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{u as default};
