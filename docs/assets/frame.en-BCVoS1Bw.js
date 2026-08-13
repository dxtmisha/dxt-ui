import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/frame - Cyclic requestAnimationFrame`}),`
`,(0,c.jsx)(t.h1,{id:`frame`,children:(0,c.jsx)(t.code,{children:`frame`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that cyclically calls `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` to perform frame-by-frame animation in the browser.`]}),`
`,(0,c.jsx)(t.p,{children:`It's useful for creating smooth animations because the browser automatically optimizes the frame rate (typically 60 FPS) and pauses the animation when the tab is inactive.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`SSR Behavior:`}),`
In non-DOM environments (such as SSR), `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` is not used. The function executes the `,(0,c.jsx)(t.code,{children:`callback`}),` once synchronously and immediately calls `,(0,c.jsx)(t.code,{children:`end`}),` (the loop via `,(0,c.jsx)(t.code,{children:`next`}),` is not started) to prevent stack overflow and thread blocking on the server.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => void`}),` — The function to call to update your animation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`next?: () => boolean`}),` — A condition function. If it returns `,(0,c.jsx)(t.code,{children:`true`}),` (only in browser), the animation loop continues.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`end?: () => void`}),` — A callback function that is executed once the animation loop ends.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { frame } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};