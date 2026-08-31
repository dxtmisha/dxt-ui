import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/Translate - Translation and Text Management`}),`
`,(0,c.jsx)(t.h1,{id:`translate-class`,children:`Translate Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A static wrapper for a default instance of the `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),` class. It manages translations and localized text at a global level, providing tools for retrieving, caching, and displaying content with template support and automatic locale detection.`]}),`
`,(0,c.jsx)(t.h2,{id:`relationship-with-translateinstance`,children:`Relationship with TranslateInstance`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Translate`}),` class acts as a global, pre-configured interface for `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),`. All static methods call the corresponding methods on an internal instance (`,(0,c.jsx)(t.code,{children:`Translate.getItem()`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`While `,(0,c.jsx)(t.code,{children:`Translate`}),` is suitable for most application-wide translation needs, you can create independent translation environments using `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Batch Loading`}),` — Intelligently groups translation requests, sending them as a single pack 160ms after being queued.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Templates`}),` — Supports parameter replacement in text using both indices (`,(0,c.jsx)(t.code,{children:`[0]`}),`) and named keys (`,(0,c.jsx)(t.code,{children:`{key}`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sync and Async Access`}),` — Methods for instant text retrieval from cache (`,(0,c.jsx)(t.code,{children:`getSync`}),`) or guaranteed server loading (`,(0,c.jsx)(t.code,{children:`get`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Cache`}),` — Stores translations scoped to the current locale and supports fallbacks (Location > Language > Global).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`The class is static and does not require instantiation. Configuration applies to the global translation instance.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// Configure API URL for the global instance
Translate.setUrl('/api/v1/translate')

// Preload necessary texts
await Translate.add(['welcome', 'auth.login'])
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setConfig(config: TranslateConfig): Translate`}),` — Sets the complete configuration for the translation instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setUrl(url: string): Translate`}),` — Changes the API endpoint for fetching translations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setPropsName(name: string): Translate`}),` — Changes the property name used in the API request/response.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setReadApi(value: boolean): Translate`}),` — Enables or disables fetching translations from the API.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`translation-retrieval`,children:`Translation Retrieval`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async get(name: string, replacement?: any): Promise<string>`}),` — Asynchronously retrieves text. If not in cache and not on localhost, it attempts to load it from the server.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSync(name: string, first?: boolean, replacement?: any): string`}),` — Returns text from the cache. If `,(0,c.jsx)(t.code,{children:`first`}),` is `,(0,c.jsx)(t.code,{children:`true`}),`, returns a space `,(0,c.jsx)(t.code,{children:` `}),` if the text is missing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async getList<T>(names: T): Promise<TranslateList<T>>`}),` — Retrieves a group of translations (asynchronous).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getListSync<T>(names: T, first?: boolean): TranslateList<T>`}),` — Retrieves a group of translations from the cache (synchronous).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`batch-update`,children:`Batch Update`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async add(names: string | string[]): Promise<void>`}),` — Adds multiple codes to the queue for batch loading.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addSync(data: Record<string, string>): void`}),` — Directly adds translations to the cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async addNormalOrSync(data: Record<string, string>): Promise<void>`}),` — Adds translations directly on localhost, otherwise queues them for loading.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addSyncByLocation(data: Record<string, Record<string, string>>): void`}),` — Adds translations for specific locations/locales.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addSyncByFile(data: TranslateDataFile): void`}),` — Adds translations from a file definition.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`static-vs-instance`,children:`Static vs Instance`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Usage`}),`: Use `,(0,c.jsx)(t.code,{children:`Translate`}),` for global access anywhere in the app. Use `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),` for localized, independent instances.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`State`}),`: `,(0,c.jsx)(t.code,{children:`Translate`}),` state is shared across the entire application. `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),` provides isolated state for specific components or modules.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Creation`}),`: `,(0,c.jsx)(t.code,{children:`Translate`}),` does not require instantiation (static wrapper). `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),` is created via `,(0,c.jsx)(t.code,{children:`new TranslateInstance()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`standalone-instances`,children:`Standalone Instances`}),`
`,(0,c.jsxs)(t.p,{children:[`If you need to manage a separate set of translations (e.g., for a specific sub-application or a specialized widget), use `,(0,c.jsx)(t.code,{children:`TranslateInstance`}),` instead of the global `,(0,c.jsx)(t.code,{children:`Translate`}),` class.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { TranslateInstance, TranslateFile } from '@dxtmisha/functional-basic'

// 1. Create a specialized set of translation files
const widgetFiles = new TranslateFile({
  'en-US': () => import('./locales/widget.en-US.json')
})

// 2. Initialize a standalone translation instance
const widgetTranslate = new TranslateInstance(
  '/api/widget/translate', 
  'list', 
  widgetFiles
)

// 3. Use independently
const label = await widgetTranslate.get('widget.welcome')
`})}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`translatecode`,children:(0,c.jsx)(t.code,{children:`TranslateCode`})}),`
`,(0,c.jsx)(t.p,{children:`A string (code name) or an array of strings. Arrays are used for template replacement:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — e.g., `,(0,c.jsx)(t.code,{children:`'welcome'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string[]`}),` — e.g., `,(0,c.jsx)(t.code,{children:`['welcome', 'Guest']`})]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`translatelist`,children:(0,c.jsx)(t.code,{children:`TranslateList`})}),`
`,(0,c.jsx)(t.p,{children:`A record where keys are translation codes and values are the resulting translated strings.`}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`working-with-templates`,children:`Working with Templates`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// In database: "Hello, [0]! You have {count} notifications."
const text = await Translate.get('user.notifications', ['John', { count: 5 }])
// Result: "Hello, John! You have 5 notifications."
`})}),`
`,(0,c.jsx)(t.h3,{id:`batch-list-retrieval`,children:`Batch List Retrieval`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Guest'], 
  'home.footer'
])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};