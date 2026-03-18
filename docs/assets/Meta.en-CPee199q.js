import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/Meta - SEO Meta Tag Management"}),`
`,e.jsx(t.h1,{id:"meta-class",children:"Meta Class"}),`
`,e.jsxs(t.p,{children:["A unified facade for managing all document meta tags. Extends ",e.jsx(t.code,{children:"MetaManager"})," and combines standard HTML tags, Open Graph (",e.jsx(t.code,{children:"MetaOg"}),"), and Twitter Card (",e.jsx(t.code,{children:"MetaTwitter"}),") into a single interface."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Single Management Point"})," — one object manages ",e.jsx(t.code,{children:"<title>"}),", ",e.jsx(t.code,{children:"name"})," meta tags, ",e.jsx(t.code,{children:"og:*"}),", and ",e.jsx(t.code,{children:"twitter:*"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Synchronization"})," — ",e.jsx(t.code,{children:"setTitle"}),", ",e.jsx(t.code,{children:"setImage"}),", ",e.jsx(t.code,{children:"setCanonical"}),", and ",e.jsx(t.code,{children:"setSiteName"})," automatically update corresponding tags in all three systems."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Title Suffix"})," — built-in support for automatically appending site name to the page title."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"SSR Compatibility"})," — ",e.jsx(t.code,{children:"html()"})," generates full HTML of all tags."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["To create a meta-data management object, call the ",e.jsx(t.code,{children:"new Meta()"})," constructor."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Features:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Automation"})," — the constructor automatically initializes registries for standard HTML, Open Graph, and Twitter Card tags."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Integration"})," — immediately creates internal ",e.jsx(t.code,{children:"MetaOg"})," and ",e.jsx(t.code,{children:"MetaTwitter"})," instances."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
`})}),`
`,e.jsx(t.h2,{id:"getters",children:"Getters"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getTitle(): string"})," — page title without suffix."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getKeywords(): string"})," — ",e.jsx(t.code,{children:"keywords"})," meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDescription(): string"})," — ",e.jsx(t.code,{children:"description"})," meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getImage(): string"})," — image URL from Open Graph."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCanonical(): string"})," — canonical URL."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getRobots(): MetaRobots"})," — ",e.jsx(t.code,{children:"robots"})," meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getAuthor(): string"})," — ",e.jsx(t.code,{children:"author"})," meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getSiteName(): string"})," — site name from Open Graph."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getLocale(): string"})," — locale from Open Graph."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getOg(): MetaOg"})," — direct access to the ",e.jsx(t.code,{children:"MetaOg"})," instance."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getTwitter(): MetaTwitter"})," — direct access to the ",e.jsx(t.code,{children:"MetaTwitter"})," instance."]}),`
`]}),`
`,e.jsx(t.h2,{id:"setters",children:"Setters"}),`
`,e.jsxs(t.p,{children:["All setters return ",e.jsx(t.code,{children:"this"})," for method chaining."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setTitle(title: string)"})," — sets ",e.jsx(t.code,{children:"document.title"})," (with suffix), ",e.jsx(t.code,{children:"og:title"}),", and ",e.jsx(t.code,{children:"twitter:title"})," simultaneously."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setKeywords(keywords: string | string[])"})," — accepts a string or array; arrays are joined with commas."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setDescription(description: string)"})," — sets ",e.jsx(t.code,{children:'<meta name="description">'}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setImage(image: string)"})," — sets ",e.jsx(t.code,{children:"og:image"})," and ",e.jsx(t.code,{children:"twitter:image"})," simultaneously."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCanonical(canonical: string)"})," — sets ",e.jsx(t.code,{children:'<meta name="canonical">'}),", ",e.jsx(t.code,{children:"og:url"}),", and ",e.jsx(t.code,{children:"twitter:url"})," simultaneously."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setRobots(robots: MetaRobots)"})," — sets ",e.jsx(t.code,{children:'<meta name="robots">'})," (",e.jsx(t.code,{children:"'index, follow'"}),", ",e.jsx(t.code,{children:"'noindex, nofollow'"}),", etc.)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setAuthor(author: string)"})," — sets ",e.jsx(t.code,{children:'<meta name="author">'}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setSiteName(siteName: string)"})," — sets ",e.jsx(t.code,{children:"og:site_name"})," and ",e.jsx(t.code,{children:"twitter:site"})," simultaneously."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setLocale(locale: string)"})," — sets ",e.jsx(t.code,{children:"og:locale"})," (format: ",e.jsx(t.code,{children:"'en_US'"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setSuffix(suffix?: string)"})," — title suffix. ",e.jsx(t.code,{children:"setTitle('Article')"})," + ",e.jsx(t.code,{children:"setSuffix('Site')"})," → ",e.jsx(t.code,{children:"'Article - Site'"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"html-generation",children:"HTML Generation"}),`
`,e.jsx(t.h3,{id:"html-string",children:e.jsx(t.code,{children:"html(): string"})}),`
`,e.jsx(t.p,{children:"Generates the full HTML string of all meta tags: standard + Open Graph + Twitter Card. Used for SSR."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const meta = new Meta()
meta.setTitle('Article').setDescription('Description').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Description">
// <meta property="og:title" content="Article">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Article">
// ...
`})}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional-basic'

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
`})})]})}function x(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
