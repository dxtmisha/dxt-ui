import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# Error Center`}),`
`,(0,c.jsx)(n.h1,{id:`error-center`,children:`Error Center`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` module provides a centralized, robust system for managing application errors. It allows you to create dictionary-style mappings of error codes to user-friendly messages, categorize errors into groups, and deploy targeted listeners to handle them exactly where needed.`]}),`
`,(0,c.jsx)(n.h2,{id:`quick-start`,children:`Quick Start`}),`
`,(0,c.jsxs)(n.p,{children:[`The fastest way to get started is by using the static `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` class, which acts as a global singleton across your entire application.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// 1. Add your error definitions
ErrorCenter.add({
  group: 'network',
  code: '503',
  label: 'Service Unavailable',
  message: 'The server is currently unable to handle the request.'
})

// 2. Attach a listener to specific error groups
ErrorCenter.addHandler('network', (cause) => {
  // Execute your UI reaction (e.g., showing a notification)
  alert(\`[NETWORK ERROR] \${cause.label}: \${cause.message}\`)
})

// 3. Trigger the error anywhere in your app code
ErrorCenter.on({ group: 'network', code: '503' })
`})}),`
`,(0,c.jsxs)(n.h2,{id:`architecture-errorcenter-vs-errorcenterinstance`,children:[`Architecture: `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` vs `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`})]}),`
`,(0,c.jsx)(n.p,{children:`The module is built on two primary layers: a static bridge wrapper and an instantiable core engine. Understanding which one to use is crucial for maintaining a clean architecture.`}),`
`,(0,c.jsxs)(n.h3,{id:`when-to-use-errorcenter-static-wrapper`,children:[`When to use `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` (Static Wrapper)`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` is a globally accessible static class that manages errors at the application level. It automatically initializes a singleton `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` internally.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Use cases:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Network Requests:`}),` Catching unhandled HTTP status codes (`,(0,c.jsx)(n.code,{children:`401`}),`, `,(0,c.jsx)(n.code,{children:`403`}),`, `,(0,c.jsx)(n.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Application Initialization:`}),` Registering core auth boundaries or session expirations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Micro-frontend Synchronization:`}),` Sharing error contexts globally without needing to pass down props or inject dependencies.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`when-to-use-new-errorcenterinstance`,children:[`When to use `,(0,c.jsx)(n.code,{children:`new ErrorCenterInstance()`})]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` is the underlying engine that actually manages the states and handlers. You can instantiate it directly to create `,(0,c.jsx)(n.strong,{children:`isolated`}),` error management zones.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Use cases:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Complex Forms & Validations:`}),` A specific form component wants to track and react exactly to its local validation failures without polluting the global error logs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Modular Sub-systems:`}),` Independent plugins, widgets, or third-party integrations running within the app.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unit Testing:`}),` Safely mocking and verifying error handler behaviors without side effects bleeding between test suites.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

// Isolated error environment for a specific module
const formErrorCenter = new ErrorCenterInstance()

formErrorCenter.add({
  group: 'validation',
  code: 'missing_field',
  message: 'This field is required.'
})

formErrorCenter.addHandler('validation', (cause) => {
  // Updates local UI state specifically for this form
  showLocalFieldError(cause)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};