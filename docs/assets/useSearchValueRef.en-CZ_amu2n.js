import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useSearchValueRef - Search State and Logic`}),`
`,(0,c.jsx)(n.h1,{id:`usesearchvalueref`,children:(0,c.jsx)(n.code,{children:`useSearchValueRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A low-level composable for managing search query state, handling debounce delay, and creating regular expressions for matching. It is typically used inside `,(0,c.jsx)(n.code,{children:`useSearchRef`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: SearchList<T, K>`}),` — a configured instance of `,(0,c.jsx)(n.code,{children:`SearchList`}),` used for managing options and values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Ref<string>`}),` — external search reference. If not provided, an internal one is created.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: Ref<string>`}),` — current search value (updates immediately).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchDelay: Ref<string>`}),` — search value with applied delay (if delay is configured).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` during the debounce `,(0,c.jsx)(n.code,{children:`delay`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How It Works`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useSearchValueRef`}),` isolates the `,(0,c.jsx)(n.code,{children:`debounce`}),` delay logic from the actual data filtering.
When a user types into `,(0,c.jsx)(n.code,{children:`search.value`}),`, the composable:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Immediately sets `,(0,c.jsx)(n.code,{children:`loading.value = true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Waits for the specified `,(0,c.jsx)(n.code,{children:`delay`}),` in milliseconds.`]}),`
`,(0,c.jsx)(n.li,{children:`If the user types again within the delay, the timer resets.`}),`
`,(0,c.jsxs)(n.li,{children:[`Once the timer completes, it copies `,(0,c.jsx)(n.code,{children:`search.value`}),` into `,(0,c.jsx)(n.code,{children:`searchDelay.value`}),` and sets `,(0,c.jsx)(n.code,{children:`loading.value = false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`By using `,(0,c.jsx)(n.code,{children:`searchDelay.value`}),` instead of `,(0,c.jsx)(n.code,{children:`search.value`}),` in your filtered lists, you ensure that complex data operations only happen after the user stops typing, significantly improving performance on large datasets.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value becomes true
// After 300ms searchDelay.value becomes 'app' and loading.value becomes false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};