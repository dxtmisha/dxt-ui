import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useSearchValueRef - Search State and Logic`}),`
`,(0,c.jsx)(t.h1,{id:`usesearchvalueref`,children:(0,c.jsx)(t.code,{children:`useSearchValueRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A low-level composable for managing search query state, handling debounce delay, and creating regular expressions for matching. It is typically used inside `,(0,c.jsx)(t.code,{children:`useSearchRef`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SearchList<T, K>`}),` — a configured instance of `,(0,c.jsx)(t.code,{children:`SearchList`}),` used for managing options and values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — external search reference. If not provided, an internal one is created.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — current search value (updates immediately).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchDelay: Ref<string>`}),` — search value with applied delay (if delay is configured).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` during the debounce `,(0,c.jsx)(t.code,{children:`delay`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How It Works`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useSearchValueRef`}),` isolates the `,(0,c.jsx)(t.code,{children:`debounce`}),` delay logic from the actual data filtering.
When a user types into `,(0,c.jsx)(t.code,{children:`search.value`}),`, the composable:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Immediately sets `,(0,c.jsx)(t.code,{children:`loading.value = true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Waits for the specified `,(0,c.jsx)(t.code,{children:`delay`}),` in milliseconds.`]}),`
`,(0,c.jsx)(t.li,{children:`If the user types again within the delay, the timer resets.`}),`
`,(0,c.jsxs)(t.li,{children:[`Once the timer completes, it copies `,(0,c.jsx)(t.code,{children:`search.value`}),` into `,(0,c.jsx)(t.code,{children:`searchDelay.value`}),` and sets `,(0,c.jsx)(t.code,{children:`loading.value = false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`By using `,(0,c.jsx)(t.code,{children:`searchDelay.value`}),` instead of `,(0,c.jsx)(t.code,{children:`search.value`}),` in your filtered lists, you ensure that complex data operations only happen after the user stops typing, significantly improving performance on large datasets.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value becomes true
// After 300ms searchDelay.value becomes 'app' and loading.value becomes false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};