import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as i}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/en/Classes/BroadcastMessage"}),`
`,n.jsx(e.h1,{id:"broadcastmessage-class",children:"BroadcastMessage Class"}),`
`,n.jsx(e.p,{children:"A class for handling BroadcastChannel messaging between browser tabs/windows. Enables real-time communication across different contexts of the same origin with automatic channel naming and message handling."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cross-tab communication"})," — send and receive messages between browser tabs and windows"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic channel naming"})," — unique channel names per browser instance stored in localStorage"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type-safe messaging"})," — full TypeScript support with generic message types"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Callback-based handling"})," — flexible message handling through callback functions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error handling"})," — graceful error handling with console logging"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SSR-safe"})," — automatically detects DOM runtime environment"]}),`
`]}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"constructor",children:"Constructor"}),`
`,n.jsx(e.p,{children:"Creates a new BroadcastMessage instance with specified channel name and optional callback."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — channel name identifier"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback?: (event: MessageEvent<Message>) => void"})," — optional callback for received messages"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Create channel with callback
const channel = new BroadcastMessage('user-updates', (event) => {
  console.log('Received message:', event.data)
})

// Create channel without callback (can be set later)
const notifications = new BroadcastMessage('notifications')
`})}),`
`,n.jsx(e.h3,{id:"post",children:n.jsx(e.code,{children:"post"})}),`
`,n.jsx(e.p,{children:"Sends a message to all connected tabs/windows on the same channel."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"message: Message"})," — message to broadcast"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"this"})," — for method chaining"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

const userChannel = new BroadcastMessage('user-updates')

// Send simple message
userChannel.post({ type: 'login', userId: 123 })

// Method chaining
userChannel
  .post({ type: 'status', value: 'online' })
  .post({ type: 'activity', timestamp: Date.now() })
