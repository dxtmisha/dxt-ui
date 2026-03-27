import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/EventItem - Advanced Event Management`}),`
`,(0,c.jsx)(n.h1,{id:`eventitem-class`,children:`EventItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A powerful wrapper for managing event listeners on DOM elements or the `,(0,c.jsx)(n.code,{children:`window`}),` object. This class simplifies the lifecycle of events (adding, removing, toggling), supports automatic DOM presence checks, and provides built-in optimization for heavy events like `,(0,c.jsx)(n.code,{children:`resize`}),` and `,(0,c.jsx)(n.code,{children:`scroll`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Management`}),` — convenient `,(0,c.jsx)(n.code,{children:`start`}),`, `,(0,c.jsx)(n.code,{children:`stop`}),`, `,(0,c.jsx)(n.code,{children:`toggle`}),`, and `,(0,c.jsx)(n.code,{children:`reset`}),` methods for precise control over event listening.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DOM Safety`}),` — automatic `,(0,c.jsx)(n.code,{children:`isInDom`}),` check before executing the listener (can be configured with a control element).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ResizeObserver Support`}),` — built-in handling of the `,(0,c.jsx)(n.code,{children:`resize`}),` event for any HTML element using the modern API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scroll Optimization`}),` — special `,(0,c.jsx)(n.code,{children:`scroll-sync`}),` event type using `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` for high performance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chaining and Flexibility`}),` — support for method chaining and dynamic target, type, or listener replacement.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Custom Data`}),` — ability to pass and dispatch custom data via `,(0,c.jsx)(n.code,{children:`CustomEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`EventItem(elementSelector, type, listener, options, detail)`}),` constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`To ensure strict typing, the class supports the following generics:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends ElementOrWindow`}),` — The type of the element on which events are listened to.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends Event`}),` — The event object type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`D extends Record<string, any>`}),` — The structure for additional data.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelector?: ElementOrString<E>`}),` — the target element where the listener is attached.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | string[] = 'click'`}),` — the event type, an array of types, or special types (`,(0,c.jsx)(n.code,{children:`'resize'`}),`, `,(0,c.jsx)(n.code,{children:`'scroll-sync'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: EventListenerDetail<O, D>`}),` — the event handler function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: EventOptions`}),` — standard `,(0,c.jsx)(n.code,{children:`addEventListener`}),` options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`detail?: D`}),` — custom data that will be available in the handler.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Simple initialization
const myEvent = new EventItem(
  '.my-button', 
  'click', 
  (event) => console.log('Event triggered:', event.type)
)

// 2. Using generics for strict typing
interface MyData { id: number }
const customEvent = new EventItem<Window, MouseEvent, MyData>(
  window,
  'mousedown',
  (event, detail) => {
    console.log('Window clicked, data ID:', detail?.id)
  },
  { passive: true },
  { id: 42 }
)

// 3. Activating listeners
myEvent.start()
customEvent.start()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isActive(): boolean`}),` — Checks if event listening is currently active.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getElement(): E | undefined`}),` — Returns the current target element.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(n.p,{children:[`All methods in this group support chaining and automatically call `,(0,c.jsx)(n.code,{children:`reset()`}),` if the event is active.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElement(elementSelector?: ElementOrString): this`}),` — Changes the target element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElementControl(elementSelector?: ElementOrString): this`}),` — Sets a control element (if missing in DOM, the event won't trigger).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: string | string[]): this`}),` — Changes the event type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setListener(listener: Function): this`}),` — Changes the callback function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options?: EventOptions): this`}),` — Changes the listener options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDetail(detail?: D): this`}),` — Changes the custom detail data.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`start(): this`}),` — Starts listening for events.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): this`}),` — Stops listening for events.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(activity: boolean): this`}),` — Enables or disables listening based on the flag.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Restarts the event (useful after changing settings).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dispatch(detail?: D): this`}),` — Triggers the event on the target element with data transmission.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`special-events`,children:`Special Events`}),`
`,(0,c.jsx)(n.h3,{id:`resize`,children:(0,c.jsx)(n.code,{children:`resize`})}),`
`,(0,c.jsxs)(n.p,{children:[`If the event type is set to `,(0,c.jsx)(n.code,{children:`resize`}),`, the class automatically uses `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),` to track element size changes (even if it's not the `,(0,c.jsx)(n.code,{children:`window`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`scroll-sync`,children:(0,c.jsx)(n.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(n.p,{children:[`A special type for optimized scrolling. It uses `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` internally, preventing redundant handler calls and improving performance.`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`dynamic-element-switching`,children:`Dynamic Element Switching`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Coordinates:', e.clientX)
})

tracker.start()

// ... later switch to another element
tracker.setElement('.item-2')
`})}),`
`,(0,c.jsx)(n.h3,{id:`using-customevent-with-data`,children:`Using CustomEvent with Data`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Data received:', e.detail) // data from CustomEvent
})

emitter.start()

// Dispatch event
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};