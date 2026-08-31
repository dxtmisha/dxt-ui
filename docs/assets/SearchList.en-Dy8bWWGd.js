import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/SearchList - Advanced Searchable List Management`}),`
`,(0,c.jsx)(t.h1,{id:`searchlist-class`,children:`SearchList Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`SearchList`}),` class is the primary entry point for implementing searchable lists. it coordinates between data storage, search item state, matching logic, and configuration options to provide a seamless search experience.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Coordinated Search`}),` — automatically updates the matcher and regenerates results when search values or data change.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Results`}),` — provides a `,(0,c.jsx)(t.code,{children:`to()`}),` method that returns either the full list or filtered results with optional HTML highlights.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Easy Integration`}),` — simple API for setting data, columns, and search values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Support for "Return Everything"`}),` — can be configured to show the full list with highlights on matches, or only the matching items.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Optimized Performance`}),` — uses a global `,(0,c.jsx)(t.code,{children:`forEach`}),` utility for fast processing when search is inactive, bypassing cache generation for maximum efficiency.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`SearchList(list, columns, value, options)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: T[]`}),` — the initial array of data items.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns?: string[]`}),` — the property paths to search in.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string`}),` — the initial search value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — search configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Get filtered and highlighted results
const results = search.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(t.h3,{id:`to`,children:(0,c.jsx)(t.code,{children:`to`})}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`to()`}),` method processes the current data list against the search query and returns an array of formatted results.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`SearchFormatList<T, K>`}),` — a list of items where each searchable field is supplemented with a `,(0,c.jsx)(t.code,{children:`...Search`}),` property containing HTML highlights.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Behavior:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Search Active`}),`: If the search string length is greater than or equal to the `,(0,c.jsx)(t.code,{children:`limit`}),`, it filters the list (unless `,(0,c.jsx)(t.code,{children:`returnEverything`}),` is true) and applies highlight tags to matching text.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Search Inactive`}),`: If the search is empty or too short, it returns the original list items formatted with their search properties, but without any highlights and with `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Matched item found: \${item.nameSearch}\`)
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`information-getters`,children:`Information (Getters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getData(): SearchListData`}),` — Returns the internal data management instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): T[]`}),` — Returns the source data list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getColumns(): string[] | undefined`}),` — Returns the current search columns.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): SearchListItem`}),` — Returns the search item state instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(): string | undefined`}),` — Returns the current search string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOptions(): SearchListOptions`}),` — Returns the options management instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setList(list: T[]): this`}),` — Sets a new data list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setColumns(columns?: string[]): this`}),` — Sets new search columns.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setValue(value?: string): this`}),` — Sets a new search value and triggers a matcher update.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options: SearchOptions): this`}),` — Sets new search options.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsxs)(t.p,{children:[`Configuration object for the `,(0,c.jsx)(t.code,{children:`SearchList`}),` behavior:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — minimum character length to trigger search (default: `,(0,c.jsx)(t.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, returns all items instead of filtering; non-matches will have `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — debouncing delay in milliseconds (used by higher-level components).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, uses "Exact Phrase" mode; otherwise uses "Contains All Words".`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — custom CSS class for the `,(0,c.jsx)(t.code,{children:`<span />`}),` highlight tags.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`searchformatitem`,children:`SearchFormatItem`}),`
`,(0,c.jsxs)(t.p,{children:[`The structure of an item returned by the `,(0,c.jsx)(t.code,{children:`to()`}),` method. It includes all original fields from the data item plus dynamic search-related fields:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[key]Search: string`}),` — (Dynamic) value of the corresponding column, potentially containing `,(0,c.jsx)(t.code,{children:`<span />`}),` tags for matches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchActive?: boolean`}),` — boolean flag indicating if the item matched the current search criteria.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`searchformatlist`,children:`SearchFormatList`}),`
`,(0,c.jsxs)(t.p,{children:[`A list of formatted search items:
`,(0,c.jsx)(t.code,{children:`type SearchFormatList<T, K> = SearchFormatItem<T, K>[]`})]}),`
`,(0,c.jsx)(t.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,c.jsxs)(t.p,{children:[`A generic object that can be searched:
`,(0,c.jsx)(t.code,{children:`type SearchItem = Record<string, any>`})]}),`
`,(0,c.jsx)(t.h3,{id:`searchlistvalue`,children:`SearchListValue`}),`
`,(0,c.jsxs)(t.p,{children:[`The input list value:
`,(0,c.jsx)(t.code,{children:`type SearchListValue<T> = T[] | undefined`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};