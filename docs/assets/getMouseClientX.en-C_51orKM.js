import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/getMouseClientX - Get X coordinate of an event"}),`
`,e.jsx(n.h1,{id:"getmouseclientx",children:e.jsx(n.code,{children:"getMouseClientX"})}),`
`,e.jsx(n.p,{children:"Extracts the X coordinate (horizontal position) of the pointer (mouse or touch) relative to the visible area of the browser window (viewport) from the event object."}),`
`,e.jsxs(n.p,{children:["The function processes both standard mouse events (",e.jsx(n.code,{children:"MouseEvent"}),") and touch events (",e.jsx(n.code,{children:"TouchEvent"}),"), giving priority to the ",e.jsx(n.code,{children:"clientX"})," property. If ",e.jsx(n.code,{children:"clientX"})," is not found directly on the event, it searches within the ",e.jsx(n.code,{children:"targetTouches"})," and ",e.jsx(n.code,{children:"touches"})," arrays."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — The event object (",e.jsx(n.code,{children:"mousemove"}),", ",e.jsx(n.code,{children:"touchmove"}),", ",e.jsx(n.code,{children:"click"}),", etc.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number"})," — The X coordinate of the cursor/touch. If not found, it returns ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getMouseClientX } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const x = getMouseClientX(event)
  console.log(\`The user clicked \${x}px away from the left edge of the window\`)
})
`})})]})}function a(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{a as default};
