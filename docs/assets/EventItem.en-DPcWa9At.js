import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/EventItem - Advanced Event Management`}),`
`,(0,c.jsx)(t.h1,{id:`eventitem-class`,children:`EventItem Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A powerful wrapper for managing event listeners on DOM elements or the `,(0,c.jsx)(t.code,{children:`window`}),` object. The class simplifies working with the event lifecycle (add, remove, toggle), supports automatic checking of the element's presence in the DOM, and provides built-in optimization for heavy events such as `,(0,c.jsx)(t.code,{children:`resize`}),` and `,(0,c.jsx)(t.code,{children:`scroll`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lifecycle Management`}),` — convenient `,(0,c.jsx)(t.code,{children:`start`}),`, `,(0,c.jsx)(t.code,{children:`stop`}),`, `,(0,c.jsx)(t.code,{children:`toggle`}),`, and `,(0,c.jsx)(t.code,{children:`reset`}),` methods to control event listening.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DOM Safety`}),` — automatic `,(0,c.jsx)(t.code,{children:`isInDom`}),` check before executing the handler (a control element can be configured).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`ResizeObserver Support`}),` — built-in handling of the `,(0,c.jsx)(t.code,{children:`resize`}),` event for any HTML elements via a modern API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scroll Optimization`}),` — a special `,(0,c.jsx)(t.code,{children:`scroll-sync`}),` event type using `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` for high performance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chaining and Flexibility`}),` — support for call chaining and dynamic changing of the target, type, or event handler.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom Data`}),` — the ability to pass and dispatch custom data via `,(0,c.jsx)(t.code,{children:`CustomEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(t.code,{children:`EventItem(elementSelector, type, listener, options, detail)`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(t.p,{children:`To ensure strict typing, the class supports the following generics:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`E extends ElementOrWindow`}),` — The type of element on which events are listened.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends Event`}),` — The type of the event object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`D extends Record<string, any>`}),` — The structure of additional data.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: ElementOrString<E>`}),` — the target element on which the listener is attached.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = 'click'`}),` — event type, array of types, or special types (`,(0,c.jsx)(t.code,{children:`'resize'`}),`, `,(0,c.jsx)(t.code,{children:`'scroll-sync'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — the event handler function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — standard `,(0,c.jsx)(t.code,{children:`addEventListener`}),` options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — custom data that will be available in the handler.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Basic initialization
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
    console.log('Window click, data ID:', detail?.id)
  },
  { passive: true },
  { id: 42 }
)

// 3. Activating listening
myEvent.start()
customEvent.start()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Checks if event listening is currently active.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Returns the current target element.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(t.p,{children:[`All methods in this group support chaining and automatically call `,(0,c.jsx)(t.code,{children:`reset()`}),` if the event is active.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElement(elementSelector?: ElementOrString): this`}),` — Changes the target element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElementControl(elementSelector?: ElementOrString): this`}),` — Sets the control element (if it is not in the DOM, the event will not fire).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Changes the event type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: Function): this`}),` — Changes the handler function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options?: EventOptions): this`}),` — Changes the listener parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail?: D): this`}),` — Changes the custom event data.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`start(): this`}),` — Starts event listening.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stop(): this`}),` — Stops event listening.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`}),` — Enables or disables listening depending on the flag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Restarts the event (useful after changing settings).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dispatch(detail?: D): this`}),` — Triggers the event on the target element with data transfer.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`elementorwindow`,children:(0,c.jsx)(t.code,{children:`ElementOrWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Element on which an event can be attached: `,(0,c.jsx)(t.code,{children:`HTMLElement | Window`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`elementorstringe`,children:(0,c.jsx)(t.code,{children:`ElementOrString<E>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Type for passing an element or its selector: `,(0,c.jsx)(t.code,{children:`E | string`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`eventlistenerdetailo-d`,children:(0,c.jsx)(t.code,{children:`EventListenerDetail<O, D>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Event listener function: `,(0,c.jsx)(t.code,{children:`(event: O, detail?: D) => void`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`eventoptions`,children:(0,c.jsx)(t.code,{children:`EventOptions`})}),`
`,(0,c.jsxs)(t.p,{children:[`Listening options: `,(0,c.jsx)(t.code,{children:`AddEventListenerOptions | boolean | undefined`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`eventactivityiteme`,children:(0,c.jsx)(t.code,{children:`EventActivityItem<E>`})}),`
`,(0,c.jsx)(t.p,{children:`Internal interface for tracking active listeners.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E | undefined`}),` — Target element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Event type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: (event: any) => void`}),` — Active function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`observer?: ResizeObserver`}),` — Observer instance (for `,(0,c.jsx)(t.code,{children:`resize`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`special-events`,children:`Special Events`}),`
`,(0,c.jsx)(t.h3,{id:`resize`,children:(0,c.jsx)(t.code,{children:`resize`})}),`
`,(0,c.jsxs)(t.p,{children:[`If the event type is set to `,(0,c.jsx)(t.code,{children:`resize`}),`, the class automatically uses `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),` to track changes in the size of the element (even if it is not `,(0,c.jsx)(t.code,{children:`window`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`scroll-sync`,children:(0,c.jsx)(t.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(t.p,{children:[`A special type for optimized scrolling. Internally uses `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`, preventing unnecessary handler calls and increasing performance.`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`dynamic-element-switching`,children:`Dynamic Element Switching`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Coordinates:', e.clientX)
})

tracker.start()

// ... switch to another element later
tracker.setElement('.item-2')
`})}),`
`,(0,c.jsx)(t.h3,{id:`using-customevent-with-data`,children:`Using CustomEvent with Data`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Data received:', e.detail) // data from CustomEvent
})

emitter.start()

// Dispatch event
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};