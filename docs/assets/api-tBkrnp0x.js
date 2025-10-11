import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-C8vOrmRQ.js";import{M as i}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Classes/Api"}),`
`,e.jsx(n.h1,{id:"api-class",children:"Api Class"}),`
`,e.jsx(n.p,{children:"Static class for handling HTTP requests with advanced features like caching, emulation, loading indicators, and automatic locale-aware URL generation. Provides methods for REST API operations with comprehensive error handling and response processing."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTTP Methods"})," — GET, POST, PUT, DELETE requests with proper handling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Request Caching"})," — intelligent response caching and emulation system"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loading Management"})," — automatic loading indicators with Loading class integration"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Locale Support"})," — automatic locale/country/language placeholder replacement in URLs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error Handling"})," — comprehensive error catching with status tracking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header Management"})," — flexible header configuration and default values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body Processing"})," — automatic JSON/FormData/string body handling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Development Mode"})," — request emulation and debugging features"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Preparation Hooks"})," — before/after request lifecycle management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Response Transformation"})," — automatic data extraction and formatting"]}),`
`]}),`
`,e.jsx(n.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,e.jsx(n.h3,{id:"seturl",children:e.jsx(n.code,{children:"setUrl"})}),`
`,e.jsx(n.p,{children:"Sets the base API URL for all requests."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url: string"})," — base API path"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Api"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// Set base API URL
Api.setUrl('/api/v2/')

// All subsequent requests will use this base
// request('/users') → '/api/v2/users'
`})}),`
`,e.jsx(n.h3,{id:"setheaders",children:e.jsx(n.code,{children:"setHeaders"})}),`
`,e.jsx(n.p,{children:"Sets default headers for all requests."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headers: Record<string, string>"})," — default headers object"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Api"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Set default headers
Api.setHeaders({
  'Authorization': 'Bearer token123',
  'X-API-Key': 'your-api-key',
  'Accept-Language': 'en-US'
})

// Headers will be included in all requests
`})}),`
`,e.jsx(n.h3,{id:"setrequestdefault",children:e.jsx(n.code,{children:"setRequestDefault"})}),`
`,e.jsx(n.p,{children:"Sets default request data that will be merged with each request."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: RefOrNormal<Record<string, any>>"})," — default request data"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Set default request parameters
Api.setRequestDefault({
  version: '1.0',
  clientId: 'web-app'
})

// These will be merged with each request body
`})}),`
`,e.jsx(n.h3,{id:"setpreparation",children:e.jsx(n.code,{children:"setPreparation"})}),`
`,e.jsx(n.p,{children:"Sets a function to run before each request (e.g., token refresh)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => Promise<void>"})," — async function to execute before requests"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Api"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Set preparation function
Api.setPreparation(async () => {
  await refreshAuthToken()
  console.log('Token refreshed before request')
})
`})}),`
`,e.jsx(n.h3,{id:"setend",children:e.jsx(n.code,{children:"setEnd"})}),`
`,e.jsx(n.p,{children:"Sets a function to run after each request for response analysis."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (query: Response) => Promise<ApiPreparationEnd>"})," — response analysis function"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Api"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Set response analysis function
Api.setEnd(async (response) => {
  if (response.status === 401) {
    return { reset: true } // restart request
  }
  return {}
})
`})}),`
`,e.jsx(n.h2,{id:"working-with-emulator",children:"Working with Emulator"}),`
`,e.jsx(n.p,{children:"The Api class provides a powerful request emulation system for development and testing without a real backend server."}),`
`,e.jsx(n.h3,{id:"addresponse",children:e.jsx(n.code,{children:"addResponse"})}),`
`,e.jsx(n.p,{children:"Adds emulated responses to intercept requests."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"response: ApiResponse | ApiResponse[]"})," — emulated response configuration"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// Simple GET request emulation
Api.addResponse({
  path: '/users',
  method: 'GET',
  response: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]
})

// POST request emulation with validation
Api.addResponse({
  path: '/users',
  method: 'POST',
  request: { name: '*any', email: '*any' }, // any name and email
  response: (request) => ({
    id: Math.random(),
    ...request,
    created: new Date().toISOString()
  })
})

// Emulation with RegExp path
Api.addResponse({
  path: /^\\/users\\/\\d+$/,
  method: 'GET',
  response: { id: 1, name: 'User', status: 'active' }
})
`})}),`
`,e.jsx(n.h3,{id:"emulated-response-configuration-apiresponse",children:"Emulated Response Configuration (ApiResponse)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ApiResponse Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string | RegExp"})," — request path (string or regular expression)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method: ApiMethod"})," — HTTP method ('GET', 'POST', 'PUT', 'DELETE')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: ApiFetch['request'] | '*any'"})," — expected request data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"response: any | ((request) => any)"})," — static response or generation function"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disable?: RefOrNormal<boolean>"})," — disable emulation (can be ref)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isForGlobal?: boolean"})," — for global cache only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lag?: RefOrNormal<boolean>"})," — simulate slow connection (0-2 sec)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Emulation with delay
Api.addResponse({
  path: '/slow-endpoint',
  method: 'GET',
  response: { data: 'Slow data' },
  lag: true // random delay 0-2000ms
})

