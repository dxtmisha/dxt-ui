import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/MetaOg - Open Graph Meta Tags`}),`
`,(0,c.jsx)(t.h1,{id:`metaog-class`,children:`MetaOg Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Extends `,(0,c.jsx)(t.code,{children:`MetaManager`}),`. Manages `,(0,c.jsx)(t.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` protocol meta tags — used by social networks (Facebook, VK, etc.) to generate link previews.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Uses the `,(0,c.jsx)(t.code,{children:`property`}),` attribute (not `,(0,c.jsx)(t.code,{children:`name`}),`) for meta tags, as required by the Open Graph standard.`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To manage Open Graph data, call the `,(0,c.jsx)(t.code,{children:`new MetaOg()`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inheritance`}),` — extends `,(0,c.jsx)(t.code,{children:`MetaManager`}),`, using the `,(0,c.jsx)(t.code,{children:`property`}),` attribute to manage tags.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standard`}),` — comes with a predefined list of all primary `,(0,c.jsx)(t.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` protocol tags.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,(0,c.jsx)(t.h2,{id:`supported-tags`,children:`Supported Tags`}),`
`,(0,c.jsxs)(t.p,{children:[`Manages the following `,(0,c.jsx)(t.code,{children:`og:*`}),` tags: `,(0,c.jsx)(t.code,{children:`og:title`}),`, `,(0,c.jsx)(t.code,{children:`og:type`}),`, `,(0,c.jsx)(t.code,{children:`og:url`}),`, `,(0,c.jsx)(t.code,{children:`og:image`}),`, `,(0,c.jsx)(t.code,{children:`og:description`}),`, `,(0,c.jsx)(t.code,{children:`og:locale`}),`, `,(0,c.jsx)(t.code,{children:`og:site_name`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`getters`,children:`Getters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — page title for preview.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getType(): MetaOpenGraphType`}),` — content type (e.g. `,(0,c.jsx)(t.code,{children:`'website'`}),`, `,(0,c.jsx)(t.code,{children:`'article'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(): string`}),` — canonical page URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — preview image URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — page description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — locale in `,(0,c.jsx)(t.code,{children:`en_US`}),`, `,(0,c.jsx)(t.code,{children:`ru_RU`}),` format.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — site name.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`setters`,children:`Setters`}),`
`,(0,c.jsxs)(t.p,{children:[`All setters update the corresponding tag in the DOM and return `,(0,c.jsx)(t.code,{children:`this`}),` for chaining.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: MetaOpenGraphType): this`}),` — types: `,(0,c.jsx)(t.code,{children:`'website'`}),`, `,(0,c.jsx)(t.code,{children:`'article'`}),`, `,(0,c.jsx)(t.code,{children:`'book'`}),`, `,(0,c.jsx)(t.code,{children:`'music.song'`}),`, and others.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setImage(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string): this`}),` — format: `,(0,c.jsx)(t.code,{children:`'en_US'`}),`, `,(0,c.jsx)(t.code,{children:`'ru_RU'`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setSiteName(siteName: string): this`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};