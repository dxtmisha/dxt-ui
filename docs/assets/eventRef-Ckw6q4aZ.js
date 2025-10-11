import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-C8vOrmRQ.js";import{M as i}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Classes/Ref/EventRef"}),`
`,e.jsx(n.h1,{id:"eventref-class",children:"EventRef Class"}),`
`,e.jsx(n.p,{children:"Vue-oriented class for working with DOM events with reactive capabilities. Extends the base EventItem class with Vue's reactive system, providing automatic element tracking and event configuration management."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — uses ref/watch for reactive element tracking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Element Tracking"})," — automatically updates handlers when element references change"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Element Input"})," — accepts DOM elements, selectors, or reactive refs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Event Types"})," — supports single and multiple events"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Control Element"})," — separate element for DOM presence checking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Cleanup"})," — removes handlers when elements are removed from DOM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Special Event Handling"})," — built-in support for resize, scroll-sync"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Event Dispatching"})," — programmatic triggering of custom events"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lifecycle Management"})," — start, stop, toggle, and reset methods"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates an EventRef instance with reactive parameters."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: RefOrNormal<ElementOrString<E> | undefined>"})," — target element (ref or normal value)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>"})," — control element for DOM checking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string | string[]"})," — event type(s) to listen for (default: ['click'])"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: EventListenerDetail<O, D>"})," — event handler function"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — event handler options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — custom data to pass to handler"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Generic Types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"E extends ElementOrWindow"})," — type of target element (HTMLElement or Window)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends Event"})," — type of event object"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D extends Record<string, any>"})," — type of custom detail data"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { EventRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// With ref element
const buttonRef = ref(null)
const containerRef = ref(null)

const clickEvent = new EventRef(
  buttonRef,
  containerRef, // control element
  'click',
  (event, detail) => console.log('Button clicked!', detail),
  undefined,
  { component: 'MyButton' }
)

// With string selector
const hoverEvent = new EventRef(
  '#my-element',
  undefined,
  ['mouseenter', 'mouseleave'],
  (event) => console.log('Hover:', event.type)
)
`})}),`
`,e.jsx(n.h2,{id:"inherited-methods",children:"Inherited Methods"}),`
`,e.jsx(n.p,{children:"EventRef inherits all methods from the base EventItem class:"}),`
`,e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsx(n.p,{children:"Checks if event handlers are active."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — true if handlers are active"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const isListening = eventRef.isActive()
`})}),`
`,e.jsx(n.h3,{id:"getelement",children:e.jsx(n.code,{children:"getElement"})}),`
`,e.jsx(n.p,{children:"Returns the current target element."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"E | undefined"})," — current target element"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const currentElement = eventRef.getElement()
`})}),`
`,e.jsx(n.h3,{id:"setelement",children:e.jsx(n.code,{children:"setElement"})}),`
`,e.jsx(n.p,{children:"Changes the target element (automatically called when ref changes)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<E>"})," — new target element"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setElement('#new-element')
`})}),`
`,e.jsx(n.h3,{id:"setelementcontrol",children:e.jsx(n.code,{children:"setElementControl"})}),`
`,e.jsx(n.p,{children:"Sets the control element (automatically called when ref changes)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<HTMLElement>"})," — control element"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setElementControl('#parent-container')
`})}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Changes the event type(s)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[]"})," — new event type(s)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setType(['focus', 'blur'])
`})}),`
`,e.jsx(n.h3,{id:"setlistener",children:e.jsx(n.code,{children:"setListener"})}),`
`,e.jsx(n.p,{children:"Changes the event handler function."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener: EventListenerDetail<O, D>"})," — new handler function"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setListener((event, detail) => {
  console.log('New handler!', event, detail)
})
`})}),`
`,e.jsx(n.h3,{id:"setoptions",children:e.jsx(n.code,{children:"setOptions"})}),`
`,e.jsx(n.p,{children:"Changes the event handler options."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — new event options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setOptions({ capture: true, once: true })
`})}),`
`,e.jsx(n.h3,{id:"setdetail",children:e.jsx(n.code,{children:"setDetail"})}),`
`,e.jsx(n.p,{children:"Changes the custom detail data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — new detail data"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setDetail({ timestamp: Date.now() })
`})}),`
`,e.jsx(n.h2,{id:"lifecycle-management-methods",children:"Lifecycle Management Methods"}),`
`,e.jsx(n.h3,{id:"start",children:e.jsx(n.code,{children:"start"})}),`
`,e.jsx(n.p,{children:"Starts event listening."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.start()
`})}),`
`,e.jsx(n.h3,{id:"stop",children:e.jsx(n.code,{children:"stop"})}),`
`,e.jsx(n.p,{children:"Stops event listening."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.stop()
`})}),`
`,e.jsx(n.h3,{id:"toggle",children:e.jsx(n.code,{children:"toggle"})}),`
`,e.jsx(n.p,{children:"Toggles event handler state."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activity: boolean"})," — true to start, false to stop"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.toggle(true) // start
eventRef.toggle(false) // stop
`})}),`
`,e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Reloads event handlers."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.reset()
`})}),`
`,e.jsx(n.h3,{id:"dispatch",children:e.jsx(n.code,{children:"dispatch"})}),`
`,e.jsx(n.p,{children:"Programmatically triggers the event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — custom data for the event"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.dispatch({ source: 'programmatic' })
`})}),`
`,e.jsx(n.h2,{id:"reactive-capabilities",children:"Reactive Capabilities"}),`
`,e.jsx(n.h3,{id:"automatic-element-tracking",children:"Automatic Element Tracking"}),`
`,e.jsx(n.p,{children:"EventRef automatically tracks changes in reactive element references:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const elementRef = ref('#button1')
const eventRef = new EventRef(elementRef, undefined, 'click', () => {
  console.log('Clicked!')
})

eventRef.start()

// Changing the element will automatically update handlers
elementRef.value = '#button2'
`})}),`
`,e.jsx(n.h3,{id:"control-element-tracking",children:"Control Element Tracking"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const buttonRef = ref(null)
const containerRef = ref(null)

const eventRef = new EventRef(buttonRef, containerRef, 'click')

// Events will automatically stop if containerRef is removed from DOM
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"vue-component-with-reactive-events",children:"Vue Component with Reactive Events"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <button ref="buttonEl" @click="handleClick">Click me</button>
  <input ref="inputEl" placeholder="Type...">
</template>

<script setup>
import { EventRef } from '@dxtmisha/functional'
import { ref, onMounted } from 'vue'

const buttonEl = ref(null)
const inputEl = ref(null)

onMounted(() => {
  new EventRef(buttonEl, undefined, 'click', () => {
    console.log('Button clicked!')
  }).start()

  new EventRef(inputEl, undefined, ['focus', 'blur'], (event) => {
    console.log(\`Input \${event.type}\`)
  }).start()
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"composable-for-event-management",children:"Composable for Event Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function useElementEvents(elementRef) {
  const events = new Map()

  const addEvent = (name, type, listener) => {
    const eventRef = new EventRef(elementRef, undefined, type, listener)
    events.set(name, eventRef.start())
    return eventRef
  }

  return { addEvent }
}
`})}),`
`,e.jsx(n.h3,{id:"special-event-types",children:"Special Event Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Scroll event
new EventRef('#container', undefined, 'scroll-sync', (event) => {
  console.log('Scroll:', event.target.scrollTop)
}).start()

// Resize event
new EventRef('#element', undefined, 'resize', (entry) => {
  console.log('Size:', entry.contentRect)
}).start()
`})}),`
`,e.jsx(n.p,{children:"The EventRef class provides a powerful reactive event management system for Vue applications with automatic element tracking and resource cleanup."})]})}function j(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