// Conditional emulation
const isDevelopment = ref(process.env.NODE_ENV === 'development')
Api.addResponse({
  path: '/admin/users',
  method: 'GET',
  response: { users: [] },
  disable: computed(() => !isDevelopment.value) // disabled in production
})

// Dynamic response function
Api.addResponse({
  path: '/auth/login',
  method: 'POST',
  request: '*any',
  response: (request) => {
    if (request?.username === 'admin' && request?.password === 'password') {
      return {
        success: true,
        token: 'fake-jwt-token',
        user: { id: 1, username: 'admin', role: 'administrator' }
      }
    }
    throw new Error('Invalid credentials')
  }
})
`})}),`
`,e.jsx(n.h3,{id:"getresponselist",children:e.jsx(n.code,{children:"getResponseList"})}),`
`,e.jsx(n.p,{children:"Returns list of all registered emulated responses."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"(ApiResponse & Record<string, any>)[]"})," — array of emulated responses"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Get list of all emulations
const emulators = Api.getResponseList()
console.log('Active emulators:', emulators.map(r => \`\${r.method} \${r.path}\`))

// Debug emulations
function debugEmulators() {
  const responses = Api.getResponseList()
  responses.forEach(resp => {
    console.log(\`Emulator: \${resp.method} \${resp.path}\`)
    console.log('Expected request:', resp.request)
    console.log('Response:', typeof resp.response === 'function' ? '[Function]' : resp.response)
  })
}
`})}),`
`,e.jsx(n.h3,{id:"emulator-operating-modes",children:"Emulator Operating Modes"}),`
`,e.jsx(n.h4,{id:"global-mode-automatic-for-get",children:"Global mode (automatic for GET)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// GET requests automatically use global cache
const userData = await Api.get({ path: '/user/profile' })
// If emulation exists for this path, it will be used
`})}),`
`,e.jsx(n.h4,{id:"devmode-forced-emulation",children:"DevMode (forced emulation)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Forced emulator usage
const testData = await Api.get({
  path: '/test-endpoint',
  devMode: true // always uses emulator if available
})
`})}),`
`,e.jsx(n.h3,{id:"complex-emulation-scenarios",children:"Complex Emulation Scenarios"}),`
`,e.jsx(n.h4,{id:"conditional-responses-based-on-parameters",children:"Conditional responses based on parameters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`Api.addResponse({
  path: '/api/search',
  method: 'GET',
  request: '*any',
  response: (request) => {
    const query = request?.q || ''

    if (query.includes('error')) {
      throw new Error('Search error')
    }

    if (query.length < 2) {
      return { results: [], message: 'Query too short' }
    }

    // Search simulation
    const mockResults = [
      { id: 1, title: 'Result 1', relevance: 0.9 },
      { id: 2, title: 'Result 2', relevance: 0.7 }
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

    return {
      results: mockResults,
      total: mockResults.length,
      query: query
    }
  }
})
`})}),`
`,e.jsx(n.h4,{id:"sequential-emulation-for-state-testing",children:"Sequential emulation (for state testing)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let loginAttempts = 0

Api.addResponse({
  path: '/auth/login',
  method: 'POST',
  request: '*any',
  response: (request) => {
    loginAttempts++

    if (loginAttempts === 1) {
      throw new Error('Temporary server error')
    }

    if (loginAttempts === 2) {
      return { success: false, message: 'Invalid password' }
    }

    return {
      success: true,
      token: 'success-token',
      attempts: loginAttempts
    }
  }
})
`})}),`
`,e.jsx(n.h4,{id:"file-operation-emulation",children:"File operation emulation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// File upload emulation
Api.addResponse({
  path: '/upload',
  method: 'POST',
  request: '*any',
  response: (request) => {
    if (request instanceof FormData) {
      const file = request.get('file')
      return {
        success: true,
        filename: file?.name || 'unknown.txt',
        size: file?.size || 0,
        uploadId: Math.random().toString(36)
      }
    }
    throw new Error('File not found in request')
  },
  lag: true // simulate slow upload
})
`})}),`
`,e.jsx(n.h3,{id:"runtime-emulator-management",children:"Runtime Emulator Management"}),`
`,e.jsx(n.h4,{id:"dynamic-enabledisable",children:"Dynamic enable/disable"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'

const isEmulationEnabled = ref(true)

Api.addResponse({
  path: '/dynamic-endpoint',
  method: 'GET',
  response: { message: 'Emulated data' },
  disable: computed(() => !isEmulationEnabled.value)
})

// Toggle emulation
function toggleEmulation() {
  isEmulationEnabled.value = !isEmulationEnabled.value
}
`})}),`
`,e.jsx(n.h4,{id:"emulator-debugging",children:"Emulator debugging"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Enable debug mode for all requests
async function makeDebugRequest() {
  const result = await Api.get({
    path: '/debug-test',
    devMode: true // shows warnings in console
  })

  console.log('Response data:', result)
  console.log('Last response:', Api.getLastResponse())
  console.log('Status:', Api.getStatus())
}
`})}),`
`,e.jsx(n.h2,{id:"http-request-methods",children:"HTTP Request Methods"}),`
`,e.jsx(n.h3,{id:"request",children:e.jsx(n.code,{children:"request"})}),`
`,e.jsx(n.p,{children:"Generic request method that accepts either URL string or configuration object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathRequest: string | ApiFetch"})," — URL string or request configuration"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — response data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Simple string request
const users = await Api.request('/users')

// Full configuration object
const user = await Api.request({
  path: '/users/123',
  method: 'GET',
  headers: { 'Cache-Control': 'no-cache' }
})
`})}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Sends GET request."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — request configuration"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — response data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Simple GET request
const users = await Api.get({ path: '/users' })

