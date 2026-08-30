import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/MetaManager - Meta Tag Management`}),`
`,(0,c.jsx)(t.h1,{id:`metamanager-class`,children:`MetaManager Class`}),`
`,(0,c.jsx)(t.p,{children:`A base generic class for synchronizing HTML document meta tags. Reads existing tags from the DOM on initialization and provides a unified interface for reading and writing them.`}),`
`,(0,c.jsxs)(t.p,{children:[`This class is the parent of `,(0,c.jsx)(t.code,{children:`MetaOg`}),`, `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),`, and `,(0,c.jsx)(t.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class is `,(0,c.jsx)(t.strong,{children:`abstract`}),`. You cannot create its instance directly using `,(0,c.jsx)(t.code,{children:`new MetaManager()`}),`. Instead, it must be extended.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters (for descendants):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listMeta: T`}),` — a list of meta tag names managed by this instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isProperty?: boolean`}),` — determines the attribute used: `,(0,c.jsx)(t.code,{children:`true`}),` for `,(0,c.jsx)(t.code,{children:`property`}),` (Open Graph), `,(0,c.jsx)(t.code,{children:`false`}),` for `,(0,c.jsx)(t.code,{children:`name`}),` (standard tags). Default: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Extension example
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getListMeta(): T`}),` — returns the list of managed tag names.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(name): string`}),` — returns the content of a tag by name. Returns `,(0,c.jsx)(t.code,{children:`''`}),` if not set.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItems(): MetaList<T>`}),` — returns an object with all tags: `,(0,c.jsx)(t.code,{children:`{ [name]: content }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(name, content): this`}),` — sets the tag in the DOM (creates if not found). Supports chaining.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setByList(metaList): this`}),` — sets multiple tags from an object. Supports chaining.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`html-generation`,children:`HTML Generation`}),`
`,(0,c.jsx)(t.h3,{id:`html-string`,children:(0,c.jsx)(t.code,{children:`html(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Generates an HTML string for all managed tags that have content. Used for SSR.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`manager.set('description', 'My description').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="My description"><meta name="keywords" content="vue, typescript">'
`})}),`
`,(0,c.jsx)(t.h3,{id:`htmltitletitle-string-string`,children:(0,c.jsx)(t.code,{children:`htmlTitle(title: string): string`})}),`
`,(0,c.jsxs)(t.p,{children:[`Converts a title string into an HTML `,(0,c.jsx)(t.code,{children:`<title>`}),` tag.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`manager.htmlTitle('My Page Title')
// '<title>My Page Title</title>'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};