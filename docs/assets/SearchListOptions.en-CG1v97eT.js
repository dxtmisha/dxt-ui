import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/SearchListOptions - Search List Options Management"}),`
`,e.jsx(n.h1,{id:"searchlistoptions-class",children:"SearchListOptions Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SearchListOptions"})," class is responsible for managing and providing access to the configuration options used by the ",e.jsx(n.code,{children:"SearchList"})," system. It ensures that default values are used when specific options are not provided."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Centralized Configuration"})," — provides a single point of access for all search-related settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default Value Handling"})," — automatically applies sensible defaults (e.g., limit, delay) if they are missing in the provided options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fluent Interface"})," — supports method chaining for setting new options."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"SearchListOptions(options)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — an object containing search configuration."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getOptions(): SearchOptions"})," — Returns the current search options object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLimit(): number"})," — Returns the minimum number of characters required to trigger a search (default is ",e.jsx(n.code,{children:"2"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getReturnEverything(): boolean"})," — Returns whether to return all items even if they don't match the search query (default is ",e.jsx(n.code,{children:"false"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDelay(): number"})," — Returns the search delay in milliseconds (default is ",e.jsx(n.code,{children:"0"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFindExactMatch(): boolean"})," — Returns whether to perform an exact match search (default is ",e.jsx(n.code,{children:"false"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getClassName(): string"})," — Returns the CSS class name used for highlighting matches (default is ",e.jsx(n.code,{children:"'sys-search-selection'"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration-setters",children:"Configuration (Setters)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options: SearchOptions): this"})," — Sets new search options and returns the current instance for chaining."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"searchoptions",children:"SearchOptions"}),`
`,e.jsx(n.p,{children:"Main configuration object for the search system. All fields are optional:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit?: number"})," — minimum character length to trigger search. Default: ",e.jsx(n.code,{children:"2"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"returnEverything?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", returns all items regardless of match. Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay?: number"})," — search execution delay in milliseconds. Default: ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findExactMatch?: boolean"})," — enables strict word matching. Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"classSearchName?: string"})," — CSS class for highlighting matches. Default: ",e.jsx(n.code,{children:"'sys-search-selection'"}),"."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
