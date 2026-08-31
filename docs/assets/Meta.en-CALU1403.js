import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/Meta - SEO Meta Tag Management`}),`
`,(0,c.jsx)(t.h1,{id:`meta-class`,children:`Meta Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A unified facade for managing all document meta tags. Extends `,(0,c.jsx)(t.code,{children:`MetaManager`}),` and combines standard HTML tags, Open Graph (`,(0,c.jsx)(t.code,{children:`MetaOg`}),`), and Twitter Card (`,(0,c.jsx)(t.code,{children:`MetaTwitter`}),`) into a single interface.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Single Management Point`}),` — one object manages `,(0,c.jsx)(t.code,{children:`<title>`}),`, `,(0,c.jsx)(t.code,{children:`name`}),` meta tags, `,(0,c.jsx)(t.code,{children:`og:*`}),`, and `,(0,c.jsx)(t.code,{children:`twitter:*`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Synchronization`}),` — `,(0,c.jsx)(t.code,{children:`setTitle`}),`, `,(0,c.jsx)(t.code,{children:`setImage`}),`, `,(0,c.jsx)(t.code,{children:`setCanonical`}),`, and `,(0,c.jsx)(t.code,{children:`setSiteName`}),` automatically update corresponding tags in all three systems.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Title Suffix`}),` — built-in support for automatically appending site name to the page title.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Compatibility`}),` — `,(0,c.jsx)(t.code,{children:`html()`}),` generates full HTML of all tags.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To create a meta-data management object, call the `,(0,c.jsx)(t.code,{children:`new Meta()`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automation`}),` — the constructor automatically initializes registries for standard HTML, Open Graph, and Twitter Card tags.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Integration`}),` — immediately creates internal `,(0,c.jsx)(t.code,{children:`MetaOg`}),` and `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),` instances.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
`})}),`
`,(0,c.jsx)(t.h2,{id:`getters`,children:`Getters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — page title without suffix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getKeywords(): string`}),` — `,(0,c.jsx)(t.code,{children:`keywords`}),` meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — `,(0,c.jsx)(t.code,{children:`description`}),` meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — image URL from Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCanonical(): string`}),` — canonical URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getRobots(): MetaRobots`}),` — `,(0,c.jsx)(t.code,{children:`robots`}),` meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAuthor(): string`}),` — `,(0,c.jsx)(t.code,{children:`author`}),` meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — site name from Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — locale from Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOg(): MetaOg`}),` — direct access to the `,(0,c.jsx)(t.code,{children:`MetaOg`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTwitter(): MetaTwitter`}),` — direct access to the `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),` instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods-for-generating-html`,children:`Methods for Generating HTML`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`html(): string`}),` — generates the full HTML string of all meta tags: standard + Open Graph + Twitter Card. Used for SSR.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`htmlTitle(): string`}),` — generates the page title.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`setters`,children:`Setters`}),`
`,(0,c.jsxs)(t.p,{children:[`All setters return `,(0,c.jsx)(t.code,{children:`this`}),` for method chaining.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTitle(title: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`document.title`}),` (with suffix), `,(0,c.jsx)(t.code,{children:`og:title`}),`, and `,(0,c.jsx)(t.code,{children:`twitter:title`}),` simultaneously.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKeywords(keywords: string | string[])`}),` — accepts a string or array; arrays are joined with commas.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDescription(description: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`<meta name="description">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setImage(image: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`og:image`}),` and `,(0,c.jsx)(t.code,{children:`twitter:image`}),` simultaneously.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCanonical(canonical: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`<meta name="canonical">`}),`, `,(0,c.jsx)(t.code,{children:`og:url`}),`, and `,(0,c.jsx)(t.code,{children:`twitter:url`}),` simultaneously.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRobots(robots: MetaRobots)`}),` — sets `,(0,c.jsx)(t.code,{children:`<meta name="robots">`}),` (`,(0,c.jsx)(t.code,{children:`'index, follow'`}),`, `,(0,c.jsx)(t.code,{children:`'noindex, nofollow'`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setAuthor(author: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`<meta name="author">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSiteName(siteName: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`og:site_name`}),` and `,(0,c.jsx)(t.code,{children:`twitter:site`}),` simultaneously.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string)`}),` — sets `,(0,c.jsx)(t.code,{children:`og:locale`}),` (format: `,(0,c.jsx)(t.code,{children:`'en_US'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix?: string)`}),` — title suffix. `,(0,c.jsx)(t.code,{children:`setTitle('Article')`}),` + `,(0,c.jsx)(t.code,{children:`setSuffix('Site')`}),` → `,(0,c.jsx)(t.code,{children:`'Article - Site'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`html-generation`,children:`HTML Generation`}),`
`,(0,c.jsx)(t.h3,{id:`html-string`,children:(0,c.jsx)(t.code,{children:`html(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Generates the full HTML string of all meta tags: standard + Open Graph + Twitter Card. Used for SSR.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const meta = new Meta()
meta.setTitle('Article').setDescription('Description').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Description">
// <meta property="og:title" content="Article">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Article">
// ...
`})}),`
`,(0,c.jsx)(t.h3,{id:`htmltitle-string`,children:(0,c.jsx)(t.code,{children:`htmlTitle(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Generates the current title (including suffix).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const meta = new Meta()
meta.setSuffix('My Site').setTitle('Home')

meta.htmlTitle() // "Home - My Site"
`})}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
meta.setSuffix('My Site')

meta
  .setTitle('How to Use Vue 3')
  .setDescription('A comprehensive guide to Vue 3')
  .setKeywords(['vue', 'javascript', 'typescript'])
  .setImage('https://example.com/images/vue.jpg')
  .setCanonical('https://example.com/articles/vue-3')
  .setRobots('index, follow')
  .setAuthor('John Smith')
  .setSiteName('My Site')
  .setLocale('en_US')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};