import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenter - Error Management`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenter-class`,children:`ErrorCenter Class`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` is the central tool for managing all errors in the application. It allows you to register possible error causes in one place, configure the reaction to them (e.g., showing notifications), and trigger them from any part of the code.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The class acts as a static bridge (Static Bridge), directing all requests to a single `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`on(cause: ErrorCenterCauseItem): void`}),` — Starts the processing. Searches the registry, merges data, and calls the appropriate callbacks.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`verification`,children:`Verification`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Checks if an error is registered.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Returns error data from the registry.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): void`}),` — Adds a single error cause.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): void`}),` — Adds a list of errors (batch registration).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void`}),` — Registers a reaction to a group of errors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): void`}),` — Batch registration of several handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ErrorCenterInstance`}),` — Returns the internal instance of the class.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h4,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Group name (e.g., 'api', 'auth') or `,(0,c.jsx)(n.code,{children:`undefined`}),` for a general handler.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Object describing an error: `,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`code`}),` (required), `,(0,c.jsx)(n.code,{children:`priority`}),`, `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`message`}),`, `,(0,c.jsx)(n.code,{children:`details`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-guide`,children:`Usage Guide`}),`
`,(0,c.jsx)(n.h3,{id:`step-1-registration-registry`,children:`Step 1: Registration (Registry)`}),`
`,(0,c.jsx)(n.p,{children:`Create an error dictionary to store texts separately from the code.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.add({
  group: 'auth',
  code: 'LOGIN_FAILED',
  label: 'Login Failed',
  message: 'Invalid password.'
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`step-2-subscription-handlers`,children:`Step 2: Subscription (Handlers)`}),`
`,(0,c.jsx)(n.p,{children:`Specify how the application should react to an error group.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.addHandler('auth', (cause) => {
  alert(cause.message);
});
`})}),`
`,(0,c.jsx)(n.h3,{id:`step-3-execution-execution`,children:`Step 3: Execution (Execution)`}),`
`,(0,c.jsx)(n.p,{children:`Trigger the error by its code and group.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.on({ group: 'auth', code: 'LOGIN_FAILED' });
`})}),`
`,(0,c.jsx)(n.h2,{id:`standard-error-causes`,children:`Standard Error Causes`}),`
`,(0,c.jsx)(n.p,{children:`The class already contains pre-defined descriptions for common situations.`}),`
`,(0,c.jsxs)(n.h4,{id:`api-group-api`,children:[`API Group (`,(0,c.jsx)(n.code,{children:`api`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Used for network request errors.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`forbidden`}),` — Forbidden (403).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`notFound`}),` — Resource not found (404).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`offline`}),` — No internet connection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`server`}),` — Internal server error (500).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`timeout`}),` — Request timeout.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`unauthorized`}),` — Authorization error (401).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`unknown`}),` — Unknown error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`cacheClear`}),`, `,(0,c.jsx)(n.strong,{children:`cacheGet`}),`, `,(0,c.jsx)(n.strong,{children:`cacheRemove`}),`, `,(0,c.jsx)(n.strong,{children:`cacheSet`}),` — Cache errors.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`intl-group-intl`,children:[`Intl Group (`,(0,c.jsx)(n.code,{children:`intl`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Errors during data formatting (dates, numbers, etc.).`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`datetime`}),`, `,(0,c.jsx)(n.strong,{children:`display`}),`, `,(0,c.jsx)(n.strong,{children:`number`}),`, `,(0,c.jsx)(n.strong,{children:`plural`}),`, `,(0,c.jsx)(n.strong,{children:`relative`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`invalid`}),` — Invalid date or incorrect format.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`storage-group-storage`,children:[`Storage Group (`,(0,c.jsx)(n.code,{children:`storage`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Errors during interaction with local or server storage.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`context`}),` — Missing context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`error`}),` — General read/write failure.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`other-groups`,children:`Other Groups`}),`
`,(0,c.jsxs)(n.p,{children:[`These groups use a universal error code `,(0,c.jsx)(n.code,{children:`error`}),`. Triggering is done via `,(0,c.jsx)(n.code,{children:`ErrorCenter.on({ group: 'group_name', code: 'error' })`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`broadcast`}),` — Errors in data exchange between browser tabs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`hydration`}),` — Error during data synchronization between server and client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`share`}),` — Error when trying to share content (Sharing API).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`transformation`}),` — Error during data transformation or parsing.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`integration-with-notification-system`,children:`Integration with Notification System`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// Set up once at app startup
ErrorCenter.addHandler('api', (cause) => {
  Toast.show(cause.label || 'Error', cause.message);
});

// Use in any service
async function loadData() {
  try {
    const data = await fetch('/api');
  } catch (e) {
    ErrorCenter.on({ group: 'api', code: 'server', details: e });
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`working-with-custom-groups`,children:`Working with Custom Groups`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// On-the-fly registration
ErrorCenter.on({
  group: 'upload',
  code: 'SIZE_LIMIT',
  label: 'File Too Large',
  message: 'Max 5MB'
});
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};