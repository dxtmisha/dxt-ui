import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/SearchListMatcher - Search Matcher Logic`}),`
`,(0,c.jsx)(t.h1,{id:`searchlistmatcher-class`,children:`SearchListMatcher Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`SearchListMatcher`}),` class is responsible for the core matching logic. It converts the current search string into a regular expression and provides methods to check if various data values match that expression.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic RegExp Generation`}),` — automatically builds or resets the matcher when the search term or options change.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Search Modes`}),` — supports both standard partial matching and exact match modes based on `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Efficient Testing`}),` — uses high-performance regular expression testing to identify matches in the data.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`SearchListMatcher(item, options)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SearchListItem`}),` — the search item state containing the value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: SearchListOptions`}),` — configuration options (e.g., `,(0,c.jsx)(t.code,{children:`findExactMatch`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Checks if the inner regular expression matcher is initialized.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelection(value: string): boolean`}),` — Checks if the given value matches the current search expression.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): RegExp | undefined`}),` — Returns the current regular expression instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(): void`}),` — Re-initializes the matcher based on the current state of the search item and options.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`search-modes`,children:`Search Modes`}),`
`,(0,c.jsxs)(t.p,{children:[`The class supports two main matching modes, controlled by the `,(0,c.jsx)(t.code,{children:`findExactMatch`}),` option in `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`:`]}),`
`,(0,c.jsx)(t.h3,{id:`1-contains-all-words-default`,children:`1. Contains All Words (Default)`}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`findExactMatch`}),` is `,(0,c.jsx)(t.code,{children:`false`}),`, the search string is split into individual words. A match is found only if `,(0,c.jsx)(t.strong,{children:`every word`}),` is present in the target string, regardless of their order.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Example`}),`: Search for `,(0,c.jsx)(t.code,{children:`"gaming mouse"`}),` will match `,(0,c.jsx)(t.code,{children:`"Mouse for Gaming"`}),` and `,(0,c.jsx)(t.code,{children:`"Gaming Pro Mouse"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-exact-phrase`,children:`2. Exact Phrase`}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`findExactMatch`}),` is `,(0,c.jsx)(t.code,{children:`true`}),`, the search string is treated as a single continuous phrase. A match is found only if the `,(0,c.jsx)(t.strong,{children:`exact sequence`}),` of characters (case-insensitive) exists in the target string.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Example`}),`: Search for `,(0,c.jsx)(t.code,{children:`"gaming mouse"`}),` will match `,(0,c.jsx)(t.code,{children:`"Cool gaming mouse"`}),`, but will `,(0,c.jsx)(t.strong,{children:`not`}),` match `,(0,c.jsx)(t.code,{children:`"Mouse for gaming"`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};