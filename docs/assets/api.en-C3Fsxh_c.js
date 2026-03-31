import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/# API Hooks`}),`
`,(0,c.jsx)(n.h1,{id:`api-hooks`,children:`API Hooks`}),`
`,(0,c.jsxs)(n.p,{children:[`A set of tools for efficient backend interaction, fully integrated with `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`features`,children:`Features`}),`
`,(0,c.jsxs)(n.p,{children:[`The main task of these tools is to automate routine operations: tracking loading states (`,(0,c.jsx)(n.code,{children:`loading`}),`), handling errors, and synchronizing data across different parts of the interface. All hooks support reactive parameters, allowing for the creation of dynamic requests that automatically update when input filters or paths change.`]}),`
`,(0,c.jsx)(n.h2,{id:`available-tools`,children:`Available Tools`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRef`}),` — Reactive data retrieval (GET) with automatic execution and storage in a `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRequest`}),` — Base hook for manual execution of any HTTP requests (returns the `,(0,c.jsx)(n.code,{children:`send`}),` method).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiPost / Put / Delete`}),` — Specialized wrappers for mutations (create, update, delete).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` — A comprehensive orchestrator combining GET requests, search, formatting, and mutations into a single cycle.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-work-with-them`,children:`How to Work with Them`}),`
`,(0,c.jsxs)(n.p,{children:[`For simple data display, using `,(0,c.jsx)(n.code,{children:`useApiRef`}),` is sufficient. You don't need to manually call a load function — the request is executed automatically as soon as you access the `,(0,c.jsx)(n.code,{children:`data`}),` property. If the API path is a reactive ref, the hook will track its changes and load new data by itself.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiRef } from '@dxtmisha/functional'

// Data will load automatically when accessing 'data'
const { data, loading } = useApiRef('api/profile')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`If you need to perform an action on an event (e.g., saving a form), mutation hooks are used. They return a `,(0,c.jsx)(n.code,{children:`send`}),` method that can be called in an event handler, and a `,(0,c.jsx)(n.code,{children:`loading`}),` flag to disable buttons.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { send, loading } = useApiPost('api/save')

const onSave = async () => {
  await send({ data: { name: 'Dxt' } })
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`useapimanagementref`,children:`useApiManagementRef`}),`
`,(0,c.jsxs)(n.p,{children:[`The most powerful approach is using `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`. It acts as a full hub for managing data in complex interfaces (like tables). It links the GET request with mutations: as soon as you successfully execute `,(0,c.jsx)(n.code,{children:`sendDelete`}),` or `,(0,c.jsx)(n.code,{children:`sendPost`}),`, the orchestrator automatically calls `,(0,c.jsx)(n.code,{children:`reset()`}),` for the main list, and the data on the screen updates automatically.`]}),`
`,(0,c.jsx)(n.h3,{id:`key-capabilities`,children:`Key Capabilities:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automation`}),`: Full synchronization between data reading and modification.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integration`}),`: Includes search (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`) and formatting (`,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`) functionality.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Skeleton`}),`: Support for placeholders during loading to prevent layout shifts.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexibility`}),`: Configuration of individual paths and transformations for each request type (GET, POST, PUT, DELETE).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiManagementRef } from '@dxtmisha/functional'

const search = ref('')
const { 
  list, 
  sendPost, 
  sendDelete 
} = useApiManagementRef(
  { path: 'api/items' },      // Listen to GET
  undefined,                  // Formatters
  { columns: ['name'], value: search }, // Live search
  { path: 'api/items/add' },  // POST setup
  undefined,
  { path: 'api/items/delete' } // DELETE setup
)

// After calling sendDelete(), the main 'list' will update AUTOMATICALLY!
`})}),`
`,(0,c.jsx)(n.p,{children:`This architecture allows you to describe data logic declaratively, focusing on request configuration rather than manual management of loading states and list updates.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};