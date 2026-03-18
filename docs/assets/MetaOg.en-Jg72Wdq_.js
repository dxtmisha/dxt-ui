import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/MetaOg - Open Graph Meta Tags"}),`
`,e.jsx(n.h1,{id:"metaog-class",children:"MetaOg Class"}),`
`,e.jsxs(n.p,{children:["Extends ",e.jsx(n.code,{children:"MetaManager"}),". Manages ",e.jsx(n.a,{href:"https://ogp.me/",rel:"nofollow",children:"Open Graph"})," protocol meta tags — used by social networks (Facebook, VK, etc.) to generate link previews."]}),`
`,e.jsxs(n.p,{children:["Uses the ",e.jsx(n.code,{children:"property"})," attribute (not ",e.jsx(n.code,{children:"name"}),") for meta tags, as required by the Open Graph standard."]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To manage Open Graph data, call the ",e.jsx(n.code,{children:"new MetaOg()"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inheritance"})," — extends ",e.jsx(n.code,{children:"MetaManager"}),", using the ",e.jsx(n.code,{children:"property"})," attribute to manage tags."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standard"})," — comes with a predefined list of all primary ",e.jsx(n.a,{href:"https://ogp.me/",rel:"nofollow",children:"Open Graph"})," protocol tags."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,e.jsx(n.h2,{id:"supported-tags",children:"Supported Tags"}),`
`,e.jsxs(n.p,{children:["Manages the following ",e.jsx(n.code,{children:"og:*"})," tags: ",e.jsx(n.code,{children:"og:title"}),", ",e.jsx(n.code,{children:"og:type"}),", ",e.jsx(n.code,{children:"og:url"}),", ",e.jsx(n.code,{children:"og:image"}),", ",e.jsx(n.code,{children:"og:description"}),", ",e.jsx(n.code,{children:"og:locale"}),", ",e.jsx(n.code,{children:"og:site_name"}),"."]}),`
`,e.jsx(n.h2,{id:"getters",children:"Getters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTitle(): string"})," — page title for preview."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getType(): MetaOpenGraphType"})," — content type (e.g. ",e.jsx(n.code,{children:"'website'"}),", ",e.jsx(n.code,{children:"'article'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getUrl(): string"})," — canonical page URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImage(): string"})," — preview image URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDescription(): string"})," — page description."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocale(): string"})," — locale in ",e.jsx(n.code,{children:"en_US"}),", ",e.jsx(n.code,{children:"ru_RU"})," format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSiteName(): string"})," — site name."]}),`
`]}),`
`,e.jsx(n.h2,{id:"setters",children:"Setters"}),`
`,e.jsxs(n.p,{children:["All setters update the corresponding tag in the DOM and return ",e.jsx(n.code,{children:"this"})," for chaining."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setTitle(title: string): this"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: MetaOpenGraphType): this"})," — types: ",e.jsx(n.code,{children:"'website'"}),", ",e.jsx(n.code,{children:"'article'"}),", ",e.jsx(n.code,{children:"'book'"}),", ",e.jsx(n.code,{children:"'music.song'"}),", and others."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setUrl(url: string): this"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setImage(url: string): this"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setDescription(description: string): this"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setLocale(locale: string): this"})," — format: ",e.jsx(n.code,{children:"'en_US'"}),", ",e.jsx(n.code,{children:"'ru_RU'"}),"."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setSiteName(siteName: string): this"})}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()

og
  .setTitle('My Article')
  .setType('article')
  .setUrl('https://example.com/article/1')
  .setImage('https://example.com/images/cover.jpg')
  .setDescription('Description of my article')
  .setLocale('en_US')
  .setSiteName('My Site')

// For SSR
const html = og.html()
// '<meta property="og:title" content="My Article">...'
`})})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
