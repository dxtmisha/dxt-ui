import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DB_maGql.js";import{M as s}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/en/Animation Utils"}),`
`,n.jsx(e.h1,{id:"animation-utilities",children:"Animation Utilities"}),`
`,n.jsx(e.p,{children:"A set of functions for working with animations and rendering frames."}),`
`,n.jsx(e.h2,{id:"frame",children:n.jsx(e.code,{children:"frame"})}),`
`,n.jsx(e.p,{children:"Cyclically calls requestAnimationFrame until the stop condition is met. Used to create smooth animations."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => void"})," — function called on each animation frame"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"next?: () => boolean"})," — continuation condition function (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"end?: () => void"})," — function executed when animation completes (optional)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { frame } from '@dxtmisha/functional'

// Simple animation
let count = 0
frame(
  () => console.log(\`Frame \${count++}\`), // executed every frame
  () => count < 10, // continuation condition
  () => console.log('Animation completed') // executed on stop
)

// Element movement animation
let position = 0
frame(
  () => element.style.left = \`\${position++}px\`,
  () => position < 200
)
`})})]})}function h(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{h as default};
