import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/functional/en/Classes/EventItem"}),`
`,e.jsx(n.h1,{id:"eventitem-class",children:"EventItem Class"}),`
`,e.jsx(n.p,{children:"A powerful class for managing DOM events with TypeScript support, automatic element lifecycle tracking, and optimized event handlers. Provides a flexible API for working with events, including special handlers for resize and scroll."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-safe event management"})," — full TypeScript support with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic DOM tracking"})," — events automatically disconnect when elements are removed from DOM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple event types"})," — support for handling multiple event types simultaneously"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Special handlers"})," — optimized handlers for resize (ResizeObserver) and scroll"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible state management"})," — easy enabling/disabling of events"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configurable options"})," — support for all standard addEventListener options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Event dispatching"})," — ability to programmatically trigger events"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Element control"})," — separate element control for DOM state tracking"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates an EventItem instance with specified parameters."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<E>"})," — element or selector to bind event to (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[]"})," — event type or array of types (defaults to ['click'])"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: EventListenerDetail<O, D>"})," — event handler function (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — options for addEventListener (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — data to pass to the event (optional)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { EventItem } from '@dxtmisha/functional'

// Simple click event creation
const clickEvent = new EventItem(
  document.getElementById('button'),
  'click',
  (event, detail) => {
    console.log('Button clicked!', event, detail)
  }
)

// Multiple events
const multiEvent = new EventItem(
  '.interactive-element',
  ['mouseenter', 'mouseleave'],
  (event) => {
    console.log(\`Event: \${event.type}\`)
  }
)

// With additional data
const dataEvent = new EventItem(
  '#form',
  'submit',
  (event, detail) => {
    console.log('Form submitted:', detail)
  },
  { passive: false },
  { formId: 'contact-form', timestamp: Date.now() }
)
`})}),`
`,e.jsx(n.h2,{id:"state-query-methods",children:"State Query Methods"}),`
`,e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsx(n.p,{children:"Checks if event listening is currently active."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — true if events are being listened to"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {})

console.log(event.isActive()) // false

event.start()
console.log(event.isActive()) // true

event.stop()
console.log(event.isActive()) // false
`})}),`
`,e.jsx(n.h3,{id:"getelement",children:e.jsx(n.code,{children:"getElement"})}),`
`,e.jsx(n.p,{children:"Returns the element the event is bound to."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"E | undefined"})," — element or undefined"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {})
const element = event.getElement()

if (element) {
  console.log('Element found:', element.tagName)
} else {
  console.log('Element not found')
}
`})}),`
`,e.jsx(n.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,e.jsx(n.h3,{id:"setelement",children:e.jsx(n.code,{children:"setElement"})}),`
`,e.jsx(n.p,{children:"Changes the element for event tracking."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<E>"})," — new element or selector"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem()

// Set element
event.setElement('#button')
  .setType('click')
  .setListener(() => console.log('Click!'))
  .start()

// Change element
event.setElement('#another-button') // automatically restarts event
`})}),`
`,e.jsx(n.h3,{id:"setelementcontrol",children:e.jsx(n.code,{children:"setElementControl"})}),`
`,e.jsx(n.p,{children:"Sets a separate element for DOM state control."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<EC>"})," — element for control"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem(window, 'resize', () => {
  console.log('Window resized')
})

// Control specific element presence
event.setElementControl('#main-container')
  .start()

// Event will automatically stop if #main-container is removed from DOM
`})}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Changes the type or types of events being handled."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[]"})," — new event type or array of types"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#element')

// Single event type
event.setType('click')

// Multiple types
event.setType(['mouseenter', 'mouseleave', 'focus', 'blur'])

// Changing type restarts active events
event.start()
event.setType('dblclick') // automatically restarts with new type
`})}),`
`,e.jsx(n.h3,{id:"setlistener",children:e.jsx(n.code,{children:"setListener"})}),`
`,e.jsx(n.p,{children:"Changes the event handler function."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener: EventListenerDetail<O, D>"})," — new handler function"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click')

// Set first handler
event.setListener((event, detail) => {
  console.log('First handler')
})

// Replace handler
event.setListener((event, detail) => {
  console.log('New handler', detail)
})
`})}),`
`,e.jsx(n.h3,{id:"setoptions",children:e.jsx(n.code,{children:"setOptions"})}),`
`,e.jsx(n.p,{children:"Changes options for addEventListener."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — new options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#element', 'scroll')

// Set options
event.setOptions({
  passive: true,
  capture: false
})

// Options for one-time event
event.setOptions({
  once: true,
  passive: false
})
`})}),`
`,e.jsx(n.h3,{id:"setdetail",children:e.jsx(n.code,{children:"setDetail"})}),`
`,e.jsx(n.p,{children:"Changes data passed to the event handler."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — new data"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#form', 'submit', (event, detail) => {
  console.log('Form data:', detail)
})

// Set initial data
event.setDetail({
  formType: 'contact',
  validation: true
})

// Update data
event.setDetail({
  formType: 'newsletter',
  validation: false,
  timestamp: Date.now()
})
`})}),`
`,e.jsx(n.h2,{id:"event-management",children:"Event Management"}),`
`,e.jsx(n.h3,{id:"start",children:e.jsx(n.code,{children:"start"})}),`
`,e.jsx(n.p,{children:"Starts event listening."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {
  console.log('Button clicked!')
})

// Start listening
event.start()

// Check state
console.log(event.isActive()) // true
`})}),`
`,e.jsx(n.h3,{id:"stop",children:e.jsx(n.code,{children:"stop"})}),`
`,e.jsx(n.p,{children:"Stops event listening."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {
  console.log('This handler will no longer be called')
})

event.start()
// ... event is active ...
event.stop()

console.log(event.isActive()) // false
`})}),`
`,e.jsx(n.h3,{id:"toggle",children:e.jsx(n.code,{children:"toggle"})}),`
`,e.jsx(n.p,{children:"Toggles event listening state."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activity: boolean"})," — true to start, false to stop"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#toggle-btn', 'click', () => {
  console.log('Toggle!')
})

