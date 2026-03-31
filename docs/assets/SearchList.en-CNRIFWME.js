import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/SearchList - Advanced Searchable List Management`}),`
`,(0,c.jsx)(n.h1,{id:`searchlist-class`,children:`SearchList Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`SearchList`}),` class is the primary entry point for implementing searchable lists. it coordinates between data storage, search item state, matching logic, and configuration options to provide a seamless search experience.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Coordinated Search`}),` — automatically updates the matcher and regenerates results when search values or data change.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Results`}),` — provides a `,(0,c.jsx)(n.code,{children:`to()`}),` method that returns either the full list or filtered results with optional HTML highlights.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Easy Integration`}),` — simple API for setting data, columns, and search values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Support for "Return Everything"`}),` — can be configured to show the full list with highlights on matches, or only the matching items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Optimized Performance`}),` — uses a global `,(0,c.jsx)(n.code,{children:`forEach`}),` utility for fast processing when search is inactive, bypassing cache generation for maximum efficiency.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`SearchList(list, columns, value, options)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: T[]`}),` — the initial array of data items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns?: string[]`}),` — the property paths to search in.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — the initial search value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — search configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Get filtered and highlighted results
const results = search.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`to()`}),` method processes the current data list against the search query and returns an array of formatted results.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`SearchFormatList<T, K>`}),` — a list of items where each searchable field is supplemented with a `,(0,c.jsx)(n.code,{children:`...Search`}),` property containing HTML highlights.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Behavior:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Search Active`}),`: If the search string length is greater than or equal to the `,(0,c.jsx)(n.code,{children:`limit`}),`, it filters the list (unless `,(0,c.jsx)(n.code,{children:`returnEverything`}),` is true) and applies highlight tags to matching text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Search Inactive`}),`: If the search is empty or too short, it returns the original list items formatted with their search properties, but without any highlights and with `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Matched item found: \${item.nameSearch}\`)
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information-getters`,children:`Information (Getters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getData(): SearchListData`}),` — Returns the internal data management instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): T[]`}),` — Returns the source data list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getColumns(): string[] | undefined`}),` — Returns the current search columns.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): SearchListItem`}),` — Returns the search item state instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(): string | undefined`}),` — Returns the current search string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): SearchListOptions`}),` — Returns the options management instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list: T[]): this`}),` — Sets a new data list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setColumns(columns?: string[]): this`}),` — Sets new search columns.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setValue(value?: string): this`}),` — Sets a new search value and triggers a matcher update.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: SearchOptions): this`}),` — Sets new search options.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsxs)(n.p,{children:[`Configuration object for the `,(0,c.jsx)(n.code,{children:`SearchList`}),` behavior:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — minimum character length to trigger search (default: `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, returns all items instead of filtering; non-matches will have `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — debouncing delay in milliseconds (used by higher-level components).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, uses "Exact Phrase" mode; otherwise uses "Contains All Words".`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — custom CSS class for the `,(0,c.jsx)(n.code,{children:`<span />`}),` highlight tags.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchformatitem`,children:`SearchFormatItem`}),`
`,(0,c.jsxs)(n.p,{children:[`The structure of an item returned by the `,(0,c.jsx)(n.code,{children:`to()`}),` method. It includes all original fields from the data item plus dynamic search-related fields:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key]Search: string`}),` — (Dynamic) value of the corresponding column, potentially containing `,(0,c.jsx)(n.code,{children:`<span />`}),` tags for matches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchActive?: boolean`}),` — boolean flag indicating if the item matched the current search criteria.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchformatlist`,children:`SearchFormatList`}),`
`,(0,c.jsxs)(n.p,{children:[`A list of formatted search items:
`,(0,c.jsx)(n.code,{children:`type SearchFormatList<T, K> = SearchFormatItem<T, K>[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,c.jsxs)(n.p,{children:[`A generic object that can be searched:
`,(0,c.jsx)(n.code,{children:`type SearchItem = Record<string, any>`})]}),`
`,(0,c.jsx)(n.h3,{id:`searchlistvalue`,children:`SearchListValue`}),`
`,(0,c.jsxs)(n.p,{children:[`The input list value:
`,(0,c.jsx)(n.code,{children:`type SearchListValue<T> = T[] | undefined`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};