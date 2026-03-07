import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/frame - Cyclic requestAnimationFrame"}),`
`,n.jsx(e.h1,{id:"frame",children:n.jsx(e.code,{children:"frame"})}),`
`,n.jsxs(e.p,{children:["A utility that cyclically calls ",n.jsx(e.code,{children:"requestAnimationFrame"})," to perform frame-by-frame animation in the browser."]}),`
`,n.jsxs(e.p,{children:["It's useful for creating smooth animations because the browser automatically optimizes the frame rate (typically 60 FPS) and pauses the animation when the tab is inactive. In non-DOM environments (such as SSR), ",n.jsx(e.code,{children:"requestAnimationFrame"})," is not used, and the function executes the callback synchronously to prevent crashing."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => void"})," — The function to call when it's time to update your animation for the repaint."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"next?: () => boolean"})," — A condition function. If it returns ",n.jsx(e.code,{children:"true"}),", the animation loop continues. If ",n.jsx(e.code,{children:"false"}),", the loop stops."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"end?: () => void"})," — A callback function that is executed once the animation loop ends (when ",n.jsx(e.code,{children:"next"})," returns ",n.jsx(e.code,{children:"false"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { frame } from '@dxtmisha/functional-basic'

const element = document.getElementById('box')
let position = 0

// Animation: slide the box 1px per frame until position reaches 100
frame(
  // callback (update frame)
  () => {
    position += 1
    if (element) {
      element.style.transform = \`translateX(\${position}px)\`
    }
  },
  // next (should we continue?)
  () => position < 100,
  // end (when finished)
  () => console.log('Animation complete!')
)
`})})]})}function h(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{h as default};
