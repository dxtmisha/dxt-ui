import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/EventRef - Reactive Event Manager`}),`
`,(0,c.jsx)(t.h1,{id:`eventref-class`,children:`EventRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A reactive event listener manager that simplifies attaching and detaching events to DOM elements or the `,(0,c.jsx)(t.code,{children:`window`}),` object. It automatically updates subscriptions when the target element (provided as a Vue `,(0,c.jsx)(t.code,{children:`Ref`}),`) changes.`]}),`
`,(0,c.jsx)(t.p,{children:`Includes automatic re-binding of listeners during dynamic element changes and full integration with the Vue lifecycle.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactivity`}),` — automatic updates when the element `,(0,c.jsx)(t.code,{children:`Ref`}),` changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multi-type Support`}),` — listen to multiple event types simultaneously.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Cleanup`}),` — efficient memory management via the reactivity system.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a new `,(0,c.jsx)(t.code,{children:`EventRef`}),` instance. The class automatically synchronizes event listeners with the state of the passed Vue `,(0,c.jsx)(t.code,{children:`ref`}),`. If the target element changes, `,(0,c.jsx)(t.code,{children:`DesignConstructorAbstract`}),` automatically rebinds the event.`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`E extends ElementOrWindow`}),` — type of the target element (e.g., `,(0,c.jsx)(t.code,{children:`HTMLElement`}),`, `,(0,c.jsx)(t.code,{children:`Window`}),`, or `,(0,c.jsx)(t.code,{children:`Document`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends Event`}),` — type of the event object (e.g., `,(0,c.jsx)(t.code,{children:`MouseEvent`}),`, `,(0,c.jsx)(t.code,{children:`KeyboardEvent`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`D extends Record<string, any>`}),` — type of custom data (`,(0,c.jsx)(t.code,{children:`detail`}),`) associated with the event.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — target element or selector (can be reactive).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — control element. If it is removed from the DOM, listening stops.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = ['click']`}),` — event type or array of types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — handler function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — listener options (`,(0,c.jsx)(t.code,{children:`capture`}),`, `,(0,c.jsx)(t.code,{children:`passive`}),`, `,(0,c.jsx)(t.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — additional event data.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`lifecycle--control`,children:`Lifecycle & Control`}),`
`,(0,c.jsx)(t.p,{children:`Methods for controlling the activity of listeners.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`start(): this`}),` — Activates event listening. If the target element (`,(0,c.jsx)(t.code,{children:`ref`}),`) is not yet mounted, the listeners will be added automatically as soon as it appears.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stop(): this`}),` — Deactivates listening and removes all handlers from the current element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`}),` — Enables or disables listening based on the provided value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Restarts listening. It is automatically called when key parameters (event type, options, etc.) change.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`state--data-acquisition`,children:`State & Data Acquisition`}),`
`,(0,c.jsx)(t.p,{children:`Methods for checking the object's current status.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if event listening is currently active.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Returns the current DOM element or object on which the listeners are set.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsx)(t.p,{children:`All methods in this group support method chaining and automatically update active listeners.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElement(element: ElementOrString): this`}),` — Dynamically changes the target element. When used in `,(0,c.jsx)(t.code,{children:`EventRef`}),`, it also supports reactive `,(0,c.jsx)(t.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElementControl(element: ElementOrString): this`}),` — Sets a control element. If this element is removed from the DOM, event listening on the main element is automatically stopped (protection against memory leaks).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Updates the types of listened events (e.g., changes `,(0,c.jsx)(t.code,{children:`click`}),` to `,(0,c.jsx)(t.code,{children:`dblclick`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: Function): this`}),` — Changes the event handler function without restarting the entire cycle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options: EventOptions): this`}),` — Updates the listener options (`,(0,c.jsx)(t.code,{children:`capture`}),`, `,(0,c.jsx)(t.code,{children:`passive`}),`, `,(0,c.jsx)(t.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail: object): this`}),` — Updates the custom data available within the handler.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`actions`,children:`Actions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dispatch(detail?: object): this`}),` — Programmatically triggers an event on the target element. If data is passed in `,(0,c.jsx)(t.code,{children:`detail`}),`, it will take precedence over those set via `,(0,c.jsx)(t.code,{children:`setDetail`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`special-events`,children:`Special Events`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`EventRef`}),` (via the base class `,(0,c.jsx)(t.code,{children:`EventItem`}),`) provides enhanced handling for certain event types:`]}),`
`,(0,c.jsx)(t.h3,{id:`resize`,children:(0,c.jsx)(t.code,{children:`resize`})}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike the standard `,(0,c.jsx)(t.code,{children:`resize`}),` event, which only works on the `,(0,c.jsx)(t.code,{children:`window`}),` object, here it uses `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),`. This allows tracking dimension changes for any specific DOM element.`]}),`
`,(0,c.jsx)(t.h3,{id:`scroll-sync`,children:(0,c.jsx)(t.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(t.p,{children:[`An optimized version of the scroll event. It uses `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` to synchronize the handler call with the screen refresh rate, preventing "lag" during heavy calculations during scrolling.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};