import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/SearchListItem - Search Item Management`}),`
`,(0,c.jsx)(t.h1,{id:`searchlistitem-class`,children:`SearchListItem Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`SearchListItem`}),` class represents the current state of a single search input. It manages the value being searched and determines whether a search operation should be triggered based on configured options.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Value Management`}),` — provides easy methods to get and set the search string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Activation Logic`}),` — determines if a search should be triggered based on the length of the search string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Safety`}),` — includes type guards to verify if the value is non-empty.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`SearchListItem(value, options)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string | undefined`}),` — the initial search value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: SearchListOptions`}),` — an instance of `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),` to provide the search limit.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (length < 3)
item.set('hello')
console.log(item.isSearch()) // true (length >= 3)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Checks if the current value is not empty or undefined.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch(): boolean`}),` — Checks if a search should be performed (value exists AND length >= limit).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): string`}),` — Returns the current search value as a string.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration-setters`,children:`Configuration (Setters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(value?: string): this`}),` — Sets a new search value and returns the current instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`search-activation`,children:`Search Activation`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`SearchListItem`}),` class acts as a filter that determines whether the search system should start processing data. This is handled by the `,(0,c.jsx)(t.code,{children:`isSearch()`}),` method, which uses the `,(0,c.jsx)(t.code,{children:`limit`}),` option from `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Minimum Length (`,(0,c.jsx)(t.code,{children:`limit`}),`)`]}),`: A search is only considered active if the number of characters in the search string is greater than or equal to the defined limit.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Default Behavior`}),`: By default, the limit is set to `,(0,c.jsx)(t.code,{children:`2`}),`. This means searching for `,(0,c.jsx)(t.code,{children:`"a"`}),` will not trigger a match, but `,(0,c.jsx)(t.code,{children:`"ad"`}),` or `,(0,c.jsx)(t.code,{children:`"admin"`}),` will.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`This logic helps prevent unnecessary computations and "noisy" results when the user has only typed a single character.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};