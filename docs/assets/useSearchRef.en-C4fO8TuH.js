import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useSearchRef - List Search`}),`
`,(0,c.jsx)(n.h1,{id:`usesearchref`,children:(0,c.jsx)(n.code,{children:`useSearchRef`})}),`
`,(0,c.jsx)(n.p,{children:`A composable for implementing search and filtering logic on a list of data with reactivity support and match highlighting.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: SearchListInput<T>`}),` — source data list (Array, Ref, or a function returning an array).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns: K`}),` — list of columns (object keys) to search in.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Ref<string>`}),` — external reactive search string ref. Created internally if not provided.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — search settings:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — minimum character limit to activate search. Default: `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — delay (debounce) before searching in ms. Default: `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, performs literal phrase match. If `,(0,c.jsx)(n.code,{children:`false`}),` (default), finds items containing all words in any order.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, returns all items (non-matching items have `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`). If `,(0,c.jsx)(n.code,{children:`false`}),`, returns only matches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — CSS class for match highlighting. Default: `,(0,c.jsx)(n.code,{children:`sys-search-selection`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch: ComputedRef<boolean>`}),` — whether the search is currently active (checks minimum character limit).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: Ref<string>`}),` — current search string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — loading status (active during `,(0,c.jsx)(n.code,{children:`delay`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listSearch: ComputedRef<SearchFormatList<T, K>>`}),` — filtered and formatted results list. Each item gets `,(0,c.jsx)(n.code,{children:`{column}Search`}),` fields with HTML highlighting and a `,(0,c.jsx)(n.code,{children:`searchActive`}),` flag.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`architecture-lazy-computed-dynamic-getters`,children:[`Architecture: Lazy `,(0,c.jsx)(n.code,{children:`computed`}),` (Dynamic Getters)`]}),`
`,(0,c.jsxs)(n.p,{children:[`This composable is specifically designed to return `,(0,c.jsx)(n.code,{children:`isSearch`}),` and `,(0,c.jsx)(n.code,{children:`listSearch`}),` as native JS getters.
This allows you to call `,(0,c.jsx)(n.code,{children:`useSearchRef()`}),` `,(0,c.jsx)(n.strong,{children:`outside the lifecycle of a Vue component`}),` (for example, globally in a service or in a Store).
The actual `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` objects are created (and bound to the component) exactly at the moment when the component accesses them during destructuring:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Getters will trigger once during destructuring in setup(), Vue will cache the ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Important`}),`: Because of this architecture, avoid accessing getters "via dot notation" multiple times. Always destructure the result once at the `,(0,c.jsx)(n.code,{children:`setup`}),` level to avoid creating multiple duplicate `,(0,c.jsx)(n.code,{children:`computed`}),` instances.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSearchRef } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};