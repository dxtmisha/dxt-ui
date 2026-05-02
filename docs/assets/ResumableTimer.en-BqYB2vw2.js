import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ResumableTimer - Pausable Timer`}),`
`,(0,c.jsx)(n.h1,{id:`resumabletimer-class`,children:`ResumableTimer Class`}),`
`,(0,c.jsx)(n.p,{children:`A class for creating a timer that can be paused, resumed, reset, and cleared. It is useful for UI elements that need to track elapsed time even when interrupted, such as progress bars, auto-closing notifications, or slides.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Pause & Resume`}),` — stop the countdown and continue later from the exact millisecond where it left off.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Completion Tracking`}),` — explicitly tracks if the timer has finished its execution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Robust Logic`}),` — handles edge cases like resuming when time has already elapsed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent Interface`}),` — methods return `,(0,c.jsx)(n.code,{children:`this`}),`, allowing for method chaining.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(n.code,{children:`ResumableTimer(callback, delay, blockStart)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: FunctionVoid`}),` — the function to be called after the delay.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay: number = 320`}),` — delay in milliseconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`blockStart: boolean = false`}),` — if true, the timer will not start immediately.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ResumableTimer } from '@dxtmisha/functional-basic'

// 1. Basic initialization (starts immediately)
const timer = new ResumableTimer(() => {
  console.log('Timer finished!')
}, 5000)

// 2. Initialization without starting
const delayedTimer = new ResumableTimer(
  () => console.log('Task started!'),
  3000,
  true
)

delayedTimer.resume() // Start it manually
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resume(): this`}),` — Starts or resumes the timer.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pause(): this`}),` — Pauses the timer and calculates the remaining time.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Completely clears the current state and restarts the timer with the original delay.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`clear(): this`}),` — Completely stops the timer and resets all internal states.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};