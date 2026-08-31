import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/StorageCallback - Storage Callbacks`}),`
`,(0,c.jsx)(t.h1,{id:`storagecallback-class`,children:`StorageCallback Class`}),`
`,(0,c.jsx)(t.p,{children:`A utility class for managing groups of callback functions associated with specific storage keys. It ensures that multiple components or functions can react to storage changes or triggers in a coordinated, asynchronous manner.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Named Instances`}),` — facilitates a singleton-like pattern where instances are retrieved by name and group, ensuring different parts of the application share the same callback list for the same resource.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Group Separation`}),` — allows segregating callback lists by group (e.g., 'main', 'global', 'local'), preventing name collisions between different modules.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Asynchronous Execution`}),` — supports `,(0,c.jsx)(t.code,{children:`Promise`}),`-based callbacks and executes them sequentially during the `,(0,c.jsx)(t.code,{children:`run`}),` process.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loading State Tracking`}),` — provides a built-in `,(0,c.jsx)(t.code,{children:`loading`}),` flag that is automatically managed during the callback execution phase.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`StorageCallback(name, group)`}),` constructor or use the static method `,(0,c.jsx)(t.code,{children:`getInstance(name, group)`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(t.p,{children:`To ensure strict typing, the class supports the following generics:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T = any`}),` — The type of data passed to callbacks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Callback = (value: T) => void | Promise<void>`}),` — The structure of the callback function.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — a unique identifier for the storage entry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group: string = 'main'`}),` — optional category to prevent name collisions.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StorageCallback } from '@dxtmisha/functional-basic'

// 1. Simple initialization (group defaults to 'main')
const storage = new StorageCallback('user-data')

// 2. Using the singleton-like getInstance method
const sharedStorage = StorageCallback.getInstance('settings', 'global')

// 3. Using generics for strict typing
const numberStorage = new StorageCallback<number>('counter')
numberStorage.addCallback((val) => console.log(val + 1))
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — returns the storage instance name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isLoading(): boolean`}),` — returns the current loading state.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLoading(): boolean`}),` — returns the current loading state (alias for `,(0,c.jsx)(t.code,{children:`isLoading`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addCallback(callback: Callback, isOnce?: boolean): this`}),` — adds a new callback to the execution list. If `,(0,c.jsx)(t.code,{children:`isOnce: true`}),`, the callback will be removed after the first execution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`removeCallback(callback: Callback): this`}),` — removes a specific callback from the list.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preparation(): this`}),` — prepares the state before execution (sets `,(0,c.jsx)(t.code,{children:`loading`}),` to `,(0,c.jsx)(t.code,{children:`true`}),`). Should be called manually when starting an asynchronous process.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`run(value: T): Promise<this>`}),` — executes all callbacks sequentially with the provided value. Sets `,(0,c.jsx)(t.code,{children:`loading`}),` back to `,(0,c.jsx)(t.code,{children:`false`}),` at the start of execution.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsx)(t.h3,{id:`manual-loading-management`,children:`Manual Loading Management`}),`
`,(0,c.jsxs)(t.p,{children:[`When data is fetched asynchronously from an external source (e.g., Figma storage), you can manage the `,(0,c.jsx)(t.code,{children:`loading`}),` state manually to coordinate multiple requests.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const storage = new StorageCallback('figma-data')

// 1. Check if it is not already loading
if (!storage.isLoading()) {
  // 2. Set loading state to true
  storage.preparation()
  
  // 3. Request the data
  fetchFromFigma((data) => {
    // 4. Run callbacks (run will reset loading to false)
    storage.run(data)
  })
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`one-time-callback`,children:`One-time Callback`}),`
`,(0,c.jsxs)(t.p,{children:[`If you only need a function to trigger once (e.g., for initial data hydration), use the `,(0,c.jsx)(t.code,{children:`isOnce`}),` flag.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const storage = new StorageCallback('initial-data')

storage.addCallback((data) => {
  console.log('Executed once:', data)
}, true)

await storage.run('update 1') // 'Executed once: update 1'
await storage.run('update 2') // (no output, callback removed)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};