`})}),`
`,n.jsx(e.h3,{id:"setcallback",children:n.jsx(e.code,{children:"setCallback"})}),`
`,n.jsx(e.p,{children:"Sets or updates the callback function for handling received messages."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (event: MessageEvent<Message>) => void"})," — callback function"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"this"})," — for method chaining"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

const channel = new BroadcastMessage('app-events')

// Set callback later
channel.setCallback((event) => {
  console.log('Event received:', event.data)
})

// Update callback
channel.setCallback((event) => {
  if (event.data.type === 'refresh') {
    location.reload()
  }
})
`})}),`
`,n.jsx(e.h2,{id:"advanced-examples",children:"Advanced Examples"}),`
`,n.jsx(e.h3,{id:"cross-tab-state-synchronization",children:"Cross-Tab State Synchronization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Create reactive state
const userStatus = ref('offline')

// Create broadcast channel
const statusChannel = new BroadcastMessage('user-status', (event) => {
  // Update local state when other tabs broadcast changes
  userStatus.value = event.data.status
  console.log('Status updated from another tab:', event.data.status)
})

// Function to update status and broadcast to other tabs
function updateStatus(newStatus) {
  userStatus.value = newStatus
  statusChannel.post({ status: newStatus, timestamp: Date.now() })
}

// Usage
updateStatus('online')  // Updates this tab and notifies others
`})}),`
`,n.jsx(e.h3,{id:"multi-tab-shopping-cart",children:"Multi-Tab Shopping Cart"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Define message types
interface CartMessage {
  action: 'add' | 'remove' | 'clear'
  productId?: number
  quantity?: number
}

// Create channel with typed messages
const cartChannel = new BroadcastMessage<CartMessage>('shopping-cart')

// Set up message handler
cartChannel.setCallback((event) => {
  const { action, productId, quantity } = event.data

  switch (action) {
    case 'add':
      console.log(\`Adding \${quantity} of product \${productId}\`)
      addToCart(productId, quantity)
      break
    case 'remove':
      console.log(\`Removing product \${productId}\`)
      removeFromCart(productId)
      break
    case 'clear':
      console.log('Clearing cart')
      clearCart()
      break
  }
})

// Broadcast cart updates
function addProduct(productId, quantity) {
  addToCart(productId, quantity)
  cartChannel.post({ action: 'add', productId, quantity })
}
`})}),`
`,n.jsx(e.h3,{id:"authentication-state-sync",children:"Authentication State Sync"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

interface AuthMessage {
  type: 'login' | 'logout' | 'token-refresh'
  userId?: number
  token?: string
}

const authChannel = new BroadcastMessage<AuthMessage>('auth-events', (event) => {
  switch (event.data.type) {
    case 'login':
      console.log('User logged in:', event.data.userId)
      location.reload()
      break

    case 'logout':
      console.log('User logged out, redirecting...')
      localStorage.removeItem('auth-token')
      window.location.href = '/login'
      break

    case 'token-refresh':
      console.log('Token refreshed')
      localStorage.setItem('auth-token', event.data.token)
      break
  }
})

// Broadcast login
function handleLogin(userId, token) {
  localStorage.setItem('auth-token', token)
  authChannel.post({ type: 'login', userId, token })
}

// Broadcast logout
function handleLogout() {
  localStorage.removeItem('auth-token')
  authChannel.post({ type: 'logout' })
}
`})}),`
`,n.jsx(e.h3,{id:"real-time-notifications",children:"Real-Time Notifications"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'error' | 'success'
  timestamp: number
}

const notificationChannel = new BroadcastMessage<Notification>('notifications')

// Set up notification handler
notificationChannel.setCallback((event) => {
  const notification = event.data

  // Display notification in all tabs
  showNotification(notification.title, notification.message, notification.type)

  if (notification.type === 'error') {
    playErrorSound()
  }
})

// Send notification to all tabs
function broadcastNotification(title, message, type = 'info') {
  const notification = {
    id: crypto.randomUUID(),
    title,
    message,
    type,
    timestamp: Date.now()
  }

  notificationChannel.post(notification)
}

// Usage
broadcastNotification('New Message', 'You have a new message from John', 'info')
`})}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"unique-channel-naming",children:"Unique Channel Naming"}),`
`,n.jsxs(e.p,{children:["Each browser instance generates a unique identifier stored in localStorage (",n.jsx(e.code,{children:"__broadcast-name"}),"). This ensures that channels are isolated between different browser instances while allowing communication within the same instance across tabs."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Channel name format: name_{random_7_digits}__your-channel-name
// Example: name_1234567__user-updates
`})}),`
`,n.jsx(e.h3,{id:"error-handling",children:"Error Handling"}),`
`,n.jsx(e.p,{children:"BroadcastMessage gracefully handles errors and logs them to console:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const channel = new BroadcastMessage('my-channel')
// If BroadcastChannel is not supported or initialization fails,
// error is logged: "BroadcastMessage my-channel: [error details]"
`})}),`
`,n.jsx(e.h3,{id:"ssr-compatibility",children:"SSR Compatibility"}),`
`,n.jsxs(e.p,{children:["The class automatically detects DOM runtime environment using ",n.jsx(e.code,{children:"isDomRuntime()"}),", making it safe to use in SSR/SSG contexts where BroadcastChannel API is not available."]}),`
`,n.jsx(e.h2,{id:"type-safety",children:"Type Safety"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Define your message structure
interface UserUpdate {
  userId: number
  action: 'online' | 'offline' | 'typing'
  timestamp: number
}

// Create typed channel
const channel = new BroadcastMessage<UserUpdate>('users')

// TypeScript ensures type safety
channel.post({
  userId: 123,
  action: 'online',
  timestamp: Date.now()
}) // ✓ Valid

channel.post({ invalid: 'data' }) // ✗ TypeScript error
`})}),`
`,n.jsx(e.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,n.jsx(e.p,{children:"BroadcastChannel API is supported in:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome/Edge 54+"}),`
`,n.jsx(e.li,{children:"Firefox 38+"}),`
`,n.jsx(e.li,{children:"Safari 15.4+"}),`
`,n.jsx(e.li,{children:"Opera 41+"}),`
`]}),`
`,n.jsx(e.p,{children:"For older browsers, consider using a polyfill or fallback mechanism."})]})}function u(a={}){const{wrapper:e}={...s(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(t,{...a})}):t(a)}export{u as default};
