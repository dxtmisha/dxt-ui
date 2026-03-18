import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useHashRef - Hash Management"}),`
`,e.jsx(n.h1,{id:"usehashref",children:e.jsx(n.code,{children:"useHashRef"})}),`
`,e.jsxs(n.p,{children:["A composable for working with the URL hash (the part after ",e.jsx(n.code,{children:"#"}),"). It allows creating reactive variables that automatically synchronize with a specific key in the hash."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — Key name in the hash."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — Default value if the key is missing from the hash."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Returns (",e.jsx(n.code,{children:"Ref<T>"}),"):"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A reactive reference to the value in the hash."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useHashRef } from '@dxtmisha/functional'

// Create a reference to 'step' value in the URL hash
const step = useHashRef('step', '1')

// Update value (automatically updates URL: #step=2)
step.value = '2'

// If the user changes the hash manually or via browser history,
// step.value will be updated automatically.
`})})]})}function u(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default};