// GET with query parameters
const filteredUsers = await Api.get({
  path: '/users',
  request: { status: 'active', limit: 10 }
})
// Results in: GET /users?status=active&limit=10
`})}),`
`,e.jsx(n.h3,{id:"post",children:e.jsx(n.code,{children:"post"})}),`
`,e.jsx(n.p,{children:"Sends POST request."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — request configuration"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — response data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Create new user
const newUser = await Api.post({
  path: '/users',
  request: {
    name: 'John Doe',
    email: 'john@example.com'
  }
})

// Upload file with FormData
const formData = new FormData()
formData.append('file', fileInput.files[0])

const uploadResult = await Api.post({
  path: '/upload',
  request: formData,
  type: '' // Remove Content-Type for FormData
})
`})}),`
`,e.jsx(n.h3,{id:"put",children:e.jsx(n.code,{children:"put"})}),`
`,e.jsx(n.p,{children:"Sends PUT request."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — request configuration"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — response data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Update user
const updatedUser = await Api.put({
  path: '/users/123',
  request: {
    name: 'John Smith',
    email: 'john.smith@example.com'
  }
})
`})}),`
`,e.jsx(n.h3,{id:"delete",children:e.jsx(n.code,{children:"delete"})}),`
`,e.jsx(n.p,{children:"Sends DELETE request."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — request configuration"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — response data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Delete user
await Api.delete({
  path: '/users/123'
})

// Delete with confirmation
await Api.delete({
  path: '/users/123',
  request: { force: true }
})
`})}),`
`,e.jsx(n.h2,{id:"response-caching--emulation",children:"Response Caching & Emulation"}),`
`,e.jsx(n.h3,{id:"addresponse-1",children:e.jsx(n.code,{children:"addResponse"})}),`
`,e.jsx(n.p,{children:"Adds cached responses for development/testing or offline mode."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"response: ApiResponse | ApiResponse[]"})," — response configuration(s)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Api"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Add single cached response
Api.addResponse({
  path: '/users',
  method: 'GET',
  response: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]
})

