import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useBroadcastValueRef - Data Syncing Between Tabs"}),`
`,e.jsx(n.h1,{id:"usebroadcastvalueref",children:e.jsx(n.code,{children:"useBroadcastValueRef"})}),`
`,e.jsxs(n.p,{children:["A composable for creating a reactive variable whose value is synchronized across all open browser tabs within the same domain. It uses ",e.jsx(n.code,{children:"BroadcastChannel"})," via the ",e.jsx(n.code,{children:"BroadcastMessage"})," class."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — a unique name for the value. This will be used to create the communication channel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — default value. Can be static or a function."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ref<T | string | undefined>"})," — a reactive reference to the value. When the value changes in one tab, it automatically updates in all others."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses the ",e.jsx(n.strong,{children:"Singleton"})," pattern: calling it with the same ",e.jsx(n.code,{children:"name"})," within one application returns the same ",e.jsx(n.code,{children:"Ref"})," instance."]}),`
`,e.jsxs(n.li,{children:["Automatically prefixes the name with ",e.jsx(n.code,{children:"broadcast--"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Tab 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Tab 2 (same domain)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value automatically becomes 'online'
`})})]})}function h(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default};
