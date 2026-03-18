import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/SearchListData - Search Data Management"}),`
`,e.jsx(n.h1,{id:"searchlistdata-class",children:"SearchListData Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SearchListData"})," class manages the source data list and its associated search cache. It handles the formatting of items, extraction of values from nested paths, and the application of highlight tags to matching strings."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lazy Initialization"})," — implements on-demand cache generation, ensuring performance overhead only occurs when a search is actively performed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search Caching"})," — generates a flattened string representation of specified columns for each item to enable fast searching."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Nested Path Support"})," — ability to extract data from deep object structures (e.g., ",e.jsx(n.code,{children:"'user.profile.name'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Highlighting"})," — wraps matching parts of the string in HTML tags for visual feedback."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CamelCase Formatting"})," — transforms column paths into convenient property names (e.g., ",e.jsx(n.code,{children:"'user.name'"})," becomes ",e.jsx(n.code,{children:"'userNameSearch'"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"SearchListData(list, columns, item, options)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: T[]"})," — the original array of data items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns?: string[]"})," — an array of property paths to search in."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: SearchListItem"})," — the search item state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: SearchListOptions"})," — configuration options."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { SearchListData, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions()
const item = new SearchListItem('alice', options)
const data = new SearchListData(
  [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
  ['name'],
  item,
  options
)

const results = data.forEach((origItem, value) => {
  return data.toFormatItem(origItem, true)
})
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(): boolean"})," — Checks if both the list and columns are initialized."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isList(): boolean"})," — Checks if the source list is provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): T[]"})," — Returns the original data list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getColumns(): string[] | undefined"})," — Returns the current search columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findCacheItem(item: T)"})," — Finds the cached search value for a specific original item."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setList(list: T[]): this"})," — Updates the data list and regenerates the cache."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setColumns(columns?: string[]): this"})," — Updates the search columns and regenerates the cache."]}),`
`]}),`
`,e.jsx(n.h3,{id:"processing",children:"Processing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toFormatItem(item: T, selection: boolean): object"})," — Converts an original item into a formatted one with highlight tags."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"forEach(callback: Function): Array"})," — Iterates over the cache and returns a list of items formatted via the callback."]}),`
`]}),`
`,e.jsx(n.h2,{id:"cache-generation",children:"Cache Generation"}),`
`,e.jsx(n.p,{children:"The search system uses a lazy initialization strategy to optimize performance when working with large lists:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"On-Demand Generation"}),": The cache is not built when the class is instantiated. Instead, it is generated the very first time a search operation requires it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cache Invalidation"}),": Calling ",e.jsx(n.code,{children:"setList()"})," or ",e.jsx(n.code,{children:"setColumns()"})," automatically destroys the existing cache. It will be seamlessly rebuilt during the next search."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flattened Representation"}),": To create the cache, the class iterates through the original list and extracts values from the specified ",e.jsx(n.code,{children:"columns"})," (including deep paths). These values are converted to strings and concatenated into a single, space-separated string. This composite string is saved in ",e.jsx(n.code,{children:"SearchCacheItem.value"})," and used for all subsequent, high-speed regular expression matching. This approach completely eliminates complex object traversal during active user typing."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"searchcacheitem",children:"SearchCacheItem"}),`
`,e.jsx(n.p,{children:"Object representing a single item in the search cache:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: T"})," — reference to the original data item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — flattened string representation of the searchable columns."]}),`
`]}),`
`,e.jsx(n.h3,{id:"searchcache",children:"SearchCache"}),`
`,e.jsxs(n.p,{children:["A collection of ",e.jsx(n.code,{children:"SearchCacheItem"}),` objects used for efficient searching:
`,e.jsx(n.code,{children:"type SearchCache<T> = SearchCacheItem<T>[]"})]})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
