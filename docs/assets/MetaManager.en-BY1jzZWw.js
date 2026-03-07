import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/MetaManager - Meta Tag Management"}),`
`,e.jsx(n.h1,{id:"metamanager-class",children:"MetaManager Class"}),`
`,e.jsx(n.p,{children:"A base generic class for synchronizing HTML document meta tags. Reads existing tags from the DOM on initialization and provides a unified interface for reading and writing them."}),`
`,e.jsxs(n.p,{children:["This class is the parent of ",e.jsx(n.code,{children:"MetaOg"}),", ",e.jsx(n.code,{children:"MetaTwitter"}),", and ",e.jsx(n.code,{children:"Meta"}),"."]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`new MetaManager(listMeta, isProperty?)
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listMeta: readonly string[]"})," — list of meta tag names managed by this instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isProperty?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", uses ",e.jsx(n.code,{children:"property"})," attribute instead of ",e.jsx(n.code,{children:"name"})," (required for Open Graph). Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getListMeta(): T"})," — returns the list of managed tag names."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(name): string"})," — returns the content of a tag by name. Returns ",e.jsx(n.code,{children:"''"})," if not set."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItems(): MetaList<T>"})," — returns an object with all tags: ",e.jsx(n.code,{children:"{ [name]: content }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(name, content): this"})," — sets the tag in the DOM (creates if not found). Supports chaining."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setByList(metaList): this"})," — sets multiple tags from an object. Supports chaining."]}),`
`]}),`
`,e.jsx(n.h2,{id:"html-generation",children:"HTML Generation"}),`
`,e.jsx(n.h3,{id:"html-string",children:e.jsx(n.code,{children:"html(): string"})}),`
`,e.jsx(n.p,{children:"Generates an HTML string for all managed tags that have content. Used for SSR."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`manager.set('description', 'My description').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="My description"><meta name="keywords" content="vue, typescript">'
`})})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
