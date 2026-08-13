import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/# Data storage`}),`
`,(0,c.jsx)(t.h1,{id:`data-storage`,children:`Data storage`}),`
`,(0,c.jsx)(t.p,{children:`The library provides several tools for persistent data storage, including LocalStorage, SessionStorage, Cookies, and URL Hash management.`}),`
`,(0,c.jsx)(t.h2,{id:`local--session-storage-datastorage`,children:`Local & Session Storage (DataStorage)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DataStorage`}),` class simplifies working with browser storage by providing automatic JSON serialization, global key prefixing via `,(0,c.jsx)(t.code,{children:`setPrefix`}),` (defaulting to `,(0,c.jsx)(t.code,{children:`ui-storage`}),`), and a TTL caching mechanism. It ensures data consistency application-wide by returning the same instance for each key and gracefully handles SSR environments where the DOM is unavailable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// Set a global prefix (optional)
DataStorage.setPrefix('my-app')

// 1. Initialize (localStorage by default)
const storage = new DataStorage('user_settings')

// 2. Save data (automatically serialized to JSON)
storage.set({ theme: 'dark', language: 'en' })

// 3. Retrieve data with a default value
const settings = storage.get({ theme: 'light' })
`})}),`
`,(0,c.jsx)(t.h3,{id:`session-storage`,children:`Session Storage`}),`
`,(0,c.jsxs)(t.p,{children:[`To use `,(0,c.jsx)(t.code,{children:`sessionStorage`}),` (cleared when the tab is closed), pass `,(0,c.jsx)(t.code,{children:`true`}),` as the second argument:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const session = new DataStorage('temp_data', true)
`})}),`
`,(0,c.jsx)(t.h3,{id:`caching-ttl`,children:`Caching (TTL)`}),`
`,(0,c.jsxs)(t.p,{children:[`You can limit data validity by continuous TTL check during the `,(0,c.jsx)(t.code,{children:`get`}),` call. Specifying a lifetime (in seconds) allows the library to treat older data as expired without manual cleanup.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Retrieve data only if it was saved within the last hour (3600 sec)
const recentData = storage.get(undefined, 3600)
`})}),`
`,(0,c.jsx)(t.h2,{id:`cookies-cookie`,children:`Cookies (Cookie)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Cookie`}),` class provides a clean interface for browser cookies, abstracting the complexities of `,(0,c.jsx)(t.code,{children:`document.cookie`}),`. It automatically syncs existing browser data upon initialization, supports security settings like `,(0,c.jsx)(t.code,{children:`SameSite`}),`, and ensures reliable deletion via the `,(0,c.jsx)(t.code,{children:`remove()`}),` method.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Cookie } from '@dxtmisha/functional-basic'

const myCookie = new Cookie('auth_token')

// Set cookie with custom options
myCookie.set('secure_value', { 
  age: 3600 * 24, // 1 day
  sameSite: 'lax'
})

// Get value
const token = myCookie.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`url-hash-hash`,children:`URL Hash (Hash)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Hash`}),` class turns the URL hash into a reactive state store (`,(0,c.jsx)(t.code,{children:`#key:value;`}),`), ideal for shareable UI states like active tabs or filters. Data is automatically synchronized with the internal `,(0,c.jsx)(t.code,{children:`Hash`}),` object, allowing for instant interface updates as the address bar changes without a page reload.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Hash } from '@dxtmisha/functional-basic'

// 1. Set values: URL changes to ...#tab:profile;filter:active
Hash.set('tab', 'profile')
Hash.set('filter', 'active')

// 2. Get a value (with an optional default)
const currentTab = Hash.get('tab', 'home')
`})}),`
`,(0,c.jsx)(t.h3,{id:`watching-changes`,children:`Watching Changes`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`addWatch`}),` method allows you to subscribe to changes of specific URL parameters. This is useful for performing actions when tabs are switched or filters are applied by the user.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// 1. Reactive watching
const onTabChange = (newTab) => {
  console.log('User switched to:', newTab)
}

Hash.addWatch('tab', onTabChange)

// 2. Remove watcher if needed
// Hash.removeWatch('tab', onTabChange)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};