let isListening = false

// Toggle state
document.getElementById('control-btn').addEventListener('click', () => {
  isListening = !isListening
  event.toggle(isListening)
  console.log('Listening:', isListening)
})
`})}),`
`,e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Restarts event listening (stops and starts again)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#element', 'click', () => {
  console.log('Click!')
})

event.start()

// Changing settings requires restart
event.setOptions({ passive: true })
  .reset() // Applies new options
`})}),`
`,e.jsx(n.h3,{id:"dispatch",children:e.jsx(n.code,{children:"dispatch"})}),`
`,e.jsx(n.p,{children:"Programmatically triggers the event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — data for the event (defaults to this.detail)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'custom-event', (event, detail) => {
  console.log('Custom event:', detail)
})

event.start()

// Programmatic event trigger
event.dispatch({
  message: 'Hello from code!',
  timestamp: Date.now()
})

// Or with new data
event.dispatch({
  message: 'Different message',
  source: 'manual'
})
`})}),`
`,e.jsx(n.h2,{id:"special-event-types",children:"Special Event Types"}),`
`,e.jsxs(n.h3,{id:"resize-event",children:[e.jsx(n.code,{children:"resize"})," Event"]}),`
`,e.jsx(n.p,{children:"EventItem automatically uses ResizeObserver for optimized element resize tracking."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const resizeEvent = new EventItem('#resizable-element', 'resize', (entry) => {
  console.log('New dimensions:', {
    width: entry.contentRect.width,
    height: entry.contentRect.height
  })
})

resizeEvent.start()

// ResizeObserver will be used automatically for better performance
`})}),`
`,e.jsxs(n.h3,{id:"scroll-sync-event",children:[e.jsx(n.code,{children:"scroll-sync"})," Event"]}),`
`,e.jsx(n.p,{children:"Special event for synchronized scroll with requestAnimationFrame optimization."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const scrollEvent = new EventItem('#scrollable-container', 'scroll-sync', () => {
  console.log('Synchronized scroll')
})

scrollEvent.start()

// Handler will be called no more than once per animation frame
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"modal-management",children:"Modal Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class ModalManager {
  constructor() {
    this.overlayEvent = null
    this.escapeEvent = null
  }

  openModal(element) {
    element.classList.add('modal-open')

    this.overlayEvent = new EventItem(document, 'click', (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        this.closeModal(element)
      }
    })

    this.escapeEvent = new EventItem(document, 'keydown', (event) => {
      if (event.key === 'Escape') this.closeModal(element)
    })

    this.overlayEvent.start()
    this.escapeEvent.start()
  }

  closeModal(element) {
    element.classList.remove('modal-open')
    this.overlayEvent?.stop()
    this.escapeEvent?.stop()
  }
}

// Usage
const modal = new ModalManager()
document.getElementById('open-btn').addEventListener('click', () => {
  modal.openModal(document.getElementById('modal'))
})
`})}),`
`,e.jsx(n.h3,{id:"drag-and-drop-system",children:"Drag and Drop System"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class DragDropManager {
  makeDraggable(element, data = {}) {
    const dragStart = new EventItem(element, 'dragstart', (event) => {
      event.dataTransfer.setData('text/plain', JSON.stringify(data))
      element.classList.add('dragging')
    })

    const dragEnd = new EventItem(element, 'dragend', () => {
      element.classList.remove('dragging')
    })

    element.draggable = true
    dragStart.start()
    dragEnd.start()
  }

  createDropZone(element, onDrop) {
    const dropEvent = new EventItem(element, 'drop', (event) => {
      event.preventDefault()
      const data = JSON.parse(event.dataTransfer.getData('text/plain'))
      onDrop(data)
    }, { passive: false })

    const dragOver = new EventItem(element, 'dragover', (event) => {
      event.preventDefault()
    }, { passive: false })

    dropEvent.start()
    dragOver.start()
  }
}

// Usage
const dragDrop = new DragDropManager()
dragDrop.makeDraggable(document.getElementById('item'), { id: '1', type: 'product' })
dragDrop.createDropZone(document.getElementById('basket'), (data) => {
  console.log('Added to basket:', data)
})
`})}),`
`,e.jsx(n.p,{children:"The EventItem class provides a powerful and flexible tool for managing DOM events in JavaScript applications, ensuring type safety, automatic lifecycle management, and optimized performance."})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
