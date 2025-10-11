import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-C8vOrmRQ.js";import{M as i}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/en/Composables/useBroadcastValueRef"}),`
`,n.jsx(e.h1,{id:"composable-usebroadcastvalueref",children:"Composable useBroadcastValueRef"}),`
`,n.jsx(e.p,{children:"Composable for creating a reactive variable synchronized between browser tabs via Broadcast Channel API. Automatically manages data transmission between open tabs of the same domain in real-time without using localStorage. Perfect for synchronizing application state, notifications, and data exchange between tabs."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Real-time synchronization"})," — instant data transmission between browser tabs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Broadcast Channel API"})," — uses native browser API for efficient communication"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic synchronization"})," — changes in one tab automatically reflect in all others"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton pattern"})," — channel reuse for same names"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Unique identification"})," — each browser session gets unique ID"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type safety"})," — full TypeScript support with generics"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default values"})," — supports initial values and factory functions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Session isolation"})," — data not transmitted between different browser sessions"]}),`
`]}),`
`,n.jsx(e.h2,{id:"function",children:"Function"}),`
`,n.jsx(e.h3,{id:"usebroadcastvalueref",children:n.jsx(e.code,{children:"useBroadcastValueRef"})}),`
`,n.jsx(e.p,{children:"Creates reactive variable synchronized between tabs via Broadcast Channel."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — channel name for communication between tabs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — default value or function to generate it (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Ref<T | string | undefined>"})," — Vue reactive variable synchronized between tabs"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Simple usage
const sharedCounter = useBroadcastValueRef('counter')

// With default value
const activeTab = useBroadcastValueRef('active-tab', 'home')

// With factory function
const sessionId = useBroadcastValueRef('session', () => Math.random().toString(36))
`})}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"basic-synchronization",children:"Basic Synchronization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Create synchronized variable
const counter = useBroadcastValueRef('counter', 0)

// In first tab
counter.value = 5

// In second tab automatically updates
console.log(counter.value) // 5

// Change in any tab reflects in all others
counter.value = 10
// All tabs get counter.value === 10 instantly
`})}),`
`,n.jsx(e.h3,{id:"singleton-pattern",children:"Singleton Pattern"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Repeated calls with same name return existing channel
const channel1 = useBroadcastValueRef('notifications', null)
const channel2 = useBroadcastValueRef('notifications', null)

console.log(channel1 === channel2) // true - same ref

channel1.value = { type: 'info', message: 'Hello!' }
console.log(channel2.value) // { type: 'info', message: 'Hello!' }
`})}),`
`,n.jsx(e.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,n.jsx(e.h3,{id:"notification-synchronization",children:"Notification Synchronization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

export default {
  setup() {
    const notification = useBroadcastValueRef('notification', null)

    const showNotification = (message, type = 'info') => {
      notification.value = {
        id: Date.now(),
        type,
        message,
        timestamp: new Date()
      }
    }

    return {
      notification,
      showNotification
    }
  }
}

// Template:
// <div v-if="notification" class="notification">
//   <span>{{ notification.message }}</span>
//   <button @click="notification = null">×</button>
// </div>
//
// Notification shows in all open tabs
`})}),`
`,n.jsx(e.h3,{id:"shared-counter",children:"Shared Counter"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

export default {
  setup() {
    const cartCount = useBroadcastValueRef('cart-count', 0)

    const addToCart = () => {
      cartCount.value = (cartCount.value || 0) + 1
    }

    const removeFromCart = () => {
      if (cartCount.value > 0) {
        cartCount.value--
      }
    }

    return {
      cartCount,
      addToCart,
      removeFromCart
    }
  }
}

// Template:
// <div>
//   <span class="badge">{{ cartCount }}</span>
//   <button @click="addToCart">Add</button>
//   <button @click="removeFromCart">Remove</button>
// </div>
//
// Counter syncs between all tabs
`})}),`
`,n.jsx(e.h2,{id:"state-synchronization",children:"State Synchronization"}),`
`,n.jsx(e.h3,{id:"active-tab",children:"Active Tab"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'
import { watch } from 'vue'

export default {
  setup() {
    const activeTab = useBroadcastValueRef('active-nav-tab', 'home')

    const setActiveTab = (tab) => {
      activeTab.value = tab
    }

    // Track changes from other tabs
    watch(activeTab, (newTab) => {
      console.log(\`Active tab changed to: \${newTab}\`)
    })

    return {
      activeTab,
      setActiveTab
    }
  }
}

// When switching tab in one window,
// all other windows synchronize
`})}),`
`,n.jsx(e.h3,{id:"authentication-status",children:"Authentication Status"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

export default {
  setup() {
    const isAuthenticated = useBroadcastValueRef('auth-status', false)
    const currentUser = useBroadcastValueRef('current-user', null)

    const login = (userData) => {
      currentUser.value = userData
      isAuthenticated.value = true
    }

    const logout = () => {
      currentUser.value = null
      isAuthenticated.value = false
    }

    return {
      isAuthenticated,
      currentUser,
      login,
      logout
    }
  }
}

// When logging in/out in one tab,
// all other tabs update instantly
`})}),`
`,n.jsx(e.h2,{id:"differences-from-usestorageref",children:"Differences from useStorageRef"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// useStorageRef - via localStorage (persistent storage)
const persistentData = useStorageRef('theme', 'light')
// - Data saved in localStorage
// - Synchronization via storage event
// - Slower data transmission
// - Data remains after browser closes

// useBroadcastValueRef - via Broadcast Channel (in memory)
const realtimeData = useBroadcastValueRef('active-users', [])
// - Data in memory (not saved)
// - Instant synchronization
// - Fast data transmission
// - Data lost when all tabs close
// - Isolation between browser sessions
`})}),`
`,n.jsx(e.h2,{id:"working-with-data-types",children:"Working with Data Types"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Numbers
const counter = useBroadcastValueRef<number>('counter', 0)
counter.value = 42

// Strings
const message = useBroadcastValueRef<string>('message', '')
message.value = 'Hello from another tab!'

// Objects
const userState = useBroadcastValueRef('user-state', {
  id: null,
  name: '',
  online: false
})
userState.value = { id: 1, name: 'John', online: true }

// Arrays
const activeUsers = useBroadcastValueRef<number[]>('active-users', [])
activeUsers.value = [1, 2, 3, 4, 5]
`})}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"cross-tab-chat",children:"Cross-tab Chat"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const chatMessages = useBroadcastValueRef('chat-messages', [])

const sendMessage = (text) => {
  const message = {
    id: Date.now(),
    text,
    timestamp: new Date()
  }

  chatMessages.value = [...(chatMessages.value || []), message]
}

// Messages appear in all open tabs instantly
`})}),`
`,n.jsx(e.h3,{id:"playback-synchronization",children:"Playback Synchronization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const playerState = useBroadcastValueRef('player', {
  isPlaying: false,
  currentTime: 0,
  track: null
})

