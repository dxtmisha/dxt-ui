import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/# Api`}),`
`,(0,c.jsx)(n.h1,{id:`api`,children:`Api`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class is a central utility for making HTTP requests. It provides a simple interface for common methods and manages global settings like base URL, default headers, and lifecycle hooks.`]}),`
`,(0,c.jsx)(n.h3,{id:`key-capabilities`,children:`Key Capabilities`}),`
`,(0,c.jsx)(n.p,{children:`The class provides a comprehensive set of tools for managing network communication:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CRUD Methods`}),` — execution of `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, `,(0,c.jsx)(n.code,{children:`PATCH`}),`, `,(0,c.jsx)(n.code,{children:`DELETE`}),` requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Configuration`}),` — setting up base URLs, headers, and parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Hooks`}),` — handling events before and after the request (e.g., for Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration (SSR)`}),` — transferring data from server to client to prevent duplicate requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Caching`}),` — saving responses in memory or external storage (LocalStorage).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Response Emulation`}),` — creating mock data for development and testing.`]}),`
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
Api.setUrl('https://api.example.com/v1/')

// Add common headers (e.g., an authorization token)
Api.setHeaders({
  'Authorization': 'Bearer YOUR_TOKEN'
})

// Set common parameters to be added to every request
Api.setRequestDefault({
  app_version: '1.0.0'
})
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
`,(0,c.jsxs)(n.p,{children:[`The emulator triggers `,(0,c.jsx)(n.strong,{children:`before`}),` the real `,(0,c.jsx)(n.code,{children:`fetch`}),` is executed. If no matching mock is found, `,(0,c.jsx)(n.code,{children:`Api`}),` will perform a regular network request.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};