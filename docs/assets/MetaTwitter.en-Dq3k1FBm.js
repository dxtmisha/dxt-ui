import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/MetaTwitter - Twitter Card Meta Tags`}),`
`,(0,c.jsx)(t.h1,{id:`metatwitter-class`,children:`MetaTwitter Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Extends `,(0,c.jsx)(t.code,{children:`MetaManager`}),`. Manages `,(0,c.jsx)(t.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` meta tags — used by Twitter/X to generate cards when sharing links.`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To manage Twitter Card data, call the `,(0,c.jsx)(t.code,{children:`new MetaTwitter()`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inheritance`}),` — extends `,(0,c.jsx)(t.code,{children:`MetaManager`}),`, using the standard `,(0,c.jsx)(t.code,{children:`name`}),` attribute to manage tags.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standard`}),` — comes with a predefined list of all primary `,(0,c.jsx)(t.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` protocol tags.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,(0,c.jsx)(t.h2,{id:`supported-tags`,children:`Supported Tags`}),`
`,(0,c.jsxs)(t.p,{children:[`Manages the following `,(0,c.jsx)(t.code,{children:`twitter:*`}),` tags: `,(0,c.jsx)(t.code,{children:`twitter:card`}),`, `,(0,c.jsx)(t.code,{children:`twitter:site`}),`, `,(0,c.jsx)(t.code,{children:`twitter:creator`}),`, `,(0,c.jsx)(t.code,{children:`twitter:url`}),`, `,(0,c.jsx)(t.code,{children:`twitter:title`}),`, `,(0,c.jsx)(t.code,{children:`twitter:description`}),`, `,(0,c.jsx)(t.code,{children:`twitter:image`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`getters`,children:`Getters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCard(): MetaTwitterCard`}),` — card type (`,(0,c.jsx)(t.code,{children:`'summary'`}),`, `,(0,c.jsx)(t.code,{children:`'summary_large_image'`}),`, `,(0,c.jsx)(t.code,{children:`'app'`}),`, `,(0,c.jsx)(t.code,{children:`'player'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSite(): string`}),` — @username of the website or brand account.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCreator(): string`}),` — @username of the content creator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(): string`}),` — page URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — card title.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — card description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — image URL.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`setters`,children:`Setters`}),`
`,(0,c.jsxs)(t.p,{children:[`All setters update the tag in the DOM and return `,(0,c.jsx)(t.code,{children:`this`}),` for chaining.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCard(card: MetaTwitterCard): this`}),` — card type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSite(site: string): this`}),` — site @username.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCreator(creator: string): this`}),` — creator @username.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setImage(image: string): this`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};