import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ResumableTimer - Pausable Timer`}),`
`,(0,c.jsx)(t.h1,{id:`resumabletimer-class`,children:`ResumableTimer Class`}),`
`,(0,c.jsx)(t.p,{children:`A class for creating a timer that can be paused, resumed, reset, and cleared. It is useful for UI elements that need to track elapsed time even when interrupted, such as progress bars, auto-closing notifications, or slides.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pause & Resume`}),` — stop the countdown and continue later from the exact millisecond where it left off.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Completion Tracking`}),` — explicitly tracks if the timer has finished its execution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Robust Logic`}),` — handles edge cases like resuming when time has already elapsed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent Interface`}),` — methods return `,(0,c.jsx)(t.code,{children:`this`}),`, allowing for method chaining.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(t.code,{children:`ResumableTimer(callback, delay, blockStart)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: FunctionVoid`}),` — the function to be called after the delay.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay: number = 320`}),` — delay in milliseconds.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`blockStart: boolean = false`}),` — if true, the timer will not start immediately.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ResumableTimer } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resume(): this`}),` — Starts or resumes the timer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pause(): this`}),` — Pauses the timer and calculates the remaining time.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Completely clears the current state and restarts the timer with the original delay.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clear(): this`}),` — Completely stops the timer and resets all internal states.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};