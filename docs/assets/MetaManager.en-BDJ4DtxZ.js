import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/MetaManager - Meta Tag Management`}),`
`,(0,c.jsx)(n.h1,{id:`metamanager-class`,children:`MetaManager Class`}),`
`,(0,c.jsx)(n.p,{children:`A base generic class for synchronizing HTML document meta tags. Reads existing tags from the DOM on initialization and provides a unified interface for reading and writing them.`}),`
`,(0,c.jsxs)(n.p,{children:[`This class is the parent of `,(0,c.jsx)(n.code,{children:`MetaOg`}),`, `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),`, and `,(0,c.jsx)(n.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The class is `,(0,c.jsx)(n.strong,{children:`abstract`}),`. You cannot create its instance directly using `,(0,c.jsx)(n.code,{children:`new MetaManager()`}),`. Instead, it must be extended.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters (for descendants):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listMeta: T`}),` — a list of meta tag names managed by this instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isProperty?: boolean`}),` — determines the attribute used: `,(0,c.jsx)(n.code,{children:`true`}),` for `,(0,c.jsx)(n.code,{children:`property`}),` (Open Graph), `,(0,c.jsx)(n.code,{children:`false`}),` for `,(0,c.jsx)(n.code,{children:`name`}),` (standard tags). Default: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Extension example
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListMeta(): T`}),` — returns the list of managed tag names.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(name): string`}),` — returns the content of a tag by name. Returns `,(0,c.jsx)(n.code,{children:`''`}),` if not set.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItems(): MetaList<T>`}),` — returns an object with all tags: `,(0,c.jsx)(n.code,{children:`{ [name]: content }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(name, content): this`}),` — sets the tag in the DOM (creates if not found). Supports chaining.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByList(metaList): this`}),` — sets multiple tags from an object. Supports chaining.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`html-generation`,children:`HTML Generation`}),`
`,(0,c.jsx)(n.h3,{id:`html-string`,children:(0,c.jsx)(n.code,{children:`html(): string`})}),`
`,(0,c.jsx)(n.p,{children:`Generates an HTML string for all managed tags that have content. Used for SSR.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`manager.set('description', 'My description').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="My description"><meta name="keywords" content="vue, typescript">'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};