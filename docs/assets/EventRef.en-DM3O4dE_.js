import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/EventRef - Reactive Event Manager`}),`
`,(0,c.jsx)(n.h1,{id:`eventref-class`,children:`EventRef Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A reactive event listener manager that simplifies attaching and detaching events to DOM elements or the `,(0,c.jsx)(n.code,{children:`window`}),` object. It automatically updates subscriptions when the target element (provided as a Vue `,(0,c.jsx)(n.code,{children:`Ref`}),`) changes.`]}),`
`,(0,c.jsx)(n.p,{children:`Includes automatic re-binding of listeners during dynamic element changes and full integration with the Vue lifecycle.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity`}),` — automatic updates when the element `,(0,c.jsx)(n.code,{children:`Ref`}),` changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multi-type Support`}),` — listen to multiple event types simultaneously.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Cleanup`}),` — efficient memory management via the reactivity system.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`EventRef`}),` instance. The class automatically synchronizes event listeners with the state of the passed Vue `,(0,c.jsx)(n.code,{children:`ref`}),`. If the target element changes, `,(0,c.jsx)(n.code,{children:`DesignConstructorAbstract`}),` automatically rebinds the event.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends ElementOrWindow`}),` — type of the target element (e.g., `,(0,c.jsx)(n.code,{children:`HTMLElement`}),`, `,(0,c.jsx)(n.code,{children:`Window`}),`, or `,(0,c.jsx)(n.code,{children:`Document`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends Event`}),` — type of the event object (e.g., `,(0,c.jsx)(n.code,{children:`MouseEvent`}),`, `,(0,c.jsx)(n.code,{children:`KeyboardEvent`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`D extends Record<string, any>`}),` — type of custom data (`,(0,c.jsx)(n.code,{children:`detail`}),`) associated with the event.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — target element or selector (can be reactive).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — control element. If it is removed from the DOM, listening stops.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | string[] = ['click']`}),` — event type or array of types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: EventListenerDetail<O, D>`}),` — handler function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: EventOptions`}),` — listener options (`,(0,c.jsx)(n.code,{children:`capture`}),`, `,(0,c.jsx)(n.code,{children:`passive`}),`, `,(0,c.jsx)(n.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`detail?: D`}),` — additional event data.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(n.h2,{id:`lifecycle--control`,children:`Lifecycle & Control`}),`
`,(0,c.jsx)(n.p,{children:`Methods for controlling the activity of listeners.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`start(): this`}),` — Activates event listening. If the target element (`,(0,c.jsx)(n.code,{children:`ref`}),`) is not yet mounted, the listeners will be added automatically as soon as it appears.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): this`}),` — Deactivates listening and removes all handlers from the current element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(activity: boolean): this`}),` — Enables or disables listening based on the provided value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Restarts listening. It is automatically called when key parameters (event type, options, etc.) change.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`state--data-acquisition`,children:`State & Data Acquisition`}),`
`,(0,c.jsx)(n.p,{children:`Methods for checking the object's current status.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isActive(): boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if event listening is currently active.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getElement(): E | undefined`}),` — Returns the current DOM element or object on which the listeners are set.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsx)(n.p,{children:`All methods in this group support method chaining and automatically update active listeners.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElement(element: ElementOrString): this`}),` — Dynamically changes the target element. When used in `,(0,c.jsx)(n.code,{children:`EventRef`}),`, it also supports reactive `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElementControl(element: ElementOrString): this`}),` — Sets a control element. If this element is removed from the DOM, event listening on the main element is automatically stopped (protection against memory leaks).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: string | string[]): this`}),` — Updates the types of listened events (e.g., changes `,(0,c.jsx)(n.code,{children:`click`}),` to `,(0,c.jsx)(n.code,{children:`dblclick`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setListener(listener: Function): this`}),` — Changes the event handler function without restarting the entire cycle.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: EventOptions): this`}),` — Updates the listener options (`,(0,c.jsx)(n.code,{children:`capture`}),`, `,(0,c.jsx)(n.code,{children:`passive`}),`, `,(0,c.jsx)(n.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDetail(detail: object): this`}),` — Updates the custom data available within the handler.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`actions`,children:`Actions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dispatch(detail?: object): this`}),` — Programmatically triggers an event on the target element. If data is passed in `,(0,c.jsx)(n.code,{children:`detail`}),`, it will take precedence over those set via `,(0,c.jsx)(n.code,{children:`setDetail`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`special-events`,children:`Special Events`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`EventRef`}),` (via the base class `,(0,c.jsx)(n.code,{children:`EventItem`}),`) provides enhanced handling for certain event types:`]}),`
`,(0,c.jsx)(n.h3,{id:`resize`,children:(0,c.jsx)(n.code,{children:`resize`})}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike the standard `,(0,c.jsx)(n.code,{children:`resize`}),` event, which only works on the `,(0,c.jsx)(n.code,{children:`window`}),` object, here it uses `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),`. This allows tracking dimension changes for any specific DOM element.`]}),`
`,(0,c.jsx)(n.h3,{id:`scroll-sync`,children:(0,c.jsx)(n.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(n.p,{children:[`An optimized version of the scroll event. It uses `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` to synchronize the handler call with the screen refresh rate, preventing "lag" during heavy calculations during scrolling.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};