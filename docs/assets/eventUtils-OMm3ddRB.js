import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Dqnce8mp.js";import{M as i}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Event Utils"}),`
`,e.jsx(n.h1,{id:"event-utilities",children:"Event Utilities"}),`
`,e.jsx(n.p,{children:"A set of functions for handling and managing DOM events."}),`
`,e.jsx(n.h2,{id:"eventstoppropagation",children:e.jsx(n.code,{children:"eventStopPropagation"})}),`
`,e.jsx(n.p,{children:"Stops event propagation and prevents default action."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: Event"})," — event object to stop"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { eventStopPropagation } from '@dxtmisha/functional'

button.addEventListener('click', (event) => {
  eventStopPropagation(event) // stops bubbling and default action
})

form.addEventListener('submit', (event) => {
  if (!isValid) eventStopPropagation(event) // prevents submission
})
`})}),`
`,e.jsx(n.h2,{id:"getkey",children:e.jsx(n.code,{children:"getKey"})}),`
`,e.jsx(n.p,{children:"Returns pressed key from keyboard event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — keyboard event object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getKey } from '@dxtmisha/functional'

document.addEventListener('keydown', (event) => {
  const key = getKey(event) // 'Enter', 'Escape', 'a', etc.
})
`})}),`
`,e.jsx(n.h2,{id:"getmouseclient",children:e.jsx(n.code,{children:"getMouseClient"})}),`
`,e.jsx(n.p,{children:"Returns mouse cursor or touch position coordinates."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — mouse or touch event object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getMouseClient } from '@dxtmisha/functional'

element.addEventListener('click', (event) => {
  const { x, y } = getMouseClient(event) // { x: 100, y: 200 }
})
`})}),`
`,e.jsx(n.h2,{id:"getmouseclientx",children:e.jsx(n.code,{children:"getMouseClientX"})}),`
`,e.jsx(n.p,{children:"Returns X-coordinate of mouse cursor or touch position."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — mouse or touch event object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getMouseClientX } from '@dxtmisha/functional'

const x = getMouseClientX(event) // 100
`})}),`
`,e.jsx(n.h2,{id:"getmouseclienty",children:e.jsx(n.code,{children:"getMouseClientY"})}),`
`,e.jsx(n.p,{children:"Returns Y-coordinate of mouse cursor or touch position."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — mouse or touch event object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getMouseClientY } from '@dxtmisha/functional'

const y = getMouseClientY(event) // 200
`})})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
