import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C8vOrmRQ.js";import{M as o}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/functional/en/Classes/Cookie"}),`
`,e.jsx(n.h1,{id:"cookie-class",children:"Cookie Class"}),`
`,e.jsx(n.p,{children:"Class for working with browser cookies with automatic serialization, singleton pattern, and integration with CookieBlock for privacy compliance. Provides type-safe cookie operations with configurable options like max-age, SameSite, and custom attributes."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-safe cookie management"})," — full TypeScript support with generics for cookie data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic serialization"})," — handles JSON serialization/deserialization of complex data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton pattern"})," — reuses instances for same cookie names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Privacy compliance"})," — integrates with CookieBlock to respect user cookie preferences"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configurable options"})," — supports max-age, SameSite, and custom cookie attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Function value support"})," — accepts functions as values for dynamic cookie generation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser compatibility"})," — safe usage with server-side rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic initialization"})," — reads existing cookies on class load"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates Cookie instance for specified cookie name. Uses singleton pattern."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — cookie name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cookie } from '@dxtmisha/functional'

// Create cookie instances
const userTheme = new Cookie('user-theme')
const sessionToken = new Cookie('session-token')

// Singleton behavior
const sameInstance = new Cookie('user-theme')
console.log(userTheme === sameInstance) // true
`})}),`
`,e.jsx(n.h2,{id:"data-operations",children:"Data Operations"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Retrieves cookie value with optional default value and cookie options."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — default value or function if cookie doesn't exist (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — cookie options for setting default (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | string | undefined"})," — cookie value, default value, or undefined"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const themeCookie = new Cookie('theme')

// Get existing cookie
const currentTheme = themeCookie.get()
console.log(currentTheme) // undefined if not set, or stored value

// Get with default value
const theme = themeCookie.get('light')
console.log(theme) // 'light' if cookie doesn't exist, sets and returns default

// Get with default function
const settings = new Cookie('settings')
const config = settings.get(() => ({
  theme: 'dark',
  language: 'en',
  notifications: true
}))

// Get with options for default setting
const preferences = new Cookie('preferences')
const prefs = preferences.get(
  { sidebar: true, tooltips: false },
  { age: 30 * 24 * 60 * 60 } // 30 days
)
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Updates cookie data with optional configuration."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T | string | (() => (T | string))"})," — value to store or function that returns value (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — cookie configuration options (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userCookie = new Cookie('user-data')

// Set simple value
userCookie.set('john_doe')

// Set object (automatically serialized)
userCookie.set({
  id: 1,
  name: 'John Doe',
  preferences: { theme: 'dark' }
})

// Set with function
userCookie.set(() => ({
  sessionId: Math.random().toString(36),
  timestamp: Date.now()
}))

// Set with options
userCookie.set('important-data', {
  age: 365 * 24 * 60 * 60, // 1 year in seconds
  sameSite: 'strict',
  arguments: ['Secure', 'HttpOnly']
})
`})}),`
`,e.jsx(n.h3,{id:"remove",children:e.jsx(n.code,{children:"remove"})}),`
`,e.jsx(n.p,{children:"Removes cookie by setting empty value."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`userCookie.remove()
// Equivalent to: userCookie.set('')
`})}),`
`,e.jsx(n.h2,{id:"cookie-options",children:"Cookie Options"}),`
`,e.jsxs(n.h3,{id:"cookieoptions-interface",children:[e.jsx(n.code,{children:"CookieOptions"})," Interface"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface CookieOptions {
  /** Cookie max-age in seconds (default: 7 days) */
  age?: number

  /** SameSite attribute: 'strict' | 'lax' (default: 'strict') */
  sameSite?: 'strict' | 'lax'

  /** Additional cookie attributes */
  arguments?: string[]
}
`})}),`
`,e.jsx(n.h3,{id:"options-examples",children:"Options Examples"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const secureCookie = new Cookie('secure-data')

// Basic options
secureCookie.set('sensitive-data', {
  age: 60 * 60, // 1 hour
  sameSite: 'strict'
})

// Advanced options with custom attributes
secureCookie.set('auth-token', {
  age: 24 * 60 * 60, // 24 hours
  sameSite: 'lax',
  arguments: ['Secure', 'HttpOnly', 'Path=/api']
})

// Long-term storage
const rememberMeCookie = new Cookie('remember-me')
rememberMeCookie.set(true, {
  age: 365 * 24 * 60 * 60 // 1 year
})
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"user-authentication",children:"User Authentication"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class AuthManager {
  constructor() {
    this.tokenCookie = new Cookie('auth-token')
    this.userCookie = new Cookie('user-data')
  }

  login(credentials) {
    const authResponse = {
      token: 'jwt-token-here',
      user: { id: 1, name: 'John Doe', role: 'admin' },
      expiresIn: 24 * 60 * 60 // 24 hours
    }

    this.tokenCookie.set(authResponse.token, {
      age: authResponse.expiresIn,
      sameSite: 'strict'
    })

    this.userCookie.set(authResponse.user, {
      age: authResponse.expiresIn
    })

    return authResponse
  }

  getCurrentUser() {
    return this.userCookie.get()
  }

  isAuthenticated() {
    return !!(this.tokenCookie.get() && this.userCookie.get())
  }

  logout() {
    this.tokenCookie.remove()
    this.userCookie.remove()
  }
}

// Usage
const auth = new AuthManager()
auth.login({ username: 'john', password: 'secret' })
console.log('Authenticated:', auth.isAuthenticated())
`})}),`
`,e.jsx(n.h3,{id:"shopping-cart",children:"Shopping Cart"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class ShoppingCart {
  constructor() {
    this.cartCookie = new Cookie('shopping-cart')
  }

  getItems() {
    return this.cartCookie.get([])
  }

  addItem(product, quantity = 1) {
    const items = this.getItems()
    const existingIndex = items.findIndex(item => item.id === product.id)

    if (existingIndex >= 0) {
      items[existingIndex].quantity += quantity
    } else {
      items.push({ ...product, quantity })
    }

    this.cartCookie.set(items, { age: 30 * 24 * 60 * 60 }) // 30 days
    return items
  }

  getTotalPrice() {
    return this.getItems().reduce((total, item) =>
      total + (item.price * item.quantity), 0
    )
  }

  clear() {
    this.cartCookie.remove()
  }
}

// Usage
const cart = new ShoppingCart()
cart.addItem({ id: 1, name: 'Laptop', price: 999.99 })
console.log('Total price:', cart.getTotalPrice())
`})}),`
`,e.jsx(n.h3,{id:"user-settings",children:"User Settings"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userSettings = new Cookie('user-settings')

// Get settings with defaults
const settings = userSettings.get({
  theme: 'light',
  language: 'en',
  notifications: true
})

// Update settings
function updateTheme(newTheme) {
  const current = userSettings.get()
  userSettings.set({ ...current, theme: newTheme })
}

updateTheme('dark')
console.log('Theme:', userSettings.get().theme)
`})}),`
`,e.jsx(n.p,{children:"The Cookie class provides a powerful, privacy-compliant way to manage browser cookies with automatic serialization and flexible configuration options, making it ideal for modern web applications."})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
