import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/# Api`}),`
`,(0,c.jsx)(n.h1,{id:`api`,children:`Api`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class is a central utility for making HTTP requests. It provides a simple interface for common methods and manages global settings like base URL, default headers, and lifecycle hooks.`]}),`
`,(0,c.jsx)(n.h3,{id:`key-capabilities`,children:`Key Capabilities`}),`
`,(0,c.jsx)(n.p,{children:`The class provides a comprehensive set of tools for managing network communication:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CRUD Methods`}),` — execution of `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, `,(0,c.jsx)(n.code,{children:`PATCH`}),`, `,(0,c.jsx)(n.code,{children:`DELETE`}),` requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Configuration`}),` — setting up base URLs, origins, headers, and parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Hooks`}),` — handling events before and after the request (e.g., for Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration (SSR)`}),` — transferring data from server to client to prevent duplicate requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Caching`}),` — saving responses in memory or external storage (LocalStorage).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Response Emulation`}),` — creating mock data for development and testing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Localization`}),` — replacement of `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, and `,(0,c.jsx)(n.code,{children:`{language}`}),` markers in request paths.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Loading and Error Management`}),` — integration with global indicator components and error centers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`The simplest way to make a request is by using the static methods `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, or `,(0,c.jsx)(n.code,{children:`delete`}),`. All methods support response typing via Generics.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Api } from '@dxtmisha/functional-basic'

// Simple GET request with typing
const data = await Api.get<User[]>({ path: 'users' })

// POST request with data in the body
const newUser = await Api.post<User>({
  path: 'users',
  request: { name: 'John Doe', job: 'Developer' }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`global-configuration`,children:`Global Configuration`}),`
`,(0,c.jsx)(n.p,{children:`You can configure the API behavior globally, for example, during application initialization. This removes the need to specify full paths and common headers in every call.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Set the base URL for all relative paths
Api.setUrl('/api/')

// Set the origin (protocol and domain) for the base URL
// If urlRoot starts with '/', the origin will be prepended to it
Api.setOrigin('https://api.example.com')

// Add common headers (e.g., an authorization token)
Api.setHeaders({
  'Authorization': 'Bearer YOUR_TOKEN'
})

// Set common parameters to be added to every request
Api.setRequestDefault({
  app_version: '1.0.0'
})

// Set the wrapper function for requests
Api.setWrapper(async (callback, apiFetch) => {
  // Execute custom logic around the request
  return await callback()
})

