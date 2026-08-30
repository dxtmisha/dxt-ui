import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/Icons - Icon Management`}),`
`,(0,c.jsx)(t.h1,{id:`icons-class`,children:`Icons Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A static class for managing the application's icon registry. Provides a mechanism for registering, lazy-loading, and retrieving SVG icons. Icons are stored in the global `,(0,c.jsx)(t.code,{children:`window`}),` object to be accessible across multiple library instances.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Registry`}),` — Uses `,(0,c.jsx)(t.code,{children:`window.__UI_ICON`}),` to store icons, ensuring a single registry even with multiple instances.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lazy Loading`}),` — The `,(0,c.jsx)(t.code,{children:`addLoad`}),` method registers an icon as "loading"; `,(0,c.jsx)(t.code,{children:`get`}),` will wait for it to appear.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Types`}),` — An icon can be a string, a `,(0,c.jsx)(t.code,{children:`Promise`}),`, or a function returning a `,(0,c.jsx)(t.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic URL`}),` — Icons prefixed with `,(0,c.jsx)(t.code,{children:`@`}),` are expanded into a full URL based on the base `,(0,c.jsx)(t.code,{children:`url`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class is static and does not require instantiation. The base URL is configured via `,(0,c.jsx)(t.code,{children:`setUrl`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// Change the base path to icons
Icons.setUrl('/assets/svg/')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`registering-icons`,children:`Registering Icons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(index: string, file: IconsItem): void`}),` — Registers an icon by name. `,(0,c.jsx)(t.code,{children:`file`}),` can be a path string, a `,(0,c.jsx)(t.code,{children:`Promise`}),`, or a factory function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addLoad(index: string): void`}),` — Marks an icon as "in the process of loading" (`,(0,c.jsx)(t.code,{children:`--LOAD--`}),` marker). `,(0,c.jsx)(t.code,{children:`get`}),` will wait for it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addGlobal(index: string, file: string): void`}),` — Registers an icon with a global URL (base URL + `,(0,c.jsx)(t.code,{children:`file`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addByList(list: Record<string, IconsItem>): void`}),` — Bulk-registers icons from an object.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`retrieving-icons`,children:`Retrieving Icons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async get(index: string, url?: string, wait?: number): Promise<string>`}),` — Returns the content or path of an icon by name. If the icon is marked as "loading", waits for it to appear (default timeout: 3 min).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(index: string): boolean`}),` — Checks whether an icon is registered.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getNameList(): string[]`}),` — Returns a list of names of all registered icons.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrlGlobal(): string`}),` — Returns the current base URL for icons.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setUrl(url: string): void`}),` — Changes the base path for icon storage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setConfig(config: IconsConfig): void`}),` — Updates the icons configuration (URL and/or icon list).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`loading-system`,children:`Loading System`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Icons`}),` class supports an asynchronous waiting mechanism. This allows you to request an icon before it is actually loaded or registered in the system.`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Wait Registration`}),`: Using the `,(0,c.jsx)(t.code,{children:`addLoad(name)`}),` method, an icon is marked with a special `,(0,c.jsx)(t.code,{children:`--LOAD--`}),` marker. This tells the system that the icon will be available later.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Waiting Process`}),`: If `,(0,c.jsx)(t.code,{children:`get(name)`}),` is called for an icon that is in the loading state, the method will not return an error but will instead enter a waiting mode. It will check the registry every 320 ms.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Completion`}),`: Once the icon is added via `,(0,c.jsx)(t.code,{children:`add(name, ...)`}),`, all pending `,(0,c.jsx)(t.code,{children:`get`}),` calls will automatically resolve and return the icon's content.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`This mechanism is critical for distributed systems where components might request resources before the media database has finished initializing.`}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`iconsitem`,children:(0,c.jsx)(t.code,{children:`IconsItem`})}),`
`,(0,c.jsx)(t.p,{children:`The definition of an icon. Can be:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — Raw SVG content or a path to the SVG file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Promise<string>`}),` — A promise that resolves to the SVG content (useful for dynamic imports).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`() => Promise<string>`}),` — A factory function that returns a promise (useful for lazy-loading on demand).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`iconsconfig`,children:(0,c.jsx)(t.code,{children:`IconsConfig`})}),`
`,(0,c.jsxs)(t.p,{children:[`Configuration object for the `,(0,c.jsx)(t.code,{children:`setConfig`}),` method:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url?: string`}),` — Base URL for icon storage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list?: Record<string, IconsItem>`}),` — A list of icons to register.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`registering-and-using-icons`,children:`Registering and Using Icons`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// Register as a string
Icons.add('arrow', '<svg>...</svg>')

// Register via a Promise (dynamic import)
Icons.add('user', import('./icons/user.svg'))

// Register via a factory function
Icons.add('star', () => import('./icons/star.svg'))

// Retrieve
const svgContent = await Icons.get('arrow')

// Batch configuration via setConfig
Icons.setConfig({
  url: '/custom-icons/',
  list: {
    check: '<svg>...</svg>',
    error: () => import('./icons/error.svg')
  }
})
`})}),`
`,(0,c.jsx)(t.h3,{id:`bulk-registration`,children:`Bulk Registration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,(0,c.jsx)(t.h3,{id:`lazy-loading`,children:`Lazy Loading`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Mark as loading
Icons.addLoad('dynamic-icon')

// Load and register it later
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() will wait until the icon appears in the registry
const svg = await Icons.get('dynamic-icon')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};