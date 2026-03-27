import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/SearchListData - Search Data Management`}),`
`,(0,c.jsx)(n.h1,{id:`searchlistdata-class`,children:`SearchListData Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`SearchListData`}),` class manages the source data list and its associated search cache. It handles the formatting of items, extraction of values from nested paths, and the application of highlight tags to matching strings.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy Initialization`}),` — implements on-demand cache generation, ensuring performance overhead only occurs when a search is actively performed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Search Caching`}),` — generates a flattened string representation of specified columns for each item to enable fast searching.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nested Path Support`}),` — ability to extract data from deep object structures (e.g., `,(0,c.jsx)(n.code,{children:`'user.profile.name'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Highlighting`}),` — wraps matching parts of the string in HTML tags for visual feedback.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CamelCase Formatting`}),` — transforms column paths into convenient property names (e.g., `,(0,c.jsx)(n.code,{children:`'user.name'`}),` becomes `,(0,c.jsx)(n.code,{children:`'userNameSearch'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`SearchListData(list, columns, item, options)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: T[]`}),` — the original array of data items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns?: string[]`}),` — an array of property paths to search in.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: SearchListItem`}),` — the search item state.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: SearchListOptions`}),` — configuration options.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListData, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if both the list and columns are initialized.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isList(): boolean`}),` — Checks if the source list is provided.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): T[]`}),` — Returns the original data list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getColumns(): string[] | undefined`}),` — Returns the current search columns.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findCacheItem(item: T)`}),` — Finds the cached search value for a specific original item.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list: T[]): this`}),` — Updates the data list and regenerates the cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setColumns(columns?: string[]): this`}),` — Updates the search columns and regenerates the cache.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`processing`,children:`Processing`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toFormatItem(item: T, selection: boolean): object`}),` — Converts an original item into a formatted one with highlight tags.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`forEach(callback: Function): Array`}),` — Iterates over the cache and returns a list of items formatted via the callback.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cache-generation`,children:`Cache Generation`}),`
`,(0,c.jsx)(n.p,{children:`The search system uses a lazy initialization strategy to optimize performance when working with large lists:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`On-Demand Generation`}),`: The cache is not built when the class is instantiated. Instead, it is generated the very first time a search operation requires it.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Invalidation`}),`: Calling `,(0,c.jsx)(n.code,{children:`setList()`}),` or `,(0,c.jsx)(n.code,{children:`setColumns()`}),` automatically destroys the existing cache. It will be seamlessly rebuilt during the next search.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flattened Representation`}),`: To create the cache, the class iterates through the original list and extracts values from the specified `,(0,c.jsx)(n.code,{children:`columns`}),` (including deep paths). These values are converted to strings and concatenated into a single, space-separated string. This composite string is saved in `,(0,c.jsx)(n.code,{children:`SearchCacheItem.value`}),` and used for all subsequent, high-speed regular expression matching. This approach completely eliminates complex object traversal during active user typing.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`searchcacheitem`,children:`SearchCacheItem`}),`
`,(0,c.jsx)(n.p,{children:`Object representing a single item in the search cache:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — reference to the original data item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — flattened string representation of the searchable columns.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchcache`,children:`SearchCache`}),`
`,(0,c.jsxs)(n.p,{children:[`A collection of `,(0,c.jsx)(n.code,{children:`SearchCacheItem`}),` objects used for efficient searching:
`,(0,c.jsx)(n.code,{children:`type SearchCache<T> = SearchCacheItem<T>[]`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};