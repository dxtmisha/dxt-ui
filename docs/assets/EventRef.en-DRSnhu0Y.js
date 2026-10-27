import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/EventRef - Reactive Event Manager`}),`
`,(0,c.jsx)(t.h1,{id:`eventref-class`,children:`EventRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive extension of `,(0,c.jsx)(t.code,{children:`EventItem`}),` for DOM or window listeners. Constructor target and control refs are watched for changes; an owning Vue effect scope stops listeners on disposal.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Target rebinding`}),` — active listeners move when the target ref changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Explicit start`}),` — construction alone does not enable listening.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inherited controls`}),` — chaining, multiple event types and custom detail are provided by `,(0,c.jsx)(t.code,{children:`EventItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type: string | string[] = ['click'], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — Target element or selector.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — Optional control element or selector for DOM presence checks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = ['click']`}),` — Event type or array; defaults to click.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — Event callback receiving event and stored detail.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — Configuration options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — Custom event data.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`E`}),` is the target type, `,(0,c.jsx)(t.code,{children:`O`}),` the event type and `,(0,c.jsx)(t.code,{children:`D`}),` custom detail. Only the constructor target/control inputs accept refs; inherited setters accept unwrapped values. Watchers rebind after Vue’s next update. Outside an effect scope, call `,(0,c.jsx)(t.code,{children:`stop()`}),` manually. Control-element removal is checked when an event is handled. `,(0,c.jsx)(t.code,{children:`resize`}),` uses `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),`; `,(0,c.jsx)(t.code,{children:`scroll-sync`}),` uses animation-frame scheduling.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
import { effectScope, ref } from 'vue'

const target = /*#__PURE__*/ ref<HTMLElement>()
const clicks = /*#__PURE__*/ ref(0)
const scope = /*#__PURE__*/ effectScope()
const listener = /*#__PURE__*/ scope.run(() => new EventRef(
  target, undefined, 'click', () => { clicks.value++ }
).start())
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`listener-control-inherited`,children:`Listener control (inherited)`}),`
`,(0,c.jsx)(t.h4,{id:`start`,children:(0,c.jsx)(t.code,{children:`start`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`start(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Enables listening; repeated calls do not duplicate subscriptions.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — The current instance for chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.start()
`})}),`
`,(0,c.jsx)(t.h4,{id:`stop`,children:(0,c.jsx)(t.code,{children:`stop`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`stop(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Removes active listeners and observers; repeated calls are safe.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — The current instance for chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.stop()
`})}),`
`,(0,c.jsx)(t.h4,{id:`toggle`,children:(0,c.jsx)(t.code,{children:`toggle`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`})}),`
`,(0,c.jsx)(t.p,{children:`Starts or stops according to the boolean argument.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`activity: boolean`}),` — Requested listening state.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — The current instance for chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.toggle(false)
`})}),`
`,(0,c.jsx)(t.h4,{id:`reset`,children:(0,c.jsx)(t.code,{children:`reset`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`reset(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Rebinds an active listener and leaves an inactive listener stopped.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — The current instance for chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.reset()
`})}),`
`,(0,c.jsx)(t.h3,{id:`state-and-configuration-inherited`,children:`State and configuration (inherited)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Reports whether listening is enabled.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Returns the current resolved target.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setElement(elementSelector?: ElementOrString<E>): this`}),` — Changes the target and resets active listeners.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this`}),` — Changes the element checked for DOM presence.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Changes event types and resets active listeners.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: EventListenerDetail<O, D>): this`}),` — Replaces the callback.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setOptions(options?: EventOptions): this`}),` — Replaces listener options, rebinding if active.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail?: D): this`}),` — Replaces the detail passed as the callback’s second argument.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`dispatch-inherited`,children:`Dispatch (inherited)`}),`
`,(0,c.jsx)(t.h4,{id:`dispatch`,children:(0,c.jsx)(t.code,{children:`dispatch`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`dispatch(detail: D | undefined = this.detail): this`})}),`
`,(0,c.jsx)(t.p,{children:`Dispatches a CustomEvent for each configured type. Supplied detail becomes event.detail; the callback second argument remains the stored listener detail.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: D | undefined = this.detail`}),` — Custom event data.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — The current instance for chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.dispatch({ source: 'manual' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};