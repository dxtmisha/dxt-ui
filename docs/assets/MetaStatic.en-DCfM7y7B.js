import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/MetaStatic - Meta Tags Management (Static)`}),`
`,(0,c.jsx)(n.h1,{id:`class-metastatic`,children:`Class MetaStatic`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`MetaStatic`}),` class is a `,(0,c.jsx)(n.strong,{children:`static entry point`}),` for managing page meta tags, Open Graph (OG), and Twitter Card data. It acts as a static wrapper around a globally managed `,(0,c.jsx)(n.code,{children:`Meta`}),` instance, providing a clean singleton interface for SEO and social sharing management.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Interface`}),` — Manage page titles, descriptions, and more without manual instantiation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Management`}),` — Automatically syncs titles and other information across standard meta, OG, and Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Isolation`}),` — Uses `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` to handle instance isolation during server-side rendering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent API`}),` — Support for method chaining in setter methods.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`access`,children:`Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): Meta`}),` — Returns the underlying `,(0,c.jsx)(n.code,{children:`Meta`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOg(): MetaOg`}),` — Gets the MetaOg instance for advanced Open Graph operations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTwitter(): MetaTwitter`}),` — Gets the MetaTwitter instance for advanced Twitter Card operations.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`getters`,children:`Getters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — Gets the current page title (without suffix).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — Gets the current description meta tag.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeywords(): string`}),` — Gets the current keywords.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — Gets the image URL (from OG settings).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCanonical(): string`}),` — Gets the canonical URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getRobots(): MetaRobots`}),` — Gets the current robots directive.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAuthor(): string`}),` — Gets the author name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — Gets the site name (from OG settings).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — Gets the locale (from OG settings).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`setters`,children:`Setters`}),`
`,(0,c.jsxs)(n.p,{children:[`All setter methods return `,(0,c.jsx)(n.code,{children:`typeof MetaStatic`}),` to support method chaining.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTitle(title: string): typeof MetaStatic`}),` — Sets the page title and updates OG/Twitter titles.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDescription(description: string): typeof MetaStatic`}),` — Sets the description meta tag.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKeywords(keywords: string | string[]): typeof MetaStatic`}),` — Sets the keywords (string or array).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setImage(image: string): typeof MetaStatic`}),` — Sets the image for OG and Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCanonical(canonical: string): typeof MetaStatic`}),` — Sets the canonical URL and updates OG/Twitter URLs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRobots(robots: MetaRobots): typeof MetaStatic`}),` — Sets the robots directive.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setAuthor(author: string): typeof MetaStatic`}),` — Sets the author meta tag.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSiteName(siteName: string): typeof MetaStatic`}),` — Sets the site name for OG and Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string): typeof MetaStatic`}),` — Sets the locale for Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix?: string): typeof MetaStatic`}),` — Sets a suffix (e.g., " | My Site") appended to titles.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`output`,children:`Output`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`html(): string`}),` — Generates a complete string of HTML meta tags for all managed properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`htmlTitle(): string`}),` — Generates a complete HTML-safe title string.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`architecture`,children:`Architecture`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`MetaStatic`}),` works as a `,(0,c.jsx)(n.strong,{children:`static proxy`}),`. All calls are forwarded to an internal `,(0,c.jsx)(n.code,{children:`Meta`}),` instance managed via `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`request-isolation-ssr`,children:`Request Isolation (SSR)`}),`
`,(0,c.jsxs)(n.p,{children:[`By using `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, `,(0,c.jsx)(n.code,{children:`MetaStatic`}),` ensures that during Server-Side Rendering (SSR), meta information for one request does not leak into another. Each request gets its own isolated context.`]}),`
`,(0,c.jsx)(n.h3,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { MetaStatic } from '@dxtmisha/functional-basic';

MetaStatic
  .setSuffix('My Online Store')
  .setTitle('Summer Collection')
  .setDescription('Explore our new arrivals.')
  .setImage('https://example.com/cover.jpg')
  .setLocale('en_US');

console.log(MetaStatic.getTitle()); // "Summer Collection"
document.title; // "Summer Collection - My Online Store"
console.log(MetaStatic.htmlTitle()); // "Summer Collection - My Online Store"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};