// Add multiple responses
Api.addResponse([
  {
    path: '/users',
    method: 'GET',
    response: () => generateUserList(), // Dynamic response
    lag: true // Simulate network delay
  },
  {
    path: /^\\/users\\/\\d+$/, // RegExp path matching
    method: 'GET',
    response: (request) => getUserById(request.id)
  }
])
`})}),`
`,e.jsx(n.h2,{id:"information-methods",children:"Information Methods"}),`
`,e.jsx(n.h3,{id:"islocalhost",children:e.jsx(n.code,{children:"isLocalhost"})}),`
`,e.jsx(n.p,{children:"Checks if the current environment is localhost."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — true if running on localhost"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`if (Api.isLocalhost()) {
  console.log('Development environment detected')
  Api.addResponse(mockData) // Use mock data in development
}
`})}),`
`,e.jsx(n.h3,{id:"getheaders",children:e.jsx(n.code,{children:"getHeaders"})}),`
`,e.jsx(n.p,{children:"Gets combined headers for request, merging default headers with provided ones."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Record<string, string> | null"})," — additional headers (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string"})," — Content-Type header value (default: 'application/json;charset=UTF-8')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Record<string, string> | undefined"})," — merged headers object or undefined if value is null"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Get default headers only
const headers = Api.getHeaders()
// Returns: default headers with Content-Type

// Merge with custom headers
const customHeaders = Api.getHeaders({
  'Authorization': 'Bearer token123',
  'X-Custom-Header': 'value'
})
// Returns: default headers + custom headers + Content-Type

// Exclude headers completely
const noHeaders = Api.getHeaders(null)
// Returns: undefined

// Custom Content-Type
const xmlHeaders = Api.getHeaders({}, 'application/xml')
// Returns: headers with Content-Type: application/xml
`})}),`
`,e.jsx(n.h3,{id:"getlastresponse",children:e.jsx(n.code,{children:"getLastResponse"})}),`
`,e.jsx(n.p,{children:"Returns the raw data from the last request."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — last response data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const users = await Api.get({ path: '/users' })
const rawResponse = Api.getLastResponse()
console.log('Raw response:', rawResponse)
`})}),`
`,e.jsx(n.h3,{id:"getlastmessage",children:e.jsx(n.code,{children:"getLastMessage"})}),`
`,e.jsx(n.p,{children:"Returns the message from the last response."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — last response message"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`try {
  await Api.post({ path: '/users', request: userData })
} catch (error) {
  const message = Api.getLastMessage()
  showNotification(message || 'Unknown error occurred')
}
`})}),`
`,e.jsx(n.h3,{id:"getstatus",children:e.jsx(n.code,{children:"getStatus"})}),`
`,e.jsx(n.p,{children:"Returns the HTTP status code of the last request."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"number | undefined"})," — HTTP status code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`await Api.get({ path: '/users' })
const status = Api.getStatus()

if (status === 200) {
  console.log('Request successful')
} else if (status === 404) {
  console.log('Resource not found')
}
`})}),`
`,e.jsx(n.h3,{id:"getstatustext",children:e.jsx(n.code,{children:"getStatusText"})}),`
`,e.jsx(n.p,{children:"Returns the HTTP status text of the last request."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | undefined"})," — HTTP status text"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`await Api.get({ path: '/users' })
console.log('Status:', Api.getStatus(), Api.getStatusText())
// Output: "Status: 200 OK"
`})}),`
`,e.jsx(n.h3,{id:"geterror",children:e.jsx(n.code,{children:"getError"})}),`
`,e.jsx(n.p,{children:"Returns the error from the last failed request."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | undefined"})," — error message"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`try {
  await Api.get({ path: '/invalid-endpoint' })
} catch (e) {
  const error = Api.getError()
  console.error('Request failed:', error)
}
`})}),`
`,e.jsx(n.h2,{id:"utility-methods",children:"Utility Methods"}),`
`,e.jsx(n.h3,{id:"geturl",children:e.jsx(n.code,{children:"getUrl"})}),`
`,e.jsx(n.p,{children:"Gets the full path to the request script with locale placeholder replacement."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — path to the script"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"api?: boolean"})," — whether to add API base path (default: true)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — full URL with locale placeholders replaced"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// With API base path
const url = Api.getUrl('/users')
// Returns: '/api/users' (or '/api/en-US/users' if locale placeholders used)

// Without API base path
const fullUrl = Api.getUrl('https://external-api.com/data', false)
// Returns: 'https://external-api.com/data'

// With locale placeholders
Api.setUrl('/api/{locale}/')
const localizedUrl = Api.getUrl('/users')
// Returns: '/api/en-US/users' (based on current locale)
`})}),`
`,e.jsx(n.h3,{id:"getbody",children:e.jsx(n.code,{children:"getBody"})}),`
`,e.jsx(n.p,{children:"Gets processed body data for the request based on method and data type."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: ApiFetch['request']"})," — request data (default: ",")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method?: ApiMethod"})," — HTTP method (default: 'GET')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | FormData | undefined"})," — processed body data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// JSON body for POST request
const jsonBody = Api.getBody({ name: 'John', email: 'john@example.com' }, 'POST')
// Returns: '{"name":"John","email":"john@example.com"}'

// FormData body
const formData = new FormData()
formData.append('file', fileInput.files[0])
const formBody = Api.getBody(formData, 'POST')
// Returns: FormData object

// No body for GET request
const getBody = Api.getBody({ limit: 10 }, 'GET')
// Returns: undefined (GET params go to URL)
`})}),`
`,e.jsx(n.h3,{id:"getbodyforget",children:e.jsx(n.code,{children:"getBodyForGet"})}),`
`,e.jsx(n.p,{children:"Gets query string parameters for GET requests."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: ApiFetch['request']"})," — request data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — current request path (default: '')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method?: ApiMethod"})," — HTTP method (default: 'GET')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — query string with ? or & prefix"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// First parameters
const queryString = Api.getBodyForGet({ limit: 10, status: 'active' }, '/users')
// Returns: '?limit=10&status=active'

// Additional parameters (path already has ?)
const additionalQuery = Api.getBodyForGet({ sort: 'name' }, '/users?limit=10')
// Returns: '&sort=name'

// Non-GET method
const noQuery = Api.getBodyForGet({ data: 'test' }, '/users', 'POST')
// Returns: '' (empty string)
`})}),`
`,e.jsx(n.h3,{id:"getresponselist-1",children:e.jsx(n.code,{children:"getResponseList"})}),`
`,e.jsx(n.p,{children:"Returns a list of cached response configurations (excluding global ones)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"(ApiResponse & Record<string, any>)[]"})," — array of response configurations"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Add some cached responses
Api.addResponse([
  { path: '/users', method: 'GET', response: userData },
  { path: '/posts', method: 'GET', response: postsData, isForGlobal: true }
])

// Get non-global responses
const responses = Api.getResponseList()
// Returns: [{ path: '/users', method: 'GET', response: userData }]
// Excludes the global one (isForGlobal: true)

// Useful for debugging and development
console.log('Active mock responses:', responses.map(r => r.path))
`})}),`
`,e.jsx(n.h3,{id:"addrequestdefault",children:e.jsx(n.code,{children:"addRequestDefault"})}),`
`,e.jsx(n.p,{children:"Adds default request data to the provided request, merging with existing data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch['request']"})," — request data to merge with defaults"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ApiFetch['request']"})," — merged request data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Set default request data
Api.setRequestDefault({
  version: '1.0',
  clientId: 'web-app'
})

// Merge with specific request
const mergedRequest = Api.addRequestDefault({
  userId: 123,
  action: 'update'
})
// Returns: { version: '1.0', clientId: 'web-app', userId: 123, action: 'update' }

// Works with FormData too
const formData = new FormData()
formData.append('file', file)
const mergedFormData = Api.addRequestDefault(formData)
// FormData will have default fields added if they don't exist
`})}),`
`,e.jsx(n.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),`
`,e.jsxs(n.h3,{id:"request-configuration-apifetch",children:["Request Configuration (",e.jsx(n.code,{children:"ApiFetch"}),")"]}),`
`,e.jsx(n.p,{children:"Complete interface for configuring API requests with all available options:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ApiFetch {
  /** Use base API URL (default: true) */
  api?: boolean

  /** Endpoint path relative to base URL */
  path?: string

  /** Complete URL (overrides api + path combination) */
  pathFull?: string

  /** HTTP method: GET, POST, PUT, DELETE (default: 'GET') */
  method?: ApiMethod

  /** Request body/parameters */
  request?: FormData | Record<string, any> | string

  /** Include authentication headers */
  auth?: boolean

  /** Custom headers (null = no headers) */
  headers?: Record<string, string> | null

  /** Content-Type header value (default: 'application/json;charset=UTF-8') */
  type?: string

  /** Extract 'data' field from response (default: true) */
  toData?: boolean

  /** Use global response cache (default: true for GET, false for others) */
  global?: boolean

  /** Enable development logging and debugging (default: false) */
  devMode?: boolean

  /** Suppress error logging in console (default: false) */
  hideError?: boolean

  /** Custom response processor */
  queryReturn?: (query: Response) => Promise<any>

  /** Run global preparation hooks (default: true) */
  globalPreparation?: boolean

  /** Run global end hooks (default: true) */
  globalEnd?: boolean

  /** Additional fetch() options */
  init?: RequestInit
}
`})}),`
`,e.jsx(n.h4,{id:"property-details",children:"Property Details:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"api?: boolean"})})," (default: ",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"true"}),", prepends the base URL set via ",e.jsx(n.code,{children:"setUrl()"})," to the path"]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"false"}),", uses the path as-is without base URL modification"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// With api: true (default)
{ path: '/users', api: true }     // → '/api/users'

// With api: false
{ path: 'https://external.com/api', api: false }  // → 'https://external.com/api'
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"path?: string"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Endpoint path relative to the base URL"}),`
`,e.jsxs(n.li,{children:["Supports locale placeholders: ",e.jsx(n.code,{children:"{locale}"}),", ",e.jsx(n.code,{children:"{country}"}),", ",e.jsx(n.code,{children:"{language}"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{ path: '/users/{locale}/profile' }  // → '/users/en-US/profile'
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"pathFull?: string"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Complete URL that overrides the combination of base URL + path"}),`
`,e.jsxs(n.li,{children:["When provided, ignores ",e.jsx(n.code,{children:"api"})," and ",e.jsx(n.code,{children:"path"})," properties"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{ pathFull: 'https://api.example.com/v2/users' }  // Uses this exact URL
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"method?: ApiMethod"})})," (default: ",e.jsx(n.code,{children:"'GET'"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"HTTP method for the request"}),`
`,e.jsxs(n.li,{children:["Available values: ",e.jsx(n.code,{children:"'GET'"}),", ",e.jsx(n.code,{children:"'POST'"}),", ",e.jsx(n.code,{children:"'PUT'"}),", ",e.jsx(n.code,{children:"'DELETE'"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"request?: FormData | Record<string, any> | string"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Request body data or query parameters"}),`
`,e.jsx(n.li,{children:"For GET requests: converted to query string parameters"}),`
`,e.jsx(n.li,{children:"For other methods: sent as request body"}),`
`,e.jsx(n.li,{children:"Supports objects (JSON), FormData, and raw strings"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Object (JSON)
{ request: { name: 'John', email: 'john@example.com' } }

// FormData (file uploads)
const formData = new FormData()
formData.append('file', file)
{ request: formData }

// Raw string
{ request: '{"custom": "json"}' }
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"auth?: boolean"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Controls whether authentication headers should be included"}),`
`,e.jsx(n.li,{children:"Implementation depends on your authentication setup"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"headers?: Record<string, string> | null"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Custom headers to include with the request"}),`
`,e.jsxs(n.li,{children:["Merged with default headers set via ",e.jsx(n.code,{children:"setHeaders()"})]}),`
`,e.jsxs(n.li,{children:["Set to ",e.jsx(n.code,{children:"null"})," to exclude all headers (including defaults)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Add custom headers
{ headers: { 'X-Custom': 'value', 'Authorization': 'Bearer token' } }

// Exclude all headers
{ headers: null }
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"type?: string"})})," (default: ",e.jsx(n.code,{children:"'application/json;charset=UTF-8'"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sets the Content-Type header"}),`
`,e.jsxs(n.li,{children:["Use empty string ",e.jsx(n.code,{children:"''"})," to let browser set automatically (useful for FormData)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// JSON content
{ type: 'application/json' }

// Form data (let browser set)
{ type: '' }

// XML content
{ type: 'application/xml' }
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"toData?: boolean"})})," (default: ",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"true"}),", automatically extracts ",e.jsx(n.code,{children:"data"})," field from response if it exists"]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"false"}),", returns the raw response object"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Response: { data: { id: 1, name: 'John' }, success: true }

// With toData: true (default)
const result = await Api.get({ path: '/user' })
// result = { id: 1, name: 'John' }

// With toData: false
const result = await Api.get({ path: '/user', toData: false })
// result = { data: { id: 1, name: 'John' }, success: true }
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"global?: boolean"})})," (default: ",e.jsx(n.code,{children:"true"})," for GET, ",e.jsx(n.code,{children:"false"})," for others)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enables global response caching and emulation"}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"true"}),", checks for cached responses added via ",e.jsx(n.code,{children:"addResponse()"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"devMode?: boolean"})})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enables development logging and debugging features"}),`
`,e.jsx(n.li,{children:"Logs cache hits, request data, and response information"}),`
`,e.jsx(n.li,{children:"Allows repeated use of cached responses (normally used once)"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Enable dev mode logging
const users = await Api.get({ path: '/users', devMode: true })
// Console output: "Response type: /users", "Response data: /users {...}"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"hideError?: boolean"})})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"true"}),", suppresses error logging to console"]}),`
`,e.jsx(n.li,{children:"Errors are still thrown, just not logged"}),`
`,e.jsx(n.li,{children:"Useful for expected errors or custom error handling"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"queryReturn?: (query: Response) => Promise<any>"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Custom function to process the raw Response object"}),`
`,e.jsx(n.li,{children:"Overrides default JSON/text parsing"}),`
`,e.jsx(n.li,{children:"Useful for custom response handling or binary data"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Custom response processing
const result = await Api.get({
  path: '/download',
  queryReturn: async (response) => {
    return await response.blob()  // Return binary data
  }
})
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"globalPreparation?: boolean"})})," (default: ",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Controls whether global preparation hooks run before this request"}),`
`,e.jsxs(n.li,{children:["Set to ",e.jsx(n.code,{children:"false"})," to skip preparation for specific requests"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"globalEnd?: boolean"})})," (default: ",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Controls whether global end hooks run after this request"}),`
`,e.jsxs(n.li,{children:["Set to ",e.jsx(n.code,{children:"false"})," to skip post-processing for specific requests"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"init?: RequestInit"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Additional options passed directly to the ",e.jsx(n.code,{children:"fetch()"})," API"]}),`
`,e.jsx(n.li,{children:"Allows fine-grained control over request behavior"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Custom fetch options
{
  init: {
    cache: 'no-cache',
    credentials: 'include',
    redirect: 'follow',
    signal: abortController.signal
  }
}
`})}),`
`,e.jsx(n.h4,{id:"usage-examples",children:"Usage Examples:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Minimal request
const users = await Api.get({ path: '/users' })

// Full configuration
const result = await Api.post({
  api: true,
  path: '/users',
  method: 'POST',
  request: { name: 'John', email: 'john@example.com' },
  headers: { 'X-Custom-Header': 'value' },
  type: 'application/json',
  toData: true,
  devMode: false,
  hideError: false,
  globalPreparation: true,
  globalEnd: true,
  init: { cache: 'no-cache' }
})

// File upload with FormData
const formData = new FormData()
formData.append('file', fileInput.files[0])

const uploadResult = await Api.post({
  path: '/upload',
  request: formData,
  type: '',  // Let browser set Content-Type
  headers: { 'X-Upload-Session': 'abc123' }
})

// External API call
const externalData = await Api.get({
  pathFull: 'https://jsonplaceholder.typicode.com/posts/1',
  api: false,
  toData: false  // Don't try to extract 'data' field
})
`})})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
