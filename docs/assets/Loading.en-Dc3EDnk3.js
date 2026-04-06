import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Loading - Global Loading`}),`
`,(0,c.jsx)(n.h1,{id:`loading-class`,children:`Loading Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A static class for managing global loading state (uses `,(0,c.jsx)(n.code,{children:`LoadingInstance`}),`). Uses a counter: loading is active as long as at least one process is showing it. Notifies listeners via the custom `,(0,c.jsx)(n.code,{children:`ui-loading`}),` event.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nesting Counter`}),` — multiple parallel `,(0,c.jsx)(n.code,{children:`show()`}),` calls are handled correctly: loading hides only after the same number of `,(0,c.jsx)(n.code,{children:`hide()`}),` calls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Event`}),` — when state changes, a `,(0,c.jsx)(n.code,{children:`ui-loading`}),` event is dispatched on the `,(0,c.jsx)(n.code,{children:`window`}),` object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Listener Registration`}),` — subscribe to state changes from any component via `,(0,c.jsx)(n.code,{children:`registrationEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`state-management`,children:`State Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — returns `,(0,c.jsx)(n.code,{children:`true`}),` if loading is active (counter > 0).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): number`}),` — returns the current counter value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`show(): void`}),` — increments the counter by 1, notifies listeners.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hide(): void`}),` — decrements the counter by 1. Ignored if counter is already 0.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`event-subscription`,children:`Event Subscription`}),`
`,(0,c.jsx)(n.h3,{id:`registrationevent`,children:(0,c.jsx)(n.code,{children:`registrationEvent`})}),`
`,(0,c.jsxs)(n.p,{children:[`Registers a listener for loading state changes. Works through the native `,(0,c.jsx)(n.code,{children:`ui-loading`}),` event on the `,(0,c.jsx)(n.code,{children:`window`}),` object.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — handler function receiving `,(0,c.jsx)(n.code,{children:`event.detail.loading: boolean`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<HTMLElement>`}),` — optional DOM element trigger: the listener automatically stops when the element is removed from the DOM.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`unregistrationevent`,children:(0,c.jsx)(n.code,{children:`unregistrationEvent`})}),`
`,(0,c.jsxs)(n.p,{children:[`Unregisters a listener previously added via `,(0,c.jsx)(n.code,{children:`registrationEvent`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — the handler function used during registration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<HTMLElement>`}),` — the DOM element used during registration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`loadinginstance`,children:`LoadingInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LoadingInstance`}),` class can be used to create a separate instance for tracking loading.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Loading:', event.detail.loading) // true or false
})

Loading.show()  // counter = 1
Loading.show()  // counter = 2
Loading.hide()  // counter = 1
Loading.hide()  // counter = 0 → event: { loading: false }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};