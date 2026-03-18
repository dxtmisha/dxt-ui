import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/en/functional-basic/Classes/MetaManager - Meta Tag Management"}),`
`,e.jsx(n.h1,{id:"metamanager-class",children:"MetaManager Class"}),`
`,e.jsx(n.p,{children:"A base generic class for synchronizing HTML document meta tags. Reads existing tags from the DOM on initialization and provides a unified interface for reading and writing them."}),`
`,e.jsxs(n.p,{children:["This class is the parent of ",e.jsx(n.code,{children:"MetaOg"}),", ",e.jsx(n.code,{children:"MetaTwitter"}),", and ",e.jsx(n.code,{children:"Meta"}),"."]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["The class is ",e.jsx(n.strong,{children:"abstract"}),". You cannot create its instance directly using ",e.jsx(n.code,{children:"new MetaManager()"}),". Instead, it must be extended."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Constructor Parameters (for descendants):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listMeta: T"})," — a list of meta tag names managed by this instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isProperty?: boolean"})," — determines the attribute used: ",e.jsx(n.code,{children:"true"})," for ",e.jsx(n.code,{children:"property"})," (Open Graph), ",e.jsx(n.code,{children:"false"})," for ",e.jsx(n.code,{children:"name"})," (standard tags). Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Extension example
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
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
