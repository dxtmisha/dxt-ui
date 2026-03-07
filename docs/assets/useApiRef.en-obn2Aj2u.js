import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useApiRef - API Requests"}),`
`,e.jsx(n.h1,{id:"useapiref",children:e.jsx(n.code,{children:"useApiRef"})}),`
`,e.jsxs(n.p,{children:["A composable for working with API requests in Vue components. Returns reactive data, state flags, and load management methods. Uses ",e.jsx(n.strong,{children:"lazy loading"})," — the request is only sent on the first access to the ",e.jsx(n.code,{children:"data"})," property."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — endpoint path (can be a reactive ",e.jsx(n.code,{children:"Ref"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — request options (",e.jsx(n.code,{children:"ApiFetch"})," object or method name string)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reactivity?: boolean"})," — automatically re-run the request when ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"options"}),", or locale change. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: RefType<boolean>"})," — reactive execution condition. If ",e.jsx(n.code,{children:"false"})," — the request is not made and data is cleared."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => ApiData<R>"})," — response transformation function applied before saving to ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", data is cleared and the watcher is stopped when the component unmounts."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Returns (",e.jsx(n.code,{children:"UseApiRef<R>"}),"):"]})}),`
`,e.jsxs(n.p,{children:["Reactive states (getter ",e.jsx(n.code,{children:"ComputedRef"}),"s):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data"})," — ",e.jsx(n.code,{children:"Ref<ApiData<R> | undefined>"})," — loaded data. Triggers the request (lazy) on first access."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"starting"})," — ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," while data has never been loaded yet (",e.jsx(n.code,{children:"data === undefined"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading"})," — ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," while an active request to the server is in progress."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reading"})," — ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," while data reading is in progress."]}),`
`]}),`
`,e.jsx(n.p,{children:"Methods:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isStarting(): boolean"})," — returns the current value of the ",e.jsx(n.code,{children:"starting"})," flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLoading(): boolean"})," — returns the current value of the ",e.jsx(n.code,{children:"loading"})," flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isReading(): boolean"})," — returns the current value of the ",e.jsx(n.code,{children:"reading"})," flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): ApiData<R> | undefined"})," — returns the current loaded data without reactivity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): Promise<void>"})," — force re-runs the request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): void"})," — stops the watcher and resets ",e.jsx(n.code,{children:"data"})," to ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abort(): void"})," — cancels the current request via ",e.jsx(n.code,{children:"AbortController"})," without clearing data."]}),`
`]}),`
`,e.jsx(n.h2,{id:"lazy-loading",children:"Lazy Loading"}),`
`,e.jsxs(n.p,{children:["The request is ",e.jsx(n.strong,{children:"not sent"})," when ",e.jsx(n.code,{children:"useApiRef"})," is called. It is triggered only on the first access to the ",e.jsx(n.code,{children:"data"})," property. This allows calling the composable at the top of ",e.jsx(n.code,{children:"setup()"})," without unnecessary network requests."]}),`
`,e.jsx(n.h2,{id:"global-conditions",children:"Global Conditions"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"setApiRefGlobalConditions(conditions)"})," — sets a global condition for all ",e.jsx(n.code,{children:"useApiRef"})," instances. Only works on the first call."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useApiRef, setApiRefGlobalConditions } from '@dxtmisha/functional'

const userId = ref('123')
const isAuthenticated = ref(true)

// Global condition (all requests only run if authenticated)
setApiRefGlobalConditions(isAuthenticated)

const {
  data: user,
  starting,
  loading,
  reading,
  getItem,
  reset,
  stop,
  abort
} = useApiRef(
  () => \`users/\${userId.value}\`,
  { method: 'GET' },
  true // Reactively re-run on userId change
)

// Check state without reactivity
console.log(getItem()) // undefined before first access to data

// Force reload
await reset()

// Cancel request (without clearing data)
abort()

// Stop watching (clears data)
stop()
`})})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default};
