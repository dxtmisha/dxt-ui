import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useMeta - Meta tags management`}),`
`,(0,c.jsx)(t.h1,{id:`usemeta`,children:(0,c.jsx)(t.code,{children:`useMeta`})}),`
`,(0,c.jsx)(t.p,{children:`Composable for reactive management of meta tags (HTML, Open Graph, Twitter Card) with automatic DOM synchronization. Uses a singleton pattern where all components share the same meta state.`}),`
`,(0,c.jsxs)(t.p,{children:[`Prefer `,(0,c.jsx)(t.code,{children:`setTitle()`}),`, `,(0,c.jsx)(t.code,{children:`setDescription()`}),`, and the other `,(0,c.jsx)(t.code,{children:`set…`}),` methods when changing values. Direct writes to public refs are also supported: SSR metadata updates are synchronous, while browser changes are batched into one update.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`title: Ref<string>`}),` — reactive page title (without suffix).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description: Ref<string>`}),` — reactive description meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyword: Ref<string>`}),` — reactive keywords meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Ref<string>`}),` — reactive image URL for Open Graph / Twitter Card.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`canonical: Ref<string>`}),` — reactive canonical URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`robots: Ref<MetaRobots>`}),` — reactive robots directive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`author: Ref<string>`}),` — reactive author meta tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`siteName: Ref<string>`}),` — reactive site name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHtmlMeta(): string`}),` — generates an HTML string for all meta tags (useful for SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTitle(value: string): void`}),` — sets the page title.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKeywords(value: string): void`}),` — sets the keywords.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDescription(value: string): void`}),` — sets the page description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setImage(value: string): void`}),` — sets the image URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCanonical(value: string): void`}),` — sets the canonical URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRobots(value: MetaRobots): void`}),` — sets the robots directive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setAuthor(value: string): void`}),` — sets the author.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSiteName(value: string): void`}),` — sets the site name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix: string): void`}),` — sets the suffix for the page title.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`meta: Meta`}),` — the underlying `,(0,c.jsx)(t.code,{children:`Meta`}),` instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useMeta } from '@dxtmisha/functional'

const { setTitle, setDescription } = useMeta()

setTitle('My Page Title')
setDescription('Description of my cool page')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};