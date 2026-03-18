import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Composables/useStorageRef - Local storage management"}),`
`,e.jsx(n.h1,{id:"usestorageref",children:e.jsx(n.code,{children:"useStorageRef"})}),`
`,e.jsxs(n.p,{children:["Composable for managing reactive data in ",e.jsx(n.code,{children:"localStorage"})," with automatic synchronization across different tabs/windows. Uses a singleton pattern."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — the name of the key in ",e.jsx(n.code,{children:"localStorage"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — the initial value if nothing is found in storage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache?: number"})," — cache time in seconds."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ref<T | undefined>"})," — a reactive reference to the local storage value."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useStorageRef } from '@dxtmisha/functional'

const settings = useStorageRef('app-settings', { theme: 'dark' })

// Updates here sync with localStorage and other open tabs
settings.value.theme = 'light'
`})})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
