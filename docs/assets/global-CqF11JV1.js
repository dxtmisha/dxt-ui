import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Dqnce8mp.js";import{M as s}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/en/Classes/Global"}),`
`,n.jsx(e.h1,{id:"global-class",children:"Global Class"}),`
`,n.jsx(e.p,{children:"A static class for managing global application data. Provides a simple and secure way to store and retrieve global configurations, settings, and data with protection against re-initialization."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"One-time initialization"})," — data can be added only once to prevent accidental overwrites"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type-safe data retrieval"})," — TypeScript generics support for typed access"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global storage"})," — centralized place for storing application configurations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Simple API"})," — just two methods for working with global data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Conflict protection"})," — prevents re-initialization of global data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Memory efficient"})," — uses simple object copying without deep cloning"]}),`
`]}),`
`,n.jsx(e.h2,{id:"static-methods",children:"Static Methods"}),`
`,n.jsx(e.h3,{id:"add",children:n.jsx(e.code,{children:"add"})}),`
`,n.jsx(e.p,{children:"Adds global data. This method works only once to prevent accidental overwrites."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, any>"})," — object with global data"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional'

// Initialize global data (executed once)
Global.add({
  apiUrl: 'https://api.example.com',
  appName: 'MyApplication',
  version: '1.0.0',
  features: {
    darkMode: true,
    notifications: false
  },
  maxRetries: 3
})

// Attempt to re-initialize will be ignored
Global.add({
  apiUrl: 'https://different-api.com' // This will not overwrite data
})
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Returns a value by its name with typing support."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — property name to retrieve"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"R"})," — value of specified type or undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Get data with automatic type inference
const apiUrl = Global.get('apiUrl')
console.log(apiUrl) // 'https://api.example.com'

// Get with explicit type specification
const features = Global.get<{ darkMode: boolean; notifications: boolean }>('features')
console.log(features.darkMode) // true

// Get primitive types
const maxRetries = Global.get<number>('maxRetries')
console.log(maxRetries) // 3

// Get non-existent property
const nonExistent = Global.get('nonExistent')
console.log(nonExistent) // undefined
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"application-configuration",children:"Application Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class AppConfig {
  static initialize() {
    Global.add({
      api: {
        baseUrl: process.env.API_BASE_URL || 'https://api.myapp.com',
        timeout: 10000,
        retries: 3
      },
      ui: {
        theme: 'light',
        language: 'en',
        animations: true
      },
      features: {
        newDashboard: true,
        advancedSearch: false
      },
      app: {
        name: 'MyApplication',
        version: '2.1.0',
        environment: process.env.NODE_ENV || 'production'
      }
    })
  }

  static getApiConfig() {
    return Global.get('api')
  }

  static isFeatureEnabled(featureName) {
    const features = Global.get('features')
    return features ? features[featureName] || false : false
  }
}

// Usage
AppConfig.initialize()
const apiConfig = AppConfig.getApiConfig()
console.log(\`API URL: \${apiConfig.baseUrl}\`)
`})}),`
`,n.jsx(e.h3,{id:"constants-system",children:"Constants System"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const AppConstants = {
  setup() {
    Global.add({
      constants: {
        limits: {
          maxFileSize: 10 * 1024 * 1024, // 10MB
          sessionTimeout: 30 * 60 * 1000 // 30 minutes
        },
        endpoints: {
          auth: '/api/auth',
          users: '/api/users'
        },
        patterns: {
          email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
          phone: /^\\+?[\\d\\s\\-\\(\\)]+$/
        }
      }
    })
  },

  validateEmail(email) {
    const patterns = Global.get('constants')?.patterns
    return patterns ? patterns.email.test(email) : false
  }
}

// Usage
AppConstants.setup()
console.log(AppConstants.validateEmail('user@example.com')) // true
`})}),`
`,n.jsx(e.p,{children:"The Global class provides a simple and reliable way to manage global application data, ensuring centralized storage of configurations with protection against accidental overwrites."})]})}function h(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{h as default};
