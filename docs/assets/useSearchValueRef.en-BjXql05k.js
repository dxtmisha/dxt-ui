import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/en/functional/Composables/useSearchValueRef - Search State and Logic"}),`
`,e.jsx(n.h1,{id:"usesearchvalueref",children:e.jsx(n.code,{children:"useSearchValueRef"})}),`
`,e.jsxs(n.p,{children:["A low-level composable for managing search query state, handling debounce delay, and creating regular expressions for matching. It is typically used inside ",e.jsx(n.code,{children:"useSearchRef"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: SearchList<T, K>"})," — a configured instance of ",e.jsx(n.code,{children:"SearchList"})," used for managing options and values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Ref<string>"})," — external search reference. If not provided, an internal one is created."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: Ref<string>"})," — current search value (updates immediately)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchDelay: Ref<string>"})," — search value with applied delay (if delay is configured)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — ",e.jsx(n.code,{children:"true"})," during the debounce ",e.jsx(n.code,{children:"delay"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useSearchValueRef"})," isolates the ",e.jsx(n.code,{children:"debounce"}),` delay logic from the actual data filtering.
When a user types into `,e.jsx(n.code,{children:"search.value"}),", the composable:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Immediately sets ",e.jsx(n.code,{children:"loading.value = true"}),"."]}),`
`,e.jsxs(n.li,{children:["Waits for the specified ",e.jsx(n.code,{children:"delay"})," in milliseconds."]}),`
`,e.jsx(n.li,{children:"If the user types again within the delay, the timer resets."}),`
`,e.jsxs(n.li,{children:["Once the timer completes, it copies ",e.jsx(n.code,{children:"search.value"})," into ",e.jsx(n.code,{children:"searchDelay.value"})," and sets ",e.jsx(n.code,{children:"loading.value = false"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["By using ",e.jsx(n.code,{children:"searchDelay.value"})," instead of ",e.jsx(n.code,{children:"search.value"})," in your filtered lists, you ensure that complex data operations only happen after the user stops typing, significantly improving performance on large datasets."]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value becomes true
// After 300ms searchDelay.value becomes 'app' and loading.value becomes false
`})})]})}function u(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
