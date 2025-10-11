import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-C8vOrmRQ.js";import{M as s}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/en/Composables/useLoadingRef"}),`
`,n.jsx(e.h1,{id:"composable-useloadingref",children:"Composable useLoadingRef"}),`
`,n.jsx(e.p,{children:"Composable for tracking global application loading status. Provides a reactive variable that automatically updates when loading state changes through the Loading class. Perfect for displaying global loading indicators, blocking UI during async operations, and coordinating multiple loading processes."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global loading status"})," — single place to manage loading state for entire application"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reactivity"})," — automatic updates when loading status changes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Loading counter"})," — supports multiple concurrent loading operations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic subscription"})," — composable automatically subscribes to Loading events"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type safety"})," — full TypeScript support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Easy integration"})," — easily integrates with any Vue components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Centralized control"})," — all components use single source of truth"]}),`
`]}),`
`,n.jsx(e.h2,{id:"function",children:"Function"}),`
`,n.jsx(e.h3,{id:"useloadingref",children:n.jsx(e.code,{children:"useLoadingRef"})}),`
`,n.jsx(e.p,{children:"Creates a reactive variable tracking global loading status."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameters:"})," none"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ShallowRef<boolean>"})," — reactive variable with loading status"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useLoadingRef } from '@dxtmisha/functional'

// Create reactive variable
const isLoading = useLoadingRef()

// isLoading.value === true when there are active loads
// isLoading.value === false when no loads
`})}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"basic-loading-tracking",children:"Basic Loading Tracking"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useLoadingRef } from '@dxtmisha/functional'
import { Loading } from '@dxtmisha/functional'

// In component
const isLoading = useLoadingRef()

// Show loader
Loading.show()
console.log(isLoading.value) // true

// Hide loader
Loading.hide()
console.log(isLoading.value) // false
`})}),`
`,n.jsx(e.h3,{id:"working-with-multiple-loads",children:"Working with Multiple Loads"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useLoadingRef, Loading } from '@dxtmisha/functional'

const isLoading = useLoadingRef()

// First loading operation
Loading.show()
console.log(isLoading.value) // true (counter = 1)

// Second loading operation
Loading.show()
console.log(isLoading.value) // true (counter = 2)

// Complete first operation
Loading.hide()
console.log(isLoading.value) // true (counter = 1)

// Complete second operation
Loading.hide()
console.log(isLoading.value) // false (counter = 0)
`})}),`
`,n.jsx(e.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,n.jsx(e.h3,{id:"global-loading-indicator",children:"Global Loading Indicator"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useLoadingRef } from '@dxtmisha/functional'

export default {
  setup() {
    const isLoading = useLoadingRef()

    return { isLoading }
  }
}

// Template:
// <div v-if="isLoading" class="global-loader">
//   <div class="spinner"></div>
//   <p>Loading...</p>
// </div>
`})}),`
`,n.jsx(e.h3,{id:"integration-with-api-requests",children:"Integration with API Requests"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'
import { useLoadingRef } from '@dxtmisha/functional'

export default {
  setup() {
    const isLoading = useLoadingRef()

    const fetchUserData = async () => {
      Loading.show()

      try {
        const response = await fetch('/api/user')
        const data = await response.json()
      } catch (error) {
        console.error('Error:', error)
      } finally {
        Loading.hide()
      }
    }

    return { isLoading, fetchUserData }
  }
}

// Template:
// <button @click="fetchUserData" :disabled="isLoading">
//   Load Data
// </button>
`})}),`
`,n.jsx(e.h2,{id:"integration-with-loading-class",children:"Integration with Loading Class"}),`
`,n.jsxs(e.p,{children:["Composable is tightly integrated with ",n.jsx(e.code,{children:"Loading"})," class:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'
import { useLoadingRef } from '@dxtmisha/functional'

// In component A
const isLoading = useLoadingRef()

// Anywhere in application
Loading.show() // isLoading.value automatically becomes true

// In another component B
Loading.hide() // isLoading.value in component A automatically updates

// Check status
console.log(Loading.is()) // true/false

// All components with useLoadingRef() will be synchronized
`})})]})}function h(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{h as default};
