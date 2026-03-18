import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/EventItem - Advanced Event Management"}),`
`,e.jsx(n.h1,{id:"eventitem-class",children:"EventItem Class"}),`
`,e.jsxs(n.p,{children:["A powerful wrapper for managing event listeners on DOM elements or the ",e.jsx(n.code,{children:"window"})," object. This class simplifies the lifecycle of events (adding, removing, toggling), supports automatic DOM presence checks, and provides built-in optimization for heavy events like ",e.jsx(n.code,{children:"resize"})," and ",e.jsx(n.code,{children:"scroll"}),"."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lifecycle Management"})," — convenient ",e.jsx(n.code,{children:"start"}),", ",e.jsx(n.code,{children:"stop"}),", ",e.jsx(n.code,{children:"toggle"}),", and ",e.jsx(n.code,{children:"reset"})," methods for precise control over event listening."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DOM Safety"})," — automatic ",e.jsx(n.code,{children:"isInDom"})," check before executing the listener (can be configured with a control element)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ResizeObserver Support"})," — built-in handling of the ",e.jsx(n.code,{children:"resize"})," event for any HTML element using the modern API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scroll Optimization"})," — special ",e.jsx(n.code,{children:"scroll-sync"})," event type using ",e.jsx(n.code,{children:"requestAnimationFrame"})," for high performance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chaining and Flexibility"})," — support for method chaining and dynamic target, type, or listener replacement."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Data"})," — ability to pass and dispatch custom data via ",e.jsx(n.code,{children:"CustomEvent"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"EventItem(elementSelector, type, listener, options, detail)"})," constructor."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsx(n.p,{children:"To ensure strict typing, the class supports the following generics:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"E extends ElementOrWindow"})," — The type of the element on which events are listened to."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends Event"})," — The event object type."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D extends Record<string, any>"})," — The structure for additional data."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<E>"})," — the target element where the listener is attached."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[] = 'click'"})," — the event type, an array of types, or special types (",e.jsx(n.code,{children:"'resize'"}),", ",e.jsx(n.code,{children:"'scroll-sync'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: EventListenerDetail<O, D>"})," — the event handler function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — standard ",e.jsx(n.code,{children:"addEventListener"})," options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — custom data that will be available in the handler."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EventItem } from '@dxtmisha/functional-basic'

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
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isActive(): boolean"})," — Checks if event listening is currently active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getElement(): E | undefined"})," — Returns the current target element."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsxs(n.p,{children:["All methods in this group support chaining and automatically call ",e.jsx(n.code,{children:"reset()"})," if the event is active."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElement(elementSelector?: ElementOrString): this"})," — Changes the target element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElementControl(elementSelector?: ElementOrString): this"})," — Sets a control element (if missing in DOM, the event won't trigger)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: string | string[]): this"})," — Changes the event type."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setListener(listener: Function): this"})," — Changes the callback function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options?: EventOptions): this"})," — Changes the listener options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDetail(detail?: D): this"})," — Changes the custom detail data."]}),`
`]}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"start(): this"})," — Starts listening for events."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): this"})," — Stops listening for events."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggle(activity: boolean): this"})," — Enables or disables listening based on the flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): this"})," — Restarts the event (useful after changing settings)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dispatch(detail?: D): this"})," — Triggers the event on the target element with data transmission."]}),`
`]}),`
`,e.jsx(n.h2,{id:"special-events",children:"Special Events"}),`
`,e.jsx(n.h3,{id:"resize",children:e.jsx(n.code,{children:"resize"})}),`
`,e.jsxs(n.p,{children:["If the event type is set to ",e.jsx(n.code,{children:"resize"}),", the class automatically uses ",e.jsx(n.code,{children:"ResizeObserver"})," to track element size changes (even if it's not the ",e.jsx(n.code,{children:"window"}),")."]}),`
`,e.jsx(n.h3,{id:"scroll-sync",children:e.jsx(n.code,{children:"scroll-sync"})}),`
`,e.jsxs(n.p,{children:["A special type for optimized scrolling. It uses ",e.jsx(n.code,{children:"requestAnimationFrame"})," internally, preventing redundant handler calls and improving performance."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"dynamic-element-switching",children:"Dynamic Element Switching"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Coordinates:', e.clientX)
})

tracker.start()

// ... later switch to another element
tracker.setElement('.item-2')
`})}),`
`,e.jsx(n.h3,{id:"using-customevent-with-data",children:"Using CustomEvent with Data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Data received:', e.detail) // data from CustomEvent
})

emitter.start()

// Dispatch event
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{x as default};
