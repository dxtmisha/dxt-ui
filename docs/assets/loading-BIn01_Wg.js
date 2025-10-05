import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DB_maGql.js";import{M as o}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function a(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/functional/en/Classes/Loading"}),`
`,n.jsx(e.h1,{id:"loading-class",children:"Loading Class"}),`
`,n.jsx(e.p,{children:"A static class for managing global loading indicators with event system. Provides centralized loading state management with support for active operation counter and automatic event dispatching."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global State"})," — centralized loading indicator management"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Counter System"})," — automatic counting of active loading operations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Event Dispatching"})," — automatic state change events"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Safe Hiding"})," — protection against negative counter values"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Listener Registration"})," — simple subscription to state changes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Element Control"})," — binding to specific DOM elements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript Support"})," — full typing for events and data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Initialization"})," — ready to work in DOM environment"]}),`
`]}),`
`,n.jsx(e.h2,{id:"state-check-methods",children:"State Check Methods"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsx(e.p,{children:"Checks if loading indicator is currently active."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"boolean"})," — true if there are active loading operations"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Check loading state
if (Loading.is()) {
  console.log('Loading in progress...')
} else {
  console.log('Loading completed')
}

// Conditional display
const loadingSpinner = document.getElementById('spinner')
loadingSpinner.style.display = Loading.is() ? 'block' : 'none'
`})}),`
`,n.jsx(e.h2,{id:"state-management-methods",children:"State Management Methods"}),`
`,n.jsx(e.h3,{id:"show",children:n.jsx(e.code,{children:"show"})}),`
`,n.jsx(e.p,{children:"Shows loading indicator (increases counter)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Start loading operation
Loading.show()
console.log('Loading state:', Loading.is()) // true

// Multiple operations simultaneously
async function loadMultipleData() {
  Loading.show() // operation 1
  Loading.show() // operation 2
  Loading.show() // operation 3

  console.log('Active operations:', Loading.is()) // true

  // Execute operations...
  await Promise.all([
    loadUserData(),
    loadSettings(),
    loadPreferences()
  ])

  Loading.hide() // completed operation 1
  Loading.hide() // completed operation 2
  Loading.hide() // completed operation 3

  console.log('All operations completed:', Loading.is()) // false
}
`})}),`
`,n.jsx(e.h3,{id:"hide",children:n.jsx(e.code,{children:"hide"})}),`
`,n.jsx(e.p,{children:"Hides loading indicator (decreases counter)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Safe hiding
Loading.hide() // Nothing happens if counter is already 0

// Example with API call
async function fetchData() {
  Loading.show()

  try {
    const data = await fetch('/api/data')
    return await data.json()
  } finally {
    Loading.hide() // Guaranteed to hide loading
  }
}

// Multiple operations
function startOperations() {
  // Show for each operation
  Loading.show() // operation A
  Loading.show() // operation B

  // Hide when each completes
  setTimeout(() => Loading.hide(), 1000) // A completed
  setTimeout(() => Loading.hide(), 2000) // B completed
}
`})}),`
`,n.jsx(e.h2,{id:"event-system",children:"Event System"}),`
`,n.jsx(e.h3,{id:"registrationevent",children:n.jsx(e.code,{children:"registrationEvent"})}),`
`,n.jsx(e.p,{children:"Registers event listener to track loading state changes."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener: EventListenerDetail<CustomEvent, LoadingDetail>"})," — event handler function"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<HTMLElement>"})," — element for control (optional)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Simple registration
Loading.registrationEvent((event, detail) => {
  console.log('Loading state changed:', detail.loading)

  if (detail.loading) {
    showLoadingSpinner()
  } else {
    hideLoadingSpinner()
  }
})

// Registration with element control
Loading.registrationEvent(
  (event, detail) => {
    const spinner = document.getElementById('app-spinner')
    spinner.style.display = detail.loading ? 'flex' : 'none'
  },
  '#main-app' // Event will be active only while #main-app exists
)

// Multiple listeners
Loading.registrationEvent((event, detail) => {
  // UI updates
  updateLoadingIndicator(detail.loading)
})

Loading.registrationEvent((event, detail) => {
  // Analytics
  if (detail.loading) {
    analytics.track('loading_started')
  } else {
    analytics.track('loading_finished')
  }
})
`})}),`
`,n.jsx(e.h3,{id:"loadingdetail",children:"LoadingDetail"}),`
`,n.jsx(e.p,{children:"Data type passed to loading events."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Properties:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: boolean"})," — loading state (true = loading, false = completed)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`interface LoadingDetail {
  loading: boolean
}

// Typed event handler
const handleLoadingChange: EventListenerDetail<CustomEvent, LoadingDetail> = (event, detail) => {
  if (detail?.loading) {
    document.body.classList.add('loading-active')
    document.getElementById('loading-overlay')?.classList.add('visible')
  } else {
    document.body.classList.remove('loading-active')
    document.getElementById('loading-overlay')?.classList.remove('visible')
  }
}

Loading.registrationEvent(handleLoadingChange)
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"global-indicator",children:"Global Indicator"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Setup
Loading.registrationEvent((event, detail) => {
  document.getElementById('spinner').style.display =
    detail.loading ? 'block' : 'none'
})

// Usage
Loading.show()
await fetchData()
Loading.hide()
`})}),`
`,n.jsx(e.h3,{id:"api-integration",children:"API Integration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`async function apiCall(url) {
  Loading.show()
  try {
    return await fetch(url).then(r => r.json())
  } finally {
    Loading.hide()
  }
}
`})}),`
`,n.jsx(e.h3,{id:"loading-decorator",children:"Loading Decorator"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function withLoading(fn) {
  return async (...args) => {
    Loading.show()
    try {
      return await fn(...args)
    } finally {
      Loading.hide()
    }
  }
}

const loadUsers = withLoading(async () => fetch('/users').then(r => r.json()))
`})}),`
`,n.jsx(e.p,{children:"The Loading class provides simple and reliable management of global loading indicators with automatic event system and safe counting of active operations."})]})}function h(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{h as default};
