import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/7. Event management`}),`
`,(0,c.jsx)(t.h1,{id:`event-management`,children:`Event management`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`EventItem`}),` class is an advanced wrapper for managing event listeners on DOM elements or the `,(0,c.jsx)(t.code,{children:`window`}),` object. It simplifies the entire event lifecycle, provides automatic monitoring of element existence in the DOM, and includes built-in optimizations for high-frequency events.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Initialization
const event = new EventItem('.my-button', 'click', () => {
  console.log('Button clicked!')
})

// 2. Lifecycle management
event.start()  // Start listening
event.stop()   // Stop listening
event.toggle(true) // Toggle state
`})}),`
`,(0,c.jsx)(t.h2,{id:`element-monitoring`,children:`Element Monitoring`}),`
`,(0,c.jsxs)(t.p,{children:[`One of the key features of `,(0,c.jsx)(t.code,{children:`EventItem`}),` is the automatic deactivation of an event if the target element (or control element) is removed from the DOM. This prevents memory leaks and errors in dynamic interfaces.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// The event will automatically stop if the .my-button element disappears from the DOM
const event = new EventItem('.my-button', 'scroll', handler)
event.start()
`})}),`
`,(0,c.jsx)(t.h2,{id:`performance-optimization`,children:`Performance Optimization`}),`
`,(0,c.jsx)(t.p,{children:`The class includes built-in optimization mechanisms for heavy events such as window resizing or scroll synchronization.`}),`
`,(0,c.jsxs)(t.h3,{id:`type-resize`,children:[`Type `,(0,c.jsx)(t.code,{children:`resize`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Uses `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),` instead of the standard `,(0,c.jsx)(t.code,{children:`resize`}),` event, allowing you to track the size change of a specific element, not just the entire window.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const resizeEvent = new EventItem('.container', 'resize', (entry) => {
  console.log('New width:', entry.contentRect.width)
})
`})}),`
`,(0,c.jsxs)(t.h3,{id:`type-scroll-sync`,children:[`Type `,(0,c.jsx)(t.code,{children:`scroll-sync`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Optimizes scroll handling via `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`, preventing redundant handler calls and reducing CPU load.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const scrollEvent = new EventItem(window, 'scroll-sync', () => {
  // Executes as smoothly as possible
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`manual-event-dispatch`,children:`Manual Event Dispatch`}),`
`,(0,c.jsxs)(t.p,{children:[`You can manually trigger the event on the target element using the `,(0,c.jsx)(t.code,{children:`dispatch`}),` method. This is useful for programmatically simulating user actions.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Simulate a click
event.dispatch()

// Passing additional data (detail)
const customEvent = new EventItem(window, 'my-event', (e, detail) => {
  console.log('Data:', detail)
})
customEvent.dispatch({ id: 123 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};