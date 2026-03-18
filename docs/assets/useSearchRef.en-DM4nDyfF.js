import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useSearchRef - List Search"}),`
`,e.jsx(n.h1,{id:"usesearchref",children:e.jsx(n.code,{children:"useSearchRef"})}),`
`,e.jsx(n.p,{children:"A composable for implementing search and filtering logic on a list of data with reactivity support and match highlighting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: SearchListInput<T>"})," — source data list (Array, Ref, or a function returning an array)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns: K"})," — list of columns (object keys) to search in."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Ref<string>"})," — external reactive search string ref. Created internally if not provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — search settings:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit?: number"})," — minimum character limit to activate search. Default: ",e.jsx(n.code,{children:"2"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay?: number"})," — delay (debounce) before searching in ms. Default: ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findExactMatch?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", performs literal phrase match. If ",e.jsx(n.code,{children:"false"})," (default), finds items containing all words in any order."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"returnEverything?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", returns all items (non-matching items have ",e.jsx(n.code,{children:"searchActive: false"}),"). If ",e.jsx(n.code,{children:"false"}),", returns only matches."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"classSearchName?: string"})," — CSS class for match highlighting. Default: ",e.jsx(n.code,{children:"sys-search-selection"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSearch: ComputedRef<boolean>"})," — whether the search is currently active (checks minimum character limit)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: Ref<string>"})," — current search string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — loading status (active during ",e.jsx(n.code,{children:"delay"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listSearch: ComputedRef<SearchFormatList<T, K>>"})," — filtered and formatted results list. Each item gets ",e.jsx(n.code,{children:"{column}Search"})," fields with HTML highlighting and a ",e.jsx(n.code,{children:"searchActive"})," flag."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"architecture-lazy-computed-dynamic-getters",children:["Architecture: Lazy ",e.jsx(n.code,{children:"computed"})," (Dynamic Getters)"]}),`
`,e.jsxs(n.p,{children:["This composable is specifically designed to return ",e.jsx(n.code,{children:"isSearch"})," and ",e.jsx(n.code,{children:"listSearch"}),` as native JS getters.
This allows you to call `,e.jsx(n.code,{children:"useSearchRef()"})," ",e.jsx(n.strong,{children:"outside the lifecycle of a Vue component"}),` (for example, globally in a service or in a Store).
The actual `,e.jsx(n.code,{children:"ComputedRef"})," objects are created (and bound to the component) exactly at the moment when the component accesses them during destructuring:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Getters will trigger once during destructuring in setup(), Vue will cache the ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),': Because of this architecture, avoid accessing getters "via dot notation" multiple times. Always destructure the result once at the ',e.jsx(n.code,{children:"setup"})," level to avoid creating multiple duplicate ",e.jsx(n.code,{children:"computed"})," instances."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useSearchRef } from '@dxtmisha/functional'

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
`})})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{u as default};
