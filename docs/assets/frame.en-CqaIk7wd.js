import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/frame - Cyclic requestAnimationFrame`}),`
`,(0,c.jsx)(n.h1,{id:`frame`,children:(0,c.jsx)(n.code,{children:`frame`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that cyclically calls `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` to perform frame-by-frame animation in the browser.`]}),`
`,(0,c.jsxs)(n.p,{children:[`It's useful for creating smooth animations because the browser automatically optimizes the frame rate (typically 60 FPS) and pauses the animation when the tab is inactive. In non-DOM environments (such as SSR), `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` is not used, and the function executes the callback synchronously to prevent crashing.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => void`}),` — The function to call when it's time to update your animation for the repaint.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next?: () => boolean`}),` — A condition function. If it returns `,(0,c.jsx)(n.code,{children:`true`}),`, the animation loop continues. If `,(0,c.jsx)(n.code,{children:`false`}),`, the loop stops.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end?: () => void`}),` — A callback function that is executed once the animation loop ends (when `,(0,c.jsx)(n.code,{children:`next`}),` returns `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { frame } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};