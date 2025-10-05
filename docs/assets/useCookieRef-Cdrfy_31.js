import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DB_maGql.js";import{M as t}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/en/Composables/useCookieRef"}),`
`,e.jsx(n.h1,{id:"composable-usecookieref",children:"Composable useCookieRef"}),`
`,e.jsx(n.p,{children:"Composable for creating a reactive variable synchronized with browser cookies. Automatically manages reading and writing values to cookies with support for cross-tab synchronization via Broadcast Channel API, expiration settings, and singleton pattern for efficient reuse."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two-way synchronization"})," — automatic sync between ref and cookies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-tab synchronization"})," — changes in one tab instantly reflect in all others via Broadcast Channel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic persistence"})," — ref changes automatically saved to cookies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expiration settings"})," — supports expires, max-age and other cookie options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton pattern"})," — reuses ref for same cookie names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type safety"})," — full TypeScript support with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default values"})," — supports initial values and factory functions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cookie integration"})," — uses Cookie class for cookie management"]}),`
`]}),`
`,e.jsx(n.h2,{id:"function",children:"Function"}),`
`,e.jsx(n.h3,{id:"usecookieref",children:e.jsx(n.code,{children:"useCookieRef"})}),`
`,e.jsx(n.p,{children:"Creates reactive variable synchronized with browser cookies."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — cookie name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — default value or function to generate it (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — additional cookie parameters (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Ref<T | string | undefined>"})," — Vue reactive variable linked to cookie"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"CookieOptions:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"expires?: number | Date"})," — expiration date"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — path for cookie (default '/')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"domain?: string"})," — domain for cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"secure?: boolean"})," — use HTTPS only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sameSite?: 'Strict' | 'Lax' | 'None'"})," — SameSite policy"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Simple usage
const userToken = useCookieRef('token')

// With default value
const theme = useCookieRef('theme', 'light')

// With options (expires in 7 days)
const rememberMe = useCookieRef('remember', true, {
  expires: 7,
  path: '/',
  sameSite: 'Lax'
})
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"basic-synchronization",children:"Basic Synchronization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Create ref synchronized with cookie
const userTheme = useCookieRef('theme', 'light')

// When ref changes - cookie automatically updates
userTheme.value = 'dark'
// document.cookie contains: 'theme=dark'

// On page reload, value is restored
console.log(userTheme.value) // 'dark'
`})}),`
`,e.jsx(n.h3,{id:"singleton-pattern",children:"Singleton Pattern"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Repeated calls with same name return existing ref
const token1 = useCookieRef('auth-token', '')
const token2 = useCookieRef('auth-token', '')

console.log(token1 === token2) // true - same ref

token1.value = 'abc123'
console.log(token2.value) // 'abc123' - both point to same ref
`})}),`
`,e.jsx(n.h3,{id:"cross-tab-synchronization",children:"Cross-tab Synchronization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

// In first tab
const userState = useCookieRef('user-online', 'active')
userState.value = 'away'

// In second tab automatically updates instantly
// userState.value === 'away' (thanks to Broadcast Channel)

// In third tab
const sameState = useCookieRef('user-online', 'active')
console.log(sameState.value) // 'away'

// Changes in any tab sync with all others
`})}),`
`,e.jsx(n.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,e.jsx(n.h3,{id:"user-settings",children:"User Settings"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

export default {
  setup() {
    const theme = useCookieRef('user-theme', 'light', {
      expires: 365 // 1 year
    })

    const language = useCookieRef('user-language', 'en', {
      expires: 365
    })

    const fontSize = useCookieRef('font-size', 16, {
      expires: 30 // 30 days
    })

    return {
      theme,
      language,
      fontSize
    }
  }
}

// Template:
// <div>
//   <select v-model="theme">
//     <option value="light">Light</option>
//     <option value="dark">Dark</option>
//   </select>
//   <select v-model="language">
//     <option value="en">English</option>
//     <option value="ru">Русский</option>
//   </select>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"authentication-with-remember-me",children:'Authentication with "Remember Me"'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

export default {
  setup() {
    const authToken = useCookieRef('auth-token', '', {
      expires: 7, // 7 days
      secure: true,
      sameSite: 'Strict'
    })

    const rememberMe = useCookieRef('remember-me', false)

    const login = (token) => {
      const expires = rememberMe.value ? 30 : 1 // 30 days or 1 day
      authToken.value = token

      // Update cookie options
      useCookieRef('auth-token', token, {
        expires,
        secure: true,
        sameSite: 'Strict'
      })
    }

    const logout = () => {
      authToken.value = ''
      rememberMe.value = false
    }

    return {
      authToken,
      rememberMe,
      login,
      logout
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"cookie-settings",children:"Cookie Settings"}),`
`,e.jsx(n.h3,{id:"expiration",children:"Expiration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Expires in days
const token = useCookieRef('token', '', {
  expires: 7 // deleted after 7 days
})

// Expires as Date
const session = useCookieRef('session', '', {
  expires: new Date('2025-12-31')
})

// Without expires (session cookie, deleted on browser close)
const tempData = useCookieRef('temp', '')
`})}),`
`,e.jsx(n.h3,{id:"security",children:"Security"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// HTTPS only
const secureToken = useCookieRef('secure-token', '', {
  secure: true,
  sameSite: 'Strict'
})

// Cross-site requests
const apiToken = useCookieRef('api-token', '', {
  secure: true,
  sameSite: 'None' // requires secure: true
})
`})}),`
`,e.jsx(n.h3,{id:"path-and-domain",children:"Path and Domain"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// For specific path
const adminPrefs = useCookieRef('admin-prefs', {}, {
  path: '/admin'
})

// For subdomain
const sharedData = useCookieRef('shared', '', {
  domain: '.example.com' // accessible for all subdomains
})
`})}),`
`,e.jsx(n.h2,{id:"working-with-data-types",children:"Working with Data Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Strings
const username = useCookieRef<string>('username', '')
username.value = 'John'

// Numbers (automatic serialization)
const count = useCookieRef<number>('count', 0)
count.value = 42

// Booleans
const accepted = useCookieRef<boolean>('accepted', false)
accepted.value = true

// Objects (JSON serialization)
const userPrefs = useCookieRef('prefs', {
  theme: 'dark',
  notifications: true
})
userPrefs.value = { theme: 'light', notifications: false }
`})}),`
`,e.jsx(n.h2,{id:"integration-with-cookie-class",children:"Integration with Cookie Class"}),`
`,e.jsxs(n.p,{children:["Composable uses ",e.jsx(n.code,{children:"Cookie"})," class for cookie management:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cookie } from '@dxtmisha/functional'

// Direct class usage
const cookie = new Cookie('theme')
cookie.set('dark', { expires: 30 })
console.log(cookie.get()) // 'dark'

// useCookieRef automatically synchronizes
const themeRef = useCookieRef('theme')
console.log(themeRef.value) // 'dark'

// Changes via Cookie reflect in ref (via Broadcast Channel)
cookie.set('light')
// themeRef.value automatically updates in all tabs
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"cookie-consent-gdpr",children:"Cookie Consent (GDPR)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cookieConsent = useCookieRef('cookie-consent', false, {
  expires: 365,
  sameSite: 'Lax'
})

const acceptCookies = () => {
  cookieConsent.value = true
}

// In template:
// <div v-if="!cookieConsent" class="cookie-banner">
//   <p>We use cookies...</p>
//   <button @click="acceptCookies">Accept</button>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"shopping-cart",children:"Shopping Cart"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cart = useCookieRef<CartItem[]>('shopping-cart', [], {
  expires: 7
})

