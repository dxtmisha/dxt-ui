import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/SearchListMatcher - Search Matcher Logic"}),`
`,e.jsx(n.h1,{id:"searchlistmatcher-class",children:"SearchListMatcher Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SearchListMatcher"})," class is responsible for the core matching logic. It converts the current search string into a regular expression and provides methods to check if various data values match that expression."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic RegExp Generation"})," — automatically builds or resets the matcher when the search term or options change."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search Modes"})," — supports both standard partial matching and exact match modes based on ",e.jsx(n.code,{children:"SearchListOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Efficient Testing"})," — uses high-performance regular expression testing to identify matches in the data."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"SearchListMatcher(item, options)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: SearchListItem"})," — the search item state containing the value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: SearchListOptions"})," — configuration options (e.g., ",e.jsx(n.code,{children:"findExactMatch"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(): boolean"})," — Checks if the inner regular expression matcher is initialized."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSelection(value: string): boolean"})," — Checks if the given value matches the current search expression."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): RegExp | undefined"})," — Returns the current regular expression instance."]}),`
`]}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"update(): void"})," — Re-initializes the matcher based on the current state of the search item and options."]}),`
`]}),`
`,e.jsx(n.h2,{id:"search-modes",children:"Search Modes"}),`
`,e.jsxs(n.p,{children:["The class supports two main matching modes, controlled by the ",e.jsx(n.code,{children:"findExactMatch"})," option in ",e.jsx(n.code,{children:"SearchListOptions"}),":"]}),`
`,e.jsx(n.h3,{id:"1-contains-all-words-default",children:"1. Contains All Words (Default)"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"findExactMatch"})," is ",e.jsx(n.code,{children:"false"}),", the search string is split into individual words. A match is found only if ",e.jsx(n.strong,{children:"every word"})," is present in the target string, regardless of their order."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example"}),": Search for ",e.jsx(n.code,{children:'"gaming mouse"'})," will match ",e.jsx(n.code,{children:'"Mouse for Gaming"'})," and ",e.jsx(n.code,{children:'"Gaming Pro Mouse"'}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-exact-phrase",children:"2. Exact Phrase"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"findExactMatch"})," is ",e.jsx(n.code,{children:"true"}),", the search string is treated as a single continuous phrase. A match is found only if the ",e.jsx(n.strong,{children:"exact sequence"})," of characters (case-insensitive) exists in the target string."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example"}),": Search for ",e.jsx(n.code,{children:'"gaming mouse"'})," will match ",e.jsx(n.code,{children:'"Cool gaming mouse"'}),", but will ",e.jsx(n.strong,{children:"not"})," match ",e.jsx(n.code,{children:'"Mouse for gaming"'}),"."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
