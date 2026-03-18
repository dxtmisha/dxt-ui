import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Classes/MetaTwitter - Twitter Card Meta Tags"}),`
`,e.jsx(t.h1,{id:"metatwitter-class",children:"MetaTwitter Class"}),`
`,e.jsxs(t.p,{children:["Extends ",e.jsx(t.code,{children:"MetaManager"}),". Manages ",e.jsx(t.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards",rel:"nofollow",children:"Twitter Card"})," meta tags — used by Twitter/X to generate cards when sharing links."]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["To manage Twitter Card data, call the ",e.jsx(t.code,{children:"new MetaTwitter()"})," constructor."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Features:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Inheritance"})," — extends ",e.jsx(t.code,{children:"MetaManager"}),", using the standard ",e.jsx(t.code,{children:"name"})," attribute to manage tags."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Standard"})," — comes with a predefined list of all primary ",e.jsx(t.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards",rel:"nofollow",children:"Twitter Card"})," protocol tags."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,e.jsx(t.h2,{id:"supported-tags",children:"Supported Tags"}),`
`,e.jsxs(t.p,{children:["Manages the following ",e.jsx(t.code,{children:"twitter:*"})," tags: ",e.jsx(t.code,{children:"twitter:card"}),", ",e.jsx(t.code,{children:"twitter:site"}),", ",e.jsx(t.code,{children:"twitter:creator"}),", ",e.jsx(t.code,{children:"twitter:url"}),", ",e.jsx(t.code,{children:"twitter:title"}),", ",e.jsx(t.code,{children:"twitter:description"}),", ",e.jsx(t.code,{children:"twitter:image"}),"."]}),`
`,e.jsx(t.h2,{id:"getters",children:"Getters"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCard(): MetaTwitterCard"})," — card type (",e.jsx(t.code,{children:"'summary'"}),", ",e.jsx(t.code,{children:"'summary_large_image'"}),", ",e.jsx(t.code,{children:"'app'"}),", ",e.jsx(t.code,{children:"'player'"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getSite(): string"})," — @username of the website or brand account."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCreator(): string"})," — @username of the content creator."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getUrl(): string"})," — page URL."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getTitle(): string"})," — card title."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDescription(): string"})," — card description."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getImage(): string"})," — image URL."]}),`
`]}),`
`,e.jsx(t.h2,{id:"setters",children:"Setters"}),`
`,e.jsxs(t.p,{children:["All setters update the tag in the DOM and return ",e.jsx(t.code,{children:"this"})," for chaining."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCard(card: MetaTwitterCard): this"})," — card type."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setSite(site: string): this"})," — site @username."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCreator(creator: string): this"})," — creator @username."]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setUrl(url: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setTitle(title: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setDescription(description: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setImage(image: string): this"})}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()

twitter
  .setCard('summary_large_image')
  .setSite('@mycompany')
  .setCreator('@author')
  .setTitle('Post Title')
  .setDescription('Brief description')
  .setUrl('https://example.com/post/1')
  .setImage('https://example.com/images/preview.jpg')

// For SSR
const html = twitter.html()
// '<meta name="twitter:card" content="summary_large_image">...'
`})})]})}function x(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{x as default};
