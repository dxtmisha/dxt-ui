import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/SearchListItem - Search Item Management`}),`
`,(0,c.jsx)(n.h1,{id:`searchlistitem-class`,children:`SearchListItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`SearchListItem`}),` class represents the current state of a single search input. It manages the value being searched and determines whether a search operation should be triggered based on configured options.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Value Management`}),` — provides easy methods to get and set the search string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Activation Logic`}),` — determines if a search should be triggered based on the length of the search string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Safety`}),` — includes type guards to verify if the value is non-empty.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`SearchListItem(value, options)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | undefined`}),` — the initial search value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: SearchListOptions`}),` — an instance of `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),` to provide the search limit.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (length < 3)
item.set('hello')
console.log(item.isSearch()) // true (length >= 3)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if the current value is not empty or undefined.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch(): boolean`}),` — Checks if a search should be performed (value exists AND length >= limit).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — Returns the current search value as a string.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: string): this`}),` — Sets a new search value and returns the current instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`search-activation`,children:`Search Activation`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`SearchListItem`}),` class acts as a filter that determines whether the search system should start processing data. This is handled by the `,(0,c.jsx)(n.code,{children:`isSearch()`}),` method, which uses the `,(0,c.jsx)(n.code,{children:`limit`}),` option from `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Minimum Length (`,(0,c.jsx)(n.code,{children:`limit`}),`)`]}),`: A search is only considered active if the number of characters in the search string is greater than or equal to the defined limit.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default Behavior`}),`: By default, the limit is set to `,(0,c.jsx)(n.code,{children:`2`}),`. This means searching for `,(0,c.jsx)(n.code,{children:`"a"`}),` will not trigger a match, but `,(0,c.jsx)(n.code,{children:`"ad"`}),` or `,(0,c.jsx)(n.code,{children:`"admin"`}),` will.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`This logic helps prevent unnecessary computations and "noisy" results when the user has only typed a single character.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};