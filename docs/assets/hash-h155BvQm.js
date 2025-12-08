import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Classes/Hash"}),`
`,e.jsx(n.h1,{id:"hash-class",children:"Hash Class"}),`
`,e.jsx(n.p,{children:"A static class for working with URL hash data with automatic browser synchronization. Provides application state persistence in URL, change observation system, and automatic data type conversion."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"URL Synchronization"})," — automatic browser hash URL part updates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Watch System"})," — callbacks for specific variable changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Conversion"})," — automatic string to target type conversion"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loop Protection"})," — prevents infinite URL updates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Function Support"})," — default values through functions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"URL Parsing"})," — automatic parsing of existing hash parameters"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript Support"})," — type safety with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistence"})," — data preservation between page reloads"]}),`
`]}),`
`,e.jsx(n.h2,{id:"data-management-methods",children:"Data Management Methods"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Gets variable value from hash."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — variable name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — default value or function"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — variable value"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional'

// Simple retrieval
const userId = Hash.get('userId', '12345')

// With default function
const timestamp = Hash.get('timestamp', () => Date.now())

// Typed retrieval
const settings = Hash.get<{theme: string}>('settings', {theme: 'dark'})
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Sets variable value in hash."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — variable name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: T | (() => T)"})," — new value or function"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Simple setting
Hash.set('userId', '12345')

// Setting object
Hash.set('settings', { theme: 'dark', lang: 'en' })

// With function
Hash.set('counter', () => Math.random())

// Removal
Hash.set('temp', undefined)
`})}),`
`,e.jsx(n.h3,{id:"addwatch",children:e.jsx(n.code,{children:"addWatch"})}),`
`,e.jsx(n.p,{children:"Adds watcher for variable changes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — variable name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (value: T) => void"})," — callback function"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Watch theme
Hash.addWatch('theme', (theme) => {
  document.body.className = \`theme-\${theme}\`
})

// Watch user
Hash.addWatch('userId', (userId) => {
  if (userId) loadUserData(userId)
})
`})}),`
`,e.jsx(n.h3,{id:"reload",children:e.jsx(n.code,{children:"reload"})}),`
`,e.jsx(n.p,{children:"Force updates data from current URL hash."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// After programmatic location.hash change
location.hash = '#param:value'
Hash.reload()

// On app initialization
Hash.reload()
const currentPage = Hash.get('page', 'home')
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"state-management",children:"State Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Initialization
Hash.reload()

// Setup watchers
Hash.addWatch('page', (page) => navigateTo(page))
Hash.addWatch('filters', (filters) => applyFilters(filters))

// Programmatic changes
Hash.set('page', 'products')
Hash.set('filters', { category: 'electronics' })
`})}),`
`,e.jsx(n.h3,{id:"form-persistence",children:"Form Persistence"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Restore form state
const formData = Hash.get('formData', {})
restoreForm(formData)

// Save on changes
form.addEventListener('input', () => {
  Hash.set('formData', getFormData(form))
})
`})}),`
`,e.jsx(n.h3,{id:"navigation",children:"Navigation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class Router {
  constructor() {
    Hash.addWatch('route', (route) => this.navigate(route))
    Hash.reload()
  }

  navigate(route) {
    loadPage(route || 'home')
  }

  go(route) {
    Hash.set('route', route)
  }
}
`})}),`
`,e.jsx(n.p,{children:"The Hash class provides simple and reliable synchronization of JavaScript application state with browser URL, supporting bookmarks and back/forward buttons."})]})}function m(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{m as default};
