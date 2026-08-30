import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useSearchRef - List Search`}),`
`,(0,c.jsx)(t.h1,{id:`usesearchref`,children:(0,c.jsx)(t.code,{children:`useSearchRef`})}),`
`,(0,c.jsx)(t.p,{children:`A composable for implementing search and filtering logic on a list of data with reactivity support and match highlighting.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: SearchListInput<T>`}),` — source data list (Array, Ref, or a function returning an array/Ref).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns?: SearchColumnsInput<T, K>`}),` — list of columns (object keys) to search in (Array, Ref, or a function returning an array/Ref).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — external reactive search string ref. Created internally if not provided.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — search settings:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — minimum character limit to activate search. Default: `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — delay (debounce) before searching in ms. Default: `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, performs literal phrase match. If `,(0,c.jsx)(t.code,{children:`false`}),` (default), finds items containing all words in any order.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, returns all items (non-matching items have `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`). If `,(0,c.jsx)(t.code,{children:`false`}),`, returns only matches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — CSS class for match highlighting. Default: `,(0,c.jsx)(t.code,{children:`sys-search-selection`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch: ComputedRef<boolean>`}),` — whether the search is currently active (checks minimum character limit).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — current search string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — loading status (active during `,(0,c.jsx)(t.code,{children:`delay`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listSearch: ComputedRef<SearchFormatList<T, K>>`}),` — filtered and formatted results list. Each item gets `,(0,c.jsx)(t.code,{children:`{column}Search`}),` fields with HTML highlighting and a `,(0,c.jsx)(t.code,{children:`searchActive`}),` flag.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`architecture-lazy-computed-dynamic-getters`,children:[`Architecture: Lazy `,(0,c.jsx)(t.code,{children:`computed`}),` (Dynamic Getters)`]}),`
`,(0,c.jsxs)(t.p,{children:[`This composable is specifically designed to return `,(0,c.jsx)(t.code,{children:`isSearch`}),` and `,(0,c.jsx)(t.code,{children:`listSearch`}),` as native JS getters.
This allows you to call `,(0,c.jsx)(t.code,{children:`useSearchRef()`}),` `,(0,c.jsx)(t.strong,{children:`outside the lifecycle of a Vue component`}),` (for example, globally in a service or in a Store).
The actual `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` objects are created (and bound to the component) exactly at the moment when the component accesses them during destructuring:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Getters will trigger once during destructuring in setup(), Vue will cache the ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Important`}),`: Because of this architecture, avoid accessing getters "via dot notation" multiple times. Always destructure the result once at the `,(0,c.jsx)(t.code,{children:`setup`}),` level to avoid creating multiple duplicate `,(0,c.jsx)(t.code,{children:`computed`}),` instances.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSearchRef } from '@dxtmisha/functional'

const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' }
]

const { 
  search, 
  listSearch, 
  loading 
} = useSearchRef(items, ['name', 'category'], undefined, {
  delay: 300,
  limit: 2
})

// When "app" is entered into search.value:
// listSearch.value will contain { ..., nameSearch: '<span...>App</span>le', searchActive: true }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};