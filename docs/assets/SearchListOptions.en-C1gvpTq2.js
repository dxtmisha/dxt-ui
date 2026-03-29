import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/SearchListOptions - Search List Options Management`}),`
`,(0,c.jsx)(n.h1,{id:`searchlistoptions-class`,children:`SearchListOptions Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),` class is responsible for managing and providing access to the configuration options used by the `,(0,c.jsx)(n.code,{children:`SearchList`}),` system. It ensures that default values are used when specific options are not provided.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Configuration`}),` — provides a single point of access for all search-related settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default Value Handling`}),` — automatically applies sensible defaults (e.g., limit, delay) if they are missing in the provided options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent Interface`}),` — supports method chaining for setting new options.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`SearchListOptions(options)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — an object containing search configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): SearchOptions`}),` — Returns the current search options object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLimit(): number`}),` — Returns the minimum number of characters required to trigger a search (default is `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getReturnEverything(): boolean`}),` — Returns whether to return all items even if they don't match the search query (default is `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDelay(): number`}),` — Returns the search delay in milliseconds (default is `,(0,c.jsx)(n.code,{children:`0`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFindExactMatch(): boolean`}),` — Returns whether to perform an exact match search (default is `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getClassName(): string`}),` — Returns the CSS class name used for highlighting matches (default is `,(0,c.jsx)(n.code,{children:`'sys-search-selection'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: SearchOptions): this`}),` — Sets new search options and returns the current instance for chaining.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsx)(n.p,{children:`Main configuration object for the search system. All fields are optional:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — minimum character length to trigger search. Default: `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, returns all items regardless of match. Default: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — search execution delay in milliseconds. Default: `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — enables strict word matching. Default: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — CSS class for highlighting matches. Default: `,(0,c.jsx)(n.code,{children:`'sys-search-selection'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};