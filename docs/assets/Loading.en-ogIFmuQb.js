import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Classes/Loading - Global Loading"}),`
`,e.jsx(n.h1,{id:"loading-class",children:"Loading Class"}),`
`,e.jsxs(n.p,{children:["A static class for managing global loading state. Uses a counter: loading is active as long as at least one process is showing it. Notifies listeners via the custom ",e.jsx(n.code,{children:"ui-loading"})," event."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Nesting Counter"})," — multiple parallel ",e.jsx(n.code,{children:"show()"})," calls are handled correctly: loading hides only after the same number of ",e.jsx(n.code,{children:"hide()"})," calls."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Event"})," — when state changes, a ",e.jsx(n.code,{children:"ui-loading"})," event is dispatched on the ",e.jsx(n.code,{children:"window"})," object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Listener Registration"})," — subscribe to state changes from any component via ",e.jsx(n.code,{children:"registrationEvent"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"state-management",children:"State Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(): boolean"})," — returns ",e.jsx(n.code,{children:"true"})," if loading is active (counter > 0)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"show(): void"})," — increments the counter by 1, notifies listeners."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hide(): void"})," — decrements the counter by 1. Ignored if counter is already 0."]}),`
`]}),`
`,e.jsx(n.h2,{id:"event-subscription",children:"Event Subscription"}),`
`,e.jsx(n.h3,{id:"registrationevent",children:e.jsx(n.code,{children:"registrationEvent"})}),`
`,e.jsxs(n.p,{children:["Registers a listener for loading state changes. Works through the native ",e.jsx(n.code,{children:"ui-loading"})," event on the ",e.jsx(n.code,{children:"window"})," object."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener: EventListenerDetail<CustomEvent, { loading: boolean }>"})," — handler function receiving ",e.jsx(n.code,{children:"event.detail.loading: boolean"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<HTMLElement>"})," — optional DOM element trigger: the listener automatically stops when the element is removed from the DOM."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Loading:', event.detail.loading) // true or false
})

Loading.show()  // counter = 1
Loading.show()  // counter = 2
Loading.hide()  // counter = 1
Loading.hide()  // counter = 0 → event: { loading: false }
`})})]})}function g(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
