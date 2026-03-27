import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/Translate - Translation and Text Management`}),`
`,(0,c.jsx)(n.h1,{id:`translate-class`,children:`Translate Class`}),`
`,(0,c.jsx)(n.p,{children:`A static utility class for managing translations and localized text. It provides powerful tools for retrieving, caching, and displaying content with template support, automatic locale detection, and batch request loading for optimized performance.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Batch Loading`}),` — Intelligently groups translation requests, sending them as a single pack 160ms after being queued.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Templates`}),` — Supports parameter replacement in text using both indices (`,(0,c.jsx)(n.code,{children:`[0]`}),`) and named keys (`,(0,c.jsx)(n.code,{children:`{key}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sync and Async Access`}),` — Methods for instant text retrieval from cache (`,(0,c.jsx)(n.code,{children:`getSync`}),`) or guaranteed server loading (`,(0,c.jsx)(n.code,{children:`get`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Cache`}),` — Stores translations scoped to the current locale and supports fallbacks (language-country → language → global).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Data Sources`}),` — Supports loading translations from both the server (API) and local files (via `,(0,c.jsx)(n.code,{children:`TranslateFile`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Local Development`}),` — The `,(0,c.jsx)(n.code,{children:`addNormalOrSync`}),` mode automatically switches between mocks and real requests based on the environment.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`The class is static and does not require instantiation. The primary configuration consists of setting the API URL.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// Configure API URL for requests
Translate.setUrl('/api/v1/translate')

// Preload necessary texts
await Translate.add(['welcome', 'auth.login', 'errors.required'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`translation-retrieval`,children:`Translation Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(name: string, replacement?: any): Promise<string>`}),` — Asynchronously retrieves text. If not in cache and not on localhost, it attempts to load it from the server.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSync(name: string, first?: boolean, replacement?: any): string`}),` — Returns text from the cache. If `,(0,c.jsx)(n.code,{children:`first`}),` is `,(0,c.jsx)(n.code,{children:`true`}),`, returns a space `,(0,c.jsx)(n.code,{children:` `}),` if the text is missing; otherwise, returns the code `,(0,c.jsx)(n.code,{children:`name`}),` itself.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList(names: TranslateCode[]): Promise<TranslateList>`}),` — Retrieves an object with a group of translations (asynchronous).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListSync(names: TranslateCode[], first?: boolean): TranslateList`}),` — Retrieves an object with a group of translations from the cache (synchronous).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async add(names: string | string[]): Promise<void>`}),` — Adds codes to the loading queue. Requests are batched to minimize network load.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSync(data: Record<string, string>): void`}),` — Directly adds translated strings to the cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async addNormalOrSync(data: Record<string, string>): Promise<void>`}),` — Intelligent addition: behaves as `,(0,c.jsx)(n.code,{children:`addSync`}),` on localhost, and as `,(0,c.jsx)(n.code,{children:`add`}),` otherwise.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByLocation(data: Record<string, Record<string, string>>): void`}),` — Bulk-adds texts tied to specific locales.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByFile(data: TranslateDataFile): void`}),` — Registers translation file loaders for lazy loading (see `,(0,c.jsx)(n.code,{children:`TranslateFile`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): typeof Translate`}),` — Sets the API path for loading translations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPropsName(name: string): typeof Translate`}),` — Sets the property name in the request body (default is `,(0,c.jsx)(n.code,{children:`list`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setReadApi(read: boolean): typeof Translate`}),` — Enables or disables API requests for translations (default is `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`translatecode`,children:(0,c.jsx)(n.code,{children:`TranslateCode`})}),`
`,(0,c.jsx)(n.p,{children:`A string (code name) or an array of strings. Arrays are used for template replacement:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string`}),` — e.g., `,(0,c.jsx)(n.code,{children:`'welcome'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — e.g., `,(0,c.jsx)(n.code,{children:`['welcome', 'Guest']`})]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatelist`,children:(0,c.jsx)(n.code,{children:`TranslateList`})}),`
`,(0,c.jsx)(n.p,{children:`A record where keys are translation codes and values are the resulting translated strings.`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`A mapping of locale strings to their respective loader functions. Used in `,(0,c.jsx)(n.code,{children:`addSyncByFile`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`working-with-templates`,children:`Working with Templates`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// In database: "Hello, [0]! You have {count} notifications."
const text = await Translate.get('user.notifications', ['John', { count: 5 }])
// Result: "Hello, John! You have 5 notifications."
`})}),`
`,(0,c.jsx)(n.h3,{id:`synchronous-usage-in-components`,children:`Synchronous Usage in Components`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// First, load everything needed (e.g., during app initialization)
await Translate.add(['btn.save', 'btn.cancel'])

// Inside a component, use synchronously to avoid excessive await usage
const label = Translate.getSync('btn.save')
`})}),`
`,(0,c.jsx)(n.h3,{id:`bulk-list-retrieval`,children:`Bulk List Retrieval`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Guest'], // with immediate template replacement
  'home.footer'
])

console.log(labels['home.welcome']) // "Welcome, Guest!"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};