const addToCart = (item) => {
  cart.value = [...cart.value, item]
}

const removeFromCart = (itemId) => {
  cart.value = cart.value.filter(item => item.id !== itemId)
}

// Cart syncs between tabs automatically
`})}),`
`,e.jsx(n.h3,{id:"recently-viewed-tracking",children:"Recently Viewed Tracking"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const recentlyViewed = useCookieRef<number[]>('recently-viewed', [], {
  expires: 30
})

const addToRecent = (productId) => {
  const recent = [productId, ...recentlyViewed.value.filter(id => id !== productId)]
  recentlyViewed.value = recent.slice(0, 10) // Keep last 10
}
`})}),`
`,e.jsx(n.h2,{id:"broadcast-channel-synchronization-benefits",children:"Broadcast Channel Synchronization Benefits"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Unlike regular ref with cookie:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Instant cross-tab synchronization (no reload required)"}),`
`,e.jsx(n.li,{children:"✅ Real-time updates (no delays)"}),`
`,e.jsx(n.li,{children:"✅ Efficient data transmission (not via localStorage)"}),`
`,e.jsx(n.li,{children:"✅ Browser session isolation"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How it works:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Change in one tab → saved to cookie"}),`
`,e.jsxs(n.li,{children:["Via Broadcast Channel (",e.jsx(n.code,{children:"__cookie:${name}"}),") message is sent"]}),`
`,e.jsx(n.li,{children:"All other tabs receive update instantly"}),`
`,e.jsx(n.li,{children:"Ref in all tabs updates automatically"}),`
`]})]})}function u(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
