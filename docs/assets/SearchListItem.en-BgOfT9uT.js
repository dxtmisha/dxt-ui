import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/SearchListItem - Search Item Management"}),`
`,e.jsx(s.h1,{id:"searchlistitem-class",children:"SearchListItem Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"SearchListItem"})," class represents the current state of a single search input. It manages the value being searched and determines whether a search operation should be triggered based on configured options."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Value Management"})," — provides easy methods to get and set the search string."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Activation Logic"})," — determines if a search should be triggered based on the length of the search string."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type Safety"})," — includes type guards to verify if the value is non-empty."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["To initialize the object, call the ",e.jsx(s.code,{children:"SearchListItem(value, options)"})," constructor."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: string | undefined"})," — the initial search value."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"options: SearchListOptions"})," — an instance of ",e.jsx(s.code,{children:"SearchListOptions"})," to provide the search limit."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (length < 3)
item.set('hello')
console.log(item.isSearch()) // true (length >= 3)
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"information",children:"Information"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"is(): boolean"})," — Checks if the current value is not empty or undefined."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isSearch(): boolean"})," — Checks if a search should be performed (value exists AND length >= limit)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get(): string"})," — Returns the current search value as a string."]}),`
`]}),`
`,e.jsx(s.h3,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"set(value?: string): this"})," — Sets a new search value and returns the current instance."]}),`
`]}),`
`,e.jsx(s.h2,{id:"search-activation",children:"Search Activation"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"SearchListItem"})," class acts as a filter that determines whether the search system should start processing data. This is handled by the ",e.jsx(s.code,{children:"isSearch()"})," method, which uses the ",e.jsx(s.code,{children:"limit"})," option from ",e.jsx(s.code,{children:"SearchListOptions"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Minimum Length (",e.jsx(s.code,{children:"limit"}),")"]}),": A search is only considered active if the number of characters in the search string is greater than or equal to the defined limit."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default Behavior"}),": By default, the limit is set to ",e.jsx(s.code,{children:"2"}),". This means searching for ",e.jsx(s.code,{children:'"a"'})," will not trigger a match, but ",e.jsx(s.code,{children:'"ad"'})," or ",e.jsx(s.code,{children:'"admin"'})," will."]}),`
`]}),`
`,e.jsx(s.p,{children:'This logic helps prevent unnecessary computations and "noisy" results when the user has only typed a single character.'})]})}function x(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as default};
