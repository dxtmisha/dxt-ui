import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as o}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/functional/en/Classes/Ref/RouterItemRef"}),`
`,e.jsx(n.h1,{id:"routeritemref-class",children:"RouterItemRef Class"}),`
`,e.jsx(n.p,{children:"A static class for managing Vue Router. Provides global access to router instance and programmatic navigation through simple API with one-time initialization support."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Access"})," — static access to Vue Router instance from anywhere"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple Navigation"})," — push method for programmatic transitions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One-time Setup"})," — protection against accidental router overwriting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript Support"})," — full typing with RouteLocationRaw"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe Navigation"})," — router existence check before execution"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Router Integration"})," — direct work with official Vue Router"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Initialization"})," — router initialization at application level"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple API"})," — minimalist interface for basic operations"]}),`
`]}),`
`,e.jsx(n.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Sets Vue Router instance for global usage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"router: Router"})," — Vue Router instance"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { createRouter, createWebHistory } from 'vue-router'
import { RouterItemRef } from '@dxtmisha/functional'

// Create and set router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/users/:id', component: User }
  ]
})

RouterItemRef.set(router)
`})}),`
`,e.jsx(n.h3,{id:"setonetime",children:e.jsx(n.code,{children:"setOneTime"})}),`
`,e.jsx(n.p,{children:"Sets router only if it's not already set (overwrite protection)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"router: Router"})," — Vue Router instance"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Safe setup (only first time)
RouterItemRef.setOneTime(router)
RouterItemRef.setOneTime(anotherRouter) // Will be ignored

// Useful in plugins and libraries
function initializeLibrary(router) {
  RouterItemRef.setOneTime(router) // Won't overwrite existing
}
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Returns current Vue Router instance."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Router | undefined"})," — router instance or undefined"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Get router
const router = RouterItemRef.get()

if (router) {
  console.log('Current route:', router.currentRoute.value)
  console.log('Available routes:', router.getRoutes())
} else {
  console.log('Router not initialized')
}
`})}),`
`,e.jsx(n.h2,{id:"navigation-methods",children:"Navigation Methods"}),`
`,e.jsx(n.h3,{id:"push",children:e.jsx(n.code,{children:"push"})}),`
`,e.jsx(n.p,{children:"Programmatically navigates to new route."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to: string | RouteLocationRaw"})," — target route (string or object)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Simple string navigation
RouterItemRef.push('/users')
RouterItemRef.push('/products/123')

// Navigation with parameters
RouterItemRef.push({
  name: 'user-profile',
  params: { id: '123' }
})

// Navigation with query parameters
RouterItemRef.push({
  path: '/search',
  query: { q: 'laptop', category: 'electronics' }
})

// Navigation with hash
RouterItemRef.push({
  path: '/docs',
  hash: '#section-2'
})
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"application-initialization",children:"Application Initialization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterItemRef } from '@dxtmisha/functional'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App)
app.use(router)

// Global setup
RouterItemRef.set(router)
`})}),`
`,e.jsx(n.h3,{id:"navigation-in-components",children:"Navigation in Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Anywhere in application
export function navigateToUser(userId) {
  RouterItemRef.push({
    name: 'user',
    params: { id: userId }
  })
}

// In service class
class AuthService {
  static login(credentials) {
    // ... auth logic
    RouterItemRef.push('/dashboard')
  }

  static logout() {
    // ... logout logic
    RouterItemRef.push('/login')
  }
}
`})}),`
`,e.jsx(n.h3,{id:"conditional-navigation",children:"Conditional Navigation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function handleUserAction(user) {
  if (user.role === 'admin') {
    RouterItemRef.push('/admin/dashboard')
  } else if (user.role === 'moderator') {
    RouterItemRef.push('/moderator/panel')
  } else {
    RouterItemRef.push('/user/profile')
  }
}

// Navigation with check
function safeNavigate(path) {
  if (RouterItemRef.get()) {
    RouterItemRef.push(path)
  } else {
    console.warn('Router not initialized')
  }
}
`})}),`
`,e.jsx(n.p,{children:"The RouterItemRef class provides simple global access to Vue Router for programmatic navigation from any part of the application without needing to pass router instance around."})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default};
