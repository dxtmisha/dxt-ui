import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/MetaTwitter - Twitter Card Meta Tags`}),`
`,(0,c.jsx)(n.h1,{id:`metatwitter-class`,children:`MetaTwitter Class`}),`
`,(0,c.jsxs)(n.p,{children:[`Extends `,(0,c.jsx)(n.code,{children:`MetaManager`}),`. Manages `,(0,c.jsx)(n.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` meta tags — used by Twitter/X to generate cards when sharing links.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To manage Twitter Card data, call the `,(0,c.jsx)(n.code,{children:`new MetaTwitter()`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Inheritance`}),` — extends `,(0,c.jsx)(n.code,{children:`MetaManager`}),`, using the standard `,(0,c.jsx)(n.code,{children:`name`}),` attribute to manage tags.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standard`}),` — comes with a predefined list of all primary `,(0,c.jsx)(n.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` protocol tags.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,(0,c.jsx)(n.h2,{id:`supported-tags`,children:`Supported Tags`}),`
`,(0,c.jsxs)(n.p,{children:[`Manages the following `,(0,c.jsx)(n.code,{children:`twitter:*`}),` tags: `,(0,c.jsx)(n.code,{children:`twitter:card`}),`, `,(0,c.jsx)(n.code,{children:`twitter:site`}),`, `,(0,c.jsx)(n.code,{children:`twitter:creator`}),`, `,(0,c.jsx)(n.code,{children:`twitter:url`}),`, `,(0,c.jsx)(n.code,{children:`twitter:title`}),`, `,(0,c.jsx)(n.code,{children:`twitter:description`}),`, `,(0,c.jsx)(n.code,{children:`twitter:image`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`getters`,children:`Getters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCard(): MetaTwitterCard`}),` — card type (`,(0,c.jsx)(n.code,{children:`'summary'`}),`, `,(0,c.jsx)(n.code,{children:`'summary_large_image'`}),`, `,(0,c.jsx)(n.code,{children:`'app'`}),`, `,(0,c.jsx)(n.code,{children:`'player'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSite(): string`}),` — @username of the website or brand account.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCreator(): string`}),` — @username of the content creator.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(): string`}),` — page URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — card title.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — card description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — image URL.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setters`,children:`Setters`}),`
`,(0,c.jsxs)(n.p,{children:[`All setters update the tag in the DOM and return `,(0,c.jsx)(n.code,{children:`this`}),` for chaining.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCard(card: MetaTwitterCard): this`}),` — card type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSite(site: string): this`}),` — site @username.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCreator(creator: string): this`}),` — creator @username.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setImage(image: string): this`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};