const play = () => {
  playerState.value = { ...playerState.value, isPlaying: true }
}

const pause = () => {
  playerState.value = { ...playerState.value, isPlaying: false }
}

// Controlling player in one tab
// affects players in all others
`})}),`
`,n.jsx(e.h3,{id:"shared-filters",children:"Shared Filters"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const filters = useBroadcastValueRef('search-filters', {
  category: 'all',
  priceMin: 0,
  priceMax: 10000
})

const updateFilter = (key, value) => {
  filters.value = { ...filters.value, [key]: value }
}

// Filter changes synchronize
// between all open search pages
`})}),`
`,n.jsx(e.h2,{id:"unique-session-identification",children:"Unique Session Identification"}),`
`,n.jsx(e.p,{children:"Composable automatically creates unique ID for each browser session and saves it in localStorage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// On first run, random ID is generated
// broadcast__name_1234567__counter
//            ^^^^^^^^^ - unique session ID

// This ID is reused for all channels within one session
// Different browser sessions have different IDs and don't overlap
`})}),`
`,n.jsx(e.h2,{id:"broadcast-channel-api-features",children:"Broadcast Channel API Features"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Broadcast Channel works only:
// - Within same origin (protocol + domain + port)
// - Between tabs of same browser
// - In same browser session

// Does NOT work:
// - Between different browsers
// - Between different domains
// - In incognito mode between regular tabs
`})})]})}function h(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}export{h as default};