// Check if the server is running on localhost
if (Api.isLocalhost()) {
  console.log('Running locally')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`setconfig-method`,children:`setConfig Method`}),`
`,(0,c.jsx)(n.p,{children:`Allows you to set all main settings with a single object.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setConfig({
  urlRoot: '/api/',
  origin: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer ...' },
  timeout: 5000,
  devMode: true,
  wrapper: async (callback) => await callback()
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`url-handling`,children:`URL Handling`}),`
`,(0,c.jsxs)(n.p,{children:[`When forming the final URL, the class automatically replaces special markers with current values from the localization settings (`,(0,c.jsx)(n.code,{children:`Geo`}),`):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{locale}`}),` — current locale (e.g., `,(0,c.jsx)(n.code,{children:`en-US`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{country}`}),` — current country (e.g., `,(0,c.jsx)(n.code,{children:`us`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{language}`}),` — current language (e.g., `,(0,c.jsx)(n.code,{children:`en`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// If the current locale is 'en-US', the final path will be '/api/en-US/users'
const data = await Api.get({ path: '{locale}/users' })
`})}),`
`,(0,c.jsx)(n.h2,{id:`status-and-meta-information`,children:`Status and Meta-information`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class automatically extracts metadata from the server response (e.g., `,(0,c.jsx)(n.code,{children:`success`}),`, `,(0,c.jsx)(n.code,{children:`status`}),`, `,(0,c.jsx)(n.code,{children:`message`}),`, `,(0,c.jsx)(n.code,{children:`code`}),`) and merges it with your data object. This allows you to receive both the payload and the execution result in a single object.`]}),`
`,(0,c.jsxs)(n.p,{children:[`You can access the full status of the last request via the `,(0,c.jsx)(n.code,{children:`getStatus()`}),` method, which returns an instance of `,(0,c.jsx)(n.code,{children:`ApiStatus`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const data = await Api.get({ path: 'users' })
const status = Api.getStatus()

console.log(status.getStatus())     // 200 (HTTP Status)
console.log(status.getStatusType()) // 'success' | 'error' | 'warning' | 'info'
console.log(status.getMessage())    // Server-provided message or status text
console.log(status.getResponse())   // Raw parsed response body
`})}),`
`,(0,c.jsx)(n.h2,{id:`error-identification`,children:`Error Identification`}),`
`,(0,c.jsxs)(n.p,{children:[`The library provides a sophisticated error management system via `,(0,c.jsx)(n.code,{children:`ApiError`}),`. You can pre-register known API error patterns, and the system will automatically identify them based on status, codes, or custom validation functions.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiError, ApiMethodItem } from '@dxtmisha/functional-basic'

// Registering a specific error pattern
ApiError.add({
  url: 'users/login',
  method: ApiMethodItem.post,
  code: 'INVALID_CREDENTIALS',
  message: 'Please check your username and password.'
})

// Processing the request
const status = Api.getStatus()
const errorItem = status.get()?.errorObject // ApiErrorItem instance

if (errorItem && errorItem.getCode() === 'INVALID_CREDENTIALS') {
  // Handle specific error case
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`lifecycle-hooks`,children:`Lifecycle Hooks`}),`
`,(0,c.jsx)(n.p,{children:`The library allows you to inject global logic that will trigger for every request. This is useful for dynamically adding tokens, logging, or centralized server error handling.`}),`
`,(0,c.jsx)(n.h3,{id:`preparation-hook-setpreparation`,children:`Preparation Hook (setPreparation)`}),`
`,(0,c.jsx)(n.p,{children:`Executed immediately before a request is sent to the server.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Parameters`}),`: Receives the `,(0,c.jsx)(n.code,{children:`apiFetch`}),` object, which contains all parameters of the current request (path, method, data, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Usage`}),`: Checking access rights, adding dynamic parameters to `,(0,c.jsx)(n.code,{children:`apiFetch.request`}),`, or simply logging the start of an operation.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setPreparation(async (apiFetch) => {
  // You can modify apiFetch before sending
  console.log(\`Starting request to: \${apiFetch.path}\`)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`end-hook-setend`,children:`End Hook (setEnd)`}),`
`,(0,c.jsx)(n.p,{children:`Executed after the server returns a response, but before the data reaches your code.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Parameters`}),`: Receives the native `,(0,c.jsx)(n.code,{children:`Response`}),` object and the `,(0,c.jsx)(n.code,{children:`apiFetch`}),` settings object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Returns`}),`: A Promise with an object `,(0,c.jsx)(n.code,{children:`{ reset?: boolean, data?: any }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reset Flag`}),`: If `,(0,c.jsx)(n.code,{children:`true`}),` is returned, the library will abort the current chain and execute the request again. This is useful for automatically handling an expired token (Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Field`}),`: Allows you to replace or supplement the data returned by the `,(0,c.jsx)(n.code,{children:`Api.request`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setEnd(async (response, apiFetch) => {
  // For example, handling a 401 Unauthorized error
  if (response.status === 401) {
    const isRefreshed = await myAuthService.refreshToken()
    
    if (isRefreshed) {
      return { reset: true } // Retry the request with the new token
    }
  }
  
  return {} // Continue with standard processing
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`request-wrapper`,children:`Request Wrapper`}),`
`,(0,c.jsxs)(n.p,{children:[`The request wrapper (`,(0,c.jsx)(n.code,{children:`wrapper`}),`) allows you to intercept and wrap the execution of a physical network request with a custom function. This is particularly useful for integrating with Application Performance Monitoring (APM) tools like Sentry or OpenTelemetry to profile and trace request execution times.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The wrapper can be configured globally for the entire instance (via `,(0,c.jsx)(n.code,{children:`Api.setWrapper`}),` or in the `,(0,c.jsx)(n.code,{children:`Api.setConfig`}),` method) or locally for a single request inside the `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` object.`]}),`
`,(0,c.jsx)(n.h3,{id:`example-usage-with-sentry`,children:`Example usage with Sentry:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import * as Sentry from '@sentry/vue'

// Configure globally for all requests
Api.setWrapper(async (callback, apiFetch) => {
  const name = \`\${apiFetch.method || 'GET'} \${apiFetch.path || ''}\`
  return Sentry.startSpan({ name, op: 'http.client' }, callback)
})

// Configure for a specific request (overrides the global wrapper)
const data = await Api.get({
  path: 'critical-action',
  wrapper: async (callback) => {
    return Sentry.startSpan({ name: 'CRITICAL_ACTION' }, callback)
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`hydration`,children:`Hydration`}),`
`,(0,c.jsx)(n.p,{children:`Hydration allows transferring data obtained during server-side rendering (SSR) to the client side. This prevents the same requests from being executed again immediately after the page loads.`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`On the Server`}),`: Perform the necessary requests and get the script via `,(0,c.jsx)(n.code,{children:`Api.getHydrationScript()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`In the Template`}),`: Insert the resulting string into the HTML.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`On the Client`}),`: Upon `,(0,c.jsx)(n.code,{children:`Api`}),` initialization, the data will be automatically loaded into the response manager.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// SSR Example
await Api.get({ path: 'settings' });
const hydrationScript = Api.getHydrationScript(); // <script>...<\/script>
`})}),`
`,(0,c.jsx)(n.h2,{id:`caching`,children:`Caching`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class supports automatic response caching. You can use either the built-in in-memory storage or connect external storage (e.g., `,(0,c.jsx)(n.code,{children:`LocalStorage`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiCache, DataStorage } from '@dxtmisha/functional-basic';

// Connecting external storage (optional)
ApiCache.init(
  async (key) => DataStorage.get(key),
  async (key, value) => DataStorage.set(key, value)
);

// Usage in a request
const data = await Api.get({
  path: 'catalog/list',
  cache: 3600 // Cache for 1 hour (in seconds)
});
`})}),`
`,(0,c.jsx)(n.h2,{id:`response-emulation`,children:`Response Emulation`}),`
`,(0,c.jsxs)(n.p,{children:[`The built-in `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` manager (accessible via `,(0,c.jsx)(n.code,{children:`Api.getResponse()`}),`) allows you to intercept requests and return mock data. This is extremely useful for UI development when the backend is not ready, or for writing tests.`]}),`
`,(0,c.jsx)(n.h3,{id:`registering-mocks`,children:`Registering Mocks`}),`
`,(0,c.jsx)(n.p,{children:`You can add both static responses and dynamic functions.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const responseManager = Api.getResponse()

// 1. Static response for a GET request
responseManager.add({
  path: 'profile',
  method: 'GET',
  response: { id: 1, name: 'Admin' },
  lag: true // Simulate network delay (0-2 sec)
})

// 2. Dynamic response based on request parameters
responseManager.add({
  path: 'users/search',
  method: 'GET',
  response: (request) => {
    return {
      results: [\`Result for: \${request.query}\`],
      count: 1
    }
  }
})

// 3. Intercept a POST request with any body
responseManager.add({
  path: 'users/update',
  method: 'POST',
  request: '*any', // Ignore request body validation
  response: { success: true }
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`developer-mode`,children:`Developer Mode`}),`
`,(0,c.jsx)(n.p,{children:`For easier debugging, you can enable emulation logging in the console. In this mode, the manager will warn in the console about every intercepted request.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.getResponse().setDevMode(true)
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The emulator triggers `,(0,c.jsx)(n.strong,{children:`before`}),` the real `,(0,c.jsx)(n.code,{children:`fetch`}),` is executed. If no matching mock is found, `,(0,c.jsx)(n.code,{children:`Api`}),` will perform a regular network request.`]}),`
`,(0,c.jsx)(n.h2,{id:`advanced-apiinstance`,children:`Advanced: ApiInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class is a `,(0,c.jsx)(n.strong,{children:`static proxy`}),` for a global instance of `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`. This instance is stored in `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, ensuring isolation between requests during SSR and singleton behavior on the client.`]}),`
`,(0,c.jsxs)(n.p,{children:[`For advanced scenarios—such as connecting to multiple independent APIs simultaneously or creating temporary isolated environments—you can instantiate `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` directly.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiInstance } from '@dxtmisha/functional-basic'

const secondaryApi = new ApiInstance()
secondaryApi.setUrl('https://another-api.com/')
secondaryApi.setHeaders({ 'X-Client-Id': '...' })

const data = await secondaryApi.get({ path: 'resource' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};