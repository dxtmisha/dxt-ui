import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/SearchList - Advanced Searchable List Management"}),`
`,e.jsx(n.h1,{id:"searchlist-class",children:"SearchList Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SearchList"})," class is the primary entry point for implementing searchable lists. it coordinates between data storage, search item state, matching logic, and configuration options to provide a seamless search experience."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coordinated Search"})," — automatically updates the matcher and regenerates results when search values or data change."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Results"})," — provides a ",e.jsx(n.code,{children:"to()"})," method that returns either the full list or filtered results with optional HTML highlights."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Easy Integration"})," — simple API for setting data, columns, and search values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'Support for "Return Everything"'})," — can be configured to show the full list with highlights on matches, or only the matching items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optimized Performance"})," — uses a global ",e.jsx(n.code,{children:"forEach"})," utility for fast processing when search is inactive, bypassing cache generation for maximum efficiency."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"SearchList(list, columns, value, options)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: T[]"})," — the initial array of data items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns?: string[]"})," — the property paths to search in."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — the initial search value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — search configuration."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Get filtered and highlighted results
const results = search.to()
`})}),`
`,e.jsx(n.h2,{id:"data-management",children:"Data Management"}),`
`,e.jsx(n.h3,{id:"to",children:e.jsx(n.code,{children:"to"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"to()"})," method processes the current data list against the search query and returns an array of formatted results."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"SearchFormatList<T, K>"})," — a list of items where each searchable field is supplemented with a ",e.jsx(n.code,{children:"...Search"})," property containing HTML highlights."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search Active"}),": If the search string length is greater than or equal to the ",e.jsx(n.code,{children:"limit"}),", it filters the list (unless ",e.jsx(n.code,{children:"returnEverything"})," is true) and applies highlight tags to matching text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search Inactive"}),": If the search is empty or too short, it returns the original list items formatted with their search properties, but without any highlights and with ",e.jsx(n.code,{children:"searchActive: false"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Matched item found: \${item.nameSearch}\`)
  }
})
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information-getters",children:"Information (Getters)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getData(): SearchListData"})," — Returns the internal data management instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): T[]"})," — Returns the source data list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getColumns(): string[] | undefined"})," — Returns the current search columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): SearchListItem"})," — Returns the search item state instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getValue(): string | undefined"})," — Returns the current search string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getOptions(): SearchListOptions"})," — Returns the options management instance."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setList(list: T[]): this"})," — Sets a new data list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setColumns(columns?: string[]): this"})," — Sets new search columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setValue(value?: string): this"})," — Sets a new search value and triggers a matcher update."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options: SearchOptions): this"})," — Sets new search options."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"searchoptions",children:"SearchOptions"}),`
`,e.jsxs(n.p,{children:["Configuration object for the ",e.jsx(n.code,{children:"SearchList"})," behavior:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit?: number"})," — minimum character length to trigger search (default: ",e.jsx(n.code,{children:"2"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"returnEverything?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", returns all items instead of filtering; non-matches will have ",e.jsx(n.code,{children:"searchActive: false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay?: number"})," — debouncing delay in milliseconds (used by higher-level components)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findExactMatch?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),', uses "Exact Phrase" mode; otherwise uses "Contains All Words".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"classSearchName?: string"})," — custom CSS class for the ",e.jsx(n.code,{children:"<span />"})," highlight tags."]}),`
`]}),`
`,e.jsx(n.h3,{id:"searchformatitem",children:"SearchFormatItem"}),`
`,e.jsxs(n.p,{children:["The structure of an item returned by the ",e.jsx(n.code,{children:"to()"})," method. It includes all original fields from the data item plus dynamic search-related fields:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[key]Search: string"})," — (Dynamic) value of the corresponding column, potentially containing ",e.jsx(n.code,{children:"<span />"})," tags for matches."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchActive?: boolean"})," — boolean flag indicating if the item matched the current search criteria."]}),`
`]}),`
`,e.jsx(n.h3,{id:"searchformatlist",children:"SearchFormatList"}),`
`,e.jsxs(n.p,{children:[`A list of formatted search items:
`,e.jsx(n.code,{children:"type SearchFormatList<T, K> = SearchFormatItem<T, K>[]"})]}),`
`,e.jsx(n.h3,{id:"searchitem",children:"SearchItem"}),`
`,e.jsxs(n.p,{children:[`A generic object that can be searched:
`,e.jsx(n.code,{children:"type SearchItem = Record<string, any>"})]}),`
`,e.jsx(n.h3,{id:"searchlistvalue",children:"SearchListValue"}),`
`,e.jsxs(n.p,{children:[`The input list value:
`,e.jsx(n.code,{children:"type SearchListValue<T> = T[] | undefined"})]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
