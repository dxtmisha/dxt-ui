import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/en/Classes/CacheStatic"}),`
`,n.jsx(e.h1,{id:"cachestatic-class",children:"CacheStatic Class"}),`
`,n.jsx(e.p,{children:"Static wrapper class around Cache for global caching during code execution. Provides a singleton Cache instance accessible from anywhere in the application for cross-component data sharing and performance optimization."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global singleton cache"})," — single shared Cache instance for entire application"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Static interface"})," — access cache without creating instances"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cross-component sharing"})," — share cached data between different parts of application"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Performance optimization"})," — reduce redundant computations across components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Simple API"})," — same interface as Cache class but accessible statically"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic lifecycle management"})," — Cache instance created automatically"]}),`
`]}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Synchronously retrieves data from global cache or executes callback to generate new data."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — unique cache name/key in global cache"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => T"})," — function to execute if cache miss or invalidation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison?: any[]"})," — array of values for cache invalidation comparison (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"T"})," — cached data or result of callback execution"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { CacheStatic } from '@dxtmisha/functional'

// Cache expensive computation globally
const expensiveResult = CacheStatic.get('global-computation', () => {
  console.log('Performing expensive computation...')
  // Simulate heavy computation
  let sum = 0
  for (let i = 0; i < 1000000; i++) {
    sum += Math.random()
  }
  return { result: sum, timestamp: Date.now() }
})

// Accessible from anywhere in application
const sameResult = CacheStatic.get('global-computation', () => {
  console.log('This will not execute')
  return { result: 0, timestamp: 0 }
})
// Returns cached data without re-computation

// Different components can share cached data
class ComponentA {
  getData() {
    return CacheStatic.get('shared-data', () => {
      console.log('ComponentA: Loading shared data')
      return { source: 'ComponentA', data: [1, 2, 3] }
    })
  }
}

class ComponentB {
  getData() {
    return CacheStatic.get('shared-data', () => {
      console.log('ComponentB: This will not execute')
      return { source: 'ComponentB', data: [4, 5, 6] }
    })
  }
}

const compA = new ComponentA()
const compB = new ComponentB()

const dataA = compA.getData() // Executes callback
const dataB = compB.getData() // Returns cached data from ComponentA
console.log(dataA === dataB) // true - same cached object
`})}),`
`,n.jsx(e.h2,{id:"cache-invalidation",children:"Cache Invalidation"}),`
`,n.jsx(e.p,{children:"Global cache invalidation works the same as regular Cache class:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Global cache with dependencies
let currentTheme = 'dark'
let currentLanguage = 'en'

const getAppConfig = () => CacheStatic.get(
  'app-config',
  () => {
    console.log(\`Loading config: theme=\${currentTheme}, lang=\${currentLanguage}\`)
    return {
      theme: currentTheme,
      language: currentLanguage,
      features: getFeaturesByTheme(currentTheme),
      translations: getTranslationsByLanguage(currentLanguage)
    }
  },
  [currentTheme, currentLanguage] // Global cache invalidates when these change
)

// First call
const config1 = getAppConfig() // Executes callback
console.log(config1.theme) // 'dark'

// Cached call
const config1Cached = getAppConfig() // Returns cached data

// Change dependency - global cache invalidates
currentTheme = 'light'
const config2 = getAppConfig() // Cache invalidated, executes callback again
console.log(config2.theme) // 'light'

function getFeaturesByTheme(theme) {
  return theme === 'dark' ? ['night-mode', 'blue-light-filter'] : ['day-mode']
}

function getTranslationsByLanguage(lang) {
  return lang === 'en' ? { hello: 'Hello' } : { hello: 'Привет' }
}
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"global-configuration",children:"Global Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class AppConfig {
  static getConfig() {
    return CacheStatic.get('app-config', () => ({
      apiUrl: process.env.API_URL || '/api',
      features: { darkMode: true, notifications: true },
      version: '1.0.0'
    }))
  }

  static isFeatureEnabled(feature) {
    return this.getConfig().features[feature] || false
  }
}

// Usage across modules
console.log(AppConfig.getConfig().version) // Loads configuration
console.log(AppConfig.isFeatureEnabled('darkMode')) // Uses cached
`})}),`
`,n.jsx(e.h3,{id:"component-data-sharing",children:"Component Data Sharing"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class UserSession {
  static getCurrentUser() {
    return CacheStatic.get('current-user', () => ({
      id: 1,
      name: 'John Doe',
      role: 'admin',
      permissions: ['read', 'write']
    }))
  }

  static hasPermission(permission) {
    const user = this.getCurrentUser()
    return user?.permissions.includes(permission) || false
  }
}

// Usage
console.log(UserSession.getCurrentUser()) // Loads user
console.log(UserSession.hasPermission('write')) // Uses cached
`})}),`
`,n.jsx(e.h3,{id:"cache-with-invalidation",children:"Cache with Invalidation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let currentTheme = 'dark'
let language = 'en'

function getThemeConfig() {
  return CacheStatic.get(
    'theme-config',
    () => ({
      theme: currentTheme,
      colors: currentTheme === 'dark' ? ['#000', '#333'] : ['#fff', '#ccc'],
      language
    }),
    [currentTheme, language] // Invalidation on change
  )
}

console.log(getThemeConfig()) // First call
currentTheme = 'light' // Change dependency
console.log(getThemeConfig()) // Cache invalidated, recalculated
`})}),`
`,n.jsx(e.p,{children:"The CacheStatic class provides a simple way to globally cache data in applications, allowing components to efficiently share computed values and configurations."})]})}function g(a={}){const{wrapper:e}={...c(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(t,{...a})}):t(a)}export{g as default};
