import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/en/functional/Classes/EventRef - Reactive Event Manager"}),`
`,e.jsx(n.h1,{id:"eventref-class",children:"EventRef Class"}),`
`,e.jsxs(n.p,{children:["A reactive event listener manager that simplifies attaching and detaching events to DOM elements or the ",e.jsx(n.code,{children:"window"})," object. It automatically updates subscriptions when the target element (provided as a Vue ",e.jsx(n.code,{children:"Ref"}),") changes."]}),`
`,e.jsx(n.p,{children:"Includes automatic re-binding of listeners during dynamic element changes and full integration with the Vue lifecycle."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactivity"})," — automatic updates when the element ",e.jsx(n.code,{children:"Ref"})," changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-type Support"})," — listen to multiple event types simultaneously."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Cleanup"})," — efficient memory management via the reactivity system."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Creates a new ",e.jsx(n.code,{children:"EventRef"})," instance. The class automatically synchronizes event listeners with the state of the passed Vue ",e.jsx(n.code,{children:"ref"}),". If the target element changes, ",e.jsx(n.code,{children:"DesignConstructorAbstract"})," automatically rebinds the event."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"E extends ElementOrWindow"})," — type of the target element (e.g., ",e.jsx(n.code,{children:"HTMLElement"}),", ",e.jsx(n.code,{children:"Window"}),", or ",e.jsx(n.code,{children:"Document"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends Event"})," — type of the event object (e.g., ",e.jsx(n.code,{children:"MouseEvent"}),", ",e.jsx(n.code,{children:"KeyboardEvent"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D extends Record<string, any>"})," — type of custom data (",e.jsx(n.code,{children:"detail"}),") associated with the event."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: RefOrNormal<ElementOrString<E> | undefined>"})," — target element or selector (can be reactive)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>"})," — control element. If it is removed from the DOM, listening stops."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[] = ['click']"})," — event type or array of types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: EventListenerDetail<O, D>"})," — handler function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — listener options (",e.jsx(n.code,{children:"capture"}),", ",e.jsx(n.code,{children:"passive"}),", ",e.jsx(n.code,{children:"once"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — additional event data."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EventRef } from '@dxtmisha/functional'
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Simple initialization with Ref
const buttonRef = ref<HTMLButtonElement>()
const event = new EventRef(buttonRef, undefined, 'click', (e) => {
  console.log('Button clicked:', e.target)
})

// 2. Using multiple events and options
const scrollEvent = new EventRef(
  window, 
  undefined, 
  ['scroll', 'resize'], 
  () => console.log('Window changed'),
  { passive: true }
)

onMounted(() => {
  event.start()
  scrollEvent.start()
})

onUnmounted(() => {
  event.stop()
  scrollEvent.stop()
})
`})}),`
`,e.jsx(n.h2,{id:"lifecycle--control",children:"Lifecycle & Control"}),`
`,e.jsx(n.p,{children:"Methods for controlling the activity of listeners."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"start(): this"})," — Activates event listening. If the target element (",e.jsx(n.code,{children:"ref"}),") is not yet mounted, the listeners will be added automatically as soon as it appears."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): this"})," — Deactivates listening and removes all handlers from the current element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggle(activity: boolean): this"})," — Enables or disables listening based on the provided value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): this"})," — Restarts listening. It is automatically called when key parameters (event type, options, etc.) change."]}),`
`]}),`
`,e.jsx(n.h2,{id:"state--data-acquisition",children:"State & Data Acquisition"}),`
`,e.jsx(n.p,{children:"Methods for checking the object's current status."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isActive(): boolean"})," — Returns ",e.jsx(n.code,{children:"true"})," if event listening is currently active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getElement(): E | undefined"})," — Returns the current DOM element or object on which the listeners are set."]}),`
`]}),`
`,e.jsx(n.h2,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsx(n.p,{children:"All methods in this group support method chaining and automatically update active listeners."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElement(element: ElementOrString): this"})," — Dynamically changes the target element. When used in ",e.jsx(n.code,{children:"EventRef"}),", it also supports reactive ",e.jsx(n.code,{children:"ref"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElementControl(element: ElementOrString): this"})," — Sets a control element. If this element is removed from the DOM, event listening on the main element is automatically stopped (protection against memory leaks)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: string | string[]): this"})," — Updates the types of listened events (e.g., changes ",e.jsx(n.code,{children:"click"})," to ",e.jsx(n.code,{children:"dblclick"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setListener(listener: Function): this"})," — Changes the event handler function without restarting the entire cycle."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options: EventOptions): this"})," — Updates the listener options (",e.jsx(n.code,{children:"capture"}),", ",e.jsx(n.code,{children:"passive"}),", ",e.jsx(n.code,{children:"once"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDetail(detail: object): this"})," — Updates the custom data available within the handler."]}),`
`]}),`
`,e.jsx(n.h2,{id:"actions",children:"Actions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dispatch(detail?: object): this"})," — Programmatically triggers an event on the target element. If data is passed in ",e.jsx(n.code,{children:"detail"}),", it will take precedence over those set via ",e.jsx(n.code,{children:"setDetail"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"special-events",children:"Special Events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"EventRef"})," (via the base class ",e.jsx(n.code,{children:"EventItem"}),") provides enhanced handling for certain event types:"]}),`
`,e.jsx(n.h3,{id:"resize",children:e.jsx(n.code,{children:"resize"})}),`
`,e.jsxs(n.p,{children:["Unlike the standard ",e.jsx(n.code,{children:"resize"})," event, which only works on the ",e.jsx(n.code,{children:"window"})," object, here it uses ",e.jsx(n.code,{children:"ResizeObserver"}),". This allows tracking dimension changes for any specific DOM element."]}),`
`,e.jsx(n.h3,{id:"scroll-sync",children:e.jsx(n.code,{children:"scroll-sync"})}),`
`,e.jsxs(n.p,{children:["An optimized version of the scroll event. It uses ",e.jsx(n.code,{children:"requestAnimationFrame"}),' to synchronize the handler call with the screen refresh rate, preventing "lag" during heavy calculations during scrolling.']})]})}function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{j as default};
