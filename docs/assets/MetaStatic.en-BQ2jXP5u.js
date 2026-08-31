import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/MetaStatic - Meta Tags Management (Static)`}),`
`,(0,c.jsx)(t.h1,{id:`class-metastatic`,children:`Class MetaStatic`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MetaStatic`}),` class is a `,(0,c.jsx)(t.strong,{children:`static entry point`}),` for managing page meta tags, Open Graph (OG), and Twitter Card data. It acts as a static wrapper around a globally managed `,(0,c.jsx)(t.code,{children:`Meta`}),` instance, providing a clean singleton interface for SEO and social sharing management.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Interface`}),` — Manage page titles, descriptions, and more without manual instantiation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Management`}),` — Automatically syncs titles and other information across standard meta, OG, and Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Isolation`}),` — Uses `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` to handle instance isolation during server-side rendering.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent API`}),` — Support for method chaining in setter methods.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`access`,children:`Access`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): Meta`}),` — Returns the underlying `,(0,c.jsx)(t.code,{children:`Meta`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOg(): MetaOg`}),` — Gets the MetaOg instance for advanced Open Graph operations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTwitter(): MetaTwitter`}),` — Gets the MetaTwitter instance for advanced Twitter Card operations.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`getters`,children:`Getters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — Gets the current page title (without suffix).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — Gets the current description meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getKeywords(): string`}),` — Gets the current keywords.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — Gets the image URL (from OG settings).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCanonical(): string`}),` — Gets the canonical URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getRobots(): MetaRobots`}),` — Gets the current robots directive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAuthor(): string`}),` — Gets the author name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — Gets the site name (from OG settings).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — Gets the locale (from OG settings).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`setters`,children:`Setters`}),`
`,(0,c.jsxs)(t.p,{children:[`All setter methods return `,(0,c.jsx)(t.code,{children:`typeof MetaStatic`}),` to support method chaining.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTitle(title: string): typeof MetaStatic`}),` — Sets the page title and updates OG/Twitter titles.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDescription(description: string): typeof MetaStatic`}),` — Sets the description meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKeywords(keywords: string | string[]): typeof MetaStatic`}),` — Sets the keywords (string or array).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setImage(image: string): typeof MetaStatic`}),` — Sets the image for OG and Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCanonical(canonical: string): typeof MetaStatic`}),` — Sets the canonical URL and updates OG/Twitter URLs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRobots(robots: MetaRobots): typeof MetaStatic`}),` — Sets the robots directive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setAuthor(author: string): typeof MetaStatic`}),` — Sets the author meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSiteName(siteName: string): typeof MetaStatic`}),` — Sets the site name for OG and Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string): typeof MetaStatic`}),` — Sets the locale for Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix?: string): typeof MetaStatic`}),` — Sets a suffix (e.g., " | My Site") appended to titles.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`output`,children:`Output`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`html(): string`}),` — Generates a complete string of HTML meta tags for all managed properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`htmlTitle(): string`}),` — Generates a complete HTML-safe title string.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`architecture`,children:`Architecture`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MetaStatic`}),` works as a `,(0,c.jsx)(t.strong,{children:`static proxy`}),`. All calls are forwarded to an internal `,(0,c.jsx)(t.code,{children:`Meta`}),` instance managed via `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`request-isolation-ssr`,children:`Request Isolation (SSR)`}),`
`,(0,c.jsxs)(t.p,{children:[`By using `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`, `,(0,c.jsx)(t.code,{children:`MetaStatic`}),` ensures that during Server-Side Rendering (SSR), meta information for one request does not leak into another. Each request gets its own isolated context.`]}),`
`,(0,c.jsx)(t.h3,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MetaStatic } from '@dxtmisha/functional-basic';

MetaStatic
  .setSuffix('My Online Store')
  .setTitle('Summer Collection')
  .setDescription('Explore our new arrivals.')
  .setImage('https://example.com/cover.jpg')
  .setLocale('en_US');

console.log(MetaStatic.getTitle()); // "Summer Collection"
document.title; // "Summer Collection - My Online Store"
console.log(MetaStatic.htmlTitle()); // "Summer Collection - My Online Store"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};